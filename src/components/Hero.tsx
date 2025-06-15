
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { warmupListenerService } from '@/utils/listenerWarmup';
import { useDynamicText } from '@/hooks/useDynamicText';
import { HeroAnimatedElements } from './hero/HeroAnimatedElements';
import { HeroStartDates } from './hero/HeroStartDates';
import { HeroCTAButtons } from './hero/HeroCTAButtons';
import { HeroTestMode } from './hero/HeroTestMode';
import { HeroDynamicCTA } from './hero/HeroDynamicCTA';

export const Hero = () => {
  const navigate = useNavigate();
  const { currentPhase } = useTimePhase();
  const [testMode, setTestMode] = useState(false);
  const [testDate, setTestDate] = useState<Date>(new Date());
  
  const { statusText, hasAvailableStarts } = useDynamicText(testMode, testDate);

  // Warm up listener service when component mounts
  useEffect(() => {
    warmupListenerService();
  }, []);

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleRegistrationClick = () => {
    window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank');
  };

  const handleDateCardCTA = () => {
    // TODO: User will provide link later
    console.log('Date card CTA clicked - link to be provided');
  };

  return (
    <section className="min-h-screen gradient-green flex items-center justify-center px-3 sm:px-4 py-16 sm:py-20 relative overflow-hidden">
      {/* Enhanced summer background with better mobile positioning */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-green-100/85 to-green-200/80 z-10"></div>
        <img 
          src="/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png" 
          alt="Sommarboosten lifestyle" 
          className="w-full h-full object-cover object-center sm:object-center"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Season overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 via-transparent to-orange-100/10 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20 w-full">
        {/* Enhanced animated elements */}
        <HeroAnimatedElements />

        <div className="relative z-10 px-2 sm:px-0">
          {/* Mobile-optimized main heading with responsive text sizing */}
          <div className="mb-6 sm:mb-8 relative">
            <h1 className="sr-only">Sommarboosten {currentPhase.year}</h1>
            <div className="font-black leading-none font-display" aria-hidden="true">
              <span className="text-2xl sm:text-3xl md:text-5xl text-green-600 font-semibold opacity-90 block tracking-widest animate-jumpingBounce pb-3 sm:pb-6 md:pb-8">
                {currentPhase.year}
              </span>
              <span className="text-gradient block -mt-1 sm:-mt-2 md:-mt-4 leading-none">
                <span className="block text-[clamp(2.5rem,10vw,6rem)] sm:text-6xl md:text-8xl">Sommarboosten</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl mt-1 sm:mt-2 text-green-700 font-bold">
                  {hasAvailableStarts ? 'Anmälan är öppen!' : 'Kontakta oss för mer info'}
                </span>
              </span>
            </div>
          </div>
          
          {/* Launch version subtitle */}
          <div className="mb-6 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-green-600 max-w-3xl mx-auto leading-relaxed font-text font-medium px-2">
              Säkra din plats innan första starten! 6 veckor med träning, näring och glädje som passar dig och ditt liv.
            </p>
            <p className="text-sm sm:text-base text-green-600 mt-3 sm:mt-4 opacity-90 font-text">
              ☀️ {statusText} · Begränsade platser · {hasAvailableStarts ? 'Anmäl dig nu' : 'Kontakta oss'} 🌊
            </p>
          </div>

          {/* Test Mode Toggle */}
          <HeroTestMode 
            testMode={testMode}
            setTestMode={setTestMode}
            testDate={testDate}
            setTestDate={setTestDate}
          />

          {/* CTA 1: Primary call-to-action - TOP of hero section */}
          {/* Connected to test timer: YES - shows urgency based on dynamic text */}
          <HeroDynamicCTA 
            testMode={testMode}
            testDate={testDate}
            onRegistrationClick={handleRegistrationClick}
            variant="urgent"
            className="mb-8"
          />

          {/* Start dates section with individual CTA buttons */}
          <HeroStartDates 
            testMode={testMode}
            testDate={testDate}
            onDateCardCTA={handleDateCardCTA}
          />

          {/* CTA 2: Secondary action - AFTER showing start dates */}
          {/* Connected to test timer: YES - adapts based on availability */}
          <HeroDynamicCTA 
            testMode={testMode}
            testDate={testDate}
            onRegistrationClick={handleRegistrationClick}
            variant="secondary"
            className="mb-8"
          />

          {/* CTA 3: Main action buttons - MIDDLE of content */}
          {/* Connected to test timer: NO - these are static quiz and registration buttons */}
          <HeroCTAButtons 
            onQuizClick={handleQuizClick}
            onRegistrationClick={handleRegistrationClick}
          />

          {/* Mobile-optimized scroll indicator */}
          <div className="animate-bounce mt-8 sm:mt-12">
            <p className="text-xs sm:text-sm text-green-600 mb-2 font-text opacity-80">Scrolla för att läsa mer</p>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-primary rounded-full mx-auto mt-1.5 sm:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
