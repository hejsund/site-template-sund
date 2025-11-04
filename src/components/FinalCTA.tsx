
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { pushToDataLayer } from '@/utils/pushToDataLayer';
import { getLaunchState } from '@/utils/launchPhases';

export const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [launchState, setLaunchState] = useState(getLaunchState());

  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchState(getLaunchState());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('jul_home_page_leads')
        .insert({
          email: email.trim(),
          source: 'final_cta',
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
    pushToDataLayer("buyButton", { source: "final_cta" });
    window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-green-50/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-green-800 font-display">
            💛 Ge dig själv en mjukare december
          </h2>

          <div className="space-y-6 text-green-700 font-text text-lg leading-relaxed">
            <p>
              Tänk om december i år kan få kännas annorlunda. Lite långsammare. Lite mjukare. Lite mer du.
            </p>
            <p>
              Du behöver inte bestämma dig för något stort. Bara ge dig själv den här lilla stunden varje dag – tio minuter som bara är dina.
            </p>
            <p className="font-semibold">
              För att vila. För att känna. För att få andas ut en stund.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Buy button - only show when launch is open */}
          {launchState.showBuyButton && (
            <>
              <Button
                onClick={handleBuyClick}
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-xl px-10 py-6 w-full sm:w-auto rounded-xl"
              >
                Köp kalendern – 249 kr
              </Button>

              <p className="text-sm text-green-600 font-text">
                Start 1 december – låt stillheten få bli din decemberrutin.
              </p>

              <p className="text-xs text-green-600 mt-2">
                Du kan använda ditt friskvårdsbidrag för köpet
              </p>
            </>
          )}

          {/* Email signup - show in pre-launch */}
          {launchState.showEmailSignup && !launchState.showBuyButton && (
            <>
              <p className="text-base text-green-700 mb-4">
                Anmäl ditt intresse så hör vi av oss när kalendern öppnar!
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
                  className="bg-primary hover:bg-primary/90 text-white h-12 px-6 rounded-xl font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Anmäl intresse ✨'}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
