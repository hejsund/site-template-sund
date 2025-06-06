import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Repeat, TrendingUp, Clock, Star } from 'lucide-react';
import { Footer } from '@/components/Footer';

const HabitsArticlePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-block bg-purple/10 text-purple px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Target className="inline w-4 h-4 mr-2" />
              Vanor & Förändringar
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6 font-display leading-tight">
              Vanor som håller hela livet
            </h1>
            <p className="text-lg text-green-700 italic font-text mb-8">
              Av Charlotte Steinwig
            </p>
            
            {/* Hero Image with better positioning to avoid cropping face */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img 
                src="/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png" 
                alt="Charlotte vid vattnet med ett naturligt leende - representation av hållbara vanor"
                className="w-full h-96 object-cover object-center"
                style={{ objectPosition: '50% 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none font-text text-green-800 space-y-8">
            <div className="text-xl leading-relaxed">
              <p>"Charlotte, jag har börjat om så många gånger. Varför slutar jag alltid efter några veckor?"</p>
            </div>

            <p>
              Den frågan får jag flera gånger i veckan. Och jag förstår frustrationen.
            </p>

            <p>
              Du har läst böckerna. Du har köpt träningskorten. Du har kastat skräpmaten och fyllt kylskåpet med grönsaker. Du har varit så motiverad första veckan.
            </p>

            <p>
              Och sen... livet händer. Barnen blir sjuka. Jobbet blir stressigt. Du missar några dagar och tänker "aja, nu är allt förstört ändå."
            </p>

            <p className="text-lg font-semibold text-purple">
              Men vad om problemet inte är dig? Vad om problemet är sättet vi har lärt oss att bygga vanor på?
            </p>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                <Repeat className="mr-3 text-purple" />
                Varför de flesta vanor inte håller
              </h2>
              <p className="mb-4">
                Vi har fått lära oss att förändringar ska vara:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-coral rounded-full"></span>
                  <span><strong>Drastiska</strong> ("Från måndag äter jag bara sallad!")</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange rounded-full"></span>
                  <span><strong>Snabba</strong> ("På 30 dagar kommer ditt liv att vara förvandlat!")</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple rounded-full"></span>
                  <span><strong>Perfekta</strong> ("Miss aldrig ett pass!")</span>
                </li>
              </ul>
              <p className="text-lg font-semibold text-center text-purple bg-purple/10 p-4 rounded-lg">
                Men riktiga vanor - de som håller hela livet - de ser helt annorlunda ut.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-coral/10 to-coral/20 p-6 rounded-2xl border border-coral/30">
                <h3 className="text-2xl font-bold text-coral mb-4 font-display flex items-center">
                  <TrendingUp className="mr-2" />
                  Motivation
                </h3>
                <p className="text-green-700 mb-4">
                  Motivation är som ett fyrverkeri. Den sprakar till, lyser upp himlen för en kort stund, och sen är den borta.
                </p>
                <div className="text-center text-2xl">🎆</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange/10 to-orange/20 p-6 rounded-2xl border border-orange/30">
                <h3 className="text-2xl font-bold text-orange mb-4 font-display flex items-center">
                  <Star className="mr-2" />
                  Vanor
                </h3>
                <p className="text-green-700 mb-4">
                  Vanor är som en kamin. De behöver tändas en gång, men sen värmer de dig hela vintern.
                </p>
                <div className="text-center text-2xl">🔥</div>
              </div>
            </div>

            <div className="bg-green-100 p-6 rounded-xl border border-green-300">
              <p className="text-lg font-medium text-green-800">
                Som fyrbarnsmamma kan jag lova dig: jag vaknar inte varje morgon och känner mig motiverad att träna. Vissa morgnar vill jag bara gömma mig under täcket.
              </p>
              <p className="mt-4 text-green-700">
                Men jag tränar ändå. Inte för att jag är en hjälte, utan för att det blivit en vana. Något jag bara gör, som att borsta tänderna.
              </p>
            </div>

            <section className="bg-gradient-to-r from-purple/10 to-pink/10 rounded-2xl p-8 border border-purple/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Så bygger du vanor som faktiskt håller
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white/80 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-purple mb-3 font-display flex items-center">
                    <span className="bg-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                    Börja löjligt litet
                  </h3>
                  <p className="mb-4">
                    Den största misstag folk gör är att de börjar för stort. Börja så litet att det känns nästan löjligt. Så litet att du inte kan misslyckas.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-coral/10 p-3 rounded-lg">
                      <p className="font-semibold text-coral">Träning</p>
                      <p>Gör fem armhävningar varje morgon. Ja, bara fem.</p>
                    </div>
                    <div className="bg-orange/10 p-3 rounded-lg">
                      <p className="font-semibold text-orange">Mat</p>
                      <p>Ät en extra portion grönsaker till middagen. En.</p>
                    </div>
                    <div className="bg-purple/10 p-3 rounded-lg">
                      <p className="font-semibold text-purple">Vatten</p>
                      <p>Drick ett glas vatten när du vaknar. Ett glas.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-coral mb-3 font-display flex items-center">
                    <span className="bg-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                    Koppla till något du redan gör
                  </h3>
                  <p className="mb-4">
                    De starkaste vanorna piggybacks på saker du redan gör varje dag.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Efter</strong> att jag hällt upp kaffe <strong>tränar jag</strong> fem minuter</p>
                    <p><strong>Efter</strong> att jag kört barnen till skolan <strong>går jag</strong> en kort promenad</p>
                    <p><strong>Innan</strong> jag kollar telefonen på kvällen <strong>läser jag</strong> fem sidor i en bok</p>
                  </div>
                </div>

                <div className="bg-white/80 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-orange mb-3 font-display flex items-center">
                    <span className="bg-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                    Fokusera på frekvens, inte intensitet
                  </h3>
                  <p className="mb-4">Vad tror du skapar en starkare vana:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-semibold">A) Träna intensivt två timmar en gång i veckan</p>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                      <p className="font-semibold text-green-800">B) Träna 10 minuter fem dagar i veckan ✓</p>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-semibold text-orange">
                    Ditt hjärna bryr sig inte om hur länge du gör något. Den bryr sig om hur ofta.
                  </p>
                </div>
              </div>
            </section>

            <div className="my-12">
              <img 
                src="/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png" 
                alt="Lugn sjöyta som speglar himlen - reflektion över vanornas kraft"
                className="w-full h-64 object-cover rounded-3xl shadow-xl"
              />
              <p className="text-center text-sm text-green-600 mt-3 italic">
                Som denna spegelblanke sjö - vanor skapar reflektion och djup i våra liv.
              </p>
            </div>

            <section className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 border border-green-300">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                <Clock className="mr-3 text-primary" />
                Sommarvanor som förändrar allt
              </h2>
              <p className="mb-6">
                Sommaren är faktiskt den perfekta tiden att bygga vanor. Längre ljusa dagar, mer energi, färre krav.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-xl">
                    <h4 className="font-bold text-primary mb-2">Rörelsevanor</h4>
                    <p className="text-sm mb-2"><strong>Inte:</strong> "Jag ska träna en timme varje dag i sommar."</p>
                    <p className="text-sm"><strong>Utan:</strong> "Jag ska röra på mig 10 minuter varje morgon."</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl">
                    <h4 className="font-bold text-coral mb-2">Matvanor</h4>
                    <p className="text-sm mb-2"><strong>Inte:</strong> "Nu äter jag bara hälsosamt hela sommaren."</p>
                    <p className="text-sm"><strong>Utan:</strong> "Jag äter något näringsrikt vid varje måltid."</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/80 p-4 rounded-xl">
                    <h4 className="font-bold text-purple mb-2">Återhämtningsvanor</h4>
                    <p className="text-sm mb-2"><strong>Inte:</strong> "Nu ska jag meditera 30 minuter varje dag."</p>
                    <p className="text-sm"><strong>Utan:</strong> "Jag tar fem djupa andetag efter lunch."</p>
                  </div>
                  
                  <div className="bg-white/80 p-4 rounded-xl">
                    <h4 className="font-bold text-orange mb-2">Vattenvanor</h4>
                    <p className="text-sm mb-2"><strong>Inte:</strong> "Nu dricker jag tre liter vatten varje dag."</p>
                    <p className="text-sm"><strong>Utan:</strong> "Jag dricker ett glas vatten vid specifika tillfällen."</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-coral/10 rounded-2xl p-8 border border-coral/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Sommaren som förändrar allt
              </h2>
              <p className="text-lg mb-6">
                Föreställ dig att komma tillbaka från sommarsemestern och inse att du faktiskt längtar efter din morgonpromenad, dricker vatten utan att tänka på det, och äter grönsaker för att de smakar gott.
              </p>
              <p className="mb-8">
                Inte för att du tvingat dig. Inte för att du haft järndisciplin. Utan för att du byggt vanor som blivit del av vem du är.
              </p>
              
              <div className="text-center">
                <Link to="/quiz">
                  <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-8 py-4 mr-4 mb-4">
                    Bygg dina vanor i sommar
                  </Button>
                </Link>
                <Link to="/om-sommarboosten">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4">
                    Läs mer om Sommarboosten
                  </Button>
                </Link>
              </div>
            </section>

            <footer className="text-center pt-8 border-t border-green-200">
              <p className="font-text italic text-green-700">
                För vanor är inte något du gör. Vanor är någon du blir.<br /><br />
                Kram,<br />
                Charlotte
              </p>
            </footer>
          </div>
        </div>
      </article>

      {/* Curved divider before footer */}
      <div className="relative">
        <svg 
          className="w-full h-12 text-green-100" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      <Footer />
    </div>
  );
};

export default HabitsArticlePage;
