
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYNC_FUNCTION_URL = `https://ttidnpncifqtetnhcdhq.supabase.co/functions/v1/realtime-airtable-sync`;
const HEALTH_CHECK_INTERVAL = 60000; // Check every 60 seconds
const MAX_RECONNECT_ATTEMPTS = 3;
const RECONNECT_DELAY = 30000; // 30 seconds between reconnect attempts

let supabase: any = null;
let isConnected = false;
let lastHeartbeat = Date.now();
let startTime = Date.now();
let healthCheckTimer: number | null = null;
let reconnectAttempts = 0;
let isShuttingDown = false;

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
  if (isShuttingDown) {
    console.log("Not starting listener - shutting down");
    return;
  }

  console.log("=== Starting database notification listener ===");
  console.log(`Reconnect attempt: ${reconnectAttempts + 1}/${MAX_RECONNECT_ATTEMPTS}`);
  
  try {
    const client = initializeSupabase();
    
    // Create a channel for real-time notifications
    const channelName = 'db-leads-' + Date.now();
    console.log(`Creating channel: ${channelName}`);
    
    const channel = client.channel(channelName)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sb_leads_quiz_new',
      }, async (payload) => {
        console.log('=== Quiz lead notification received ===');
        await handleLeadNotification('sb_leads_quiz_new', payload);
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sb_leads_home_page_new',
      }, async (payload) => {
        console.log('=== Home page lead notification received ===');
        await handleLeadNotification('sb_leads_home_page_new', payload);
      });

    // Subscribe with timeout
    const subscribePromise = new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Subscription timeout'));
      }, 10000); // 10 second timeout

      channel.subscribe((status) => {
        clearTimeout(timeout);
        console.log(`=== Subscription status: ${status} ===`);
        
        if (status === 'SUBSCRIBED') {
          isConnected = true;
          lastHeartbeat = Date.now();
          reconnectAttempts = 0; // Reset on successful connection
          console.log('Successfully connected to real-time notifications');
          
          // Start health check timer
          if (!healthCheckTimer) {
            healthCheckTimer = setInterval(checkHealth, HEALTH_CHECK_INTERVAL);
          }
          
          resolve(status);
        } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
          isConnected = false;
          console.log(`Connection ${status}`);
          reject(new Error(`Connection ${status}`));
        }
      });
    });

    await subscribePromise;
    console.log('Listener setup completed successfully');
    
  } catch (error) {
    console.error('Error starting listener:', error);
    isConnected = false;
    reconnectAttempts++;
    
    if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS && !isShuttingDown) {
      console.log(`Will retry in ${RECONNECT_DELAY}ms (attempt ${reconnectAttempts}/${MAX_RECONNECT_ATTEMPTS})`);
      setTimeout(() => {
        if (!isShuttingDown) {
          startListener();
        }
      }, RECONNECT_DELAY);
    } else {
      console.log('Max reconnect attempts reached or shutting down - giving up on real-time sync');
    }
  }
};

const handleLeadNotification = async (table: string, payload: any) => {
  try {
    console.log(`Processing ${table} notification:`, JSON.stringify(payload, null, 2));
    
    const notificationData = {
      table,
      operation: payload.eventType,
      record_id: payload.new?.id,
      email: payload.new?.email
    };
    
    if (!notificationData.record_id || !notificationData.email) {
      console.error('Invalid notification data - missing record_id or email');
      return;
    }
    
    console.log(`Triggering real-time sync for: ${notificationData.email}`);
    
    const response = await fetch(SYNC_FUNCTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`
      },
      body: JSON.stringify(notificationData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Real-time sync completed successfully:', result.message);
    } else {
      const errorText = await response.text();
      console.error('Real-time sync failed:', response.status, errorText);
    }
    
  } catch (error) {
    console.error('Error handling lead notification:', error);
  }
};

const checkHealth = () => {
  if (isShuttingDown) return;
  
  const now = Date.now();
  const timeSinceLastHeartbeat = now - lastHeartbeat;
  const uptime = now - startTime;
  
  console.log(`=== Health Check (uptime: ${Math.round(uptime/1000)}s) ===`);
  console.log(`Connected: ${isConnected}, Last heartbeat: ${Math.round(timeSinceLastHeartbeat/1000)}s ago`);
  
  // More lenient timeout - only reconnect if really stale
  if (isConnected && timeSinceLastHeartbeat > 120000) { // 2 minutes
    console.log('=== Connection appears stale, will attempt reconnect ===');
    isConnected = false;
    reconnectAttempts = 0; // Reset attempts for health check reconnects
    startListener();
  }
};

// Handle shutdown gracefully
addEventListener('beforeunload', () => {
  console.log('=== Listener service shutting down ===');
  isShuttingDown = true;
  
  if (healthCheckTimer) {
    clearInterval(healthCheckTimer);
    healthCheckTimer = null;
  }
});

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
      reconnectAttempts = 0; // Reset attempts on manual start
      await startListener();
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Listener service started',
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - startTime,
          reconnectAttempts
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
          uptime: Date.now() - startTime,
          reconnectAttempts,
          maxReconnectAttempts: MAX_RECONNECT_ATTEMPTS
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
      if (!isConnected && reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        await startListener();
      }
      
      return new Response(JSON.stringify({
        success: true,
        message: isConnected ? 'Listener service is running' : 'Listener service failed to connect',
        status: {
          isConnected,
          lastHeartbeat: new Date(lastHeartbeat).toISOString(),
          uptime: Date.now() - startTime,
          reconnectAttempts
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
