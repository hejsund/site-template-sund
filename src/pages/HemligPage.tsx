
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
import { HeroTestMode } from '@/components/hero/HeroTestMode';

const HemligPage = () => {
  const [testMode, setTestMode] = useState(false);
  const [testDate, setTestDate] = useState<Date>(new Date());
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to June 15, 2025 at 23:59 Swedish time (CEST)
    // Convert to UTC by subtracting 2 hours (CEST is UTC+2 in summer)
    // NOTE: This page should be CLOSED/HIDDEN on Monday - add redirect or hide content
    const targetDate = new Date('2025-06-15T21:59:00Z').getTime(); // 23:59 CEST = 21:59 UTC
    
    const updateTimer = () => {
      const currentDate = testMode && testDate ? testDate : new Date();
      const now = currentDate.getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    // Note: Page view tracking is now handled globally in App.tsx
    
    return () => clearInterval(timer);
  }, [testMode, testDate]);

  // Check if current date is after June 15, 2025 23:59 Swedish time
  // TODO: On Monday, this page should be hidden/redirected as the hemlig offer expires
  const currentDate = testMode && testDate ? testDate : new Date();
  const cutoffDate = new Date('2025-06-15T21:59:00Z'); // 23:59 CEST = 21:59 UTC
  const showExpiredContent = currentDate >= cutoffDate;

  // TODO FOR MONDAY: Add redirect or show "offer expired" message
  // if (showExpiredContent) {
  //   return <div>Erbjudandet har löpt ut</div>;
  // }

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
      
      {/* Test Mode Toggle */}
      <HeroTestMode 
        testMode={testMode}
        setTestMode={setTestMode}
        testDate={testDate}
        setTestDate={setTestDate}
      />
      
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
