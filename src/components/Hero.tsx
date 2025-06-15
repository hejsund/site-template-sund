
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles, Dumbbell, Sun, Waves, Calendar, ArrowRight, Users } from 'lucide-react';
import { toast } from 'sonner';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { supabase } from '@/integrations/supabase/client';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';
import { warmupListenerService } from '@/utils/listenerWarmup';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { currentPhase } = useTimePhase();
  const navigate = useNavigate();

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

  // START DATES CONFIGURATION WITH AUTOMATIC BOOKING STATUS
  // This section controls the start dates and their booking status based on current date
  const startDates = [
    {
      date: '30 juni',
      week: 'v.27',
      fullDate: new Date('2025-06-30'),
      bookedAfter: new Date('2025-06-23') // Marks as fully booked starting June 23rd
    },
    {
      date: '7 juli',
      week: 'v.28',
      fullDate: new Date('2025-07-07'),
      bookedAfter: new Date('2025-06-30') // Marks as fully booked starting June 30th
    },
    {
      date: '14 juli',
      week: 'v.29',
      fullDate: new Date('2025-07-14'),
      bookedAfter: new Date('2025-07-07') // Marks as fully booked starting July 7th
    },
    {
      date: '21 juli',
      week: 'v.30',
      fullDate: new Date('2025-07-21'),
      bookedAfter: new Date('2025-07-14') // Marks as fully booked starting July 14th
    }
  ];

  // Check which dates should be marked as fully booked based on current date
  const currentDate = new Date();
  const getBookingStatus = (startDate: typeof startDates[0]) => {
    return currentDate >= startDate.bookedAfter ? 'fully-booked' : 'available';
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
              </div>
            </div>
          </div>
          
          {/* Launch version subtitle - Updated CTAs focused on registration being open */}
          <div className="mb-6 sm:mb-10 md:mb-12">
            <p className="text-base sm:text-lg md:text-2xl text-green-600 max-w-3xl mx-auto leading-relaxed font-text font-medium px-2">
              {/* ORIGINAL COPY (SAVED FOR REFERENCE):
              {currentPhase.description}
              Gör denna sommar till din bästa någonsin! 6 veckor med träning, näring och glädje som passar dig och ditt liv.
              */}
              
              {/* UPDATED COPY - FOCUSED ON REGISTRATION BEING OPEN */}
              Säkra din plats innan första starten! 6 veckor med träning, näring och glädje som passar dig och ditt liv.
            </p>
            <p className="text-sm sm:text-base text-green-600 mt-3 sm:mt-4 opacity-90 font-text">
              ☀️ Anmälan är öppen · Begränsade platser · Första start snart 🌊
            </p>
          </div>

          {/* IMPROVED START DATES SECTION - Four individual boxes with week numbers and booking status */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl max-w-4xl mx-auto mb-6 sm:mb-8 border border-white/50">
            <div className="text-center mb-6">
              <Calendar className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-bold text-green-600 mb-2 font-display">
                Välj din startdag - Anmälan pågår nu!
              </h3>
              <p className="text-sm text-green-700 opacity-80 font-text">
                Säkra din plats innan det blir fullt
              </p>
            </div>
            
            {/* Four individual start date boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {startDates.map((startDate, index) => {
                const bookingStatus = getBookingStatus(startDate);
                const isFullyBooked = bookingStatus === 'fully-booked';
                
                return (
                  <div 
                    key={index}
                    className={`relative rounded-xl p-4 border-2 transition-all duration-200 ${
                      isFullyBooked 
                        ? 'bg-gray-100 border-gray-300 opacity-75' 
                        : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:border-green-300 hover:shadow-lg'
                    }`}
                  >
                    {/* Fully booked badge */}
                    {isFullyBooked && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        FULLT
                      </div>
                    )}
                    
                    <div className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-green-800 mb-1 font-display">
                        {startDate.date}
                      </div>
                      <div className="text-sm text-green-600 mb-2 font-text">
                        ({startDate.week})
                      </div>
                      
                      {isFullyBooked ? (
                        <div className="text-xs text-gray-600 font-text">
                          Denna start är full
                        </div>
                      ) : (
                        <div className="text-xs text-green-700 font-semibold font-text">
                          Platser kvar!
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs sm:text-sm text-green-600 font-text opacity-80">
                🌟 Alla starter inkluderar samma fantastiska innehåll · Välj det datum som passar dig bäst
              </p>
            </div>
          </div>

          {/* UPDATED CTAs - Focused on registration being open and securing spots */}
          <div className="space-y-4 max-w-lg mx-auto">
            <Button 
              className="cta-primary h-12 sm:h-14 w-full text-sm sm:text-lg px-6 sm:px-8 rounded-xl"
              onClick={handleQuizClick}
            >
              Gör quiz först ✨
            </Button>
            
            <Button 
              className="cta-warm h-12 sm:h-14 w-full text-sm sm:text-lg px-6 sm:px-8 rounded-xl group"
              onClick={handleRegistrationClick}
            >
              <span className="flex items-center justify-center gap-2">
                Säkra din plats nu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>

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
