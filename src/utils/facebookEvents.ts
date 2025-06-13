
import { supabase } from '@/integrations/supabase/client';
import { sha256 } from './pushToDataLayer';

declare global {
  interface Window {
    fbq: any;
  }
}

// Get Facebook pixel data from cookies/localStorage
function getFacebookPixelData() {
  const fbp = getCookie('_fbp') || localStorage.getItem('_fbp');
  const fbc = getCookie('_fbc') || localStorage.getItem('_fbc');
  
  return { fbp, fbc };
}

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

// Get client IP address (approximation)
async function getClientIP(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP:', error);
    return null;
  }
}

// Log Facebook event to database
export async function logFacebookEvent(
  eventType: 'page_view' | 'lead',
  email?: string,
  additionalData?: Record<string, any>
) {
  try {
    console.log('Logging Facebook event:', eventType, additionalData);

    const { fbp, fbc } = getFacebookPixelData();
    const clientIP = await getClientIP();
    
    const eventData = {
      page_location: window.location.href,
      page_title: document.title,
      client_user_agent: navigator.userAgent,
      client_ip_address: clientIP,
      fbp,
      fbc,
      ...additionalData
    };

    // Hash email if provided
    let emailHash: string | undefined;
    if (email) {
      emailHash = await sha256(email);
    }

    // Insert event into database
    const { data, error } = await supabase
      .from('sb_meta_event_log')
      .insert([
        {
          event_type: eventType,
          email_hash: emailHash,
          event_data: eventData
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Error logging Facebook event:', error);
      return false;
    }

    console.log('Facebook event logged successfully:', data);

    // Also trigger Facebook Pixel directly if available
    if (typeof window.fbq === 'function') {
      if (eventType === 'page_view') {
        window.fbq('track', 'PageView');
      } else if (eventType === 'lead') {
        window.fbq('track', 'Lead', {
          content_name: 'Hemlig Page Lead',
          source: additionalData?.source || 'unknown'
        });
      }
    }

    return true;
  } catch (error) {
    console.error('Error in logFacebookEvent:', error);
    return false;
  }
}

// Log page view
export async function logPageView() {
  return await logFacebookEvent('page_view');
}

// Log lead event
export async function logLead(email?: string, source?: string) {
  return await logFacebookEvent('lead', email, { source });
}
