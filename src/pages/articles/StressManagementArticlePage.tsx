import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, ArrowLeft, Brain, Scale, Smile } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

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
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold">Stresshantering</span>
            <span className="text-green-600 text-sm">10 min läsning</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            Stresshantering i sommartempo
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            Lär dig hantera sommarens stress och krav på avkoppling. Balansera aktivitet med vila för en sommarsemester som verkligen laddar batterierna.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/beb03c50-e7f5-4672-9b76-966508f8fcbf.png" 
              alt="Avslappnad stund med vin och god mat"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="px-3 sm:px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-green-700 font-text">
                "Men Charlotte, jag blir ju mer stressad av att träna på semestern! Jag ska väl slappa av?"
              </p>
              
              <p>
                Den kommentaren får jag varje år när sommaren närmar sig. Och jag förstår den så väl.
              </p>
              
              <p>
                Vi har lärt oss att sommaren ska vara antingen total vila eller total aktivitet. Men som fyrbarnsmamma har jag lärt mig att verkligheten ser annorlunda ut.
              </p>

              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-6 my-8 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-800">Det handlar om balans</h3>
                </div>
                <p className="text-indigo-700 mb-0">
                  Det handlar inte om att välja mellan vila och aktivitet. Det handlar om att hitta rätt balans för just DIG.
                </p>
              </div>

              <h2>Varför sommaren kan vara stressande</h2>

              <h3>Förväntningar på "perfekt" semester</h3>
              <p>
                Media och sociala medier fylls av bilder på perfekta semestrar. Det skapar press på att din semester också ska vara magisk varje sekund.
              </p>

              <h3>FOMO (Fear of Missing Out)</h3>
              <p>
                "Vi borde åka dit," "vi borde göra det," "alla andra verkar ha mer kul." Sommaren kan bli en enda lång lista med saker du "borde" göra.
              </p>

              <h3>Oregelbundna rutiner</h3>
              <p>
                För många av oss är rutiner trygghet. När allting ändras kan hjärnan börja stressa.
              </p>

              <div className="bg-green-50 p-6 rounded-xl my-8">
                <h3 className="text-green-800 mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6" />
                  Forskningen om vila vs aktivitet:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Passiv vila (bara ligga still)</h4>
                    <p className="text-green-700 text-sm">Hjälper kortsiktigt, men efter några dagar börjar kroppen må sämre.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Aktiv vila (lätt rörelse)</h4>
                    <p className="text-green-700 text-sm">15-30 minuter/dag håller kroppens system igång utan stress.</p>
                  </div>
                </div>
              </div>

              <h2>Sommarboosten-metoden för stresshantering</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-indigo-800 mb-3">70% vila, 30% aktivitet</h3>
                  <p className="text-green-700 text-sm">De flesta dagar ska vara mestadels vila och spontanitet, med lite strukturerad rörelse.</p>
                </div>

                <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-indigo-800 mb-3">En rutin per dag</h3>
                  <p className="text-green-700 text-sm">Välj EN sak som du gör varje dag: morgonpromenad, kvällsyoga, vattenintag.</p>
                </div>

                <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-indigo-800 mb-3">Flexibla pass-längder</h3>
                  <p className="text-green-700 text-sm">5 minuter vissa dagar, 45 andra. Anpassa efter energi och humör.</p>
                </div>

                <div className="bg-white border border-indigo-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-indigo-800 mb-3">Aktivitet som ger energi</h3>
                  <p className="text-green-700 text-sm">Om träningen känns som en börda gör du fel typ eller för mycket.</p>
                </div>
              </div>

              <h2>Aktiviteter som minskar stress</h2>

              <h3>Naturpromenader</h3>
              <p>Forskning visar att 15 minuter i naturen sänker kortisol (stresshormon) drastiskt.</p>

              <h3>Vattenaktiviteter</h3>
              <p>Simning, paddling, till och med att bara sitta vid vatten har lugnande effekt på nervsystemet.</p>

              <h3>Yoga/stretching</h3>
              <p>Aktiv avslappning som sänker puls och blodtryck samtidigt som den håller kroppen mjuk.</p>

              <h3>Dans</h3>
              <p>Frigjör endorfiner och låter dig uttrycka känslor genom kroppen.</p>

              <div className="bg-yellow-50 p-6 rounded-xl my-8">
                <h3 className="text-yellow-800 mb-4 flex items-center gap-2">
                  <Smile className="w-6 h-6" />
                  Tecken på att du behöver mer vila:
                </h3>
                <ul className="text-yellow-700 space-y-2 text-sm">
                  <li>Du känner dig irriterad på familjen</li>
                  <li>Du har svårt att njuta av roliga aktiviteter</li>
                  <li>Du sover dåligt trots att du är "trött"</li>
                  <li>Du längtar efter att komma hem redan första veckan</li>
                </ul>
                <p className="text-yellow-700 mt-3 font-semibold text-sm">
                  När du känner dessa tecken: Minska aktiviteten, öka vilan.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-blue-800 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Tecken på att du behöver mer aktivitet:
                </h3>
                <ul className="text-blue-700 space-y-2 text-sm">
                  <li>Du känner dig rastlös trots att du "vilar"</li>
                  <li>Energin är lägre än vanligt</li>
                  <li>Du mår sämre mentalt trots "avkoppling"</li>
                  <li>Du sover sämre än hemma</li>
                  <li>Du känner dig stel och opig</li>
                </ul>
                <p className="text-blue-700 mt-3 font-semibold text-sm">
                  När du känner dessa tecken: Lägg till lite mer rörelse.
                </p>
              </div>

              <h2>Praktiska stresshanteringsverktyg</h2>

              <h3>Morgonrutinen (5 minuter):</h3>
              <ul>
                <li>10 djupa andetag när du vaknar</li>
                <li>Känn i kroppen: vad behöver jag idag?</li>
                <li>Bestäm aktivitetsnivå för dagen</li>
              </ul>

              <h3>Middagsrutinen (10 minuter):</h3>
              <ul>
                <li>Kort promenad eller stretching</li>
                <li>Reflektion: vad var bra med dagen?</li>
                <li>Förberedelse för kvällen: aktivitet eller vila?</li>
              </ul>

              <h3>Kvällsrutinen (5 minuter):</h3>
              <ul>
                <li>Andningsövningar</li>
                <li>Reflektion över dagen</li>
                <li>Planering för imorgon (utan press)</li>
              </ul>

              <h2>Att komma hem balanserad</h2>
              
              <p>Det ultimata målet med stresshantering på semestern är att komma hem och känna:</p>

              <ul>
                <li>Du fick verklig vila och återhämtning</li>
                <li>Du behöll eller utvecklade hälsosamma vanor</li>
                <li>Du skapade positiva minnen med familjen</li>
                <li>Du har energi för att ta itu med vardagen igen</li>
                <li>Du längtar efter nästa semester utan att vara utmattad</li>
              </ul>

              <p className="font-semibold text-indigo-600">
                Det är skillnaden mellan semester som flyr och semester som faktiskt laddar batterierna.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-indigo-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-indigo-800 text-center">
              Få tips för stressfri sommarbalans! 🧘‍♀️✨
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Lär dig hantera sommarens utmaningar med verktyg som verkligen fungerar.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-indigo-300 bg-white text-green-800"
                required
              />
              <Button type="submit" className="bg-indigo-600 text-white hover:bg-indigo-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                Skicka tips! 🌟
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Redo för en semester som verkligen laddar batterierna? 🔋
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StressManagementArticlePage;
