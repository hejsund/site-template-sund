
import React, { useState } from 'react';
import { CookieMainView } from './CookieMainView';
import { CookieCustomizeView } from './CookieCustomizeView';
import { useCookieConsent } from '../../hooks/useCookieConsent';

interface CookieConsentModalProps {
  onAcceptAll: () => void;
  onClose: () => void;
}

export const CookieConsentModal: React.FC<CookieConsentModalProps> = ({ 
  onAcceptAll, 
  onClose 
}) => {
  const [showCustomize, setShowCustomize] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const { updateConsent } = useCookieConsent();

  const handleCustomize = () => {
    setShowCustomize(true);
  };

  const handleDenyAll = () => {
    setMarketingCookies(false);
    setAnalyticsCookies(false);
    updateConsent('custom', { marketingCookies: false, analyticsCookies: false });
    onClose();
  };

  const handleSaveCustom = () => {
    updateConsent('custom', { marketingCookies, analyticsCookies });
    onClose();
  };

  const handleBackToMain = () => {
    setShowCustomize(false);
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 sm:p-8"
      onClick={(e) => e.stopPropagation()}
    >
      {!showCustomize ? (
        <CookieMainView 
          onAcceptAll={onAcceptAll}
          onCustomize={handleCustomize}
        />
      ) : (
        <CookieCustomizeView
          marketingCookies={marketingCookies}
          analyticsCookies={analyticsCookies}
          onMarketingChange={setMarketingCookies}
          onAnalyticsChange={setAnalyticsCookies}
          onDenyAll={handleDenyAll}
          onSaveSettings={handleSaveCustom}
          onBack={handleBackToMain}
        />
      )}
    </div>
  );
};
