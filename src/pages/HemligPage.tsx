
import React, { useState, useEffect } from 'react';
import { pushToDataLayer } from '@/utils/pushToDataLayer';
import { HemligTimer } from '@/components/hemlig/HemligTimer';
import { HemligHero } from '@/components/hemlig/HemligHero';
import { HemligVideo } from '@/components/hemlig/HemligVideo';
import { HemligProblemSection } from '@/components/hemlig/HemligProblemSection';
import { HemligSolutionSection } from '@/components/hemlig/HemligSolutionSection';
import { HemligEmailSignup } from '@/components/hemlig/HemligEmailSignup';
import { HemligUrgencySection } from '@/components/hemlig/HemligUrgencySection';
import { HemligAuthoritySection } from '@/components/hemlig/HemligAuthoritySection';
import { HemligObjectionSection } from '@/components/hemlig/HemligObjectionSection';
import { HemligFinalCTA } from '@/components/hemlig/HemligFinalCTA';
import { HemligLinksSection } from '@/components/hemlig/HemligLinksSection';

const HemligPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to June 15, 2025 at 23:59
    const targetDate = new Date('2025-06-15T23:59:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    // Note: Page view tracking is now handled globally in App.tsx
    
    return () => clearInterval(timer);
  }, []);

  // Check if current date is June 14 or later
  const currentDate = new Date();
  const cutoffDate = new Date('2025-06-14T00:00:00');
  const showExpiredContent = currentDate >= cutoffDate;

  // Calculate total remaining hours for dynamic display
  const totalRemainingHours = timeLeft.days * 24 + timeLeft.hours;

  const handleBuyButtonClick = (source: string) => {
    pushToDataLayer("buyButton", { source });
    window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank');
  };

  return (
    <>
      {/* SEO Meta tags to prevent indexing */}
      <div style={{ display: 'none' }}>
        <meta name="robots" content="noindex, nofollow" />
      </div>
      
      <HemligTimer 
        timeLeft={timeLeft}
        showExpiredContent={showExpiredContent}
        totalRemainingHours={totalRemainingHours}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        <HemligHero 
          showExpiredContent={showExpiredContent}
          totalRemainingHours={totalRemainingHours}
          onBuyButtonClick={handleBuyButtonClick}
        />

        <HemligVideo showExpiredContent={showExpiredContent} />

        <HemligProblemSection />

        <HemligSolutionSection />

        <HemligEmailSignup />

        <HemligUrgencySection 
          showExpiredContent={showExpiredContent}
          timeLeft={timeLeft}
          onBuyButtonClick={handleBuyButtonClick}
        />

        <HemligAuthoritySection />

        <HemligObjectionSection />

        <HemligFinalCTA 
          showExpiredContent={showExpiredContent}
          timeLeft={timeLeft}
          totalRemainingHours={totalRemainingHours}
          onBuyButtonClick={handleBuyButtonClick}
        />

        <HemligLinksSection totalRemainingHours={totalRemainingHours} />
      </div>
    </>
  );
};

export default HemligPage;
