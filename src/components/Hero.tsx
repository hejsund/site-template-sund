import { useState, useEffect } from 'react';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { warmupListenerService } from '@/utils/listenerWarmup';
import { HeroAnimatedElements } from './hero/HeroAnimatedElements';
import { HeroStartDates } from './hero/HeroStartDates';
import { HeroCTAButtons } from './hero/HeroCTAButtons';

export const Hero = () => {
  const { currentPhase } = useTimePhase();

  // Warm up listener service when component mounts
  useEffect(() => {
    warmupListenerService();
  }, []);

  /* 
  ==========================================
  PRE-LAUNCH HERO VERSION - SAVED FOR LATER
  ==========================================
  This is the original hero section that can be re-activated when needed.
  To restore: uncomment this section and comment out the launch version below.
  
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    console.log('Submitting email signup from hero section');
    
    // Warm up listener service before submitting lead
    await warmupListenerService();
    
    try {
      // Track email submission with GTM (email is hashed in this function)
      await trackEmailSubmit(email);

      // Log Facebook CAPI lead event
      await logLead(email, 'hero_email_signup', 'Hero Section Email Signup');

      // Save email to Supabase
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email.trim(),
          source: 'hero_section',
          user_agent: navigator.userAgent,
        })
        .select()
        .single();

      if (error) {
        console.error('Error saving email:', error.message);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      console.log('Lead saved successfully with ID:', data.id);

      // Show success message
      if (currentPhase.isActive) {
        toast.success(`Tack för ditt intresse! Anmälan för Sommarboosten ${currentPhase.year} är öppen nu! 🌟`);
      } else {
        toast.success(`Tack! Du kommer att höra från oss snart med mer information om Sommarboosten ${currentPhase.year}! 🌟`);
      }
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  PRE-LAUNCH EMAIL SIGNUP FORM:
  {!currentPhase.isActive && (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 shadow-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12 border border-white/50">
      <div className="text-center mb-4 sm:mb-6">
        <div className="text-2xl sm:text-3xl mb-2">🌟✨🌻</div>
        <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 font-display">
          Din drömresa börjar här!
        </h3>
      </div>
      
      <p className="text-sm sm:text-base mb-4 sm:mb-6 text-green-600 font-text leading-relaxed text-center">
        Få första nyheterna och exklusivt förhandsmaterial om <strong className="text-primary font-semibold">smarta träningsvanor</strong>, 
        <strong className="text-coral font-semibold"> supergoda recept</strong> och 
        <strong className="text-purple font-semibold"> roliga aktiviteter</strong> som gör {currentPhase.seasonText} magisk! 🏃‍♀️🍓🎉
        <span className="block mt-2 text-primary font-semibold">Inga pekpinnar, inga förbud – bara inspiration och pepp!</span>
      </p>

      <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
        <Input
          type="email"
          placeholder="Din e-postadress..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 h-12 sm:h-14 text-sm sm:text-base rounded-xl border-2 border-border focus:border-primary font-text"
          required
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          className="cta-primary h-12 sm:h-14 w-full sm:w-auto whitespace-nowrap text-sm sm:text-lg px-6 sm:px-8 rounded-xl"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Skickar...' : `${currentPhase.ctaText} ✨`}
        </Button>
      </form>
      
      <p className="text-xs sm:text-sm text-green-500 mt-3 text-center opacity-80 font-text">
        🏖️ Träning som känns som lek · Recept som smakar fantastiskt · Glädje utan stress
      </p>
    </div>
  )}

  PRE-LAUNCH ACTIVE MESSAGE:
  {currentPhase.isActive && (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 shadow-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12 border border-orange-200">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl mb-3">🌺🌞🌊</div>
        <p className="text-sm sm:text-base text-green-600 font-text leading-relaxed">
          <strong className="text-primary font-semibold text-base sm:text-lg">{currentPhase.description}</strong> 
        </p>
        <Button className="cta-primary mt-4">
          {currentPhase.ctaText} 🌟
        </Button>
      </div>
    </div>
  )}
  ==========================================
  END PRE-LAUNCH HERO VERSION
  ==========================================
  */

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleRegistrationClick = () => {
    // TODO: Update this link when registration page is ready
    window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank');
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
                <span className="block text-2xl sm:text-3xl md:text-4xl mt-1 sm:mt-2 text-green-700 font-bold">Anmälan är öppen!</span>
              </span>
            </div>
          </div>
          
          {/* Launch version subtitle - Updated CTAs focused on registration being open */}
          <div className="mb-6 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-green-600 max-w-3xl mx-auto leading-relaxed font-text font-medium px-2">
              {/* UPDATED COPY - FOCUSED ON REGISTRATION BEING OPEN */}
              Säkra din plats innan första starten! 6 veckor med träning, näring och glädje som passar dig och ditt liv.
            </p>
            <p className="text-sm sm:text-base text-green-600 mt-3 sm:mt-4 opacity-90 font-text">
              ☀️ Anmälan är öppen · Begränsade platser · Första start snart 🌊
            </p>
          </div>

          {/* IMPROVED START DATES SECTION - Four individual boxes with week numbers and booking status */}
          <HeroStartDates />

          {/* UPDATED CTAs - Focused on registration being open and securing spots */}
          <HeroCTAButtons />

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
