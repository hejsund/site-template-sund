import React, { useEffect } from 'react';
import { ArrowLeft, Apple, Heart, Sun } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NutritionArticlePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-block bg-coral/10 text-coral px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Apple className="inline w-4 h-4 mr-2" />
              Kost & Njutning
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6 font-display leading-tight">
              Sommarmys utan dåligt samvete
            </h1>
            <p className="text-lg text-green-700 italic font-text mb-8">
              Av Charlotte Steinwig
            </p>
            
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
              <img 
                src="/lovable-uploads/8860c780-4dbb-4b43-b12f-770483b2f79f.png" 
                alt="Lugn sjö som speglar himlen - reflektion och balans i livet"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none font-text text-green-800 space-y-8">
            <div className="text-xl leading-relaxed">
              <p>"Charlotte, kan jag verkligen äta glass med barnen varje dag på semestern och ändå må bra?"</p>
              <p><strong>Ja. Du kan.</strong></p>
            </div>

            <p>
              "Men kan jag njuta av grillkvällar och after work-drinkar utan att förstöra allt?"
            </p>
            <p>
              <strong>Ja. Det kan du också.</strong>
            </p>

            <p>
              "Låter för bra för att vara sant..."
            </p>

            <p className="text-lg">
              Jag förstår att du tänker så. Vi har fått lära oss att sommaren är en tid då vi antingen "håller disciplin" eller "släpper allt." Men vad om jag berättade att det finns en tredje väg?
            </p>

            <p className="text-lg font-semibold text-coral">
              En väg där du kan njuta av allt det goda sommaren har att erbjuda - och samtidigt må bättre än någonsin.
            </p>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                <Utensils className="mr-3 text-coral" />
                Maten som gör sommaren magisk
              </h2>
              <p className="mb-4">
                Låt oss vara ärliga: sommarmaten är inte bara näring. Det är mys, gemenskap, tradition och rena glädjen.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍦</span>
                  <span>Glass som droppar längs fingrarna på en varm dag</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌭</span>
                  <span>Grillkorv med bröd och senap på midsommar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍓</span>
                  <span>Jordgubbar plockade direkt från landet</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🍻</span>
                  <span>Kall öl eller cider i solnedgången</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🧺</span>
                  <span>Spontana picknickar med vad du råkar ha hemma</span>
                </li>
              </ul>
              
              <p className="text-xl font-semibold text-coral text-center p-4 bg-coral/10 rounded-lg">
                Allt detta ÄR del av en hälsosam livsstil.
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary font-display">
                  Skillnaden mellan diet och livsstil
                </h2>
                <p>
                  Som fyrbarnsmamma har jag testat det mesta. Jag har räknat kalorier, viktat mat, förbjudit mig själv choklad, känt skuld över varenda glass.
                </p>
                <p>
                  Vet du vad? Det fungerade inte. Inte på lång sikt.
                </p>
                <div className="bg-coral/10 p-4 rounded-lg border-l-4 border-coral">
                  <p className="font-semibold text-coral">
                    För dieter förutsätter att livet är perfekt. Men livet är rörigt.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-2xl border border-green-300">
                <h3 className="font-bold text-primary mb-4 font-display">Livet är...</h3>
                <ul className="space-y-2 text-sm">
                  <li>✨ Spontana grillkvällar när väder blir fint</li>
                  <li>🍦 Glass för tröst när dagen varit jobbig</li>
                  <li>🍽️ Middag ute när du inte orkar laga mat</li>
                  <li>🥂 Champagne när vänninnan fått jobb</li>
                </ul>
                <p className="mt-4 text-sm font-medium">
                  En livsstil räknar med detta. Den bygger IN flexibilitet och njutning.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-r from-purple/10 to-coral/10 rounded-2xl p-8 border border-purple/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Inga förbud - så funkar det på riktigt
              </h2>
              <p className="text-lg mb-6">
                "Men Charlotte, om jag inte förbjuder mig saker så äter jag bara skräpmat..."
              </p>
              <p className="mb-6">
                Jag hör dig. Och jag förstår din rädsla. Men här är det som är sant: <strong>Förbud skapar begär.</strong>
              </p>
              
              <div className="bg-white/80 p-6 rounded-xl mb-6">
                <h3 className="font-bold text-coral mb-3 font-display">Så här fungerar "inga förbud" i praktiken:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍦</span>
                    <div>
                      <p className="font-medium">Du äter glass med barnen.</p>
                      <p className="text-sm text-green-700">Du njuter av varje slick. Du känner ingen skuld. Och när du är mätt slutar du äta. Enkelt.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍺</span>
                    <div>
                      <p className="font-medium">Du tar en öl på after work.</p>
                      <p className="text-sm text-green-700">Den smakar himla gott i solen. Du kanske tar en till, kanske inte. Du lyssnar på din kropp.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🍽️</span>
                    <div>
                      <p className="font-medium">Du äter middag ute med familjen.</p>
                      <p className="text-sm text-green-700">Du beställer det som låter gott. Du äter tills du känner dig nöjd. Du går hem och känner dig glad istället för full och äcklig.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-center italic text-green-700">
                Det här är inte teori. Det här är hur jag lever. Och hur tusentals av våra deltagare har lärt sig att leva.
              </p>
            </section>

            <div className="my-12">
              <img 
                src="/lovable-uploads/db3c75e8-d40b-4560-88c4-76cbd1a82f05.png" 
                alt="Sommarmys vid stranden - balans mellan njutning och välmående"
                className="w-full h-64 object-cover rounded-3xl shadow-xl"
              />
              <p className="text-center text-sm text-green-600 mt-3 italic">
                Sommarmys och hälsa går hand i hand när du hittar balansen.
              </p>
            </div>

            <section className="bg-orange/10 rounded-2xl p-8 border border-orange/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                <Users className="mr-3 text-orange" />
                Familjemat som alla älskar
              </h2>
              <p className="mb-6">
                En av de största stresserna för föräldrar är att försöka äta "hälsosamt" samtidigt som barnen ska få mat de faktiskt äter.
              </p>
              <p className="mb-6">
                Vem har tid att laga två olika middagar? Vem orkar diskussioner om varför grönkål är nyttigt medan ungarna rynkar näsan?
              </p>
              
              <div className="bg-white/80 p-6 rounded-xl">
                <h3 className="font-bold text-orange mb-4 font-display text-center">
                  Här är hemligheten: Hälsosam mat behöver inte smaka som kartong.
                </h3>
                <p className="text-center text-green-700">
                  När jag säger "över 50 smarriga sommarrecept" i Sommarboosten så menar jag verkligen smarriga. 
                  Mat som barnen äter utan protester, du längtar efter att laga, och gästerna blir imponerade av.
                </p>
              </div>
            </section>

            <section className="bg-coral/10 rounded-2xl p-8 border border-coral/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Redo för en sommar utan dåligt samvete?
              </h2>
              <p className="text-lg mb-6">
                Föreställ dig en sommar där du äter glass utan att räkna kalorier, njuter av grillkvällar utan att känna skuld, och kommer hem från restaurangbesök och känner dig nöjd, inte övermätt.
              </p>
              <p className="mb-8">
                Det är inte bara möjligt. Det är så det ska vara.
              </p>
              
              <div className="text-center">
                <Link to="/quiz">
                  <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-8 py-4 mr-4 mb-4">
                    Upptäck din matglädje
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
                Kram,<br />
                Charlotte
              </p>
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NutritionArticlePage;
