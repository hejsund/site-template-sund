
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
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
            🌿 Sommarboosten 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Vill du vara med på resan mot en sommar fylld av energi och glädje?
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto mb-8">
            <p className="text-lg mb-6 text-foreground/70">
              Fyll i din e-post här – så får du första nyheterna och tillgång till ett exklusivt förhandsmaterial om Sommarboosten. 
              <strong className="text-primary"> Inga måsten – bara inspiration och pepp!</strong>
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-lg rounded-xl border-2 border-border focus:border-primary"
                required
              />
              <Button type="submit" className="cta-primary h-14 whitespace-nowrap">
                Ja, jag vill veta mer! ✨
              </Button>
            </form>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <p className="text-sm text-foreground/60 mb-2">Scrolla för att läsa mer</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
