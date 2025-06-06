
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart med mer information om Sommarboosten 2025! 🌟');
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen gradient-green flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated hearts and sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-20 left-10 text-coral opacity-30 animate-float" size={24} />
          <Sparkles className="absolute top-32 right-20 text-purple opacity-30 animate-float" size={20} style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-40 right-10 text-coral opacity-30 animate-float" size={18} style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-60 left-16 text-purple opacity-30 animate-float" size={22} style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="relative z-10">
          {/* Main heading with integrated logo effect */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black leading-tight-heading font-display">
              <span className="text-gradient block">Sommarboosten</span>
              <span className="text-4xl md:text-5xl text-green-600 font-medium opacity-80 -mt-2 block tracking-widest">
                2025
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-green-700 max-w-3xl mx-auto leading-body font-text font-medium">
            Vill du vara med på resan mot en sommar fylld av energi och glädje?
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-12">
            <p className="text-lg mb-8 text-green-600 font-text leading-body">
              Fyll i din e-post här – så får du första nyheterna och tillgång till ett exklusivt förhandsmaterial om Sommarboosten. 
              <strong className="text-primary font-semibold"> Inga måsten – bara inspiration och pepp!</strong>
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-16 text-lg rounded-button border-2 border-border focus:border-primary font-text"
                required
              />
              <Button type="submit" className="cta-primary h-16 whitespace-nowrap text-xl px-10">
                Ja, jag vill veta mer! ✨
              </Button>
            </form>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <p className="text-base text-green-600 mb-3 font-text">Scrolla för att läsa mer</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
