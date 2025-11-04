
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Trophy, Star, ArrowLeft, Clock, User } from 'lucide-react';

const FirstArticlePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-coral-50">
      {/* Header */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-orange" />
              <span className="text-sm font-semibold text-orange">Historia & pionjärskap</span>
              <div className="flex items-center gap-1 text-green-600 text-xs ml-auto">
                <Clock className="w-3 h-3" />
                <span>12 min läsning</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 font-display leading-tight">
              Vi var först med Program Name - och vi är så stolta över det
            </h1>
            
            <div className="flex items-center gap-3 mb-8 text-green-700">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Av Instructor Name Steinwig</span>
            </div>
            
            <div className="aspect-video mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/f60c9ef3-2146-4344-ba07-04c19de24beb.png" 
                alt="Instructor Name vid strand med handduk"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none font-text text-green-800 space-y-6">
              <div className="text-xl mb-8">
                <p>För fem år sedan gjorde jag något som folk tyckte var galet.</p>
              </div>

              <p>
                Jag lanserade ett träningsprogram specifikt för sommaren. Folk sa: "Men Instructor Name, sommaren är väl för vila? Vem vill träna då?"
              </p>

              <p>
                Idag, när jag ser hur många som erbjuder "sommarprogram" och "sommarträning" så kan jag inte låta bli att le. Vi var först. <strong>Program Name var det allra första dedikerade sommarträningsprogrammet i Sverige.</strong>
              </p>

              <p>Och jag är så himla stolt över det.</p>

              <section className="bg-gradient-to-br from-orange/10 to-coral/20 rounded-2xl p-8 my-12 shadow-lg border border-orange/20">
                <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                  <Star className="mr-3 text-orange" />
                  Historien bakom Program Name
                </h2>
                <p>
                  Det började egentligen med min egen frustration. Som fyrbarnsmamma märkte jag att sommaren alltid blev den tid då allt "gick åt helvete" hälsomässigt.
                </p>
                <p>
                  Gymmet stängde för renovering. Barnens schema förändrades. Vi åkte på semester. Spontana grillkvällar blev normen. Och jag, precis som alla andra, tänkte: "Äsch, jag börjar om i augusti."
                </p>
                <p>
                  Men en dag, när jag satt där med min tredje glass den veckan och kände mig sunkig, tänkte jag: <strong>"Varför måste det vara så här? Varför kan inte sommaren vara en tid då jag mår BRA?"</strong>
                </p>
              </section>

              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                När andra började följa efter
              </h2>
              <p>
                Det första året var vi ensamma. Folk tittade konstigt på mig när jag pratade om "sommarträning." Sommaren var för vila, sa de. För att släppa allt, sa de.
              </p>
              <p>
                År två började några andra tränare höra av sig. "Hur gör du det där med sommaren?" "Kan du berätta mer om din approach?"
              </p>
              <p>
                År tre såg jag de första "sommarkurserna" dyka upp hos andra aktörer.
              </p>
              <p>
                År fyra var "sommarträning" ett etablerat begrepp.
              </p>
              <p>
                Och i år? Nu verkar det som om alla har ett "sommarprogram."
              </p>
              <p>
                <strong>Och vet ni vad? Jag tycker det är fantastiskt.</strong>
              </p>

              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Varför jag är glad att andra följer efter
              </h2>
              <p>
                När jag ser att andra tränare, PT:s och hälsocoacher nu erbjuder sommarprogram så blir jag genuint glad. För det betyder att:
              </p>
              <ul className="space-y-2 text-green-800">
                <li><strong>Fler människor får hjälp.</strong> Det var alltid det som var viktigast. Att folk skulle slippa känna att sommaren förstör deras hälsoresultat.</li>
                <li><strong>Vår approach fungerar.</strong> När andra kopierar dig betyder det att du var på rätt spår från början.</li>
                <li><strong>Branschens syn på sommaren förändras.</strong> Från "sommaren är för att sabbata" till "sommaren kan vara hälsosam och rolig samtidigt."</li>
                <li><strong>Innovation fortsätter.</strong> När fler arbetar med samma utmaning så utvecklas lösningarna. Vi alle lär oss av varandra.</li>
              </ul>

              <section className="bg-gradient-to-br from-coral/10 to-purple/20 rounded-2xl p-8 my-12 border border-coral/20">
                <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                  Vad som fortfarande gör Program Name unik
                </h2>
                <p>
                  Men även om jag är glad att andra följer efter, så vet jag att Program Name fortfarande är något alldeles speciellt. För när du har fem års erfarenhet av att hjälpa tusentals människor genom just denna utmaning, så lär du dig saker som andra inte vet än.
                </p>
                
                <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">Vi började från grunden</h3>
                <p>
                  Program Name är inte ett vanligt träningsprogram som "anpassats för sommaren." Det är byggt från grunden för sommarens unika utmaningar: semesterresor, spontana planer, barn hemma från skolan, varmt väder, festivaler, grillkvällar.
                </p>
                
                <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">Vi förstår den psykologiska biten</h3>
                <p>
                  Efter fem år vet vi exakt vilka mentala blockeringar som dyker upp vecka två. Vi vet när homesickness träffar på semestern och hur det påverkar vanorna. Vi vet hur man hanterar FOMO när alla andra verkar "bara koppla av."
                </p>
                
                <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">Vi lever som vi lär</h3>
                <p>
                  Jag är inte en tränare som bara "säljer" sommarträning. Jag ÄR en fyrbarnsmamma som verkligen lever det här livet. Varje recept, varje träningspass, varje tips - det är testat i min egen rörliga vardag.
                </p>
              </section>

              <section className="bg-gradient-to-br from-purple/10 to-orange/20 rounded-2xl p-8 my-12 border border-purple/20">
                <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                  <Heart className="mr-3 text-purple" />
                  Till dig som funderar på Program Name
                </h2>
                <p>
                  Du behöver inte välja oss för att vi var först. Du ska välja oss för att vi fortfarande är bäst på det vi gör.
                </p>
                <p>
                  Vi har femårig erfarenhet av exakt de utmaningar du kommer möta. Vi har hjälpt tusentals människor genom precis den resa du står inför. Vi vet vad som funkar - och vad som inte funkar.
                </p>
                <p>
                  Men framför allt: <strong>vi bryr oss fortfarande lika mycket som dag ett.</strong>
                </p>
                <p>
                  Varje sommar när jag ser våra deltagare komma tillbaka starkare, gladare och mer balanserade än de åkte - då känner jag samma glädje som första året.
                </p>
                <p>
                  Det är därför vi gör det här. Inte för att vi var först, utan för att vi aldrig tappat känslan av varför vi började.
                </p>
              </section>

              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-orange via-coral to-purple p-8 rounded-2xl text-warm-contrast mb-8">
                  <h2 className="text-2xl font-black mb-4 font-display">
                    🏆 ORIGINALET SEDAN 2020 🏆
                  </h2>
                  <p className="mb-6 opacity-90">
                    Bli en del av det ursprungliga sommarträningsprogrammet och upptäck varför tusentals människor väljer Program Name år efter år.
                  </p>
                  <div className="space-y-4">
                    <Link to="/quiz">
                      <Button className="bg-white text-primary hover:bg-green-50 px-8 py-4 mr-4 rounded-xl font-semibold text-lg">
                        Gör vårt quiz först
                      </Button>
                    </Link>
                    <Link to="/om-program-name">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg">
                        Läs mer om Program Name
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <footer className="text-center pt-8 border-t border-green-200">
                <p className="font-text italic">
                  Följ oss på @yoursite - pionjärerna inom sommarträning sedan 2020.<br />
                  Kram,<br />
                  Instructor Name
                </p>
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default FirstArticlePage;
