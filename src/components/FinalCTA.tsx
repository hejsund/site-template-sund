
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles, Star } from 'lucide-react';
import { toast } from 'sonner';

export const FinalCTA = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Fantastiskt! Du är nu med i väntelistan för Sommarboosten 2025! 🎉');
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-green-600 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <Heart className="absolute top-20 left-10 animate-float" size={40} />
        <Sparkles className="absolute top-32 right-20 animate-float" size={35} style={{ animationDelay: '1s' }} />
        <Star className="absolute bottom-40 right-10 animate-float" size={30} style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-60 left-16 animate-float" size={35} style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-60 left-1/3 animate-float" size={25} style={{ animationDelay: '1.5s' }} />
        <Star className="absolute bottom-20 right-1/3 animate-float" size={28} style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Redo att skapa din bästa sommar någonsin? 🌟
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Sommaren handlar om att leva – och Sommarboosten handlar om att du äger dina val.
          </p>
        </div>

        {/* Value proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            När vi öppnar dörrarna får du:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>50% rabatt första 48 timmarna</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Livstidstillgång till alla material</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Bonusmaterial värt 500 kr</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Direkttillgång till communityn</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>Personlig support från Charlotte</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>30 dagars nöjd-kund-garanti</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email signup for early access */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-gray-800 max-w-3xl mx-auto mb-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-primary">
            Säkra din plats redan nu! 🎯
          </h3>
          <p className="text-lg mb-6 text-gray-600">
            Bli först att veta när vi öppnar dörrarna + få exklusivt bonusmaterial direkt i din inkorg.
          </p>

          <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Din e-postadress..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 text-lg rounded-xl border-2"
              required
            />
            <Button type="submit" className="cta-warm h-14 whitespace-nowrap px-8">
              Ja, jag vill ha min plats! 🚀
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            ✨ Inga spam, bara värdefull information. Du kan avregistrera dig när som helst.
          </p>
        </div>

        {/* Final motivational message */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl opacity-90 font-medium italic leading-relaxed">
            "Du förtjänar en sommar där allt flyter på naturligt. Där träning känns som glädje, 
            mat smakar fantastiskt och du vaknar med energi och entusiasm för dagen."
          </p>
          <p className="text-lg mt-4 opacity-80">
            – Charlotte Steinwig, grundare Sund & Stark
          </p>
        </div>
      </div>
    </section>
  );
};
