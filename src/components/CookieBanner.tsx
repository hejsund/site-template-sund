
import React, { useEffect, useState } from 'react';
import { shouldHideBanner } from '@/utils/privacyUtils';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: any;
  }
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

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

  const updateConsent = (consent: 'granted' | 'denied') => {
    // Update Google Analytics consent
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: consent,
        analytics_storage: consent
      });
    }
    
    localStorage.setItem('cookie_consent', consent);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-white/97 backdrop-blur-sm z-[99999] flex flex-col justify-center items-center p-6 font-text">
      {/* Colors and typography inherited from homepage design using Tailwind classes */}
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 font-display">
          We use cookies 🍪
        </h2>
        
        <p className="text-lg text-green-700 mb-8 leading-relaxed max-w-xl mx-auto">
          We use cookies to enhance your experience, show relevant ads, and collect anonymized analytics.
          You can customize your settings or allow all. We respect your privacy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => updateConsent('granted')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Allow all
          </button>
          
          <button 
            onClick={() => updateConsent('denied')}
            className="bg-transparent hover:bg-green-50 text-green-800 font-semibold px-8 py-3 rounded-xl border-2 border-green-300 hover:border-green-400 transition-all duration-200"
          >
            Deny
          </button>
        </div>
        
        <p className="text-sm text-green-600 mt-6 opacity-75">
          Your choice will be remembered for future visits
        </p>
      </div>
    </div>
  );
};

export default CookieBanner;
