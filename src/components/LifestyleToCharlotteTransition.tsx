
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Clock } from 'lucide-react';
import { useDynamicText } from '@/hooks/useDynamicText';

interface LifestyleToCharlotteTransitionProps {
  testMode?: boolean;
  testDate?: Date;
  onRegistrationClick: () => void;
}

export const LifestyleToCharlotteTransition = ({ 
  testMode = false, 
  testDate, 
  onRegistrationClick 
}: LifestyleToCharlotteTransitionProps) => {
  const { urgencyText, hasAvailableStarts, daysUntilStart } = useDynamicText(testMode, testDate);

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50">
          <Heart className="w-12 h-12 text-coral mx-auto mb-4" />
          
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 font-display">
            Känner du igen dig?
          </h2>
          
          <p className="text-lg text-green-700 mb-6 font-text leading-relaxed">
            Du vill må bra, ha energi och känna dig stark - men vet inte riktigt hur du ska få till det 
            i din vardag. Du har provat olika saker men inget har känts hållbart eller kul.
          </p>

          {hasAvailableStarts && (
            <div className="mb-6 p-4 bg-green-100 rounded-xl border border-green-200">
              <p className="text-sm font-medium text-green-800 mb-2">
                {daysUntilStart <= 7 ? '⚡ Snart fullt!' : '🌟 Lediga platser'}
              </p>
              <p className="text-xs text-green-700">
                {urgencyText}
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Button
              onClick={onRegistrationClick}
              className="cta-warm h-12 w-full sm:w-auto px-8 text-lg group"
            >
              <span className="flex items-center gap-2">
                {hasAvailableStarts ? 'Säkra din plats nu' : 'Läs mer om programmet'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <p className="text-sm text-green-600 opacity-80">
              <Clock className="w-4 h-4 inline mr-1" />
              Läs mer om Charlotte och hennes expertis nedan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
