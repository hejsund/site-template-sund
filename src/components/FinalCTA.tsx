
import { Check, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const FinalCTA = () => {
  const benefits = [
    "15-minuters träningspass som känns som lek",
    "Snabba och supergoda recept för hela familjen", 
    "Daglig motivation och pepp direkt i appen",
    "Tillgång till en fantastisk gemenskap",
    "Verktyg för att följa din utveckling",
    "Charlotte som personlig coach i fickan"
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced background with better mobile optimization */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/95 via-green-100/90 to-green-200/85 z-10"></div>
        <img 
          src="/lovable-uploads/7eeaadd6-cfbf-4f28-8d1c-4c9222ab292a.png" 
          alt="Sommarboosten community" 
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-100/40 via-transparent to-green-50/20 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
          <div className="mb-8">
            <div className="text-4xl mb-4">🌟✨🌻</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-800 font-display">
              Redo att skapa din bästa sommar någonsin? 🌟
            </h2>
            <p className="text-xl text-green-700 mb-8 font-text">
              När vi öppnar dörrarna får du:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="text-neon-green flex-shrink-0 mt-1" size={20} />
                <span className="text-green-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Link to="/quiz">
              <Button className="cta-primary text-lg px-8 py-4 w-full md:w-auto">
                Gör vårt quiz och hitta din väg! ✨
              </Button>
            </Link>
            
            <p className="text-sm text-green-600 mt-4 opacity-80 font-text">
              🌺 Ingen stress, inga måsten – bara glädje och utveckling 🌺
            </p>
          </div>

          {/* Floating elements for extra summer vibes */}
          <div className="absolute -top-4 -right-4 text-coral opacity-60">
            <Heart className="animate-float" size={24} />
          </div>
          <div className="absolute -bottom-4 -left-4 text-purple opacity-60">
            <Sparkles className="animate-float" size={20} style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
