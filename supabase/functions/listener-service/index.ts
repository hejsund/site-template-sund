
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";
import { RealtimeChannel } from "https://esm.sh/@supabase/realtime-js@2.11.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYNC_FUNCTION_URL = `https://ttidnpncifqtetnhcdhq.supabase.co/functions/v1/realtime-airtable-sync`;
const HEALTH_CHECK_INTERVAL = 30000; // Check every 30 seconds
const CONNECTION_TIMEOUT = 60000; // Consider stale after 1 minute

let channel: RealtimeChannel | null = null;
let supabase: any = null;
let isConnected = false;
let lastHeartbeat = Date.now();
let startTime = Date.now();
let healthCheckTimer: number | null = null;

const initializeSupabase = () => {
  if (!supabase) {
    supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );
  }
  return supabase;
};

const startListener = async () => {
  console.log("=== Starting database notification listener ===");
  
  try {
    const client = initializeSupabase();
    
    // Clean up existing channel if it exists
    if (channel) {
      console.log("Cleaning up existing channel...");
      await channel.unsubscribe();
      channel = null;
    }

    // Create a new Realtime channel
    channel = client.channel('db-notifications-' + Date.now())
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sb_quiz_leads',
      }, async (payload) => {
        console.log('=== Quiz lead notification received ===');
        console.log('Payload:', JSON.stringify(payload, null, 2));
        
        const notificationData = {
          table: 'sb_quiz_leads',
          operation: payload.eventType,
          record_id: payload.new.id,
          email: payload.new.email
        };
        
        await triggerSync(notificationData);
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sb_home_page_leads',
      }, async (payload) => {
        console.log('=== Home page lead notification received ===');
        console.log('Payload:', JSON.stringify(payload, null, 2));
        
        const notificationData = {
          table: 'sb_home_page_leads',
          operation: payload.eventType,
          record_id: payload.new.id,
          email: payload.new.email
        };
        
        await triggerSync(notificationData);
      })
      .subscribe((status) => {
        console.log(`=== Subscription status changed: ${status} ===`);
        
        if (status === 'SUBSCRIBED') {
          isConnected = true;
          lastHeartbeat = Date.now();
          console.log('Successfully connected to real-time notifications');
          
          // Start health check timer if not already running
          if (!healthCheckTimer) {
            healthCheckTimer = setInterval(checkHealth, HEALTH_CHECK_INTERVAL);
          }
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          isConnected = false;
          console.log(`Connection ${status} - will attempt to reconnect`);
          
          // Attempt to reconnect after a delay
          setTimeout(() => {
            if (!isConnected) {
              console.log('Attempting to reconnect...');
              startListener();
            }
          }, 5000);
        }
      });

    console.log('Listener setup completed');
    
  } catch (error) {
    console.error('Error starting listener:', error);
    isConnected = false;
    
    // Retry after a delay
    setTimeout(() => {
      console.log('Retrying listener setup...');
      startListener();
    }, 10000);
  }
};

const triggerSync = async (data: any) => {
  try {
    console.log(`=== Triggering sync for: ${data.email} ===`);
    console.log('Sync data:', JSON.stringify(data, null, 2));
    
    const response = await fetch(SYNC_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('=== Sync completed successfully ===');
      console.log('Result:', JSON.stringify(result, null, 2));
    } else {
      console.error('=== Sync failed ===');
      console.error('Status:', response.status);
      console.error('Result:', JSON.stringify(result, null, 2));
    }
    
    return result;
  } catch (error) {
    console.error('=== Error triggering sync ===');
    console.error('Error details:', error);
    return { success: false, error: error.message };
  }
};

const checkHealth = () => {
  const now = Date.now();
  const timeSinceLastHeartbeat = now - lastHeartbeat;
  const uptime = now - startTime;
  
  console.log(`=== Health Check ===`);
  console.log(`Connected: ${isConnected}`);
  console.log(`Time since last heartbeat: ${timeSinceLastHeartbeat}ms`);
  console.log(`Uptime: ${uptime}ms`);
  
  // If we haven't received a heartbeat in a while and we think we're connected
  if (isConnected && timeSinceLastHeartbeat > CONNECTION_TIMEOUT) {
    console.log('=== Connection appears stale, reconnecting ===');
    isConnected = false;
    
    if (channel) {
      channel.unsubscribe();
      channel = null;
    }
    
    startListener();
  }
};

// Handler for the edge function
const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  let action = null;
  try {
    if (req.method === 'POST') {
      const body = await req.json();
      action = body.action;
    }
  } catch (error) {
    console.log('No action provided in request body');
  }

  try {
    if (action === 'start') {
      console.log('=== Manual start requested ===');
      await startListener();
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Listener service started',
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - startTime
        }
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    } else if (action === 'status') {
      return new Response(JSON.stringify({
        success: true,
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - startTime
        }
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    } else {
      // Default: start the listener if it's not already running
      if (!isConnected) {
        await startListener();
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Listener service is running',
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - startTime
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
    console.error('=== Error in listener service ===');
    console.error('Error details:', error);
    
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
console.log('=== Initializing listener service ===');
startListener();

serve(handler);
