import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AirtableRecord {
  fields: {
    Email: string;
    Source: string;
    Date: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('=== Realtime Airtable Sync Function Started ===');
    console.log('Request method:', req.method);
    console.log('Request headers:', Object.fromEntries(req.headers.entries()));

    // Parse the request body to get the notification data
    const requestBody = await req.json();
    console.log('Request body received:', requestBody);
    
    const { table, operation, record_id, email } = requestBody;
    
    console.log(`Processing notification: ${operation} on ${table} for record ${record_id} with email ${email}`);

    // Validate required environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const airtableApiKey = Deno.env.get('SB_AIRTABLE_LOVABLE_2');
    
    console.log('Environment check:');
    console.log('- SUPABASE_URL:', supabaseUrl ? 'Present' : 'Missing');
    console.log('- SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'Present' : 'Missing');
    console.log('- SB_AIRTABLE_LOVABLE_2:', airtableApiKey ? 'Present' : 'Missing');

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase configuration');
    }

    if (!airtableApiKey) {
      console.error('Airtable API key not found - will proceed with database operations only');
      return new Response(JSON.stringify({
        success: false,
        error: 'Airtable API key not configured',
        message: 'Database operation completed but Airtable sync skipped'
      }), {
        status: 200, // Not a critical error
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Initialize Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const baseId = 'appV23udxU8dqgM5V';
    const tableId = 'tblO1QW2WKJZAwmBX';

    // Fetch the specific record that was just inserted
    let recordData;
    let source = 'unknown';

    console.log(`Fetching record data for ${table} with ID ${record_id}`);

    if (table === 'sb_quiz_leads') {
      const { data, error } = await supabase
        .from('sb_quiz_leads')
        .select('email, source')
        .eq('id', record_id)
        .single();
      
      if (error) {
        console.error('Error fetching quiz lead:', error);
        throw new Error(`Failed to fetch quiz lead: ${error.message}`);
      }
      recordData = data;
      source = data?.source || 'quiz';
      console.log('Quiz lead data fetched:', recordData);
    } else if (table === 'sb_home_page_leads') {
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .select('email, source')
        .eq('id', record_id)
        .single();
      
      if (error) {
        console.error('Error fetching home page lead:', error);
        throw new Error(`Failed to fetch home page lead: ${error.message}`);
      }
      recordData = data;
      source = data?.source || 'home_page';
      console.log('Home page lead data fetched:', recordData);
    } else {
      throw new Error(`Unknown table: ${table}`);
    }

    if (!recordData) {
      throw new Error('Record not found in database');
    }

    console.log(`Preparing to sync lead: ${recordData.email} from ${source}`);

    // Prepare record for Airtable with detailed timestamp
    const currentTimestamp = new Date().toLocaleString('sv-SE', { 
      timeZone: 'Europe/Stockholm',
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }); // Format: YYYY-MM-DD HH:mm:ss (Swedish format)
    
    const airtableRecord: AirtableRecord = {
      fields: {
        Email: recordData.email,
        Source: source,
        Date: `Real-time - ${currentTimestamp}`
      }
    };

    console.log('Airtable record payload:', JSON.stringify(airtableRecord, null, 2));

    // Sync to Airtable with retry logic
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    console.log('Sending request to Airtable URL:', airtableUrl);

    const airtableRequestBody = {
      records: [airtableRecord],
      typecast: true
    };

    console.log('Airtable request body:', JSON.stringify(airtableRequestBody, null, 2));

    let response;
    let retryCount = 0;
    const maxRetries = 3;

    while (retryCount < maxRetries) {
      try {
        response = await fetch(airtableUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(airtableRequestBody),
        });

        console.log(`Attempt ${retryCount + 1}: Airtable response status:`, response.status);

        if (response.ok) {
          break; // Success, exit retry loop
        } else if (response.status === 429) {
          // Rate limited, wait and retry
          const retryAfter = response.headers.get('Retry-After') || '1';
          console.log(`Rate limited, waiting ${retryAfter} seconds before retry`);
          await new Promise(resolve => setTimeout(resolve, parseInt(retryAfter) * 1000));
          retryCount++;
        } else {
          // Other error, try again after a short wait
          console.log(`HTTP ${response.status}, retrying after 1 second`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          retryCount++;
        }
      } catch (fetchError) {
        console.error(`Network error on attempt ${retryCount + 1}:`, fetchError);
        retryCount++;
        if (retryCount < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }

    if (!response || !response.ok) {
      const responseText = response ? await response.text() : 'No response';
      console.error(`Airtable API error after ${maxRetries} attempts (${response?.status}):`, responseText);
      
      // Don't throw error - return partial success
      return new Response(JSON.stringify({
        success: false,
        error: `Airtable sync failed after ${maxRetries} attempts`,
        airtable_status: response?.status,
        airtable_response: responseText,
        message: 'Database operation completed but Airtable sync failed'
      }), {
        status: 200, // Not a critical error since database succeeded
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const responseText = await response.text();
    console.log('Airtable response body:', responseText);

    const result = JSON.parse(responseText);
    console.log(`Successfully synced record to Airtable:`, result);

    const successResponse = {
      success: true,
      message: `Successfully synced lead: ${recordData.email} to Airtable at ${currentTimestamp}`,
      record: result.records[0].id,
      airtableResponse: result
    };

    console.log('=== Sync completed successfully ===');
    console.log('Final response:', successResponse);

    return new Response(JSON.stringify(successResponse), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('=== Error in realtime-airtable-sync function ===');
    console.error('Error details:', error);
    console.error('Error stack:', error.stack);
    
    const errorResponse = { 
      success: false, 
      error: error.message,
      details: error.toString(),
      timestamp: new Date().toISOString()
    };

    console.log('Error response:', errorResponse);

    return new Response(
      JSON.stringify(errorResponse),
      {
        status: 500,
        headers: { 
          'Content-Type': 'application/json', 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
