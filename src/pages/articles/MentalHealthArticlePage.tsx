
import React, { useEffect } from 'react';
import { ArrowLeft, Heart, Brain, Sun, Sparkles, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { scrollToTop } from '@/utils/scrollToTop';

const MentalHealthArticlePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handleBackClick = () => {
    navigate('/artiklar');
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="mb-4 text-gray-600 hover:text-gray-900"
            aria-label="Tillbaka till artiklar"
          >
            <ArrowLeft className="h-4 w-4 mr-2" aria-hidden="true" />
            Tillbaka till artiklar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-6">
              <Brain className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display">
              Mental hälsa på semester
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-text">
              Varför "total avkoppling" inte alltid är det bästa för din mentala hälsa. Lär dig skapa en sommar som både laddar och inspirerar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        <article className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Myten om den perfekta semestern
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-text">
              Vi har alla hört det: "På semestern ska man bara koppla av och inte tänka på något." Men vad händer 
              när du försöker stänga av ditt huvud helt? För många leder det faktiskt till mer stress, inte mindre.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-text">
              Sanningen är att vår hjärna behöver struktur och stimulans för att må bra. Total avkoppling kan 
              paradoxalt nog leda till rastlöshet, ångest och en känsla av tomhet.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
              <p className="text-indigo-800 font-medium font-text">
                <strong>Viktigt att komma ihåg:</strong> Mental hälsa handlar inte om att vara "helt avslappnad" 
                hela tiden, utan om att hitta en balans som får dig att må bra och känna dig energifull.
              </p>
            </div>
          </section>

          {/* Benefits Cards */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
              Så skapar du en mentalt hälsosam sommar
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Sun className="h-8 w-8 text-orange-500 mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-gray-900 font-display">Meningsfull stimulans</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-text">
                    Istället för total avkoppling, ge din hjärna meningsfull stimulans. Läs en bok du längtat 
                    efter, lär dig något nytt eller engagera dig i kreativa projekt.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-teal-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Heart className="h-8 w-8 text-green-500 mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-gray-900 font-display">Social connection</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-text">
                    Sommaren är perfekt för att stärka relationer. Djupa samtal, gemensamma upplevelser och 
                    skratt med människor du bryr dig om är ovärderligt för mental hälsa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Sparkles className="h-8 w-8 text-purple-500 mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-gray-900 font-display">Personlig utveckling</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-text">
                    Använd den extra tiden till reflektion och personlig utveckling. Vad vill du förändra? 
                    Vilka drömmar vill du förverkliga? Sommaren kan vara din tid för insikt och planering.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-blue-500 mr-3" aria-hidden="true" />
                    <h3 className="text-xl font-semibold text-gray-900 font-display">Balanserad aktivitet</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-text">
                    Växla mellan aktivitet och vila. Fysisk rörelse, mentala utmaningar och verklig avkoppling 
                    i en harmonisk blandning ger dig energi istället för uttråkning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Strategies Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-display">
              Konkreta strategier för mental välmående
            </h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-display">
                  1. Skapa en flexibel struktur
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 font-text">
                  Även på semester behöver din hjärna viss struktur för att må bra. Skapa lösa rutiner som 
                  ger riktning utan att kännas begränsande.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6 font-text" role="list">
                  <li>• Bestäm ungefära tider för måltider och sömn</li>
                  <li>• Planera en aktivitet du ser fram emot varje dag</li>
                  <li>• Ha återkommande moment som morgonpromenader</li>
                  <li>• Blanda spontanitet med planerade aktiviteter</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-display">
                  2. Mindful njutning
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 font-text">
                  Istället för att bara "slå av", öva dig i att vara medvetet närvarande i njutbara ögonblick. 
                  Detta ger djupare avkoppling än passiv konsumtion.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6 font-text" role="list">
                  <li>• Ät långsamt och njut av smakerna</li>
                  <li>• Observera naturen med alla sinnen</li>
                  <li>• Var fullt närvarande i samtal med nära vänner</li>
                  <li>• Praktisera tacksamhet för små vardagsglädjer</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-display">
                  3. Hantera semesterångest
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 font-text">
                  Många upplever paradoxalt nog ångest när de "ska" koppla av. Acceptera att det är normalt 
                  och ha strategier för att hantera det.
                </p>
                <ul className="text-gray-700 space-y-2 ml-6 font-text" role="list">
                  <li>• Acceptera att vila också är en färdighet som tränas</li>
                  <li>• Begränsa sociala medier som kan skapa FOMO</li>
                  <li>• Prata om känslor istället för att stoppa undan dem</li>
                  <li>• Kom ihåg att semester inte behöver vara "perfekt"</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Practical Tips */}
          <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Checklista för mental välmående i sommar
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 font-display">Dagliga vanor:</h4>
                <ul className="text-gray-700 space-y-2 font-text" role="list">
                  <li>✓ Naturligt ljus inom första timmen efter uppvaknande</li>
                  <li>✓ Minst 20 minuter utomhus</li>
                  <li>✓ En meningsfull aktivitet eller konversation</li>
                  <li>✓ Medveten reflektion över dagen</li>
                  <li>✓ Begränsad skärmtid före sömn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 font-display">Veckovisa mål:</h4>
                <ul className="text-gray-700 space-y-2 font-text" role="list">
                  <li>✓ En djup konversation med någon du bryr dig om</li>
                  <li>✓ Lära dig något nytt eller kreativt</li>
                  <li>✓ Fysisk aktivitet som känns kul</li>
                  <li>✓ Verklig avkoppling utan prestationskrav</li>
                  <li>✓ Planering eller reflektion om framtiden</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg border border-indigo-200">
              <p className="text-indigo-800 font-medium font-text">
                <strong>Kom ihåg:</strong> Den bästa semestern är inte den där du gör mest eller minst, utan 
                den där du känner dig mest som dig själv. Lyssna på vad din kropp och hjärna faktiskt behöver.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default MentalHealthArticlePage;
