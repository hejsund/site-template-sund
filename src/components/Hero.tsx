
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles, Dumbbell } from 'lucide-react';
import { toast } from 'sonner';

export const Hero = () => {
  const [email, setEmail] = useState('');
  
  // Get current year for automatic updating
  const currentYear = new Date().getFullYear();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(`Tack! Du kommer att höra från oss snart med mer information om Sommarboosten ${currentYear}! 🌟`);
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen gradient-green flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated hearts, sparkles and training icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-20 left-10 text-coral opacity-30 animate-float" size={24} />
          <Sparkles className="absolute top-32 right-20 text-purple opacity-30 animate-float" size={20} style={{ animationDelay: '1s' }} />
          <Dumbbell className="absolute top-40 left-1/4 text-primary opacity-20 animate-float" size={18} style={{ animationDelay: '1.5s' }} />
          <Heart className="absolute bottom-40 right-10 text-coral opacity-30 animate-float" size={18} style={{ animationDelay: '2s' }} />
          <Sparkles className="absolute bottom-60 left-16 text-purple opacity-30 animate-float" size={22} style={{ animationDelay: '0.5s' }} />
          <Dumbbell className="absolute bottom-32 right-1/4 text-primary opacity-20 animate-float" size={20} style={{ animationDelay: '2.5s' }} />
        </div>

        <div className="relative z-10">
          {/* Main heading with SEO-friendly structure but visual reordering */}
          <div className="mb-8 relative">
            <h1 className="sr-only">Sommarboosten {currentYear}</h1>
            <div className="text-6xl md:text-8xl font-black leading-tight-heading font-display" aria-hidden="true">
              <span className="text-3xl sm:text-4xl md:text-5xl text-green-700 font-semibold opacity-90 block tracking-widest animate-jumpingBounce pb-4 sm:pb-6 md:pb-8">
                {currentYear}
              </span>
              <span className="text-gradient block -mt-2 sm:-mt-3 md:-mt-4">Sommarboosten</span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-12 text-green-800 max-w-3xl mx-auto leading-body font-text font-medium px-2">
            Vill du vara med på resan mot en sommar fylld av energi och glädje?
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 mx-4">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-green-700 font-text leading-body">
              Fyll i din e-post här – så får du första nyheterna och tillgång till ett exklusivt förhandsmaterial om Sommarboosten. 
              <strong className="text-primary font-semibold"> Inga måsten – bara inspiration och pepp!</strong>
            </p>

            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 sm:h-14 md:h-16 text-base sm:text-lg rounded-button border-2 border-border focus:border-primary font-text"
                required
              />
              <Button type="submit" className="cta-primary h-12 sm:h-14 md:h-16 whitespace-nowrap text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10">
                Ja, jag vill veta mer! ✨
              </Button>
            </form>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <p className="text-sm sm:text-base text-green-700 mb-3 font-text">Scrolla för att läsa mer</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
