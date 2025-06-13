import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Play, ArrowRight, Timer, Gift, Heart, Sparkles, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { pushToDataLayer, handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';

const HemligPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Set target date to June 15, 2025 at 23:59
    const targetDate = new Date('2025-06-15T23:59:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setIsExpired(true);
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Check if current date is June 14 or later
  const currentDate = new Date();
  const cutoffDate = new Date('2025-06-14T00:00:00');
  const showExpiredContent = currentDate >= cutoffDate;

  // Calculate total remaining hours for dynamic display
  const totalRemainingHours = timeLeft.days * 24 + timeLeft.hours;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    console.log('Submitting email:', email);

    try {
      // Track email submission with GTM
      await trackEmailSubmit(email);

      // Insert into sb_home_page_leads table
      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert([
          {
            email: email.trim(),
            source: 'hemlig_page',
            user_agent: navigator.userAgent,
          }
        ])
        .select()
        .single();

      if (error) {
        console.error('Error inserting lead:', error);
        toast.error('Det gick inte att skicka din e-post. Försök igen.');
        return;
      }

      console.log('Lead inserted successfully:', data);

      // Show success message
      toast.success('Tack! Vi skickar dig en påminnelse innan erbjudandet löper ut.', {
        duration: 5000,
      });

      // Clear the email field
      setEmail('');

    } catch (error: any) {
      console.error('Error submitting email:', error);
      toast.error('Ett oväntat fel inträffade. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBuyButtonClick = (source: string) => {
    pushToDataLayer("buyButton", { source });
    window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank');
  };

  return (
    <>
      {/* SEO Meta tags to prevent indexing */}
      <div style={{ display: 'none' }}>
        <meta name="robots" content="noindex, nofollow" />
      </div>
      
      {/* Sticky Timer Header */}
      {!showExpiredContent && (
        <div className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              <span className="font-bold text-sm md:text-base text-center">
                Erbjudandet löper ut om:
              </span>
            </div>
            <div className="font-bold text-sm md:text-base">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <div className="text-xs md:text-sm bg-white/20 px-3 py-1 rounded-full">
              50% RABATT – Endast {totalRemainingHours}h kvar!
            </div>
          </div>
        </div>
      )}
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Section 1: Hero with Headline and Immediate Offer */}
        <section className="py-12 px-6" role="main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
              Tack för att du var med
            </h1>
            
            <p className="text-xl md:text-2xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl mx-auto">
              Det här är bara för dig som sett föreläsningen eller vill se den i efterhand. Föreläsningen hittar du längre ner på sidan. Som utlovat så får du 50% rabatt på vårt sommar-program och det är precis vad föreläsningen handlar om.
            </p>

            {/* Early Read More Link */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
              <p className="text-green-800 font-text leading-relaxed mb-4">
                <strong>Vill du läsa mer om Sommarboosten?</strong> Du hittar all information på vår hemsida.
              </p>
              <a 
                href="https://sommarboosten.se" 
                className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors font-semibold underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Läs mer på sommarboosten.se
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Immediate Pricing Offer */}
            {!showExpiredContent && (
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-6 md:p-8 mb-12 border-2 border-green-300 shadow-xl">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Gift className="w-8 md:w-10 h-8 md:h-10 text-green-700" />
                  <h2 className="text-2xl md:text-3xl font-black text-green-800 font-display">Exklusivt erbjudande</h2>
                </div>
                
                <div className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg">
                  <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-xs md:text-sm text-slate-500 mb-1">Ordinarie pris:</div>
                      <div className="text-lg md:text-2xl font-bold text-slate-400 line-through whitespace-nowrap">
                        1 695 kr
                      </div>
                    </div>
                    <div className="text-2xl md:text-4xl text-green-600">→</div>
                    <div className="text-center">
                      <div className="text-xs md:text-sm text-slate-500 mb-1">Ditt pris:</div>
                      <div className="text-2xl md:text-4xl font-black text-red-500 whitespace-nowrap">
                        847,50 kr
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 rounded-xl p-3 md:p-4 mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="bg-green-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full font-bold text-base md:text-xl">50% RABATT</span>
                    </div>
                    <p className="text-green-800 font-semibold text-center text-sm md:text-base">
                      Gäller endast i <span className="font-black">{totalRemainingHours} timmar</span> från att du klickade dig hit
                    </p>
                  </div>
                </div>
                
                {/* Mobile-optimized CTA */}
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-green-800 font-bold text-lg md:text-xl mb-2">🎯 Säkra din plats med 50% rabatt</p>
                    <p className="text-green-700 text-sm md:text-base">Använd koden <span className="bg-green-100 px-2 py-1 rounded font-bold">TACK50</span> i kassan</p>
                  </div>
                  
                  <Button 
                    className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full group"
                    onClick={() => handleBuyButtonClick('hero_cta')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      Köp nu – 50% rabatt
                      <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                    </span>
                  </Button>
                </div>
              </div>
            )}

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <p className="text-green-800 font-text leading-relaxed">
                <strong>Viktigt:</strong> Den här sidan är personlig och stängs när nedräkningen når noll. 
                Erbjudandet gäller max {totalRemainingHours} timmar från att du kom hit – eller tills 15 juni kl. 23:59.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Video Placement (between specified lines) */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100" role="region">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8 font-display">
              Här är videon jag lovade dig
            </h2>
            
            {showExpiredContent ? (
              <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <div className="text-center text-slate-600">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">🎥 Videon är inte längre tillgänglig.</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
                <iframe
                  src="https://www.youtube.com/embed/ieq8A_WLACo"
                  title="Exklusiv video för föreläsningsdeltagare"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <p className="text-lg text-green-700 font-text">
              I den här videon delar jag de viktigaste insikterna om varför just <strong>sommaren</strong> är den perfekta tiden att investera i din hälsa.
            </p>
          </div>
        </section>

        {/* Section 3: Problem Agitation - Känner du igen dig? */}
        <section className="py-16 px-6" role="region">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-green-200">
              <h2 className="text-4xl font-bold text-green-800 mb-10 font-display text-center">
                Känner du igen dig i detta?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-3xl">😰</div>
                  <p className="text-green-800 font-text font-medium">
                    Du är rädd att allt ditt resultat från våren rinner ut i sanden i sommar
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-3xl">🍦</div>
                  <p className="text-green-800 font-text font-medium">
                    Du vill njuta av glass, grill och ledighet – men utan att känna att du sviker dig själv
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-3xl">💪</div>
                  <p className="text-green-800 font-text font-medium">
                    Du har tränat – men vet att rutinerna lätt försvinner när vardagen pausas
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
                  <div className="text-3xl">😤</div>
                  <p className="text-green-800 font-text font-medium">
                    Du vill inte fler "program" som inte fungerar
                  </p>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl">
                <p className="text-lg text-green-800 font-semibold">
                  <strong>Om du nickade ja till något av detta</strong> – då är Sommarboosten skapad för dig.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Solution - Vad är Sommarboosten? */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-green-800 mb-8 font-display text-center">
                Din lösning: Sommarboosten
              </h2>
              
              <p className="text-xl text-green-700 text-center mb-10 font-text leading-relaxed">
                Ett sommarprogram för dig som vill fortsätta ta hand om dig – utan att offra livets goda.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display text-lg mb-2">💪 60 träningspass</h3>
                    <p className="text-green-700">Styrka, puls, yoga, stretch – allt du behöver</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display text-lg mb-2">🍓 50+ somriga recept</h3>
                    <p className="text-green-700">Näringsrikt men utan förbud eller kaloriräkning</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display text-lg mb-2">🏖️ Fungerar var du än är</h3>
                    <p className="text-green-700">Hemma, i stugan, på stranden – ingen utrustning krävs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display text-lg mb-2">📱 Allt i vår app</h3>
                    <p className="text-green-700">Enkelt, överskådligt och alltid tillgängligt</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-green-700 font-text mb-6">
                  Vill du läsa mer om upplägget? <a href="https://sommarboosten.se" className="text-green-600 underline hover:no-underline font-semibold" target="_blank" rel="noopener noreferrer">Läs mer på sommarboosten.se</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup Reminder Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-10 border-2 border-green-300 text-center">
              <Mail className="w-12 h-12 text-green-700 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display">
                Inte redo att köpa än?
              </h2>
              <p className="text-lg text-green-700 mb-8 font-text">
                Inga problem! Lämna din e-post så påminner vi dig innan erbjudandet löper ut.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Din e-postadress"
                    className="flex-1 px-4 py-3 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold w-full sm:w-auto disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Skickar...' : 'Påminn mig'}
                  </Button>
                </div>
              </form>
              
              <p className="text-sm text-green-600 mt-4">
                Vi skickar bara påminnelser om detta erbjudande – inget spam!
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Urgency - Vad händer om du väntar? */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-l-8 border-green-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-green-500 text-white rounded-full p-4">
                    <Timer className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-black text-green-800 font-display">
                    Vad händer om du väntar?
                  </h2>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                    <p className="text-green-800 font-text leading-relaxed text-lg">
                      <strong>Sanningen?</strong> Det är lätt att tänka "jag gör det senare" – men just sommaren är den period då små val får störst effekt.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                    <p className="text-green-800 font-text leading-relaxed text-lg">
                      <strong>Varför nu?</strong> Sommarboosten är byggt för att fungera även när rutinerna är lösa – just då det brukar vara som svårast.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center">
                    <Gift className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-xl mb-2">
                      Det här är din chans att ta ett steg
                    </p>
                    <p className="text-lg opacity-90">
                      Ett rimligt, hållbart och effektivt steg – innan sommaren drar igång.
                    </p>
                  </div>
                </div>

                {!showExpiredContent && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-green-800 font-bold text-xl mb-2">⏰ Ta steget nu – rabatt-koden TACK50 ger dig 50% rabatt</p>
                      <p className="text-green-700 text-base mb-4">
                        Erbjudandet löper ut om <span className="whitespace-nowrap font-bold">{timeLeft.days} dagar</span>, <span className="whitespace-nowrap font-bold">{timeLeft.hours} timmar</span> och <span className="whitespace-nowrap font-bold">{timeLeft.minutes} minuter</span>
                      </p>
                    </div>
                    
                    <Button 
                      className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full group"
                      onClick={() => handleBuyButtonClick('urgency_section')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Säkra din plats nu
                        <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Authority - Charlottes resa */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-10 border-2 border-green-300">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl">🙋‍♀️</span>
                Charlottes resa – Bakgrunden till Sommarboosten
              </h2>
              
              <div className="space-y-4 text-green-800 font-text leading-relaxed text-lg">
                <p>
                  Jag är inte någon perfekt hälsoguru. Jag är fyrbarnsmamma, mitt i livet, med full kalender och vardagskaos.
                </p>
                
                <p>
                  Under många år körde jag all in på våren – och rasade ur allt på sommaren.
                  Det är där Sommarboosten föddes: ur behovet av något som faktiskt fungerar även under den årstid då vi annars brukar släppa taget.
                </p>
                
                <div className="bg-white rounded-xl p-6 border border-green-300">
                  <p className="font-semibold text-green-800">
                    "Jag skapade Sommarboosten för att ge dig verktygen jag önskat att jag hade haft – så att du slipper samma berg-och-dalbana som jag genomlevde."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: What it's NOT - Objection Handling */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h2 className="text-4xl font-bold text-green-800 mb-8 font-display flex items-center gap-3">
                <span className="text-3xl">❌</span>
                Det här är inte ett quick fix – men det fungerar
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-text font-medium">Det är inte en diet</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-text font-medium">Du räknar inte kalorier</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-text font-medium">Du behöver inte gymkort</span>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                  <XCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-text font-medium">Du behöver inte vara "duktig"</span>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-green-100 to-green-200 p-8 rounded-2xl">
                <p className="text-green-800 font-text text-xl font-semibold mb-4">
                  Du behöver bara vilja ta hand om dig själv
                </p>
                <p className="text-green-700 font-text">
                  Och vara redo att investera i din hälsa och välmående denna sommar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Final CTA with Pricing */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-200"></div>

          <div className="max-w-4xl mx-auto text-center relative z-20">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-green-300">
              <div className="mb-8">
                <div className="text-4xl mb-4">🌟✨🌻</div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-green-800 font-display">
                  Redo att investera i din bästa sommar?
                </h2>
              </div>

              {/* Pricing Section */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 md:p-6 lg:p-8 mb-8 border-2 border-green-300">
                <div className="flex flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-slate-500 mb-1">Ordinarie pris:</div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-400 line-through whitespace-nowrap">
                      1 695 kr
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl text-green-600">→</div>
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-slate-500 mb-1">Ditt pris idag:</div>
                    <div className="text-2xl md:text-3xl lg:text-5xl font-black text-red-500 whitespace-nowrap">
                      847,50 kr
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-4">
                  <span className="bg-green-600 text-white px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-full font-bold text-sm md:text-lg lg:text-xl">50% RABATT</span>
                  <span className="bg-red-600 text-white px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-full font-bold text-sm md:text-lg lg:text-xl whitespace-nowrap">{totalRemainingHours}h KVAR</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3 md:gap-4 text-left mb-8">
                {[
                  "50% rabatt – endast för dig",
                  "60 träningspass för hela sommaren",
                  "50+ somriga recept utan förbud",
                  "Träning som fungerar överallt",
                  "Allt samlat i vår app",
                  "Tydligt upplägg med struktur"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-green-800 font-medium text-sm md:text-base">{benefit}</span>
                  </div>
                ))}
              </div>

              {showExpiredContent ? (
                <div className="bg-slate-100 rounded-2xl p-6 md:p-8 border border-slate-300 text-center">
                  <XCircle className="w-12 md:w-16 h-12 md:h-16 text-slate-500 mx-auto mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">Erbjudandet har löpt ut</h3>
                  <p className="text-slate-600 font-text">
                    Du är alltid välkommen att läsa mer på <a href="https://sommarboosten.se" className="text-green-600 underline hover:no-underline" target="_blank" rel="noopener noreferrer">sommarboosten.se</a>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <p className="text-green-800 font-bold text-lg md:text-xl mb-2">💳 Använd rabatt-koden TACK50 för 50% rabatt</p>
                    <p className="text-green-700 text-sm md:text-base">
                      ⏰ <strong>Endast <span className="whitespace-nowrap">{timeLeft.days} dagar</span>, <span className="whitespace-nowrap">{timeLeft.hours} timmar</span> kvar</strong> på detta exklusiva erbjudande
                    </p>
                  </div>
                  
                  <Button 
                    className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                    onClick={() => handleBuyButtonClick('final_cta')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    <span className="relative flex items-center justify-center gap-3">
                      Säkra din plats – 50% rabatt
                      <ArrowRight className="w-6 h-6 flex-shrink-0" />
                    </span>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section 9: Links and Final Reminder */}
        <section className="py-16 px-6 bg-gradient-to-br from-green-700 to-green-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 font-display text-white">
                Vill du läsa mer först?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 font-display text-white">🏠 Utforska vår hemsida</h3>
                  <p className="text-green-200 mb-4 font-text">
                    Läs mer om våra program, artiklar och Charlotte bakom Sommarboosten.
                  </p>
                  <a 
                    href="/" 
                    className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Besök startsidan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 font-display text-white">🌟 Sund & Stark</h3>
                  <p className="text-green-200 mb-4 font-text">
                    Upptäck fler program och resurser för en hållbar hälsa.
                  </p>
                  <a 
                    href="https://sundochstark.se" 
                    className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Besök sundochstark.se
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-green-600/30 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 font-display text-white">⚡ Sista chansen</h3>
                <p className="text-green-100 mb-4 font-text">
                  Kom ihåg att detta specialerbjudande med <strong>50% rabatt</strong> löper ut snart! 
                  Ta steget nu medan du har chansen – din framtida jag kommer att tacka dig.
                </p>
                <p className="text-sm text-green-200 font-text">
                  🎯 Varför vänta på en bättre tid när den perfekta tiden är nu?
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HemligPage;
