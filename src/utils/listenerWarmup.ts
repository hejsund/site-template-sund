
import { supabase } from '@/integrations/supabase/client';

let lastWarmupCall = 0;
const WARMUP_COOLDOWN = 30000; // 30 seconds cooldown between warmup calls

export const warmupListenerService = async () => {
  const now = Date.now();
  
  // Prevent too frequent calls
  if (now - lastWarmupCall < WARMUP_COOLDOWN) {
    return;
  }
  
  lastWarmupCall = now;
  
  try {
    console.log('Warming up listener service...');
    
    // Call the listener service to ensure it's active and ready
    await supabase.functions.invoke('listener-service', {
      body: { action: 'status' }
    });
    
    console.log('Listener service warmed up successfully');
  } catch (error) {
    // Silent fail - this is just a warmup call
    console.log('Listener warmup failed (expected in some cases):', error);
  }
};
