
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Brain, ArrowLeft, Heart, Sun, Target } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

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
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">Mental hälsa</span>
            <span className="text-green-600 text-sm">9 min läsning</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            Sommarens mentala hälsa
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            Upptäck kopplingen mellan rörelse och mental hälsa på sommaren. Lär dig hur enkla träningsvanor kan förbättra ditt mående och ge dig mer energi.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/393c1d8b-c123-455f-ae12-0005270f9bb2.png" 
              alt="Mental hälsa och sommarträning"
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
                "Charlotte, jag känner mig konstig i sommar. Alla andra verkar så glada och avslappnade, men jag känner mig bara rastlös och stressad. Är det bara jag?"
              </p>
              
              <p>Nej, det är absolut inte bara du.</p>
              
              <p>
                Trots att vi förväntar oss att sommaren ska vara den bästa tiden på året så kämpar många faktiskt mer med sin mentala hälsa just då. Och det finns helt logiska förslag till varför.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-800">Viktigt att komma ihåg</h3>
                </div>
                <p className="text-blue-700 mb-0">
                  Din mentala hälsa och din fysiska aktivitet är oskiljaktiga. Det är därför vi skapade Sommarboosten - inte bara som ett träningsprogram, utan som en hållbar strategi för att må bra hela sommaren.
                </p>
              </div>

              <h2 className="flex items-center gap-3 text-green-800">
                <Sun className="w-8 h-8 text-orange-500" />
                Varför sommaren kan vara tuff mentalt
              </h2>

              <h3>Förväntningarna är höga</h3>
              <p>
                Alla ska ha "bästa sommaren någonsin." Instagram fylls av perfekta semesterbilder. Alla andra verkar ha mer kul än du. Pressen att njuta kan faktiskt bli så stor att den förstör njutningen.
              </p>

              <h3>Rutinerna försvinner</h3>
              <p>
                För många av oss är struktur trygghet. När barnens schema ändras, när jobbet blir mer oregelbundet, när vanliga aktiviteter pausas - då kan hjärnan börja stressa.
              </p>

              <h3>Kroppen rör sig mindre</h3>
              <p>
                Paradoxalt nog rör vi oss ofta MINDRE på sommaren än vintern. Varmare väder gör oss tröga. Vi "vilar" mer. Men kroppen behöver rörelse för att må bra.
              </p>

              <div className="bg-green-50 p-6 rounded-xl my-8">
                <h3 className="text-green-800 mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Forskningen om rörelse och mental hälsa
                </h3>
                <ul className="text-green-700 space-y-2">
                  <li><strong>30 minuter rörelse per dag</strong> kan vara lika effektivt som antidepressiva mediciner för mild till måttlig depression</li>
                  <li><strong>Redan 10 minuter promenad</strong> kan förbättra ditt humör i upp till 12 timmar</li>
                  <li><strong>Regelbunden träning</strong> minskar stresshormoner och ökar "lyckohormonerna"</li>
                  <li><strong>Utomhusaktivitet</strong> ger bonus-effekt genom ljus, frisk luft och naturens lugnande påverkan</li>
                </ul>
              </div>

              <h2>Rörelse som mental medicin</h2>
              
              <p>
                När vi utvecklade Sommarboosten förstod vi att mental hälsa var lika viktigt som fysisk. Vi lärde oss att:
              </p>

              <h3>Rörelse ger struktur</h3>
              <p>
                Även när allt annat är kaos så kan 15 minuter rörelse på morgonen skapa den struktur hjärnan behöver för att känna sig trygg.
              </p>

              <h3>Träning ger kontroll</h3>
              <p>
                I en tid då mycket känns utom din kontroll så är träning något som bara DU bestämmer över.
              </p>

              <h3>Aktivitet skapar energi</h3>
              <p>
                Det låter paradoxalt men det är sant: Ju mer du rör dig, desto mer energi får du. Stillasittande skapar trötthet.
              </p>

              <h2>Att våga prioritera dig själv</h2>
              
              <p>
                Många känner: "Men jag känner mig så egoistisk..." eller "Andra behöver mig mer..." eller "Jag hinner inte..."
              </p>
              
              <p className="font-semibold text-green-800">
                Men här är sanningen: Du kan inte ge från en tom kopp.
              </p>
              
              <p>
                Att prioritera 15-30 minuter rörelse per dag är inte egoistiskt. Det är nödvändigt. För dig, för din familj, för alla som älskar dig.
              </p>

              <h2>Starta enkelt idag</h2>
              
              <p>
                Du behöver inte vänta på måndag, nästa vecka eller efter semestern. Du kan börja idag:
              </p>
              
              <p className="font-semibold text-blue-600">
                Ta en 10-minuters promenad efter lunch. Bara det. Inget mer.
              </p>
              
              <p>
                Märk hur du mår efteråt. Märk hur resten av dagen påverkas. Efter en vecka kommer du märka skillnad. Efter en månad kommer familjen märka skillnad.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-blue-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-blue-800 text-center">
              Vill du ha fler tips om mental hälsa och träning? 🧠✨
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Få våra bästa råd direkt i din inkorg - ingen skräppost, bara värdefull kunskap.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-blue-300 bg-white text-green-800"
                required
              />
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                Prenumerera 💌
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Redo att förbättra din mentala hälsa genom rörelse? 🌟
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthArticlePage;
