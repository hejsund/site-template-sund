
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, ArrowLeft, Heart, Calendar, Users, Star, Trophy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { FooterSection } from '@/components/FooterSection';
import { supabase } from '@/integrations/supabase/client';

const SaHarBorjadeDetPage = () => {
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
          source: 'sa_har_borjade_det',
          ip_address: null,
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error saving email:', error);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      toast.success('Tack! Du kommer att höra från oss snart med mer information! 🌟');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-purple/5 to-green-300/10"></div>
          <Sparkles className="absolute top-10 right-10 text-coral opacity-20 animate-float" size={60} aria-hidden="true" />
          <Heart className="absolute top-20 left-10 text-coral opacity-20 animate-float" size={40} style={{ animationDelay: '1s' }} aria-hidden="true" />
          <Calendar className="absolute bottom-20 right-20 text-purple opacity-20 animate-float" size={50} style={{ animationDelay: '2s' }} aria-hidden="true" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
              Vi skapade Sommarboosten
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-green-700 max-w-3xl mx-auto leading-relaxed font-text mb-8">
              – för din bästa sommar någonsin
            </p>
            <div className="text-4xl opacity-80" aria-hidden="true">🌟💫✨</div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white p-1">
              <img 
                src="/lovable-uploads/67cd34f1-1979-42e6-b2da-6f8f6f298078.png" 
                alt="Charlotte och hennes partner njuter av en stund tillsammans"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white p-1">
              <img 
                src="/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png" 
                alt="Celebrering med champagne och glädje"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white p-1">
              <img 
                src="/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png" 
                alt="Härlig måltid med nektarin på bröd"
                className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-green-200/50">
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8 leading-tight">Hej, jag heter Charlotte och tillsammans med mitt team på Sund & Stark skapade vi Sommarboosten</h2>
              
              <div className="text-lg sm:text-xl text-green-700 font-text leading-relaxed mb-8 p-6 bg-green-50 rounded-2xl border-l-4 border-green-600">
                Som fyrbarnsmamma och grundare av <strong>Sund & Stark</strong> vet jag hur det känns när sommaren närmar sig och panikens påverkar sätter in. "Ska jag verkligen kunna hålla igång träningen när barnen är hemma?" "Hur ska jag få till hälsosamma vanor när allt är kaos och grillmys?"
              </div>
              
              <p className="text-lg leading-relaxed mb-6">
                För fem år sedan stod jag själv med samma frågor. Jag var trött på att se sommaren som den tid då "allt går åt helvete" hälsomässigt. Varför skulle den mest ljusa, energigivande tiden på året bli en period där vi kämpar istället för att blomstra?
              </p>

              <div className="bg-coral/10 border-l-4 border-coral p-8 my-12 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8 text-coral" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-coral">Det var då idén om Sommarboosten föddes</h3>
                </div>
                <p className="text-coral font-medium font-text text-lg mb-0 leading-relaxed">
                  Sommarboosten skapades ur en enkel men kraftfull insikt: <strong>Sommaren ska ge dig energi, inte ta den från dig.</strong>
                </p>
              </div>

              <div className="bg-coral/10 border-l-4 border-coral p-8 my-12 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <Heart className="w-8 h-8 text-coral" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-coral">Varför Sommarboosten blev till</h3>
                </div>
                <p className="text-coral font-medium font-text text-lg mb-0 leading-relaxed">
                  Sommarboosten skapades ur en enkel men kraftfull insikt: <strong>Sommaren ska ge dig energi, inte ta den från dig.</strong>
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Som licenserad personlig tränare, kostrådgivare och mamma mitt i livet förstår jag att hälsa inte kan vara något som bara funkar under perfekta omständigheter. Den måste fungera när livet är rörigt, när schema ändras, när barn är hemma, när spontana grillkvällar dyker upp.
              </p>

              <div className="bg-primary/10 p-8 rounded-2xl my-8 border border-primary/20">
                <p className="text-primary font-semibold text-xl leading-relaxed mb-0">
                  Vi skapade därför inte bara ett träningsprogram – vi skapade en livsstil som anpassar sig efter DIG.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-8">
                Sommarboosten är resultatet av fem års erfarenhet tillsammans med tusentals familjer som alla ville samma sak: att må bra, ha energi och njuta av sommaren utan att känna att de "sabbade" något.
              </p>

              <h2 className="flex items-center gap-4 text-green-800 text-3xl font-bold mb-8">
                <Sparkles className="w-10 h-10 text-orange-500" aria-hidden="true" />
                Min personliga mission
              </h2>

              <p className="text-lg leading-relaxed mb-6">
                Som din guide genom Sommarboosten finns jag här av en enkel anledning: <strong className="text-coral">Jag brinner för att hjälpa människor hitta balansen mellan att ha kul och att må bra.</strong>
              </p>

              <p className="text-lg leading-relaxed mb-8">
                Efter 15 år som tränare har jag lärt mig att hållbar förändring inte kommer från perfekta planer eller järndisciplin. Den kommer från små, roliga steg som känns naturliga i DIN vardag.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-8 rounded-2xl my-12 border border-purple-200">
                <h3 className="text-purple-800 mb-6 flex items-center gap-3 text-xl font-bold">
                  <Users className="w-8 h-8" aria-hidden="true" />
                  Genom Sommarboosten vill jag:
                </h3>
                <ul className="text-green-700 leading-relaxed space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span>Visa dig att träning kan vara något du längtar efter istället för något du måste genomlida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span>Hjälpa dig upptäcka att hälsosam mat kan vara både god och spontan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span>Guida dig till vanor som håller hela livet, inte bara sommaren</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold text-xl">•</span>
                    <span>Bevisa att du kan njuta av glass, grillkvällar och after work SAMTIDIGT som du mår bättre än någonsin</span>
                  </li>
                </ul>
              </div>

              <div className="bg-coral/10 p-8 rounded-2xl my-8 border border-coral/20">
                <p className="text-coral font-semibold text-xl leading-relaxed mb-0">
                  Jag kommer vara med dig hela vägen – genom tips, pepp, svar på frågor och påminnelser om att du är mycket starkare än du tror.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8">Vad gör oss olika</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary text-xl">Vi skapade originalet.</strong> Sommarboosten var det första dedikerade sommarträningsprogrammet i Sverige, och vi har fem års erfarenhet av att hjälpa människor genom just dessa utmaningar. Idag finns det många som erbjuder liknande program, vilket vi ser som något positivt - fler människor får hjälp att må bra på sommaren.
                  </p>
                </div>

                <div className="bg-coral/5 p-6 rounded-xl border-l-4 border-coral">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-coral text-xl">Vi förstår verkligheten.</strong> Det här är inte skapat av någon som lever i en bubble utan av en helt vanlig fyrbarnsmamma som jonglerar jobb, familj, hälsa och allt däremellan. Varje tips, varje recept, varje träningspass är testat i mitt eget kaotiska liv.
                  </p>
                </div>

                <div className="bg-purple/5 p-6 rounded-xl border-l-4 border-purple">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-purple text-xl">Vi tror på träningsglädje.</strong> Medan andra fokuserar på kaloriförbränning och perfekta resultat fokuserar vi på att hitta glädjen i rörelse. För när träning känns bra så fortsätter du. Enkelt.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-orange-600 text-xl">Vi säger inga förbud.</strong> Du kommer aldrig höra oss säga att du inte får äta glass eller att grillkvällar är "fusk." Vi tror att allt har sin plats i en hälsosam livsstil – det handlar bara om balans.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8">Tillsammans skapar vi din bästa sommar</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                När du går med i Sommarboosten blir du del av något större än ett träningsprogram. Du blir del av en community av människor som förstår att:
              </p>

              <ul className="text-green-700 space-y-4 text-lg mb-12">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>Hälsa ska vara roligt, inte stressande</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>Familjetid är viktigare än perfekta träningspass</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>Små steg leder till stora förändringar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl">•</span>
                  <span>Du förtjänar att må bra precis som du är</span>
                </li>
              </ul>

              <div className="bg-green-50 p-8 rounded-2xl my-12 border border-green-200">
                <h3 className="text-green-800 mb-6 text-2xl font-bold">Ett starkt team bakom kulisserna</h3>
                <p className="text-green-700 leading-relaxed text-lg mb-6">
                  Tillsammans med mitt team på <strong>Sund & Stark</strong> - och framför allt min partner Rickard som ansvarar för all teknik bakom kulisserna - har vi skapat något som tusentals familjer nu ser fram emot varje år.
                </p>
                <p className="text-green-700 leading-relaxed text-lg">
                  <strong>Våra roller är tydligt uppdelade:</strong> Jag sköter allt som rör träning, coaching och deltagarkontakt, medan Rickard säkerställer att all teknik, plattformar och system fungerar smidigt. Han är den som gör det möjligt för mig att fokusera helt på det jag brinner för - att hjälpa dig nå dina mål.
                </p>
              </div>

              <div className="bg-primary/10 p-8 rounded-2xl my-8 border border-primary/20">
                <p className="text-primary font-semibold text-xl leading-relaxed mb-0">
                  Tillsammans har vi bevisat att sommaren kan vara både den roligaste OCH den hälsosammaste tiden på året.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-green-800 mb-8">Redo för din bästa sommar?</h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Jag tror på dig. Jag tror på din förmåga att skapa förändringar som håller. Jag tror på att du förtjänar en sommar där du både har kul OCH mår fantastisk.
              </p>
              
              <div className="bg-coral/10 p-8 rounded-2xl my-8 border border-coral/20">
                <p className="text-coral font-semibold text-xl leading-relaxed mb-4">
                  Sommarboosten väntar på dig. Och jag kommer vara där hela vägen för att peppa, stötta och påminna dig om hur stark du är.
                </p>
                <p className="text-green-800 text-2xl font-medium mb-0">
                  Låt oss göra den här sommaren till din bästa någonsin – tillsammans.
                </p>
              </div>

              <div className="text-center my-12 p-8 bg-gradient-to-r from-coral/10 to-purple/10 rounded-2xl border border-coral/20">
                <p className="italic text-xl text-green-800 mb-3">Kram,</p>
                <p className="font-bold text-3xl text-primary mb-3">Charlotte</p>
                <p className="text-lg text-green-600 mt-3">Grundare, Sund & Stark</p>
                <p className="text-lg text-green-600">Skapare av Sommarboosten</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-green-300 p-8 sm:p-12 rounded-3xl text-primary mb-12 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl mb-6" aria-hidden="true">🌞</div>
              <h3 className="text-2xl sm:text-3xl font-black mb-6 font-display text-green-800">
                Välkommen till din bästa sommar
              </h3>
              <p className="text-lg sm:text-xl mb-8 text-green-700 font-text leading-relaxed">
                Redo att börja? Anmäl ditt intresse så hör vi av oss när nästa kapitel börjar!
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <Input
                  type="email"
                  placeholder="Din e-postadress..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 text-lg rounded-2xl border-2 border-green-300 bg-white text-green-800 focus:border-green-500 focus:ring-green-500"
                  required
                  disabled={isSubmitting}
                  aria-label="E-postadress för intresseanmälan"
                />
                <Button 
                  type="submit" 
                  className="bg-green-600 text-white hover:bg-green-700 h-14 w-full sm:w-auto text-lg px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Anmäl intresse ✨'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <Link to="/quiz" className="inline-block">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Ta vårt quiz för personlig vägledning
              </Button>
            </Link>
            <p className="text-lg text-green-600 font-text">
              Eller utforska mer om <Link to="/om-sommarboosten" className="text-green-700 hover:underline font-medium underline-offset-4">Sommarboosten</Link>
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default SaHarBorjadeDetPage;
