
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, ArrowLeft, TrendingUp, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const After40ArticlePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">
      {/* Header */}
      <header className="py-8 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-red-600 hover:text-red-800 font-medium mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-semibold">Medelåldern</span>
            <span className="text-green-600 text-sm">14 min läsning</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
            Efter 40 - sommarens möjligheter
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed">
            Upptäck varför sommaren är perfekt för att börja träna efter 40. Ledskånande träning, hormonbalans och återfinna din styrka i medelåldern.
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <div className="px-3 sm:px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/040754bd-84eb-44e7-977f-3b1a600d8402.png" 
              alt="Stark kvinna över 40 som tränar"
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
                "Men Instructor Name, är det inte för sent för mig att börja? Jag fyller snart 45 och har aldrig varit sportig..."
              </p>
              
              <p>
                Åh, vad glad jag blir när jag får den frågan! För den bygger på en så fundamental missuppfattning om vad kroppen kan efter 40.
              </p>
              
              <p>
                Som 40+ själv och grundare av Company Name har jag inte bara levt den här resan själv - jag har hjälpt hundratals kvinnor och män över 40 att upptäcka att deras bästa tid faktiskt kan komma NU.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-3">Och sommaren?</h3>
                <p className="text-red-700 mb-0">
                  Det är den perfekta tiden att börja. Längre dagar, mer energi, naturliga aktiviteter och mindre stress skapar optimala förutsättningar.
                </p>
              </div>

              <h2>Sanningen om kroppen efter 40</h2>
              
              <p>Låt oss först röja undan myterna:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-red-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-red-800 mb-3">❌ Myter</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>"Metabolismen stannar efter 40"</li>
                    <li>"Lederna blir sämre av träning"</li>
                    <li>"Man kan inte bygga muskler efter 40"</li>
                    <li>"Det är farligt att börja träna senare"</li>
                  </ul>
                </div>

                <div className="bg-white border border-green-200 p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-green-800 mb-3">✅ Sanningar</h3>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li>Träning kan vända metabolismen</li>
                    <li>Rätt träning stärker leder</li>
                    <li>Du kan bygga muskler till 80+</li>
                    <li>Det är farligare att INTE träna</li>
                  </ul>
                </div>
              </div>

              <h2 className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-red-500" />
                Varför 40+ är den perfekta tiden att börja
              </h2>

              <h3>Du vet vad du vill</h3>
              <p>
                I 20-årsåldern tränar man ofta för utseende eller för att andra förväntar sig det. Efter 40 tränar du för att du vill må bra. Den motivationen är så mycket starkare.
              </p>

              <h3>Du har mindre att bevisa</h3>
              <p>
                Du behöver inte imponera på andra på gymmet. Du tränar för dig själv, vilket gör träningen äktigare och roligare.
              </p>

              <h3>Du förstår värdet av hälsa</h3>
              <p>
                När du börjar känna kroppens första tecken på ålder så förstår du varför förebyggande träning är så viktigt.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl my-8">
                <h3 className="text-red-800 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Vad kroppen behöver efter 40:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Styrketräning är A och O</h4>
                    <p className="text-green-700 text-sm">Efter 30 förlorar vi ca 1% muskelmassa per år om vi inte tränar.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Rörlighet blir viktigare</h4>
                    <p className="text-green-700 text-sm">Sittande jobb gör oss stela. Stretching blir essentiellt.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Balansträning förebygger fall</h4>
                    <p className="text-green-700 text-sm">Balansen börjar försämras från 40. Enkel träning kan förebygga skador.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Återhämtning tar längre tid</h4>
                    <p className="text-green-700 text-sm">Vi behöver mer vila mellan pass - men inte mindre träning.</p>
                  </div>
                </div>
              </div>

              <h2>Speciella fördelar med sommarstart</h2>

              <h3>Längre dagar = mer energi</h3>
              <p>Ljuset påverkar dina hormoner positivt. D-vitamin från solen hjälper både mående och muskelbyggnad.</p>

              <h3>Mindre stress = bättre återhämtning</h3>
              <p>Sommaren har ofta lite lugnare tempo. Din kropp hinner återhämta sig bättre mellan träningspass.</p>

              <h3>Naturliga aktiviteter</h3>
              <p>Trädgårdsarbete, promenader, simning - sommaren erbjuder naturlig träning som inte känns som "träning."</p>

              <div className="bg-blue-50 p-6 rounded-xl my-8">
                <h3 className="text-blue-800 mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Speciella tips för kvinnor över 40:
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li><strong>Östrogennivåer påverkar träning:</strong> Styrketräning blir extra viktigt för benmassa</li>
                  <li><strong>Järnbristen är vanlig:</strong> Få det kontrollerat innan intensiv träning</li>
                  <li><strong>Stresshantering är nyckeln:</strong> Träning ska minska stress, inte öka den</li>
                  <li><strong>Sömnen påverkas:</strong> Undvik intensiv träning sent på kvällen</li>
                </ul>
              </div>

              <h2>Din första månads sommarresa</h2>

              <div className="space-y-6 my-8">
                <div className="bg-white border-l-4 border-green-400 p-4 rounded">
                  <h4 className="font-bold text-green-800">Vecka 1-2: Väcka kroppen</h4>
                  <ul className="text-green-700 text-sm mt-2 space-y-1">
                    <li>10 minuters promenad varje dag</li>
                    <li>5 minuters stretching på morgonen</li>
                    <li>Leta upp aktiviteter du gillade som barn</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <h4 className="font-bold text-blue-800">Vecka 3-4: Bygga vanor</h4>
                  <ul className="text-blue-700 text-sm mt-2 space-y-1">
                    <li>Lägg till 2 styrketräningspass per vecka (15-20 min)</li>
                    <li>Öka promenaderna till 15-20 minuter</li>
                    <li>Testa yoga eller tai chi för rörlighet</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-purple-400 p-4 rounded">
                  <h4 className="font-bold text-purple-800">Månad 2: Du märker skillnad</h4>
                  <ul className="text-purple-700 text-sm mt-2 space-y-1">
                    <li>Energin är högre</li>
                    <li>Du sover bättre</li>
                    <li>Vardagsaktiviteter känns lättare</li>
                    <li>Du längtar efter träning istället för att tvinga dig</li>
                  </ul>
                </div>
              </div>

              <h2>Långsiktiga fördelar för 40+</h2>
              
              <p>Träning efter 40 är inte bara för att må bra nu - det är en investering i framtiden:</p>

              <ul>
                <li><strong>50-årsåldern:</strong> Du har energi att hänga med tonårsbarn, karriär och äldre föräldrar</li>
                <li><strong>60-årsåldern:</strong> Du kan njuta av pensionen med en stark kropp</li>
                <li><strong>70+:</strong> Du behåller självständigheten längre</li>
              </ul>

              <p className="font-semibold text-red-600">
                Träning efter 40 handlar inte om att vara ung igen - det handlar om att vara den bästa versionen av dig själv i varje ålder.
              </p>

              <h2>Börja där du är</h2>
              
              <p>
                Du behöver inte vänta tills du "kommer i form" för att börja. Du behöver inte köpa dyr utrustning eller gå med i gym.
              </p>
              
              <p className="font-semibold text-blue-600">
                Börja med en 10-minuters promenad idag.
              </p>
              
              <p>
                Imorgon gör du samma sak. Efter en vecka kanske du sträcker ut efter promenaden. Det är så enkelt det kan vara.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-red-200 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-red-800 text-center">
              Tips för träning efter 40! 💪✨
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Specialanpassade råd för dig som vill börja eller utveckla din träning efter 40.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-red-300 bg-white text-green-800"
                required
              />
              <Button type="submit" className="bg-red-600 text-white hover:bg-red-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                Skicka tips! 🚀
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-6 text-green-800 font-display">
            Din bästa tid kan börja nu. Är du redo? 🌟
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-program-name">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-xl font-semibold">
                Läs mer om Program Name
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default After40ArticlePage;
