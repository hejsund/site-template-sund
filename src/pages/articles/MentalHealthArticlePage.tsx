
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, ArrowLeft, Heart, Sun, Target } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Footer } from '@/components/Footer';
import { CurvedDivider } from '@/components/CurvedDivider';

const MentalHealthArticlePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header with improved spacing and typography */}
      <header className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2 -m-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold text-base">Mental hälsa</span>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">9 min läsning</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
            Sommarens mentala hälsa
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl">
            Upptäck kopplingen mellan rörelse och mental hälsa på sommaren. Lär dig hur enkla träningsvanor kan förbättra ditt mående och ge dig mer energi.
          </p>
        </div>
      </header>

      {/* Hero Image with improved accessibility */}
      <div className="px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/393c1d8b-c123-455f-ae12-0005270f9bb2.png" 
              alt="Person tränar utomhus i naturen - illustration av mental hälsa och sommarträning"
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
            
            <div className="prose prose-lg prose-blue max-w-none">
              <p className="text-xl text-green-700 font-text font-medium mb-8 italic border-l-4 border-blue-400 pl-6 bg-blue-50 p-6 rounded-lg">
                "Charlotte, jag känner mig konstig i sommar. Alla andra verkar så glada och avslappnade, men jag känner mig bara rastlös och stressad. Är det bara jag?"
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">Nej, det är absolut inte bara du.</p>
              
              <p className="text-lg mb-8 leading-relaxed">
                Trots att vi förväntar oss att sommaren ska vara den bästa tiden på året så kämpar många faktiskt mer med sin mentala hälsa just då. Och det finns helt logiska förslag till varför.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 p-8 my-12 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-blue-800 font-display m-0">Viktigt att komma ihåg</h3>
                </div>
                <p className="text-lg text-blue-700 m-0 leading-relaxed">
                  Din mentala hälsa och din fysiska aktivitet är oskiljaktiga. Det är därför vi skapade Sommarboosten - inte bara som ett träningsprogram, utan som en hållbar strategi för att må bra hela sommaren.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display flex items-center gap-4">
                <Sun className="w-8 h-8 text-orange-500 flex-shrink-0" />
                Varför sommaren kan vara tuff mentalt
              </h2>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-10 font-display">Förväntningarna är höga</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Alla ska ha "bästa sommaren någonsin." Instagram fylls av perfekta semesterbilder. Alla andra verkar ha mer kul än du. Pressen att njuta kan faktiskt bli så stor att den förstör njutningen.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">Rutinerna försvinner</h3>
              <p className="text-lg mb-6 leading-relaxed">
                För många av oss är struktur trygghet. När barnens schema ändras, när jobbet blir mer oregelbundet, när vanliga aktiviteter pausas - då kan hjärnan börja stressa.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">Kroppen rör sig mindre</h3>
              <p className="text-lg mb-8 leading-relaxed">
                Paradoxalt nog rör vi oss ofta MINDRE på sommaren än vintern. Varmare väder gör oss tröga. Vi "vilar" mer. Men kroppen behöver rörelse för att må bra.
              </p>

              <div className="bg-green-50 border-2 border-green-200 p-8 my-12 rounded-xl shadow-sm">
                <h3 className="text-green-800 mb-6 flex items-center gap-3 text-2xl font-bold font-display">
                  <Target className="w-8 h-8 flex-shrink-0" />
                  Forskningen om rörelse och mental hälsa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <p className="text-green-700 leading-relaxed"><strong className="text-green-800">30 minuter rörelse per dag</strong> kan vara lika effektivt som antidepressiva mediciner för mild till måttlig depression</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <p className="text-green-700 leading-relaxed"><strong className="text-green-800">Redan 10 minuter promenad</strong> kan förbättra ditt humör i upp till 12 timmar</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <p className="text-green-700 leading-relaxed"><strong className="text-green-800">Regelbunden träning</strong> minskar stresshormoner och ökar "lyckohormonerna"</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
                    <p className="text-green-700 leading-relaxed"><strong className="text-green-800">Utomhusaktivitet</strong> ger bonus-effekt genom ljus, frisk luft och naturens lugnande påverkan</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Rörelse som mental medicin</h2>
              
              <p className="text-lg leading-relaxed mb-8">
                När vi utvecklade Sommarboosten förstod vi att mental hälsa var lika viktigt som fysisk. Vi lärde oss att:
              </p>

              <div className="space-y-8">
                <div className="bg-white border-2 border-blue-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 font-display">Rörelse ger struktur</h3>
                  <p className="text-lg leading-relaxed text-green-700">
                    Även när allt annat är kaos så kan 15 minuter rörelse på morgonen skapa den struktur hjärnan behöver för att känna sig trygg.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 font-display">Träning ger kontroll</h3>
                  <p className="text-lg leading-relaxed text-green-700">
                    I en tid då mycket känns utom din kontroll så är träning något som bara DU bestämmer över.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold text-blue-700 mb-4 font-display">Aktivitet skapar energi</h3>
                  <p className="text-lg leading-relaxed text-green-700">
                    Det låter paradoxalt men det är sant: Ju mer du rör dig, desto mer energi får du. Stillasittande skapar trötthet.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Att våga prioritera dig själv</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Många känner: "Men jag känner mig så egoistisk..." eller "Andra behöver mig mer..." eller "Jag hinner inte..."
              </p>
              
              <p className="font-bold text-blue-600 text-xl mb-6 bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                Men här är sanningen: Du kan inte ge från en tom kopp.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Att prioritera 15-30 minuter rörelse per dag är inte egoistiskt. Det är nödvändigt. För dig, för din familj, för alla som älskar dig.
              </p>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Starta enkelt idag</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Du behöver inte vänta på måndag, nästa vecka eller efter semestern. Du kan börja idag:
              </p>
              
              <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-xl shadow-sm">
                <p className="font-bold text-orange-700 text-xl mb-4">
                  Ta en 10-minuters promenad efter lunch. Bara det. Inget mer.
                </p>
                <p className="text-lg leading-relaxed text-orange-700">
                  Märk hur du mår efteråt. Märk hur resten av dagen påverkas. Efter en vecka kommer du märka skillnad. Efter en månad kommer familjen märka skillnad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup with improved accessibility */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-200 p-8 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 font-display text-blue-800 text-center">
              Vill du ha fler tips om mental hälsa och träning? 🧠✨
            </h3>
            <p className="text-base sm:text-lg mb-8 text-green-700 font-text text-center leading-relaxed max-w-2xl mx-auto">
              Få våra bästa råd direkt i din inkorg - ingen skräppost, bara värdefull kunskap.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base rounded-xl border-2 border-blue-300 bg-white text-green-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                aria-label="E-postadress för nyhetsbrev"
              />
              <Button 
                type="submit" 
                className="bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 h-12 w-full sm:w-auto text-base px-8 rounded-xl font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Prenumerera 💌
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA with improved spacing */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-8 text-green-800 font-display">
            Redo att förbättra din mentala hälsa genom rörelse? 🌟
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/quiz">
              <Button className="bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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

export default MentalHealthArticlePage;
