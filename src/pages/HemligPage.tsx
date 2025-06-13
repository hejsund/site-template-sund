
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Play, ArrowRight, Timer, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HemligPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

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

  // Check if current date is June 14 or later (for logic section 8)
  const currentDate = new Date();
  const cutoffDate = new Date('2025-06-14T00:00:00');
  const showExpiredContent = currentDate >= cutoffDate;

  return (
    <>
      {/* SEO Meta tags to prevent indexing */}
      <div style={{ display: 'none' }}>
        <meta name="robots" content="noindex, nofollow" />
      </div>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        {/* Section 1: Hero - Video + Countdown */}
        <section className="py-20 px-6" role="main">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
              Tack för att du var med – det här är bara för dig som sett föreläsningen eller visat intresse.
            </h1>
            
            {/* Video Section */}
            <div className="mb-12">
              {showExpiredContent ? (
                <div className="aspect-video bg-gray-300 rounded-xl flex items-center justify-center mb-6" role="img" aria-label="Video är inte längre tillgänglig">
                  <div className="text-center text-gray-600">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" aria-hidden="true" />
                    <p className="text-lg font-semibold">🎥 Videon är inte längre tillgänglig.</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.youtube.com/embed/ieq8A_WLACo"
                    title="Exklusiv video för föreläsningsdeltagare"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Countdown Timer */}
            {!showExpiredContent && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 mb-8" role="timer" aria-live="polite">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="w-6 h-6 text-green-600" aria-hidden="true" />
                  <h2 className="text-2xl font-bold text-green-800 font-display">Tid kvar</h2>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2" aria-label={`${timeLeft.days} dagar kvar`}>
                      <span className="text-3xl font-bold">{timeLeft.days}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Dagar</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2" aria-label={`${timeLeft.hours} timmar kvar`}>
                      <span className="text-3xl font-bold">{timeLeft.hours}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Timer</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2" aria-label={`${timeLeft.minutes} minuter kvar`}>
                      <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Minuter</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2" aria-label={`${timeLeft.seconds} sekunder kvar`}>
                      <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Sekunder</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-coral/10 border border-coral/20 rounded-xl p-6" role="note">
              <p className="text-green-800 font-text leading-relaxed">
                Det här är en personlig länk. Sidan är inte publik och kommer att stängas när nedräkningen når noll. 
                Erbjudandet gäller i 48 timmar från att du kom hit – eller tills 15 juni kl. 23:59, vad som än kommer först.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Vad händer om du väntar? - IMPROVED DESIGN */}
        <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50" role="region" aria-labelledby="waiting-heading">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-l-8 border-red-500 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-100 rounded-full -ml-12 -mb-12 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-red-500 text-white rounded-full p-4">
                    <Timer className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h2 id="waiting-heading" className="text-4xl font-black text-red-700 font-display">
                    Vad händer om du väntar?
                  </h2>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="bg-red-50 border-l-4 border-red-300 p-6 rounded-r-xl">
                    <p className="text-red-800 font-text leading-relaxed text-lg">
                      <strong>Sanningen?</strong> Det är lätt att tänka "jag gör det senare" – men just sommaren är den period då små val får störst effekt.
                    </p>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-300 p-6 rounded-r-xl">
                    <p className="text-orange-800 font-text leading-relaxed text-lg">
                      <strong>Varför nu?</strong> Sommarboosten är byggt för att fungera även när rutinerna är lösa – just då det brukar vara som svårast.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl text-center">
                    <Gift className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
                    <p className="font-bold text-xl mb-2">
                      Det här är din chans att ta ett steg
                    </p>
                    <p className="text-lg opacity-90">
                      Ett rimligt, hållbart och effektivt steg – innan sommaren drar igång.
                    </p>
                  </div>
                </div>

                {/* Urgency CTA */}
                <div className="text-center bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl">
                  <p className="text-green-800 font-semibold mb-4">
                    ⏰ Erbjudandet löper ut om {timeLeft.days} dagar, {timeLeft.hours} timmar och {timeLeft.minutes} minuter
                  </p>
                  <Button 
                    className="bg-coral hover:bg-coral/90 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display"
                    onClick={() => window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank')}
                    aria-describedby="offer-expires"
                  >
                    Säkra din plats nu – 50% rabatt
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Button>
                  <p id="offer-expires" className="text-sm text-green-600 mt-2">
                    Använd koden <strong>TACK50</strong> i kassan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Känner du igen dig? */}
        <section className="py-16 px-6" role="region" aria-labelledby="recognition-heading">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h2 id="recognition-heading" className="text-3xl font-bold text-green-800 mb-8 font-display text-center">
                Känner du igen dig i något av detta?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl" aria-hidden="true">😰</div>
                  <p className="text-green-800 font-text">
                    Du är rädd att allt ditt resultat från våren rinner ut i sanden i sommar
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl" aria-hidden="true">🍦</div>
                  <p className="text-green-800 font-text">
                    Du vill njuta av glass, grill och ledighet – men utan att känna att du sviker dig själv
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl" aria-hidden="true">💪</div>
                  <p className="text-green-800 font-text">
                    Du har tränat – men vet att rutinerna lätt försvinner när vardagen pausas
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl" aria-hidden="true">😤</div>
                  <p className="text-green-800 font-text">
                    Du orkar inte fler "kom igång i augusti"-försök
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Charlottes resa */}
        <section className="py-16 px-6" role="region" aria-labelledby="charlotte-heading">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple/10 to-coral/10 rounded-2xl p-8 border border-purple/20">
              <h2 id="charlotte-heading" className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">🙋‍♀️</span>
                Charlottes resa – Bakgrunden till Sommarboosten
              </h2>
              
              <div className="space-y-4 text-green-800 font-text leading-relaxed">
                <p>
                  Jag är inte någon perfekt hälsoguru. Jag är fyrbarnsmamma, mitt i livet, med full kalender och vardagskaos.
                </p>
                
                <p>
                  Under många år körde jag all in på våren – och rasade ur allt på sommaren.
                  Det är där Sommarboosten föddes: ur behovet av något som faktiskt fungerar även under den årstid då vi annars brukar släppa taget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Vad är Sommarboosten? */}
        <section className="py-16 px-6" role="region" aria-labelledby="sommarboosten-heading">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h2 id="sommarboosten-heading" className="text-3xl font-bold text-green-800 mb-6 font-display text-center">
                Din sommar – starkare, enklare och mer balanserad
              </h2>
              
              <p className="text-lg text-green-700 text-center mb-8 font-text">
                Sommarboosten är ett sommarprogram för dig som vill fortsätta ta hand om dig – utan att offra livets goda.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display">💪 60 träningspass</h3>
                    <p className="text-sm text-green-700">styrka, puls, yoga, stretch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display">🍓 50+ somriga recept</h3>
                    <p className="text-sm text-green-700">näringsrikt men utan förbud</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display">🏖️ Träning som fungerar var du än är</h3>
                    <p className="text-sm text-green-700">hemma, i stugan, på stranden</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display">📱 Allt samlat i vår app</h3>
                    <p className="text-sm text-green-700">enkelt och överskådligt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:col-span-2">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-green-800 font-display">🎯 Ett tydligt upplägg</h3>
                    <p className="text-sm text-green-700">med struktur och pepp</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-green-600 font-text">
                  Vill du läsa mer om upplägget? <a href="https://sommarboosten.se" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Läs mer på sommarboosten.se</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Vad Sommarboosten inte är */}
        <section className="py-16 px-6" role="region" aria-labelledby="not-sommarboosten-heading">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-coral/10 to-orange/10 rounded-2xl p-8 border border-coral/20">
              <h2 id="not-sommarboosten-heading" className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">❌</span>
                Det här är inte ett quick fix – men det fungerar
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" aria-hidden="true" />
                  <span className="text-green-800 font-text">Det är inte en diet</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" aria-hidden="true" />
                  <span className="text-green-800 font-text">Du räknar inte kalorier</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" aria-hidden="true" />
                  <span className="text-green-800 font-text">Du behöver inte gymkort</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" aria-hidden="true" />
                  <span className="text-green-800 font-text">Du behöver inte vara "duktig"</span>
                </div>
              </div>
              
              <p className="text-center text-green-800 font-text mt-6 text-lg">
                Du behöver bara vilja ta hand om dig själv
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Buy Button + Discount Code OR Section 8: Expired Content */}
        <section className="py-16 px-6" role="region" aria-labelledby="purchase-heading">
          <div className="max-w-3xl mx-auto">
            {showExpiredContent ? (
              // Section 8: Expired content
              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 text-center">
                <XCircle className="w-16 h-16 text-gray-500 mx-auto mb-6" aria-hidden="true" />
                <h2 id="purchase-heading" className="text-3xl font-bold text-gray-700 mb-6 font-display">
                  ❌ Erbjudandet har löpt ut
                </h2>
                <p className="text-gray-600 font-text mb-4">
                  Den här sidan stängdes 13 juni kl. 23:59.
                </p>
                <p className="text-gray-600 font-text">
                  Du är alltid välkommen att läsa mer på <a href="https://sommarboosten.se" className="text-green-600 underline hover:no-underline" target="_blank" rel="noopener noreferrer">sommarboosten.se</a>
                </p>
              </div>
            ) : (
              // Section 7: Buy button and discount
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-8 border border-green-300 text-center">
                <h2 id="purchase-heading" className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center justify-center gap-3">
                  <span className="text-3xl" aria-hidden="true">🟢</span>
                  Säkra din plats – med 50 % rabatt
                </h2>
                
                <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
                  <p className="text-green-800 font-text leading-relaxed mb-4">
                    Som tack för att du var med på föreläsningen får du en exklusiv rabatt.
                  </p>
                  
                  <div className="bg-coral/10 border border-coral/20 rounded-lg p-4 mb-6">
                    <p className="text-green-800 font-text">
                      Använd koden <span className="font-bold text-coral text-lg">TACK50</span> i kassan så får du 50 % direktavdrag.
                    </p>
                    <p className="text-sm text-green-700 mt-2">
                      <strong>⚠️ Viktigt:</strong> Erbjudandet gäller i max 48 timmar från att du klickar in – eller tills 15 juni kl. 23:59. Detta är din chans att göra en positiv förändring för din hälsa och välmående.
                    </p>
                  </div>
                  
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display"
                    onClick={() => window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank')}
                    aria-describedby="purchase-info"
                  >
                    Gå vidare till köp – använd koden TACK50
                  </Button>
                  
                  <p id="purchase-info" className="text-sm text-green-600 font-text mt-4">
                    Du kommer till vår betalningssida via Stripe. Rabattkoden skriver du in manuellt i kassan: <span className="font-bold">TACK50</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* NEW SECTION: Links and Newsletter Reminder */}
        <section className="py-16 px-6 bg-gradient-to-br from-green-600 to-green-700 text-white" role="region" aria-labelledby="additional-info-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h2 id="additional-info-heading" className="text-2xl font-bold mb-6 font-display">
                Vill du läsa mer först?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 font-display">🏠 Utforska vår hemsida</h3>
                  <p className="text-green-100 mb-4 font-text">
                    Läs mer om våra program, artiklar och Charlotte bakom Sommarboosten.
                  </p>
                  <a 
                    href="/" 
                    className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Besök startsidan
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 font-display">🌟 Sund & Stark</h3>
                  <p className="text-green-100 mb-4 font-text">
                    Upptäck fler program och resurser för en hållbar hälsa.
                  </p>
                  <a 
                    href="https://sundochstark.se" 
                    className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Besök sundochstark.se
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Newsletter Reminder */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 font-display">📧 Håll dig uppdaterad</h3>
                <p className="text-green-100 mb-4 font-text">
                  Prenumerera på vårt nyhetsbrev för tips, inspiration och information om kommande program. 
                  <strong className="text-white"> Kom ihåg att detta specialerbjudande löper ut snart!</strong>
                </p>
                <p className="text-sm text-green-200 font-text">
                  ⏰ Erbjudandet med 50% rabatt är endast tillgängligt i begränsad tid. Detta är din chans att investera i din hälsa och välmående inför sommaren.
                </p>
              </div>

              {/* Final reminder */}
              <div className="mt-8 p-6 bg-coral/20 border border-coral/30 rounded-xl">
                <p className="text-white font-semibold text-lg mb-2">
                  🎯 Varför vänta på en bättre tid?
                </p>
                <p className="text-green-100 font-text">
                  Sommarboosten kommer att ge dig verktyg, motivation och gemenskap för en fantastisk sommar. 
                  Ta steget nu medan erbjudandet gäller – din framtida jag kommer att tacka dig!
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
