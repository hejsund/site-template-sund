
import React, { useEffect } from 'react';
import { ArrowLeft, Trophy, Target, Zap, Users, Clock, Calendar, Dumbbell, Star, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TrainingArticlePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Header */}
      <section className="py-8 sm:py-12 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
        </div>
      </section>

      <article className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Dumbbell className="inline w-4 h-4 mr-2" />
              Träning & Motivation
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary mb-6 font-display leading-tight">
              Sommarträning som du faktiskt längtar efter
            </h1>
            <p className="text-lg text-green-700 italic font-text mb-8">
              Av Charlotte Steinwig
            </p>
            
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 aspect-[5/4]">
              <img 
                src="/lovable-uploads/b421d335-bc7b-4b5b-8e07-edd16ebbb404.png" 
                alt="Charlotte tränar utomhus med ett stort leende - sommarglädje och träning"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none font-text text-green-800 space-y-8">
            <div className="text-xl leading-relaxed">
              <p>"Men Charlotte, hur ska jag få till träningen i sommar när jag inte har tillgång till gymmet?"</p>
            </div>

            <p className="text-lg leading-relaxed">
              Den frågan får jag varje år. Och varje år svarar jag samma sak: <strong>Träning handlar inte om var du är - det handlar om hur du mår efteråt.</strong>
            </p>

            <p>
              Som fyrbarnsmamma vet jag hur det är. Sommaren innebär inte mindre att göra - oftast mer. Semesterresor, aktiviteter med barnen, spontana grillkvällar, längre dagar utomhus. Då känns det ännu mer omöjligt att "hinna" med träning.
            </p>

            <p>
              Men vad om jag berättade att träning faktiskt kan ge dig <strong>mer energi</strong> för allt det där roliga? Att det kan vara något du ser fram emot istället för något du "måste" göra?
            </p>

            <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display flex items-center">
                <Star className="mr-3 text-coral" />
                Träningsglädje - vad är det egentligen?
              </h2>
              <p className="mb-4">
                Träningsglädje är inte en myt. Det är inte heller något som bara "naturligt sportig" personer upplever. Det är något som vi alla kan hitta - men vi letar ofta på fel ställen.
              </p>
              <p className="mb-4">
                Vi har lärt oss att träning ska:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Vara jobbigt för att "fungera"</li>
                <li>Bränna mest möjliga kalorier</li>
                <li>Få oss att bli blöta av svett</li>
                <li>Vara en plikt vi genomlider</li>
              </ul>
              <p className="text-xl font-semibold text-coral">
                Men vad om det inte alls behöver vara så?
              </p>
            </section>

            {/* More Sections */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-gradient-to-br from-coral/10 to-coral/20 p-6 rounded-2xl border border-coral/30">
                <div className="aspect-[5/4] mb-4">
                  <img 
                    src="/lovable-uploads/c5f0a385-0490-44d7-abc2-0aede77986a4.png" 
                    alt="Charlotte ler vid vattnet - naturlig sommarglädje och energi"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <h3 className="font-bold text-coral mb-3 font-display">Träning som ger energi</h3>
                <p className="text-sm text-green-700">
                  Träningsglädje hittar du när träning känns som energi IN istället för energi ut. När du kliver av din matta och tänker: "Fy fan vad bra jag mår nu!"
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple/10 to-purple/20 p-6 rounded-2xl border border-purple/30">
                <div className="aspect-[5/4] mb-4">
                  <img 
                    src="/lovable-uploads/fa62a6e9-56ca-4997-8b40-17604a32e215.png" 
                    alt="Charlotte hemma i vardagen - träning som passar in i livet"
                    className="w-full h-full object-cover object-top rounded-xl"
                  />
                </div>
                <h3 className="font-bold text-purple mb-3 font-display">Hemmaträning som funkar</h3>
                <p className="text-sm text-green-700">
                  Med fyra barn är vårt hem inte direkt en träningsidyll. Men det är faktiskt en fördel - träning måste fungera i verkligheten.
                </p>
              </div>
            </div>

            <section className="bg-gradient-to-r from-green-100 to-green-200 rounded-2xl p-8 border border-green-300">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Hemmaträning som faktiskt funkar
              </h2>
              <p className="mb-6">
                "Men jag har bara en liten yta hemma..." "Jag kan inte träna när barnen är hemma..." "Jag har ingen utrustning..."
              </p>
              <p className="mb-6">
                Jag förstår. Jag har också varit där. Men hemmaträning som funkar på riktigt måste vara:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="text-primary w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary font-display">Flexibelt i tid</h4>
                      <p className="text-sm text-green-700">Ibland har du 45 minuter. Ibland bara 5 minuter medan pastan kokar.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Users className="text-primary w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary font-display">Familjevänligt</h4>
                      <p className="text-sm text-green-700">Om du har barn hemma ska de kunna vara med eller åtminstone inte störas.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Heart className="text-coral w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold text-coral font-display">Flexibelt i intensitet</h4>
                      <p className="text-sm text-green-700">Vissa dagar orkar du ge allt. Andra dagar räcker det med att sträcka på dig.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Star className="text-purple w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-bold text-purple font-display">Flexibelt i utrymme</h4>
                      <p className="text-sm text-green-700">Vardagsrummet, altanen, sovrummet - kroppen bryr sig inte om platsen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Beach Scene */}
            <div className="my-12">
              <div className="aspect-[5/4] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/db3c75e8-d40b-4560-88c4-76cbd1a82f05.png" 
                  alt="Sommarkväll vid stranden med glass och choklad - balans och njutning"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <p className="text-center text-sm text-green-600 mt-3 italic">
                Träning och njutning behöver inte utesluta varandra - det här är sommarbalans på riktigt.
              </p>
            </div>

            <section className="bg-coral/10 rounded-2xl p-8 border border-coral/20">
              <h2 className="text-3xl font-bold text-primary mb-6 font-display">
                Redo att hitta din träningsglädje i sommar?
              </h2>
              <p className="text-lg mb-6">
                Jag har hjälpt tusentals personer hitta sin träningsglädje genom åren. Och varje sommar ser jag samma förvandling: från "jag måste träna" till "jag längtar efter min träning."
              </p>
              <p className="mb-8">
                Det är inte bara möjligt för dig också - det är troligt. Du behöver bara rätt verktyg och stöd för att komma dit.
              </p>
              
              <div className="text-center">
                <Link to="/quiz">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-4 mr-4 mb-4">
                    Ta vårt quiz - hitta din väg
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

export default TrainingArticlePage;
