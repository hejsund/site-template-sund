
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
    console.log('Starting Airtable sync process...');

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

    console.log('Fetching data from sb_home_page_leads...');
    // Fetch data from sb_home_page_leads
    const { data: homePageLeads, error: homePageError } = await supabase
      .from('sb_home_page_leads')
      .select('email, source')
      .order('created_at', { ascending: false });

    if (homePageError) {
      console.error('Error fetching home page leads:', homePageError);
      throw homePageError;
    }

    console.log('Fetching data from sb_quiz_leads...');
    // Fetch data from sb_quiz_leads
    const { data: quizLeads, error: quizError } = await supabase
      .from('sb_quiz_leads')
      .select('email, source')
      .order('created_at', { ascending: false });

    if (quizError) {
      console.error('Error fetching quiz leads:', quizError);
      throw quizError;
    }

    // Combine and deduplicate leads by email
    const allLeads = [...(homePageLeads || []), ...(quizLeads || [])];
    const uniqueLeads = allLeads.reduce((acc, lead) => {
      if (!acc.find(l => l.email === lead.email)) {
        acc.push(lead);
      }
      return acc;
    }, [] as typeof allLeads);

    console.log(`Found ${uniqueLeads.length} unique leads to sync`);

    // Prepare records for Airtable with current date
    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const airtableRecords: AirtableRecord[] = uniqueLeads.map(lead => ({
      fields: {
        Email: lead.email,
        Source: lead.source || 'unknown',
        Date: currentDate
      }
    }));

    // Sync to Airtable in batches (Airtable allows max 10 records per request)
    const batchSize = 10;
    let syncedCount = 0;
    let errorCount = 0;

    for (let i = 0; i < airtableRecords.length; i += batchSize) {
      const batch = airtableRecords.slice(i, i + batchSize);
      
      try {
        console.log(`Syncing batch ${Math.floor(i / batchSize) + 1}...`);
        
        const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            records: batch,
            typecast: true
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Airtable API error for batch ${Math.floor(i / batchSize) + 1}:`, errorText);
          errorCount += batch.length;
        } else {
          const result = await response.json();
          syncedCount += result.records?.length || 0;
          console.log(`Successfully synced ${result.records?.length || 0} records in batch`);
        }
      } catch (error) {
        console.error(`Error syncing batch ${Math.floor(i / batchSize) + 1}:`, error);
        errorCount += batch.length;
      }

      // Add a small delay between batches to respect rate limits
      if (i + batchSize < airtableRecords.length) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }

    const result = {
      success: true,
      message: `Sync completed: ${syncedCount} records synced successfully with date ${currentDate}`,
      stats: {
        totalLeads: uniqueLeads.length,
        syncedCount,
        errorCount,
        homePageLeadsCount: homePageLeads?.length || 0,
        quizLeadsCount: quizLeads?.length || 0,
        syncDate: currentDate
      }
    };

    console.log('Sync completed:', result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error('Error in sync-to-airtable function:', error);
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
