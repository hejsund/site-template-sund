
import { useCallback } from 'react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: any;
  }
}

export const useCookieConsent = () => {
  const updateConsent = useCallback((consent: 'granted' | 'denied' | 'custom', customSettings?: {
    marketingCookies: boolean;
    analyticsCookies: boolean;
  }) => {
    if (consent === 'custom' && customSettings) {
      const analyticsConsent = customSettings.analyticsCookies ? 'granted' : 'denied';
      const marketingConsent = customSettings.marketingCookies ? 'granted' : 'denied';
      
      // Update Google Analytics consent with custom settings
      if (window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: marketingConsent,
          analytics_storage: analyticsConsent
        });
      }
      
      localStorage.setItem('cookie_consent', 'custom');
      localStorage.setItem('marketing_cookies', customSettings.marketingCookies.toString());
      localStorage.setItem('analytics_cookies', customSettings.analyticsCookies.toString());
    } else {
      // Update Google Analytics consent
      if (window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: consent,
          analytics_storage: consent
        });
      }
      
      localStorage.setItem('cookie_consent', consent);
    }
  }, []);

  return { updateConsent };
};
