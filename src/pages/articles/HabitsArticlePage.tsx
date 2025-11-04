
import React, { useEffect } from 'react';
import { ArrowLeft, Target, Calendar, CheckCircle, Repeat, TrendingUp, Star, Clock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FooterSection } from '@/components/FooterSection';
import HabitsContent from '@/components/articles/HabitsContent';

const HabitsArticlePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-coral/20">
      <main role="main">
        <article className="py-8 md:py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <header className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple to-coral rounded-full mb-6">
                <Target className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-gradient mb-4 md:mb-6 font-display leading-tight px-2">
                Vanor som håller hela livet
              </h1>
              <p className="text-base md:text-lg text-green-700 italic font-text mb-6 md:mb-8 px-2">
                Av Instructor Name Steinwig
              </p>
              
              {/* Hero Image with better accessibility */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl mb-6 md:mb-8 mx-2 md:mx-0">
                <img 
                  src="/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png" 
                  alt="Instructor Name vid vattnet med ett naturligt leende - representation av hållbara vanor och livsstilsförändringar"
                  className="w-full h-64 md:h-96 object-cover object-center"
                  style={{ objectPosition: '50% 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
              </div>
            </header>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="prose prose-lg max-w-none font-text text-green-800 space-y-6 md:space-y-8">
                <div className="text-lg md:text-xl leading-relaxed">
                  <p>"Instructor Name, jag har börjat om så många gånger. Varför slutar jag alltid efter några veckor?"</p>
                </div>

                <p className="text-base md:text-lg">
                  Den frågan får jag flera gånger i veckan. Och jag förstår frustrationen.
                </p>

                <p className="text-base md:text-lg">
                  Du har läst böckerna. Du har köpt träningskorten. Du har kastat skräpmaten och fyllt kylskåpet med grönsaker. Du har varit så motiverad första veckan.
                </p>

                <p className="text-base md:text-lg">
                  Och sen... livet händer. Barnen blir sjuka. Jobbet blir stressigt. Du missar några dagar och tänker "aja, nu är allt förstört ändå."
                </p>

                <p className="text-lg md:text-xl font-semibold text-purple">
                  Men vad om problemet inte är dig? Vad om problemet är sättet vi har lärt oss att bygga vanor på?
                </p>

                <section className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-purple-200 my-6 md:my-8" aria-labelledby="why-habits-fail">
                  <h2 id="why-habits-fail" className="text-2xl md:text-3xl font-bold text-purple mb-4 md:mb-6 font-display flex items-center">
                    <Repeat className="mr-3 text-purple" aria-hidden="true" />
                    Varför de flesta vanor inte håller
                  </h2>
                  <p className="mb-4 text-base md:text-lg text-purple-800">
                    Vi har fått lära oss att förändringar ska vara:
                  </p>
                  <ul className="space-y-3 mb-6 text-base md:text-lg" role="list">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-coral rounded-full flex-shrink-0" aria-hidden="true"></span>
                      <span><strong>Drastiska</strong> ("Från måndag äter jag bara sallad!")</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-orange rounded-full flex-shrink-0" aria-hidden="true"></span>
                      <span><strong>Snabba</strong> ("På 30 dagar kommer ditt liv att vara förvandlat!")</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple rounded-full flex-shrink-0" aria-hidden="true"></span>
                      <span><strong>Perfekta</strong> ("Miss aldrig ett pass!")</span>
                    </li>
                  </ul>
                  <div className="text-lg md:text-xl font-semibold text-center text-white bg-gradient-to-r from-purple to-coral p-4 md:p-6 rounded-lg" role="note" aria-label="Viktigt meddelande om vanor">
                    Men riktiga vanor - de som håller hela livet - de ser helt annorlunda ut.
                  </div>
                </section>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 my-8 md:my-12">
                  <Card className="border-0 shadow-md bg-gradient-to-br from-coral-50 to-coral-100">
                    <CardContent className="p-6 md:p-8">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coral to-orange rounded-full mb-4 mx-auto">
                          <TrendingUp className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-coral mb-4 font-display">
                          Motivation
                        </h3>
                        <p className="text-coral-800 mb-4 text-base md:text-lg">
                          Motivation är som ett fyrverkeri. Den sprakar till, lyser upp himlen för en kort stund, och sen är den borta.
                        </p>
                        <div className="text-center text-2xl md:text-3xl" role="img" aria-label="Fyrverkeri emoji">🎆</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-orange-100">
                    <CardContent className="p-6 md:p-8">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange to-coral rounded-full mb-4 mx-auto">
                          <Star className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-orange mb-4 font-display">
                          Vanor
                        </h3>
                        <p className="text-orange-800 mb-4 text-base md:text-lg">
                          Vanor är som en kamin. De behöver tändas en gång, men sen värmer de dig hela vintern.
                        </p>
                        <div className="text-center text-2xl md:text-3xl" role="img" aria-label="Eld emoji">🔥</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <blockquote className="bg-gradient-to-r from-green-100 to-green-200 p-6 md:p-8 rounded-xl border border-green-300 border-l-4 border-l-green-600 my-6 md:my-8">
                  <p className="text-lg md:text-xl font-medium text-green-800 mb-4">
                    Som fyrbarnsmamma kan jag lova dig: jag vaknar inte varje morgon och känner mig motiverad att träna. Vissa morgnar vill jag bara gömma mig under täcket.
                  </p>
                  <p className="text-green-700 text-base md:text-lg">
                    Men jag tränar ändå. Inte för att jag är en hjälte, utan för att det blivit en vana. Något jag bara gör, som att borsta tänderna.
                  </p>
                </blockquote>

                <section className="bg-gradient-to-br from-purple-100 to-coral-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple/30 my-6 md:my-8" aria-labelledby="building-habits">
                  <h2 id="building-habits" className="text-2xl md:text-3xl font-bold text-purple mb-4 md:mb-6 font-display">
                    Så bygger du vanor som faktiskt håller
                  </h2>
                  
                  <div className="space-y-6 md:space-y-8">
                    <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg md:text-xl font-bold text-purple mb-3 font-display flex items-center">
                        <span className="bg-gradient-to-r from-purple to-coral text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0" aria-label="Steg 1">1</span>
                        Börja löjligt litet
                      </h3>
                      <p className="mb-4 text-base md:text-lg">
                        Den största misstag folk gör är att de börjar för stort. Börja så litet att det känns nästan löjligt. Så litet att du inte kan misslyckas.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-sm md:text-base">
                        <div className="bg-gradient-to-br from-coral-50 to-coral-100 p-3 md:p-4 rounded-lg border border-coral/20">
                          <p className="font-semibold text-coral mb-2">Träning</p>
                          <p>Gör fem armhävningar varje morgon. Ja, bara fem.</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-3 md:p-4 rounded-lg border border-orange/20">
                          <p className="font-semibold text-orange mb-2">Mat</p>
                          <p>Ät en extra portion grönsaker till middagen. En.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 md:p-4 rounded-lg border border-purple/20">
                          <p className="font-semibold text-purple mb-2">Vatten</p>
                          <p>Drick ett glas vatten när du vaknar. Ett glas.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg md:text-xl font-bold text-coral mb-3 font-display flex items-center">
                        <span className="bg-gradient-to-r from-coral to-orange text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0" aria-label="Steg 2">2</span>
                        Koppla till något du redan gör
                      </h3>
                      <p className="mb-4 text-base md:text-lg">
                        De starkaste vanorna piggybacks på saker du redan gör varje dag.
                      </p>
                      <div className="space-y-2 text-sm md:text-base">
                        <p><strong>Efter</strong> att jag hällt upp kaffe <strong>tränar jag</strong> fem minuter</p>
                        <p><strong>Efter</strong> att jag kört barnen till skolan <strong>går jag</strong> en kort promenad</p>
                        <p><strong>Innan</strong> jag kollar telefonen på kvällen <strong>läser jag</strong> fem sidor i en bok</p>
                      </div>
                    </div>

                    <div className="bg-white/90 p-4 md:p-6 rounded-xl shadow-sm">
                      <h3 className="text-lg md:text-xl font-bold text-orange mb-3 font-display flex items-center">
                        <span className="bg-gradient-to-r from-orange to-purple text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 flex-shrink-0" aria-label="Steg 3">3</span>
                        Fokusera på frekvens, inte intensitet
                      </h3>
                      <p className="mb-4 text-base md:text-lg">Vad tror du skapar en starkare vana:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                          <p className="font-semibold text-sm md:text-base">A) Träna intensivt två timmar en gång i veckan</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-100 to-green-200 p-4 rounded-lg border-2 border-green-400">
                          <p className="font-semibold text-green-800 text-sm md:text-base">B) Träna 10 minuter fem dagar i veckan ✓</p>
                        </div>
                      </div>
                      <p className="mt-4 text-center font-semibold text-orange text-base md:text-lg">
                        Ditt hjärna bryr sig inte om hur länge du gör något. Den bryr sig om hur ofta.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="my-8 md:my-12 mx-2 md:mx-0">
                  <img 
                    src="/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png" 
                    alt="Lugn sjöyta som speglar himlen - reflektion över vanornas kraft och balans i livet"
                    className="w-full h-48 md:h-64 object-cover rounded-2xl md:rounded-3xl shadow-xl"
                  />
                  <p className="text-center text-sm text-green-600 mt-3 italic px-2">
                    Som denna spegelblanke sjö - vanor skapar reflektion och djup i våra liv.
                  </p>
                </div>

                <section className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-green-200 my-6 md:my-8" aria-labelledby="summer-habits">
                  <h2 id="summer-habits" className="text-2xl md:text-3xl font-bold text-green-800 mb-4 md:mb-6 font-display flex items-center">
                    <Clock className="mr-3 text-green-600 flex-shrink-0" aria-hidden="true" />
                    Sommarvanor som förändrar allt
                  </h2>
                  <p className="mb-6 text-base md:text-lg text-green-700">
                    Sommaren är faktiskt den perfekta tiden att bygga vanor. Längre ljusa dagar, mer energi, färre krav.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-green-800 mb-2 text-base md:text-lg">Rörelsevanor</h3>
                        <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Jag ska träna en timme varje dag i sommar."</p>
                        <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag ska röra på mig 10 minuter varje morgon."</p>
                      </div>
                      
                      <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-coral mb-2 text-base md:text-lg">Matvanor</h3>
                        <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu äter jag bara hälsosamt hela sommaren."</p>
                        <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag äter något näringsrikt vid varje måltid."</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-purple mb-2 text-base md:text-lg">Återhämtningsvanor</h3>
                        <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu ska jag meditera 30 minuter varje dag."</p>
                        <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag tar fem djupa andetag efter lunch."</p>
                      </div>
                      
                      <div className="bg-white/80 p-4 md:p-6 rounded-xl shadow-sm">
                        <h3 className="font-bold text-orange mb-2 text-base md:text-lg">Vattenvanor</h3>
                        <p className="text-sm md:text-base mb-2"><strong>Inte:</strong> "Nu dricker jag tre liter vatten varje dag."</p>
                        <p className="text-sm md:text-base"><strong>Utan:</strong> "Jag dricker ett glas vatten vid specifika tillfällen."</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Include the detailed content */}
                <div className="mt-8 md:mt-12">
                  <HabitsContent />
                </div>

                <section className="bg-gradient-to-br from-coral-50 to-coral-100 rounded-xl md:rounded-2xl p-6 md:p-8 border border-coral/30 my-6 md:my-8" aria-labelledby="summer-transformation">
                  <h2 id="summer-transformation" className="text-2xl md:text-3xl font-bold text-coral mb-4 md:mb-6 font-display">
                    Sommaren som förändrar allt
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-coral-800">
                    Föreställ dig att komma tillbaka från sommarsemestern och inse att du faktiskt längtar efter din morgonpromenad, dricker vatten utan att tänka på det, och äter grönsaker för att de smakar gott.
                  </p>
                  <p className="mb-8 text-base md:text-lg text-coral-700">
                    Inte för att du tvingat dig. Inte för att du haft järndisciplin. Utan för att du byggt vanor som blivit del av vem du är.
                  </p>
                  
                  <nav className="text-center space-y-4 md:space-y-0 md:space-x-4" aria-label="Nästa steg">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                      <Link to="/quiz">
                        <Button className="bg-gradient-to-r from-coral to-orange hover:from-coral/90 hover:to-orange/90 text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto shadow-lg">
                          Bygg dina vanor i sommar
                        </Button>
                      </Link>
                      <Link to="/om-program-name">
                        <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white font-semibold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
                          Läs mer om Program Name
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </section>

                <footer className="text-center pt-6 md:pt-8 border-t border-green-200">
                  <p className="font-text italic text-green-700 text-base md:text-lg px-2">
                    För vanor är inte något du gör. Vanor är någon du blir.<br /><br />
                    Kram,<br />
                    Instructor Name
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </article>
      </main>

      <FooterSection />
    </div>
  );
};

export default HabitsArticlePage;
