
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, ArrowLeft, Brain, Scale, Smile } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { FooterSection } from '@/components/FooterSection';
import { supabase } from '@/integrations/supabase/client';

const StressManagementArticlePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      // Save email to Supabase
      const { error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email,
          source: 'stress_management_article',
          ip_address: null,
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error saving email:', error);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      toast.success('Tack! Du kommer att höra från oss snart! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      {/* Header with improved spacing and typography */}
      <header className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/artiklar" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium mb-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-2 -m-2">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold text-base">Stresshantering</span>
            <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">10 min läsning</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-800 mb-8 font-display leading-tight">
            Stresshantering i sommartempo
          </h1>
          
          <p className="text-lg sm:text-xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl">
            Lär dig hantera sommarens stress och krav på avkoppling. Balansera aktivitet med vila för en sommarsemester som verkligen laddar batterierna.
          </p>
        </div>
      </header>

      {/* Hero Image with improved accessibility */}
      <div className="px-4 sm:px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/beb03c50-e7f5-4672-9b76-966508f8fcbf.png" 
              alt="Avslappnad stund med vin och god mat - illustration av balanserat sommarliv"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content with improved typography and spacing */}
      <article className="px-4 sm:px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl border border-white/20">
            
            <div className="prose prose-lg prose-green max-w-none">
              <p className="text-xl text-green-700 font-text font-medium mb-8 italic border-l-4 border-indigo-400 pl-6 bg-indigo-50 p-6 rounded-lg">
                "Men Charlotte, jag blir ju mer stressad av att träna på semestern! Jag ska väl slappa av?"
              </p>
              
              <p className="text-lg mb-6 leading-relaxed">
                Den kommentaren får jag varje år när sommaren närmar sig. Och jag förstår den så väl.
              </p>
              
              <p className="text-lg mb-8 leading-relaxed">
                Vi har lärt oss att sommaren ska vara antingen total vila eller total aktivitet. Men som fyrbarnsmamma har jag lärt mig att verkligheten ser annorlunda ut.
              </p>

              <div className="bg-indigo-50 border-2 border-indigo-200 p-8 my-12 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Scale className="w-8 h-8 text-indigo-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-indigo-800 font-display m-0">Det handlar om balans</h3>
                </div>
                <p className="text-lg text-indigo-700 m-0 leading-relaxed">
                  Det handlar inte om att välja mellan vila och aktivitet. Det handlar om att hitta rätt balans för just DIG.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Varför sommaren kan vara stressande</h2>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-10 font-display">Förväntningar på "perfekt" semester</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Media och sociala medier fylls av bilder på perfekta semestrar. Det skapar press på att din semester också ska vara magisk varje sekund.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">Rutiner försvinner</h3>
              <p className="text-lg mb-6 leading-relaxed">
                Plötsligt är allt annorlunda. Andra tider för mat, sömn och aktiviteter. För många skapar detta mer stress än avkoppling.
              </p>

              <h3 className="text-2xl font-bold text-green-700 mb-4 mt-8 font-display">Social press att "koppla av"</h3>
              <p className="text-lg mb-8 leading-relaxed">
                "Du ska väl bara vila nu!" säger alla. Men för någon som mår bra av struktur kan total avkoppling faktiskt vara stressande.
              </p>

              <div className="bg-green-50 border-2 border-green-200 p-8 my-12 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-green-800 font-display m-0">Vad din hjärna behöver</h3>
                </div>
                <p className="text-lg text-green-700 m-0 leading-relaxed">
                  Din hjärna behöver faktiskt en viss mängd stimulans för att må bra. Total brist på utmaningar kan leda till letargi och depression.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Hitta din balans</h2>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Smile className="w-6 h-6 text-blue-600" />
                    <h4 className="text-xl font-bold text-blue-800 font-display m-0">Om du mår bra av struktur</h4>
                  </div>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li>Behåll några fasta punkter i dagen</li>
                    <li>Planera in aktiviteter du ser fram emot</li>
                    <li>Sätt mål för semestern (men håll dem enkla)</li>
                    <li>Skapa nya rutiner för semesterlivet</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-purple-600" />
                    <h4 className="text-xl font-bold text-purple-800 font-display m-0">Om du behöver vila</h4>
                  </div>
                  <ul className="text-purple-700 space-y-2 text-sm">
                    <li>Tillåt dig att sova längre vissa dagar</li>
                    <li>Säg nej till aktiviteter som känns påtvingade</li>
                    <li>Gör saker i ditt eget tempo</li>
                    <li>Lyssna på vad din kropp behöver varje dag</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Praktiska verktyg för sommaren</h2>

              <div className="space-y-8">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-orange-800 mb-3 font-display">Morgonrutinen som anpassar sig</h4>
                  <p className="text-orange-700 mb-4">Skapa en flexibel morgonrutin som funkar oavsett var du är:</p>
                  <ul className="text-orange-700 space-y-1 text-sm">
                    <li>5 minuters andning eller stretching</li>
                    <li>Ett glas vatten</li>
                    <li>Tänk på tre saker du ser fram emot idag</li>
                  </ul>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-teal-800 mb-3 font-display">Kvällsreflektion</h4>
                  <p className="text-teal-700 mb-4">Avsluta dagen med att reflektera istället för att scrolla:</p>
                  <ul className="text-teal-700 space-y-1 text-sm">
                    <li>Vad var bäst med dagens?</li>
                    <li>Vad lärde jag mig?</li>
                    <li>Vad ser jag fram emot imorgon?</li>
                  </ul>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-400 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-pink-800 mb-3 font-display">Energigivande aktiviteter</h4>
                  <p className="text-pink-700 mb-4">Aktiviteter som ger dig energi istället för att ta den:</p>
                  <ul className="text-pink-700 space-y-1 text-sm">
                    <li>Promenader utan mål</li>
                    <li>Läsa något som inspirerar dig</li>
                    <li>Lyssna på musik som får dig på gott humör</li>
                    <li>Korta träningspass som känns som lek</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">När semestern känns överväldigande</h2>

              <p className="text-lg mb-6 leading-relaxed">
                Ibland kan även semester kännas stressigt. Här är strategier för olika situationer:
              </p>

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-red-800 mb-3">Om du känner dig rastlös</h4>
                <p className="text-red-700 text-sm">
                  Du är van vid att vara aktiv och nu känns det konstigt att "bara" vila. Lägg till mjuk struktur - promenader, lätt träning, kreativa projekt.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-yellow-800 mb-3">Om du känner dig skyldig för att vila</h4>
                <p className="text-yellow-700 text-sm">
                  Kom ihåg att vila är produktivt. Din hjärna och kropp behöver återhämtning för att fungera optimalt när du kommer tillbaka.
                </p>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-bold text-indigo-800 mb-3">Om du känner FOMO (fear of missing out)</h4>
                <p className="text-indigo-700 text-sm">
                  Sociala medier visar bara höjdpunkterna. Kom ihåg att alla behöver olika saker för att må bra, och din semester behöver inte se ut som någon annans.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8 mt-12 font-display">Komma hem starkare</h2>

              <p className="text-lg mb-8 leading-relaxed">
                Målet med sommaren är inte att komma hem perfekt avslappnad (vad nu det skulle betyda). Målet är att komma hem som en starkare, gladare version av dig själv.
              </p>

              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl border border-green-200">
                <h3 className="text-2xl font-bold text-green-800 mb-4 font-display text-center">Din perfekta sommar innehåller:</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">⚖️</div>
                    <h4 className="font-bold text-green-700 mb-2">Balans</h4>
                    <p className="text-sm text-green-600">Mellan aktivitet och vila</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">❤️</div>
                    <h4 className="font-bold text-green-700 mb-2">Självkännedom</h4>
                    <p className="text-sm text-green-600">Du vet vad DU behöver</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🌟</div>
                    <h4 className="font-bold text-green-700 mb-2">Flexibilitet</h4>
                    <p className="text-sm text-green-600">Anpassa efter situationen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Email Signup */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-indigo-200 p-8 sm:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-black mb-6 font-display text-indigo-800 text-center">
              Stresshanteringstips för sommaren! 🌊✨
            </h3>
            <p className="text-base sm:text-lg mb-8 text-green-700 font-text text-center leading-relaxed">
              Få våra bästa strategier för att hantera sommaren på ditt sätt - oavsett om du behöver mer struktur eller mer vila.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-lg mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base rounded-xl border-2 border-indigo-300 bg-white text-green-800 focus:border-indigo-500 focus:ring-indigo-500"
                required
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="bg-indigo-600 text-white hover:bg-indigo-700 h-12 w-full sm:w-auto text-base px-8 rounded-xl font-semibold transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Skickar...' : 'Skicka tips! 📧'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-8 text-green-800 font-display leading-tight">
            Redo för en sommar i perfekt balans? 🌸
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Ta vårt quiz
              </Button>
            </Link>
            <Link to="/om-sommarboosten">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
                Läs mer om Sommarboosten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use the new consolidated FooterSection */}
      <FooterSection />
    </div>
  );
};

export default StressManagementArticlePage;
