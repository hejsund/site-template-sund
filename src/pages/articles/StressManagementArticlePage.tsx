import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, ArrowLeft, Brain, Scale, Smile } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Footer } from '@/components/Footer';
import { CurvedDivider } from '@/components/CurvedDivider';

const StressManagementArticlePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      {/* Header with improved spacing and typography */}
      <header className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-2 -m-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold text-base">Stresshantering</span>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">10 min läsning</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
            Stresshantering i sommartempo
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl">
            Lär dig hantera sommarens stress och krav på avkoppling. Balansera aktivitet med vila för en sommarsemester som verkligen laddar batterierna.
          </p>
        </div>
      </header>

      {/* Hero Image with improved accessibility */}
      <div className="px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/beb03c50-e7f5-4672-9b76-966508f8fcbf.png" 
              alt="Avslappnad stund med vin och god mat - illustration av balanserat sommarliv"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content with improved typography and spacing */}
      <article className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-white/20">
            
            <div className="prose prose-lg prose-green max-w-none">
              <p className="text-xl text-green-700 font-text font-medium mb-8 italic border-l-4 border-indigo-400 pl-6 bg-indigo-50 p-6 rounded-lg">
                "Men Charlotte, jag blir ju mer stressad av att träna på semestern! Jag ska väl slappa av?"
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">
                Den kommentaren får jag varje år när sommaren närmar sig. Och jag förstår den så väl.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                Vi har lärt oss att sommaren ska vara antingen total vila eller total aktivitet. Men som fyrbarnsmamma har jag lärt mig att verkligheten ser annorlunda ut.
              </p>

              <div className="bg-indigo-50 border-2 border-indigo-200 p-8 my-12 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Scale className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-indigo-800 font-display m-0">Det handlar om balans</h3>
                </div>
                <p className="text-lg text-indigo-700 m-0 leading-relaxed">
                  Det handlar inte om att välja mellan vila och aktivitet. Det handlar om att hitta rätt balans för just DIG.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Varför sommaren kan vara stressande</h2>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-10 font-display">Förväntningar på "perfekt" semester</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Media och sociala medier fylls av bilder på perfekta semestrar. Det skapar press på att din semester också ska vara magisk varje sekund.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">FOMO (Fear of Missing Out)</h3>
              <p className="text-lg mb-6 leading-relaxed">
                "Vi borde åka dit," "vi borde göra det," "alla andra verkar ha mer kul." Sommaren kan bli en enda lång lista med saker du "borde" göra.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">Oregelbundna rutiner</h3>
              <p className="text-lg mb-8 leading-relaxed">
                För många av oss är rutiner trygghet. När allting ändras kan hjärnan börja stressa.
              </p>

              <div className="bg-green-50 border-2 border-green-200 p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-green-800 mb-6 flex items-center gap-3 text-2xl font-bold font-display">
                  <Brain className="w-8 h-8 flex-shrink-0" />
                  Forskningen om vila vs aktivitet:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <h4 className="font-bold text-green-700 mb-3 text-lg">Passiv vila (bara ligga still)</h4>
                    <p className="text-green-700 leading-relaxed">Hjälper kortsiktigt, men efter några dagar börjar kroppen må sämre.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <h4 className="font-bold text-green-700 mb-3 text-lg">Aktiv vila (lätt rörelse)</h4>
                    <p className="text-green-700 leading-relaxed">15-30 minuter/dag håller kroppens system igång utan stress.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Sommarboosten-metoden för stresshantering</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-white border-2 border-indigo-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-indigo-800 mb-4 text-xl font-display">70% vila, 30% aktivitet</h3>
                  <p className="text-green-700 leading-relaxed">De flesta dagar ska vara mestadels vila och spontanitet, med lite strukturerad rörelse.</p>
                </div>

                <div className="bg-white border-2 border-indigo-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-indigo-800 mb-4 text-xl font-display">En rutin per dag</h3>
                  <p className="text-green-700 leading-relaxed">Välj EN sak som du gör varje dag: morgonpromenad, kvällsyoga, vattenintag.</p>
                </div>

                <div className="bg-white border-2 border-indigo-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-indigo-800 mb-4 text-xl font-display">Flexibla pass-längder</h3>
                  <p className="text-green-700 leading-relaxed">5 minuter vissa dagar, 45 andra. Anpassa efter energi och humör.</p>
                </div>

                <div className="bg-white border-2 border-indigo-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="font-bold text-indigo-800 mb-4 text-xl font-display">Aktivitet som ger energi</h3>
                  <p className="text-green-700 leading-relaxed">Om träningen känns som en börda gör du fel typ eller för mycket.</p>
                </div>
              </div>

              {/* Keep existing content sections with improved spacing and typography */}
              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Aktiviteter som minskar stress</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Naturpromenader</h3>
                  <p className="text-lg leading-relaxed">Forskning visar att 15 minuter i naturen sänker kortisol (stresshormon) drastiskt.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Vattenaktiviteter</h3>
                  <p className="text-lg leading-relaxed">Simning, paddling, till och med att bara sitta vid vatten har lugnande effekt på nervsystemet.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Yoga/stretching</h3>
                  <p className="text-lg leading-relaxed">Aktiv avslappning som sänker puls och blodtryck samtidigt som den håller kroppen mjuk.</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Dans</h3>
                  <p className="text-lg leading-relaxed">Frigjör endorfiner och låter dig uttrycka känslor genom kroppen.</p>
                </div>
              </div>

              {/* Warning and info boxes with improved accessibility */}
              <div className="bg-yellow-50 border-2 border-yellow-200 p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-yellow-800 mb-6 flex items-center gap-3 text-2xl font-bold font-display">
                  <Smile className="w-8 h-8 flex-shrink-0" />
                  Tecken på att du behöver mer vila:
                </h3>
                <ul className="text-yellow-700 space-y-3 leading-relaxed text-lg list-disc list-inside">
                  <li>Du känner dig irriterad på familjen</li>
                  <li>Du har svårt att njuta av roliga aktiviteter</li>
                  <li>Du sover dåligt trots att du är "trött"</li>
                  <li>Du längtar efter att komma hem redan första veckan</li>
                </ul>
                <p className="text-yellow-700 mt-6 font-semibold text-lg bg-yellow-100 p-4 rounded-lg">
                  När du känner dessa tecken: Minska aktiviteten, öka vilan.
                </p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-blue-800 mb-6 flex items-center gap-3 text-2xl font-bold font-display">
                  <Zap className="w-8 h-8 flex-shrink-0" />
                  Tecken på att du behöver mer aktivitet:
                </h3>
                <ul className="text-blue-700 space-y-3 leading-relaxed text-lg list-disc list-inside">
                  <li>Du känner dig rastlös trots att du "vilar"</li>
                  <li>Energin är lägre än vanligt</li>
                  <li>Du mår sämre mentalt trots "avkoppling"</li>
                  <li>Du sover sämre än hemma</li>
                  <li>Du känner dig stel och opig</li>
                </ul>
                <p className="text-blue-700 mt-6 font-semibold text-lg bg-blue-100 p-4 rounded-lg">
                  När du känner dessa tecken: Lägg till lite mer rörelse.
                </p>
              </div>

              {/* Rest of the content with improved spacing and typography */}
              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Praktiska stresshanteringsverktyg</h2>

              <div className="space-y-10">
                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Morgonrutinen (5 minuter):</h3>
                  <ul className="text-lg leading-relaxed space-y-2 list-disc list-inside text-green-700">
                    <li>10 djupa andetag när du vaknar</li>
                    <li>Känn i kroppen: vad behöver jag idag?</li>
                    <li>Bestäm aktivitetsnivå för dagen</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Middagsrutinen (10 minuter):</h3>
                  <ul className="text-lg leading-relaxed space-y-2 list-disc list-inside text-green-700">
                    <li>Kort promenad eller stretching</li>
                    <li>Reflektion: vad var bra med dagen?</li>
                    <li>Förberedelse för kvällen: aktivitet eller vila?</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-green-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-green-700 mb-4 font-display">Kvällsrutinen (5 minuter):</h3>
                  <ul className="text-lg leading-relaxed space-y-2 list-disc list-inside text-green-700">
                    <li>Andningsövningar</li>
                    <li>Reflektion över dagen</li>
                    <li>Planering för imorgon (utan press)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Att komma hem balanserad</h2>
              
              <p className="text-lg leading-relaxed mb-6">Det ultimata målet med stresshantering på semestern är att komma hem och känna:</p>

              <ul className="text-lg leading-relaxed space-y-3 list-disc list-inside text-green-700 bg-green-50 p-8 rounded-xl border-2 border-green-200">
                <li>Du fick verklig vila och återhämtning</li>
                <li>Du behöll eller utvecklade hälsosamma vanor</li>
                <li>Du skapade positiva minnen med familjen</li>
                <li>Du har energi för att ta itu med vardagen igen</li>
                <li>Du längtar efter nästa semester utan att vara utmattad</li>
              </ul>

              <p className="font-semibold text-indigo-600 text-xl mt-8 bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200">
                Det är skillnaden mellan semester som flyr och semester som faktiskt laddar batterierna.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup with improved accessibility */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-indigo-200 p-8 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 font-display text-indigo-800 text-center">
              Få tips för stressfri sommarbalans! 🧘‍♀️✨
            </h3>
            <p className="text-base sm:text-lg mb-8 text-green-700 font-text text-center leading-relaxed max-w-2xl mx-auto">
              Lär dig hantera sommarens utmaningar med verktyg som verkligen fungerar.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base rounded-xl border-2 border-indigo-300 bg-white text-green-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                aria-label="E-postadress för nyhetsbrev"
              />
              <Button 
                type="submit" 
                className="bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-700 h-12 w-full sm:w-auto text-base px-8 rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
            Redo för en semester som verkligen laddar batterierna? 🔋
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quiz">
              <Button className="bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:bg-indigo-600 focus:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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

export default StressManagementArticlePage;
