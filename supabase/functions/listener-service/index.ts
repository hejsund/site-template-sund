
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";
import { RealtimeChannel } from "https://esm.sh/@supabase/realtime-js@2.11.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYNC_FUNCTION_URL = `https://ttidnpncifqtetnhcdhq.supabase.co/functions/v1/realtime-airtable-sync`;
const STATUS_CHECK_INTERVAL = 60000; // Check status every minute

let channel: RealtimeChannel | null = null;
let isConnected = false;
let lastHeartbeat = Date.now();

const startListener = async () => {
  console.log("Starting database notification listener...");

  // Initialize Supabase client with service role key for administrative access
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  // Create a Realtime channel to listen for database notifications
  channel = supabase.channel('db-notifications')
    .on('postgres_changes', {
      event: '*', // Listen to all events (insert, update, delete)
      schema: 'public',
      table: 'sb_quiz_leads',
    }, async (payload) => {
      console.log('Received notification from sb_quiz_leads:', payload);
      if (payload.eventType === 'INSERT') {
        const notificationData = {
          table: 'sb_quiz_leads',
          operation: payload.eventType,
          record_id: payload.new.id,
          email: payload.new.email
        };
        await triggerSync(notificationData);
      }
    })
    .on('postgres_changes', {
      event: '*', 
      schema: 'public',
      table: 'sb_home_page_leads',
    }, async (payload) => {
      console.log('Received notification from sb_home_page_leads:', payload);
      if (payload.eventType === 'INSERT') {
        const notificationData = {
          table: 'sb_home_page_leads',
          operation: payload.eventType,
          record_id: payload.new.id,
          email: payload.new.email
        };
        await triggerSync(notificationData);
      }
    })
    .subscribe((status) => {
      console.log(`Subscription status:`, status);
      isConnected = status === 'SUBSCRIBED';
      lastHeartbeat = Date.now();
    });

  // Start health check timer
  setInterval(checkHealth, STATUS_CHECK_INTERVAL);
};

const triggerSync = async (data: any) => {
  try {
    console.log(`Triggering sync for: ${data.email}`);
    
    // Call our sync function with the notification data
    const response = await fetch(SYNC_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Sync function response:', result);
    return result;
  } catch (error) {
    console.error('Error triggering sync:', error);
  }
};

const checkHealth = () => {
  const now = Date.now();
  const timeSinceLastHeartbeat = now - lastHeartbeat;
  
  console.log(`Health check: Connected=${isConnected}, Last heartbeat=${timeSinceLastHeartbeat}ms ago`);
  
  // If we haven't received a heartbeat in 2 minutes, reconnect
  if (timeSinceLastHeartbeat > 120000) {
    console.log('Connection appears to be stale, reconnecting...');
    if (channel) {
      channel.unsubscribe();
    }
    startListener();
  }
};

// Handler for the edge function
const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Parse the request body to get the action
  let action = null;
  try {
    if (req.method === 'POST') {
      const body = await req.json();
      action = body.action;
    }
  } catch (error) {
    // If no body or invalid JSON, continue without action
    console.log('No action provided in request body');
  }

  try {
    // Handle different actions
    if (action === 'start') {
      await startListener();
      return new Response(JSON.stringify({
        success: true,
        message: 'Listener service started'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    } 
    else if (action === 'status') {
      return new Response(JSON.stringify({
        success: true,
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - lastHeartbeat
        }
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
    else {
      // Default: start the listener if it's not already running
      if (!isConnected) {
        await startListener();
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Listener service is running',
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString()
        }
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }
  } catch (error: any) {
    console.error('Error in listener service:', error);
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

// Start the listener when the function is first initialized
startListener();

serve(handler);
