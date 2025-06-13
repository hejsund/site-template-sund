
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EventData {
  event_name: string
  event_time: number
  event_source_url: string
  user_data: {
    em?: string[]
    ph?: string[]
    client_ip_address?: string
    client_user_agent?: string
    fbp?: string
    fbc?: string
  }
  custom_data?: Record<string, any>
}

// Validate email hash format (SHA-256 should be 64 hex characters)
function isValidEmailHash(hash: string): boolean {
  return /^[a-f0-9]{64}$/i.test(hash);
}

// Validate phone hash format (SHA-256 should be 64 hex characters)
function isValidPhoneHash(hash: string): boolean {
  return /^[a-f0-9]{64}$/i.test(hash);
}

// Get content name based on event context
function getContentName(eventData: any): string {
  // Check if this is from hemlig page
  if (eventData?.page_location?.includes('/hemlig') || eventData?.page_path === '/hemlig') {
    return 'Hemlig Page Lead';
  }
  
  // Check if this is from quiz
  if (eventData?.page_location?.includes('/quiz') || eventData?.source === 'quiz') {
    return 'Quiz Lead';
  }
  
  // Check for other specific sources
  if (eventData?.source === 'hemlig_email_signup') {
    return 'Hemlig Email Signup';
  }
  
  if (eventData?.source === 'home_page') {
    return 'Home Page Lead';
  }
  
  // Default fallback
  return eventData?.content_name || 'Website Lead';
}

// Get event source URL with better fallback logic
function getEventSourceUrl(eventData: any): string {
  // Try to get from event data
  if (eventData?.page_location) {
    return eventData.page_location;
  }
  
  // Try to construct from page_path
  if (eventData?.page_path) {
    return `https://sommarboosten.se${eventData.page_path}`;
  }
  
  // Check for specific sources and map to appropriate URLs
  if (eventData?.source === 'hemlig_email_signup' || eventData?.source === 'hemlig_page') {
    return 'https://sommarboosten.se/hemlig';
  }
  
  if (eventData?.source === 'quiz') {
    return 'https://sommarboosten.se/quiz';
  }
  
  if (eventData?.source === 'home_page') {
    return 'https://sommarboosten.se/';
  }
  
  // Final fallback
  return 'https://sommarboosten.se/';
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('Facebook CAPI function invoked')

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get Facebook credentials
    const accessToken = Deno.env.get('FB_CAPI')
    const pixelId = Deno.env.get('SON_FB_PIXEL')

    if (!accessToken || !pixelId) {
      console.error('Missing Facebook credentials')
      return new Response(
        JSON.stringify({ error: 'Missing Facebook credentials' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Fetch pending events from database - only events older than 5 minutes
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    
    const { data: events, error: fetchError } = await supabase
      .from('sb_meta_event_log')
      .select('*')
      .eq('status', 'pending')
      .lt('timestamp', fiveMinutesAgo)
      .order('timestamp', { ascending: true })
      .limit(100)

    if (fetchError) {
      console.error('Error fetching events:', fetchError)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch events' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Processing ${events?.length || 0} events (older than 5 minutes)`)

    if (!events || events.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No pending events ready for processing' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Process events in batches
    const batchSize = 1000 // Facebook allows up to 1000 events per batch
    const batches = []
    
    for (let i = 0; i < events.length; i += batchSize) {
      batches.push(events.slice(i, i + batchSize))
    }

    let processedCount = 0
    let errorCount = 0

    for (const batch of batches) {
      try {
        // Prepare events for Facebook
        const fbEvents = batch.map(event => {
          const eventData: EventData = {
            event_name: event.event_type === 'page_view' ? 'PageView' : 'Lead',
            event_time: Math.floor(new Date(event.timestamp).getTime() / 1000),
            event_source_url: getEventSourceUrl(event.event_data),
            user_data: {}
          }

          // Add email hash if available and valid
          if (event.email_hash) {
            if (isValidEmailHash(event.email_hash)) {
              eventData.user_data.em = [event.email_hash]
            } else {
              console.warn(`Invalid email hash format for event ${event.id}: ${event.email_hash}`)
            }
          }

          // Add phone hash if available and valid
          if (event.event_data?.phone_hash) {
            if (isValidPhoneHash(event.event_data.phone_hash)) {
              eventData.user_data.ph = [event.event_data.phone_hash]
            } else {
              console.warn(`Invalid phone hash format for event ${event.id}: ${event.event_data.phone_hash}`)
            }
          }

          // Add other user data if available
          if (event.event_data?.client_ip_address) {
            eventData.user_data.client_ip_address = event.event_data.client_ip_address
          }
          if (event.event_data?.client_user_agent) {
            eventData.user_data.client_user_agent = event.event_data.client_user_agent
          }
          if (event.event_data?.fbp) {
            eventData.user_data.fbp = event.event_data.fbp
          }
          if (event.event_data?.fbc) {
            eventData.user_data.fbc = event.event_data.fbc
          }

          // Add custom data for Lead events
          if (event.event_type === 'lead') {
            eventData.custom_data = {
              content_name: getContentName(event.event_data),
              source: event.event_data?.source || 'website',
              value: event.event_data?.value || undefined,
              currency: event.event_data?.currency || undefined
            }
          }

          return eventData
        })

        console.log(`Sending batch of ${fbEvents.length} events to Facebook`)

        // Send to Facebook
        const fbResponse = await fetch(
          `https://graph.facebook.com/v18.0/${pixelId}/events`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              data: fbEvents,
              access_token: accessToken,
            }),
          }
        )

        const fbResult = await fbResponse.json()
        console.log('Facebook API response:', fbResult)

        if (fbResponse.ok) {
          // Mark events as sent with timestamp
          const eventIds = batch.map(e => e.id)
          const { error: updateError } = await supabase
            .from('sb_meta_event_log')
            .update({ 
              status: 'sent',
              event_data: {
                ...batch[0].event_data,
                sent_at: new Date().toISOString(),
                facebook_response: fbResult
              }
            })
            .in('id', eventIds)

          if (updateError) {
            console.error('Error updating event status:', updateError)
          } else {
            processedCount += batch.length
            console.log(`Successfully processed batch of ${batch.length} events`)
          }
        } else {
          // Mark events as error with detailed error info
          const eventIds = batch.map(e => e.id)
          const { error: updateError } = await supabase
            .from('sb_meta_event_log')
            .update({ 
              status: 'error',
              event_data: { 
                ...batch[0].event_data, 
                error_at: new Date().toISOString(),
                facebook_error: fbResult,
                retry_count: (batch[0].event_data?.retry_count || 0) + 1
              }
            })
            .in('id', eventIds)

          if (updateError) {
            console.error('Error updating event status:', updateError)
          }
          errorCount += batch.length
          console.error(`Facebook API error for batch:`, fbResult)
        }
      } catch (batchError) {
        console.error('Error processing batch:', batchError)
        
        // Mark events as error
        const eventIds = batch.map(e => e.id)
        await supabase
          .from('sb_meta_event_log')
          .update({ 
            status: 'error',
            event_data: {
              ...batch[0].event_data,
              error_at: new Date().toISOString(),
              processing_error: batchError.message,
              retry_count: (batch[0].event_data?.retry_count || 0) + 1
            }
          })
          .in('id', eventIds)
        
        errorCount += batch.length
      }
    }

    return new Response(
      JSON.stringify({
        message: `Processed ${processedCount} events successfully, ${errorCount} errors`,
        processed: processedCount,
        errors: errorCount,
        total_events_checked: events.length
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Facebook CAPI function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
