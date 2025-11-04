
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { HeroAnimatedElements } from './hero/HeroAnimatedElements';
import { getLaunchState } from '@/utils/launchPhases';
import { Countdown } from '@/components/Countdown';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [launchState, setLaunchState] = useState(getLaunchState());

  // Update launch state every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchState(getLaunchState());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Check if email is valid
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(se|com|org|net|edu|gov|mil|info|biz|name|museum|coop|aero|asia|cat|jobs|mobi|tel|travel|xxx|eu|uk|de|fr|es|it|nl|no|dk|fi)$/i;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('jul_home_page_leads')
        .insert({
          email: email.trim(),
          source: 'julkalender_hero',
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error saving email:', error);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      toast.success('Tack! Vi hör av oss när kalendern öppnar! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBuyClick = () => {
    window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank');
  };

  return (
    <section className="min-h-screen gradient-green flex items-center justify-center px-3 sm:px-4 py-16 sm:py-20 relative overflow-hidden">
      {/* Warm winter background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/90 via-green-100/85 to-green-200/80 z-10"></div>
        <img
          src="/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png"
          alt="Julkalender 2025 background"
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange/10 via-transparent to-pink/5 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20 w-full">
        {/* Animated elements */}
        <HeroAnimatedElements />

        <div className="relative z-10 px-2 sm:px-0">
          {/* Main heading - Dynamic based on launch phase */}
          <div className="mb-6 sm:mb-8 relative">
            <h1 className="font-black leading-none font-display">
              <span className="text-green-800 block text-[clamp(2.5rem,10vw,5rem)] sm:text-6xl md:text-7xl mb-4">
                {launchState.heroHeading}
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl text-green-700 font-bold">
                {launchState.heroSubheading}
              </span>
            </h1>
          </div>

          {/* Countdown for last 24 hours */}
          {launchState.showCountdown && (
            <div className="mb-8 sm:mb-12">
              <Countdown />
            </div>
          )}

          {/* Subtitle - Only show in normal phases */}
          {!launchState.showCountdown && launchState.phase !== 'closed' && (
            <div className="mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-2xl mx-auto leading-relaxed font-text px-2">
                En ljudkalender för att sakta ner, landa och känna mer närvaro. 3-10 minuter varje dag – bara tryck på play.
              </p>
            </div>
          )}

          {/* CTA Section - Dynamic based on launch phase */}
          {launchState.phase !== 'closed' && (
            <div className="max-w-md mx-auto space-y-4 mb-8">
              {/* Buy Button - Only show when open or last-24h */}
              {launchState.showBuyButton && (
                <>
                  <Button
                    onClick={handleBuyClick}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold text-lg py-6 rounded-xl"
                  >
                    Köp kalendern – 249 kr
                  </Button>
                  {launchState.showEmailSignup && (
                    <div className="text-sm text-green-700 font-text mb-4">
                      eller anmäl ditt intresse för mer information
                    </div>
                  )}
                </>
              )}

              {/* Email signup - Show in pre-launch and open phases */}
              {launchState.showEmailSignup && (
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Din e-postadress..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 rounded-xl border-2 border-green-300"
                    required
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    className={`h-12 px-6 rounded-xl font-semibold transition-colors ${
                      isValidEmail(email)
                        ? 'bg-green-800 hover:bg-green-700 text-white'
                        : 'bg-secondary hover:bg-secondary/90 text-green-800'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Skickar...' : launchState.ctaText}
                  </Button>
                </form>
              )}

              {/* Friskvård notice - only show when buy button is visible */}
              {launchState.showBuyButton && (
                <p className="text-xs text-green-600 mt-2">
                  Du kan använda ditt friskvårdsbidrag för köpet
                </p>
              )}
            </div>
          )}

          {/* Closed message */}
          {launchState.phase === 'closed' && (
            <div className="max-w-md mx-auto mb-8">
              <p className="text-lg text-green-700 font-text">
                Tack för intresset! Anmälan är nu stängd för i år. Vi ses igen nästa december! 💛
              </p>
            </div>
          )}

          {/* Scroll indicator */}
          <div className="animate-bounce mt-12">
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
