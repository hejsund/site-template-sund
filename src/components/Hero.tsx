
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles, Dumbbell, Sun, Waves } from 'lucide-react';
import { toast } from 'sonner';

export const Hero = () => {
  const [email, setEmail] = useState('');
  
  // Get current date and year for dynamic content
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // 0-based, so add 1
  
  // Determine display year and text based on current date
  const getDisplayContent = () => {
    // In July, show current year with "pågår" message
    if (currentMonth === 7) {
      return {
        year: currentYear,
        isActive: true,
        message: "Sommarboosten pågår! Anmälan är stängd."
      };
    }
    
    // From September onwards, show next year and tease upcoming program
    if (currentMonth >= 9) {
      return {
        year: currentYear + 1,
        isActive: false,
        message: `Vill du vara med på resan mot en sommar ${currentYear + 1} fylld av energi och glädje?`
      };
    }
    
    // January to August (except July), show current year
    return {
      year: currentYear,
      isActive: false,
      message: `Vill du vara med på resan mot en sommar ${currentYear} fylld av energi och glädje?`
    };
  };

  const displayContent = getDisplayContent();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      if (displayContent.isActive) {
        toast.success(`Tack för ditt intresse! Anmälan för Sommarboosten ${displayContent.year} är tyvärr stängd då programmet pågår. 🌟`);
      } else {
        toast.success(`Tack! Du kommer att höra från oss snart med mer information om Sommarboosten ${displayContent.year}! 🌟`);
      }
      setEmail('');
    }
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
        {/* Summer overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100/20 via-transparent to-orange-100/10 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20 w-full">
        {/* Enhanced animated summer elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sun className="absolute top-12 sm:top-20 right-4 sm:right-10 text-yellow-500 opacity-40 animate-float" size={28} />
          <Heart className="absolute top-16 sm:top-24 left-6 sm:left-10 text-coral opacity-30 animate-float" size={24} />
          <Sparkles className="absolute top-28 sm:top-32 right-12 sm:right-20 text-purple opacity-30 animate-float" size={20} style={{ animationDelay: '1s' }} />
          <Waves className="absolute top-36 sm:top-40 left-8 sm:left-1/4 text-blue-400 opacity-25 animate-float" size={22} style={{ animationDelay: '1.5s' }} />
          <Dumbbell className="absolute top-44 sm:top-48 right-6 sm:right-1/3 text-primary opacity-20 animate-float" size={18} style={{ animationDelay: '1.8s' }} />
          <Heart className="absolute bottom-32 sm:bottom-40 right-8 sm:right-10 text-coral opacity-30 animate-float" size={18} style={{ animationDelay: '2s' }} />
          <Sun className="absolute bottom-48 sm:bottom-60 left-4 sm:left-16 text-yellow-500 opacity-35 animate-float" size={16} style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-40 sm:bottom-52 right-1/4 text-purple opacity-30 animate-float" size={22} style={{ animationDelay: '2.5s' }} />
        </div>

        <div className="relative z-10 px-2 sm:px-0">
          {/* Mobile-optimized main heading */}
          <div className="mb-6 sm:mb-8 relative">
            <h1 className="sr-only">Sommarboosten {displayContent.year}</h1>
            <div className="text-5xl sm:text-6xl md:text-8xl font-black leading-none font-display" aria-hidden="true">
              <span className="text-2xl sm:text-3xl md:text-5xl text-green-700 font-semibold opacity-90 block tracking-widest animate-jumpingBounce pb-3 sm:pb-6 md:pb-8">
                {displayContent.year}
              </span>
              <span className="text-gradient block -mt-1 sm:-mt-2 md:-mt-4 leading-none">
                {displayContent.isActive ? (
                  <>
                    <span className="block text-3xl sm:text-5xl md:text-7xl">Sommarboosten</span>
                    <span className="block text-2xl sm:text-3xl md:text-4xl mt-1 sm:mt-2">pågår!</span>
                  </>
                ) : (
                  'Sommarboosten'
                )}
              </span>
            </div>
          </div>
          
          {/* Mobile-optimized subtitle with summer energy */}
          <div className="mb-6 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-green-800 max-w-3xl mx-auto leading-relaxed font-text font-medium px-2">
              {displayContent.message}
            </p>
            {!displayContent.isActive && (
              <p className="text-sm sm:text-base text-green-700 mt-3 sm:mt-4 opacity-90 font-text">
                ☀️ Gör denna sommar till din bästa någonsin! 🌊
              </p>
            )}
          </div>

          {/* Enhanced email signup form for mobile */}
          {!displayContent.isActive && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 shadow-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12 border border-white/50">
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl mb-2">🌟✨🌻</div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-display">
                  Din drömarsommar börjar här!
                </h3>
              </div>
              
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-green-700 font-text leading-relaxed text-center">
                Få första nyheterna och exklusivt förhandsmaterial om <strong className="text-primary font-semibold">smarta träningsvanor</strong>, 
                <strong className="text-coral font-semibold"> supergoda recept</strong> och 
                <strong className="text-purple font-semibold"> roliga aktiviteter</strong> som gör sommaren magisk! 🏃‍♀️🍓🎉
                <span className="block mt-2 text-primary font-semibold">Inga måsten – bara inspiration och pepp!</span>
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                <Input
                  type="email"
                  placeholder="Din e-postadress..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 sm:h-14 text-sm sm:text-base rounded-xl border-2 border-border focus:border-primary font-text"
                  required
                />
                <Button type="submit" className="cta-primary h-12 sm:h-14 w-full sm:w-auto whitespace-nowrap text-sm sm:text-lg px-6 sm:px-8 rounded-xl">
                  Ja, jag vill vara med! ✨
                </Button>
              </form>
              
              <p className="text-xs sm:text-sm text-green-600 mt-3 text-center opacity-80 font-text">
                🏖️ Träning som känns som lek · Recept som smakar fantastiskt · Sommarglädje utan stress
              </p>
            </div>
          )}

          {/* Enhanced active program message */}
          {displayContent.isActive && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 shadow-xl max-w-lg sm:max-w-2xl mx-auto mb-6 sm:mb-10 md:mb-12 border border-orange-200">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-3">🌺🌞🌊</div>
                <p className="text-sm sm:text-base text-green-700 font-text leading-relaxed">
                  <strong className="text-primary font-semibold text-base sm:text-lg">Anmälan är stängd</strong> 
                  <span className="block mt-1">då programmet pågår just nu!</span>
                </p>
                <p className="text-xs sm:text-sm text-green-600 mt-3 opacity-80 font-text">
                  Följ oss för nästa års Sommarboosten! 🌟
                </p>
              </div>
            </div>
          )}

          {/* Mobile-optimized scroll indicator */}
          <div className="animate-bounce mt-8 sm:mt-0">
            <p className="text-xs sm:text-sm text-green-700 mb-2 font-text opacity-80">Scrolla för att läsa mer</p>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full mx-auto relative">
              <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-primary rounded-full mx-auto mt-1.5 sm:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
