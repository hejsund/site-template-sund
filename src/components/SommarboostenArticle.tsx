
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, Sparkles } from 'lucide-react';

export const SommarboostenArticle = () => {
  return (
    <article className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 font-display">
            Sommarboosten - Vårt mest älskade sommarprogram
          </h1>
          <p className="text-lg text-green-700 italic font-text">
            Av Charlotte Steinwig
          </p>
        </header>

        <div className="prose prose-lg max-w-none font-text text-green-800 space-y-6">
          <div className="text-xl mb-8">
            <p>Hej kära vän! 💫</p>
          </div>

          <p>
            Varje år när sommaren närmar sig kommer samma frågor: "Hur ska jag få till träningen i sommar?" 
            "Kan jag verkligen njuta av grillkvällar och glass utan att sabba allt?" "Måste jag välja mellan 
            att ha kul eller att vara hälsosam?"
          </p>

          <p>
            Och varje år svarar jag samma sak: <strong>Du behöver inte välja!</strong>
          </p>

          <p>
            Det är därför vi skapade Sommarboosten - <strong>sommarens roligaste träningsprogram</strong> och 
            vårt absolut mest populära program någonsin som nu går in på sitt femte år. Ett program som 
            fokuserar på <strong>träningsglädje</strong> och att hitta den där känslan som får dig att 
            längta efter nästa pass istället för att tvinga dig.
          </p>

          <section className="bg-white rounded-2xl p-8 my-12 shadow-lg border border-green-100">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
              <Sparkles className="mr-3 text-coral" />
              Träningsglädje - vad är det egentligen?
            </h2>
            <p>
              Träningsglädje handlar inte om att bli svettig och flåsig (även om det kan hända!). Det handlar 
              om att hitta den där känslan när träning känns som <strong>energi in</strong> istället för energi ut. 
              När du ser fram emot ditt pass istället för att se det som en plikt.
            </p>
            <p>
              I Sommarboosten fokuserar vi på att hitta DIN träningsglädje. För vissa är det en lugn yogapass 
              på altanen. För andra är det att dansa loss till 90-talsmusik i vardagsrummet. Och för en tredje 
              kanske det är styrketräning som får en att känna sig som en krigare.
            </p>
            <p>
              Målet är inte att hitta "rätt" sätt att träna. Målet är att hitta <strong>ditt</strong> sätt.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-primary mb-6 font-display">
            Varför blir folk så kära i Sommarboosten?
          </h2>
          <p>
            Enkelt - för att det fungerar i verkligheten. Inte i teorin, inte i någon perfekt värld, utan i 
            ditt riktiga liv med spontana grillkvällar, semesterresor och barn som vill ha glass.
          </p>
          <p>
            Vi tror inte på att göra radikala förändringar på sommaren. Istället handlar Sommarboosten om att 
            skapa <strong>goda kostvanor</strong> och fokusera på <strong>träning som blir av</strong> - 
            oavsett var du är eller vad som händer.
          </p>

          <section className="bg-coral/10 rounded-2xl p-8 my-12 border border-coral/20">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display">
              Vad ingår i Sommarboosten?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Över 30 träningspass - både med och utan utrustning",
                "Över 50 smarriga somriga recept - perfekta för hela familjen",
                "Träningspass som verkligen blir gjorda - inga ursäkter här!",
                "Mat helt utan förbud - njut av sommaren utan dåligt samvete",
                "Allt samlat i vår app - så enkelt att följa med",
                "Pepp och stöd hela vägen - vi är med dig genom hela resan"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="text-coral flex-shrink-0 mt-1" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <h2 className="text-3xl font-bold text-primary mb-6 font-display">
            Filosofin bakom Sommarboosten
          </h2>
          <p>
            Sommaren ska vara en tid för glädje, avkoppling och njutning. Men det betyder inte att din hälsa 
            behöver ta semester. Sommarboosten bygger på samma filosofi som genomsyrar allt vi gör på Sund och Stark:
          </p>
          <blockquote className="text-2xl font-bold text-center py-8 text-coral italic">
            "Hälsan ska anpassa sig efter ditt liv - inte tvärtom."
          </blockquote>

          <h2 className="text-3xl font-bold text-primary mb-6 font-display">
            Mat utan förbud - så funkar det
          </h2>
          <p>
            Det här är kanske det som deltagarna blir mest förvånade över. Att man faktiskt KAN njuta av 
            grillkvällar, glass och after work-drinkar utan att känna att man saboterat allt.
          </p>
          <p>
            Våra sommarrecept är byggda för flexibilitet: snabba vardagsrätter när det ska gå fort, festligare 
            rätter för grillkvällar, fräscha alternativ för varma dagar, och godisalternativ som är både gott 
            och näringsrikt. Och det bästa? <strong>Hela familjen kommer älska maten.</strong>
          </p>

          <section className="bg-purple/10 rounded-2xl p-8 my-12 border border-purple/20">
            <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
              <Heart className="mr-3 text-purple" />
              Min personliga reflektion
            </h2>
            <p>
              Som fyrbarnsmamma vet jag hur det är. Sommaren är inte en tid då livet stannar upp. Tvärtom - 
              det blir ofta ännu mer kaos med aktiviteter, resor och spontana planer.
            </p>
            <p>
              Men just därför älskar jag Sommarboosten så mycket. Det är skapat av någon (mig!) som lever mitt 
              i kaoset och förstår att hälsa inte kan vara ännu en sak som stresar.
            </p>
            <p>
              Jag har själv gjort resan från "allt eller inget"-tänket till att förstå att balans inte är 
              perfekt - det är flexibelt. Och den resan vill jag dela med dig.
            </p>
          </section>

          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-primary mb-8 font-display">
              Redo för din bästa sommar hittills?
            </h2>
            <div className="space-y-4">
              <Link to="/quiz">
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold text-lg px-8 py-4 mr-4">
                  Gör vårt quiz och hitta din väg
                </Button>
              </Link>
              <Link to="/om-sommarboosten">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-4">
                  Läs mer om Sommarboosten
                </Button>
              </Link>
            </div>
            <p className="text-sm text-green-600 mt-6 font-text">
              Vill du vara första att veta när Sommarboosten öppnar anmälan? 
              Följ oss på Instagram @sundochstark eller anmäl dig till vårt nyhetsbrev.
            </p>
          </div>

          <footer className="text-center pt-8 border-t border-green-200">
            <p className="font-text italic">
              Kram,<br />
              Charlotte
            </p>
          </footer>
        </div>
      </div>
    </article>
  );
};
