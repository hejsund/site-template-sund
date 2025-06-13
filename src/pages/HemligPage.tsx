
import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Play } from 'lucide-react';
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
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
              Tack för att du var med – det här är bara för dig som sett föreläsningen eller visat intresse.
            </h1>
            
            {/* Video Section */}
            <div className="mb-12">
              {showExpiredContent ? (
                <div className="aspect-video bg-gray-300 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center text-gray-600">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200 mb-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Clock className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-green-800 font-display">Tid kvar</h3>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2">
                      <span className="text-3xl font-bold">{timeLeft.days}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Dagar</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2">
                      <span className="text-3xl font-bold">{timeLeft.hours}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Timer</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2">
                      <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Minuter</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600 text-white rounded-xl p-4 mb-2">
                      <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                    </div>
                    <span className="text-sm text-green-700 font-semibold">Sekunder</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-coral/10 border border-coral/20 rounded-xl p-6">
              <p className="text-green-800 font-text leading-relaxed">
                Det här är en personlig länk. Sidan är inte publik och kommer att stängas när nedräkningen når noll. 
                Erbjudandet gäller i 48 timmar från att du kom hit – eller tills 15 juni kl. 23:59, vad som än kommer först.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Känner du igen dig? */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h2 className="text-3xl font-bold text-green-800 mb-8 font-display text-center">
                Känner du igen dig i något av detta?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl">😰</div>
                  <p className="text-green-800 font-text">
                    Du är rädd att allt ditt resultat från våren rinner ut i sanden i sommar
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl">🍦</div>
                  <p className="text-green-800 font-text">
                    Du vill njuta av glass, grill och ledighet – men utan att känna att du sviker dig själv
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl">💪</div>
                  <p className="text-green-800 font-text">
                    Du har tränat – men vet att rutinerna lätt försvinner när vardagen pausas
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <div className="text-coral text-2xl">😤</div>
                  <p className="text-green-800 font-text">
                    Du orkar inte fler "kom igång i augusti"-försök
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Charlottes resa */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple/10 to-coral/10 rounded-2xl p-8 border border-purple/20">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl">🙋‍♀️</span>
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

        {/* Section 4: Vad är Sommarboosten? */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display text-center">
                Din sommar – starkare, enklare och mer balanserad
              </h2>
              
              <p className="text-lg text-green-700 text-center mb-8 font-text">
                Sommarboosten är ett sommarprogram för dig som vill fortsätta ta hand om dig – utan att offra livets goda.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 font-display">💪 60 träningspass</h4>
                    <p className="text-sm text-green-700">styrka, puls, yoga, stretch</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 font-display">🍓 50+ somriga recept</h4>
                    <p className="text-sm text-green-700">näringsrikt men utan förbud</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 font-display">🏖️ Träning som fungerar var du än är</h4>
                    <p className="text-sm text-green-700">hemma, i stugan, på stranden</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 font-display">📱 Allt samlat i vår app</h4>
                    <p className="text-sm text-green-700">enkelt och överskådligt</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:col-span-2">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 font-display">🎯 Ett tydligt upplägg</h4>
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

        {/* Section 5: Vad Sommarboosten inte är */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-coral/10 to-orange/10 rounded-2xl p-8 border border-coral/20">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl">❌</span>
                Det här är inte ett quick fix – men det fungerar
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" />
                  <span className="text-green-800 font-text">Det är inte en diet</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" />
                  <span className="text-green-800 font-text">Du räknar inte kalorier</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" />
                  <span className="text-green-800 font-text">Du behöver inte gymkort</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-coral" />
                  <span className="text-green-800 font-text">Du behöver inte vara "duktig"</span>
                </div>
              </div>
              
              <p className="text-center text-green-800 font-text mt-6 text-lg">
                Du behöver bara vilja ta hand om dig själv
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Vad händer om du väntar? */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
              <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
                <span className="text-3xl">⏳</span>
                Vad händer om du väntar?
              </h2>
              
              <div className="space-y-4 text-green-800 font-text leading-relaxed">
                <p>
                  Det är lätt att tänka "jag gör det senare" – men just sommaren är den period då små val får störst effekt.
                </p>
                
                <p>
                  Sommarboosten är byggt för att fungera även när rutinerna är lösa – just då det brukar vara som svårast.
                </p>
                
                <p className="font-semibold text-lg">
                  Det här är en chans att ta ett steg – ett rimligt, hållbart och effektivt steg – innan sommaren drar igång.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Buy Button + Discount Code OR Section 8: Expired Content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            {showExpiredContent ? (
              // Section 8: Expired content
              <div className="bg-gray-100 rounded-2xl p-8 border border-gray-300 text-center">
                <XCircle className="w-16 h-16 text-gray-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-700 mb-6 font-display">
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
                <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center justify-center gap-3">
                  <span className="text-3xl">🟢</span>
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
                      Erbjudandet gäller i max 48 timmar från att du klickar in – eller tills 15 juni kl. 23:59.
                    </p>
                  </div>
                  
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display"
                    onClick={() => window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank')}
                  >
                    Gå vidare till köp – använd koden TACK50
                  </Button>
                  
                  <p className="text-sm text-green-600 font-text mt-4">
                    Du kommer till vår betalningssida via Stripe. Rabattkoden skriver du in manuellt i kassan: <span className="font-bold">TACK50</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default HemligPage;
