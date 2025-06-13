
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
    const airtableApiKey = Deno.env.get('SB_AIRTABLE_LOVABLE');
    
    console.log('Environment check:');
    console.log('- SUPABASE_URL:', supabaseUrl ? 'Present' : 'Missing');
    console.log('- SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'Present' : 'Missing');
    console.log('- SB_AIRTABLE_LOVABLE:', airtableApiKey ? 'Present' : 'Missing');

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error('Missing Supabase configuration');
    }

    if (!airtableApiKey) {
      throw new Error('Airtable API key not found - please check SB_AIRTABLE_LOVABLE secret');
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

    // Prepare record for Airtable
    const airtableRecord: AirtableRecord = {
      fields: {
        Email: recordData.email,
        Source: source
      }
    };

    console.log('Airtable record payload:', JSON.stringify(airtableRecord, null, 2));

    // Sync to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    console.log('Sending request to Airtable URL:', airtableUrl);

    const airtableRequestBody = {
      records: [airtableRecord],
      typecast: true
    };

    console.log('Airtable request body:', JSON.stringify(airtableRequestBody, null, 2));

    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRequestBody),
    });

    console.log('Airtable response status:', response.status);
    console.log('Airtable response headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('Airtable response body:', responseText);

    if (!response.ok) {
      console.error(`Airtable API error (${response.status}):`, responseText);
      throw new Error(`Airtable API error (${response.status}): ${responseText}`);
    }

    const result = JSON.parse(responseText);
    console.log(`Successfully synced record to Airtable:`, result);

    const successResponse = {
      success: true,
      message: `Successfully synced lead: ${recordData.email} to Airtable`,
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
