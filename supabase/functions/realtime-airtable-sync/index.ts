
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
    console.log('Starting realtime Airtable sync process...');

    // Parse the request body to get the notification data
    const { table, operation, record_id, email } = await req.json();
    
    console.log(`Received notification: ${operation} on ${table} for record ${record_id} with email ${email}`);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const airtableApiKey = Deno.env.get('SB_AIRTABLE_LOVABLE');
    const baseId = 'appV23udxU8dqgM5V';
    const tableId = 'tblO1QW2WKJZAwmBX';

    if (!airtableApiKey) {
      throw new Error('Airtable API key not found');
    }

    // Fetch the specific record that was just inserted
    let recordData;
    let source = 'unknown';

    if (table === 'sb_quiz_leads') {
      const { data, error } = await supabase
        .from('sb_quiz_leads')
        .select('email, source')
        .eq('id', record_id)
        .single();
      
      if (error) {
        console.error('Error fetching quiz lead:', error);
        throw error;
      }
      recordData = data;
      source = data?.source || 'quiz';
    } else if (table === 'sb_home_page_leads') {
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .select('email, source')
        .eq('id', record_id)
        .single();
      
      if (error) {
        console.error('Error fetching home page lead:', error);
        throw error;
      }
      recordData = data;
      source = data?.source || 'home_page';
    } else {
      throw new Error(`Unknown table: ${table}`);
    }

    if (!recordData) {
      throw new Error('Record not found');
    }

    console.log(`Syncing lead: ${recordData.email} from ${source}`);

    // Prepare record for Airtable
    const airtableRecord: AirtableRecord = {
      fields: {
        Email: recordData.email,
        Source: source
      }
    };

    // Sync to Airtable
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [airtableRecord],
        typecast: true
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Airtable API error:`, errorText);
      throw new Error(`Airtable API error: ${errorText}`);
    }

    const result = await response.json();
    console.log(`Successfully synced record to Airtable: ${recordData.email}`);

    return new Response(JSON.stringify({
      success: true,
      message: `Successfully synced lead: ${recordData.email} to Airtable`,
      record: result.records[0].id
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in realtime-airtable-sync function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message,
        details: error.toString()
      }),
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
