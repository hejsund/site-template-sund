
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users2, ArrowLeft, Heart, Target, Smile } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Users2 className="w-6 h-6 text-pink-600" />
            <span className="text-pink-600 font-semibold">Familj</span>
            <span className="text-green-600 text-sm">13 min läsning</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            Familjeträning på sommaren
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            Upptäck roliga sätt att träna tillsammans som familj på sommaren. Tips för olika åldrar, aktiviteter som engagerar alla och skapar närhet.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/2de3bc93-d7a5-4596-ad08-909252fa06c9.png" 
              alt="Familj som tränar tillsammans"
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
                "Mamma, kan vi träna med dig?"
              </p>
              
              <p>
                Den frågan får jag hemma nästan varje dag nu. Och det värmde mitt hjärta första gången - men nu har jag insett något ännu viktigare:
              </p>
              
              <p className="font-semibold text-pink-600">
                När barn vill träna med dig har du redan vunnit.
              </p>

              <div className="bg-pink-50 border-l-4 border-pink-400 p-6 my-8 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                  <h3 className="text-xl font-bold text-pink-800">Den viktigaste träningen</h3>
                </div>
                <p className="text-pink-700 mb-0">
                  Som fyrbarnsmamma har jag förstått att den viktigaste träningen jag gör kanske inte är den som formar min kropp - utan den som formar mina barns syn på rörelse.
                </p>
              </div>

              <h2>Varför familjeträning förändrar allt</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-pink-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    För dig som förälder
                  </h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Du behöver inte känna skuld för att "ta tid" från familjen</li>
                    <li>Du får träning trots kaotiska sommarscheman</li>
                    <li>Du visar med handling att hälsa är viktigt</li>
                    <li>Du skapar positiva minnen kopplade till rörelse</li>
                  </ul>
                </div>

                <div className="bg-white border border-pink-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-pink-800 mb-3 flex items-center gap-2">
                    <Smile className="w-5 h-5" />
                    För barnen
                  </h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Träning blir lek istället för plikt</li>
                    <li>De lär sig att kroppen är gjord för att röra sig</li>
                    <li>De associerar rörelse med familjetid och kärlek</li>
                    <li>De utvecklar motorik och självförtroende</li>
                  </ul>
                </div>
              </div>

              <h2>Familjeträning för olika åldrar</h2>
              
              <p>Under våra fem år med Sommarboosten har vi perfektat konsten att få alla åldrar engagerade samtidigt:</p>

              <h3>Med småbarn (2-6 år):</h3>
              
              <div className="bg-yellow-50 p-6 rounded-xl my-6">
                <h4 className="font-bold text-yellow-800 mb-3">Djurträning:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>"Nu ska vi gå som krabban!" (crab walks)</li>
                  <li>"Hoppa som grodor!" (squat jumps)</li>
                  <li>"Kryp som en orm!" (plankan)</li>
                  <li>"Spring som hästar!" (löpning på stället)</li>
                </ul>
                <p className="text-yellow-700 mt-3 text-sm">
                  Barnen älskar att imitera djur, du får träning utan att de märker att de tränar med.
                </p>
              </div>

              <h3>Med mellanstadiebarnen (7-12 år):</h3>
              
              <div className="bg-blue-50 p-6 rounded-xl my-6">
                <h4 className="font-bold text-blue-800 mb-3">Utmaningar:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>"Vem kan hålla plankan längst?"</li>
                  <li>"Vem kan göra flest armhävningar?"</li>
                  <li>"Vem kan balansera på ett ben längst?"</li>
                </ul>
                <p className="text-blue-700 mt-3 text-sm">
                  Barn i den här åldern älskar tävling (även mot sig själva).
                </p>
              </div>

              <h3>Med tonåringar (13+):</h3>
              
              <div className="bg-green-50 p-6 rounded-xl my-6">
                <h4 className="font-bold text-green-800 mb-3">"Riktiga" träningspass:</h4>
                <ul className="text-green-700 space-y-1">
                  <li>De kan hänga med på dina träningspass</li>
                  <li>Styrketräning med teknikfokus</li>
                  <li>Längre aktiviteter som cykelturer och vandring</li>
                </ul>
                <p className="text-green-700 mt-3 text-sm">
                  Tonåringar älskar att känna sig starka och "vuxna".
                </p>
              </div>

              <h2>Praktiska tips för lyckad familjeträning</h2>

              <h3>Gör det enkelt</h3>
              <ul>
                <li>Inga komplicerade övningar eller utrustning</li>
                <li>Börja med 10-15 minuter åt gången</li>
                <li>Ha träningskläder som barnen lätt kan ta på själva</li>
              </ul>

              <h3>Fokusera på lek</h3>
              <ul>
                <li>Kalla det aldrig "träning" med små barn - säg "lek" eller "rörelse"</li>
                <li>Låt barnen bestämma musik eller aktivitet ibland</li>
                <li>Skratta åt misstag istället för att rätta</li>
              </ul>

              <h3>Var flexibel</h3>
              <ul>
                <li>Anpassa efter humör och energi för dagen</li>
                <li>Okej att hoppa över om någon är sjuk eller trött</li>
                <li>Låt aktiviteten utvecklas naturligt</li>
              </ul>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl my-8">
                <h3 className="text-pink-800 mb-4">Vad barn lär sig av familjeträning:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-2">Fysiska färdigheter:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>Koordination och balans</li>
                      <li>Upptäcka vad kroppen kan</li>
                      <li>Lyssna på kroppens signaler</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-2">Livslånga värderingar:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>Hälsa är kul, inte en plikt</li>
                      <li>Familjetid är värdefull</li>
                      <li>Utmaningar är roliga</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2>Långsiktiga effekter</h2>
              
              <p>
                Det vackraste med familjeträning är inte vad som händer idag - det är vad som händer om 10-20 år.
              </p>

              <p>Barn som vuxit upp med familjeträning:</p>
              <ul>
                <li>Fortsätter vara aktiva som vuxna</li>
                <li>Skapar aktiva familjer själva</li>
                <li>Har bättre relation till sin kropp</li>
                <li>Kopplar träning till glädje istället för plikt</li>
                <li>Har starkare familjeband</li>
              </ul>

              <p className="font-semibold text-pink-600">
                Du planterar frön som kommer blomma resten av deras liv.
              </p>

              <h2>Börja idag</h2>
              
              <p>
                Du behöver inte vänta på perfekt väder, utrustning eller energi. Familjeträning kan börja med:
              </p>
              
              <p className="font-semibold text-blue-600">
                En 10-minuters promenad efter middag. Alla går tillsammans, pratar om dagen, upptäcker grannskapet.
              </p>
              
              <p>
                Det är allt. Börja där. Imorgon gör ni samma sak. Små traditioner växer till stora förändringar.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-pink-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-pink-800 text-center">
              Få tips för rolig familjeträning! 👨‍👩‍👧‍👦✨
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Aktiviteter som hela familjen älskar och som skapar starkare band.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-pink-300 bg-white text-green-800"
                required
              />
              <Button type="submit" className="bg-pink-600 text-white hover:bg-pink-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                Skicka tips! 💝
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Redo att göra träning till bästa familjetiden? 👨‍👩‍👧‍👦💪
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FamilyTrainingArticlePage;
