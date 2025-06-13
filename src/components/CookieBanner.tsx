
import React, { useEffect, useState } from 'react';
import { X, Settings } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { shouldHideBanner } from '@/utils/privacyUtils';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: any;
  }
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);

  useEffect(() => {
    const alreadyConsented = localStorage.getItem('cookie_consent');
    const excludedPath = window.location.pathname === '/hemlig';

    // TEST MODE: Show banner every session on all pages (remove this before launch)
    // Comment out the next line and uncomment the line after for production
    setShowBanner(true);
    // if (!alreadyConsented && !excludedPath && !shouldHideBanner()) {
    //   setShowBanner(true);
    // }
  }, []);

  const updateConsent = (consent: 'granted' | 'denied' | 'custom') => {
    if (consent === 'custom') {
      const analyticsConsent = analyticsCookies ? 'granted' : 'denied';
      const marketingConsent = marketingCookies ? 'granted' : 'denied';
      
      // Update Google Analytics consent with custom settings
      if (window.gtag) {
        window.gtag('consent', 'update', {
          ad_storage: marketingConsent,
          analytics_storage: analyticsConsent
        });
      }
      
      localStorage.setItem('cookie_consent', 'custom');
      localStorage.setItem('marketing_cookies', marketingCookies.toString());
      localStorage.setItem('analytics_cookies', analyticsCookies.toString());
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
    
    setShowBanner(false);
    setShowCustomize(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleDenyAll = () => {
    setMarketingCookies(false);
    setAnalyticsCookies(false);
    updateConsent('custom');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] flex flex-col justify-center items-center p-4 font-text">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-8">
        {!showCustomize ? (
          // Main cookie banner
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 font-display">
              Vi använder cookies 🍪
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vi använder cookies för att förbättra din upplevelse, visa relevanta annonser och samla in anonymiserad statistik. 
              Du kan anpassa dina inställningar eller godkänna alla. Vi respekterar din integritet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => updateConsent('granted')}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl order-1"
              >
                Godkänn alla
              </button>
              
              <button 
                onClick={handleCustomize}
                className="bg-transparent hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 order-2"
              >
                Anpassa
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Ditt val kommer att sparas för framtida besök
            </p>
          </div>
        ) : (
          // Customize module
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-green-800 font-display">
                Anpassa cookies
              </h2>
              <button
                onClick={() => setShowCustomize(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Om cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies är små textfiler som lagras på din enhet när du besöker vår webbplats. 
                  De hjälper oss att förbättra din upplevelse, komma ihåg dina preferenser och 
                  förstå hur vår webbplats används. Du kan välja vilka typer av cookies du vill tillåta.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Cookie-inställningar</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Nödvändiga cookies</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Alltid aktiva</span>
                    <Switch checked={true} disabled />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Marknadsföringscookies</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Dessa cookies används för att visa dig relevanta annonser baserat på dina intressen.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Marknadsföring</span>
                    <Switch 
                      checked={marketingCookies} 
                      onCheckedChange={setMarketingCookies}
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1">Analyticscookies</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in information anonymt.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">Analytics</span>
                    <Switch 
                      checked={analyticsCookies} 
                      onCheckedChange={setAnalyticsCookies}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleDenyAll}
                className="order-2 sm:order-1"
              >
                Neka alla
              </Button>
              <Button
                onClick={() => updateConsent('custom')}
                className="bg-green-600 hover:bg-green-700 order-1 sm:order-2"
              >
                Spara inställningar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
