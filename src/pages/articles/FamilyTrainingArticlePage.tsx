
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, ArrowLeft, Heart, Trophy, Star, Play } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Footer } from '@/components/Footer';
import { CurvedDivider } from '@/components/CurvedDivider';

const FamilyTrainingArticlePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header with improved spacing and typography */}
      <header className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium mb-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-lg p-2 -m-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Users className="w-6 h-6 text-green-600" />
            <span className="text-green-600 font-semibold text-base">Familjeträning</span>
            <span className="text-coral text-sm font-medium bg-coral-light px-3 py-1 rounded-full">8 min läsning</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
            Familjeträning på sommaren
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl">
            Skapa roliga aktiviteter som får hela familjen att röra sig tillsammans. Upptäck hur träning kan bli kvalitetstid som alla faktiskt vill vara med på.
          </p>
        </div>
      </header>

      {/* Hero Image with improved accessibility */}
      <div className="px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png" 
              alt="Familj som tränar tillsammans utomhus - föräldrar och barn som har roligt med fysisk aktivitet"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </div>
        </div>
      </div>

      {/* Article Content with improved typography and spacing */}
      <article className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-white/20">
            
            <div className="prose prose-lg prose-green max-w-none">
              <p className="text-xl text-green-700 font-text font-medium mb-8 italic border-l-4 border-green-400 pl-6 bg-green-50 p-6 rounded-lg">
                "Charlotte, barnen vill bara sitta med sina skärmar hela sommaren. Hur får jag dem att röra sig utan att det blir krig?"
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">
                Jag känner igen det där så väl! Som mamma till fyra barn har jag lärt mig att hemligheten inte är att tvinga - utan att göra rörelse så roligt att de faktiskt VILL vara med.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                Här är strategierna som faktiskt fungerar, även med de mest motsträviga tonåringarna.
              </p>

              <div className="bg-green-50 border-2 border-green-200 p-8 my-12 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-green-800 font-display m-0">Första regeln</h3>
                </div>
                <p className="text-lg text-green-700 m-0 leading-relaxed">
                  Familjeträning ska kännas som lek, inte som träning. I sekunden det känns som en plikt har du förlorat dem.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Aktiviteter som funkar för alla åldrar</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-white border-2 border-coral p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Play className="w-6 h-6 text-coral flex-shrink-0" />
                    <h3 className="text-xl font-bold text-coral font-display">Dansfester</h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    Sätt på musik och dansa fritt i 10-15 minuter. Även de coolaste tonåringarna brukar haka på efter några låtar.
                  </p>
                </div>

                <div className="bg-white border-2 border-purple p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-6 h-6 text-purple flex-shrink-0" />
                    <h3 className="text-xl font-bold text-purple font-display">Hinderbana</h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    Bygg en enkel hinderbana i trädgården med kuddar, rep och vad ni har hemma. Tävla på tid!
                  </p>
                </div>

                <div className="bg-white border-2 border-green-500 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-green-600 font-display">Sportsliga lekar</h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    Fotboll, frisbee, badminton - klassikerna funkar fortfarande! Byt lag ofta så alla får vinna.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-500 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <h3 className="text-xl font-bold text-blue-600 font-display">Utforskande</h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">
                    Skattjakter, naturvandringar, geocaching - gör rörelse till ett äventyr istället för träning.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Strategier för olika åldrar</h2>

              <div className="space-y-10">
                <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-yellow-700 mb-4 font-display">Småbarn (3-7 år)</h3>
                  <ul className="text-lg leading-relaxed space-y-3 list-disc list-inside text-green-700">
                    <li>Gör allt till en lek - "vi är dinosaurier som springer från vulkanen!"</li>
                    <li>Korta aktiviteter (5-10 minuter) med mycket variation</li>
                    <li>Låt dem bestämma - "vill vi hoppa som grodor eller springa som hästar?"</li>
                    <li>Mycket beröm och uppmuntran</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-orange-700 mb-4 font-display">Mellanstadiet (8-12 år)</h3>
                  <ul className="text-lg leading-relaxed space-y-3 list-disc list-inside text-green-700">
                    <li>Introducera lätt tävling - vem kan göra flest armhävningar?</li>
                    <li>Låt dem välja musik till aktiviteterna</li>
                    <li>Tekniska utmaningar - lär er jonglera tillsammans</li>
                    <li>Belöningssystem kan fungera i denna ålder</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-purple-700 mb-4 font-display">Tonåringar (13+ år)</h3>
                  <ul className="text-lg leading-relaxed space-y-3 list-disc list-inside text-green-700">
                    <li>Låt dem ta ansvar - de planerar nästa aktivitet</li>
                    <li>Fokusera på social aspekten - bjud in kompisar</li>
                    <li>Ge valmöjligheter - "vill vi gå, cykla eller spela något?"</li>
                    <li>Respektera om de inte är på humör - tryck inte</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Vanliga misstag att undvika</h2>

              <div className="bg-red-50 border-2 border-red-200 p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-red-800 mb-6 text-2xl font-bold font-display">⚠️ Detta döder motivationen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                    <h4 className="font-bold text-red-700 mb-3 text-lg">Att vara för seriös</h4>
                    <p className="text-red-700 leading-relaxed">"Nu ska vi träna!" vs "Ska vi ha en dansfest?"</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                    <h4 className="font-bold text-red-700 mb-3 text-lg">Att tvinga deltagande</h4>
                    <p className="text-red-700 leading-relaxed">Bättre att någon tittar på än att alla blir sur.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                    <h4 className="font-bold text-red-700 mb-3 text-lg">För långa pass</h4>
                    <p className="text-red-700 leading-relaxed">15-20 minuter är max för familjeaktiviteter.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                    <h4 className="font-bold text-red-700 mb-3 text-lg">Samma aktivitet varje gång</h4>
                    <p className="text-red-700 leading-relaxed">Variation är nyckeln till engagemang.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Skapa nya traditioner</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Det bästa med familjeträning är att ni skapar minnen tillsammans. Här är några traditioner som många familjer älskar:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-green-700 mb-4 font-display">Söndagsäventyr</h3>
                  <p className="text-green-700 leading-relaxed">
                    Varje söndag bestämmer en familjemedlem vad ni ska göra. Kan vara allt från promenad till fotbollsmatch.
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-green-700 mb-4 font-display">Sommarmålet</h3>
                  <p className="text-green-700 leading-relaxed">
                    Sätt ett gemensamt mål - att gå till ett visst ställe, lära sig en ny sport, eller bara röra sig varje dag.
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-green-700 mb-4 font-display">Aktivitetsroulette</h3>
                  <p className="text-green-700 leading-relaxed">
                    Skriv olika aktiviteter på lappar och dra slumpmässigt. Gör det till en överraskning!
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-green-700 mb-4 font-display">Dokumentera resan</h3>
                  <p className="text-green-700 leading-relaxed">
                    Ta bilder och videor på era aktiviteter. Gör en sommarfilm tillsammans i slutet!
                  </p>
                </div>
              </div>

              <div className="bg-coral-light border-2 border-coral p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-coral mb-6 flex items-center gap-3 text-2xl font-bold font-display">
                  <Heart className="w-8 h-8 flex-shrink-0" />
                  Kom ihåg det viktigaste:
                </h3>
                <p className="text-lg leading-relaxed text-green-800 mb-4">
                  Det handlar inte om att träna perfekt eller att alla ska prestera. Det handlar om att vara tillsammans, skratta tillsammans och skapa minnen som barnen kommer bära med sig hela livet.
                </p>
                <p className="font-bold text-coral text-xl">
                  En familj som rör sig tillsammans, mår bra tillsammans. 💚
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup with improved accessibility */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-green-200 p-8 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 font-display text-green-800 text-center">
              Fler tips för familjeträning? 👨‍👩‍👧‍👦✨
            </h3>
            <p className="text-base sm:text-lg mb-8 text-green-700 font-text text-center leading-relaxed max-w-2xl mx-auto">
              Få våra bästa idéer för aktiviteter som hela familjen älskar.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base rounded-xl border-2 border-green-300 bg-white text-green-800 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
                aria-label="E-postadress för familjeträning tips"
              />
              <Button 
                type="submit" 
                className="bg-green-600 text-white hover:bg-green-700 focus:bg-green-700 h-12 w-full sm:w-auto text-base px-8 rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Skicka tips! 🌟
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA with improved spacing */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-green-800 font-display">
            Redo att skapa roliga familjetraditioner? 🎉
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quiz">
              <Button className="bg-green-600 hover:bg-green-700 focus:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Curved divider before footer */}
      <CurvedDivider color="text-primary" />

      <Footer />
    </div>
  );
};

export default FamilyTrainingArticlePage;
