
import React, { useEffect, useState } from 'react';
import { shouldHideBanner } from '@/utils/privacyUtils';
import { CookieConsentModal } from './cookie/CookieConsentModal';
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { updateConsent } = useCookieConsent();

  useEffect(() => {
    const alreadyConsented = localStorage.getItem('cookie_consent');
    const excludedPath = window.location.pathname === '/hemlig';

    if (!alreadyConsented && !excludedPath && !shouldHideBanner()) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    updateConsent('granted');
    setShowBanner(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    // If clicking the backdrop (not the modal content), accept all cookies
    if (e.target === e.currentTarget) {
      handleAcceptAll();
    }
  };

  if (!showBanner) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] flex flex-col justify-center items-center p-4 font-text"
      onClick={handleBackdropClick}
    >
      <CookieConsentModal 
        onAcceptAll={handleAcceptAll}
        onClose={() => setShowBanner(false)}
      />
    </div>
  );
};

export default CookieBanner;
