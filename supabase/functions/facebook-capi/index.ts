
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
    client_ip_address?: string
    client_user_agent?: string
    fbp?: string
    fbc?: string
  }
  custom_data?: Record<string, any>
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

    // Fetch pending events from database
    const { data: events, error: fetchError } = await supabase
      .from('sb_meta_event_log')
      .select('*')
      .eq('status', 'pending')
      .order('timestamp', { ascending: true })
      .limit(100)

    if (fetchError) {
      console.error('Error fetching events:', fetchError)
      return new Response(
        JSON.stringify({ error: 'Failed to fetch events' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Processing ${events?.length || 0} events`)

    if (!events || events.length === 0) {
      return new Response(
        JSON.stringify({ message: 'No pending events to process' }),
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
            event_source_url: event.event_data?.page_location || 'https://sommarboosten.se/hemlig',
            user_data: {}
          }

          // Add user data if available
          if (event.email_hash) {
            eventData.user_data.em = [event.email_hash]
          }
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
          if (event.event_type === 'lead' && event.event_data?.source) {
            eventData.custom_data = {
              content_name: 'Hemlig Page Lead',
              source: event.event_data.source
            }
          }

          return eventData
        })

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
          // Mark events as sent
          const eventIds = batch.map(e => e.id)
          const { error: updateError } = await supabase
            .from('sb_meta_event_log')
            .update({ status: 'sent' })
            .in('id', eventIds)

          if (updateError) {
            console.error('Error updating event status:', updateError)
          } else {
            processedCount += batch.length
          }
        } else {
          // Mark events as error
          const eventIds = batch.map(e => e.id)
          const { error: updateError } = await supabase
            .from('sb_meta_event_log')
            .update({ 
              status: 'error',
              event_data: { 
                ...batch[0].event_data, 
                error: fbResult 
              }
            })
            .in('id', eventIds)

          if (updateError) {
            console.error('Error updating event status:', updateError)
          }
          errorCount += batch.length
        }
      } catch (batchError) {
        console.error('Error processing batch:', batchError)
        errorCount += batch.length
      }
    }

    return new Response(
      JSON.stringify({
        message: `Processed ${processedCount} events successfully, ${errorCount} errors`,
        processed: processedCount,
        errors: errorCount
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Facebook CAPI function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
