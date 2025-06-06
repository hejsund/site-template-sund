
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, ArrowLeft, Heart, Calendar, Users, Star, Trophy } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const SaHarBorjadeDetPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart med mer information! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-purple/5 to-green-300/20"></div>
          <Sparkles className="absolute top-10 right-10 text-coral opacity-20 animate-float" size={60} />
          <Heart className="absolute top-20 left-10 text-coral opacity-20 animate-float" size={40} style={{ animationDelay: '1s' }} />
          <Calendar className="absolute bottom-20 right-20 text-purple opacity-20 animate-float" size={50} style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gradient mb-6 font-display leading-tight">
              Vi skapade Sommarboosten
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700 max-w-3xl mx-auto leading-relaxed font-text mb-8">
              – för din bästa sommar någonsin
            </p>
            <div className="text-3xl opacity-80">🌟💫✨</div>
          </div>
        </div>
      </section>

      {/* Charlotte's Introduction */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/67cd34f1-1979-42e6-b2da-6f8f6f298078.png" 
                alt="Charlotte och hennes partner njuter av en stund tillsammans"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png" 
                alt="Celebrering med champagne och glädje"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png" 
                alt="Härlig måltid med nektarin på bröd"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-green-200/50">
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6">Hej, jag heter Charlotte och tillsammans med mitt team på Sund & Stark skapade vi Sommarboosten</h2>
              
              <p className="lead text-green-700 font-text">
                Som fyrbarnsmamma och grundare av <strong>Sund & Stark</strong> vet jag hur det känns när sommaren närmar sig och panikens påverkar sätter in. "Ska jag verkligen kunna hålla igång träningen när barnen är hemma?" "Hur ska jag få till hälsosamma vanor när allt är kaos och grillmys?"
              </p>
              
              <p>
                För fem år sedan stod jag själv med samma frågor. Jag var trött på att se sommaren som den tid då "allt går åt helvete" hälsomässigt. Varför skulle den mest ljusa, energigivande tiden på året bli en period där vi kämpar istället för att blomstra?
              </p>

              <p className="text-coral font-semibold text-lg">
                Det var då idén om <strong>Sommarboosten</strong> föddes.
              </p>

              <div className="bg-coral/10 border-l-4 border-coral p-6 my-8 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-coral" />
                  <h3 className="text-xl font-bold text-coral">Varför Sommarboosten blev till</h3>
                </div>
                <p className="text-coral font-medium font-text mb-0">
                  Sommarboosten skapades ur en enkel men kraftfull insikt: <strong>Sommaren ska ge dig energi, inte ta den från dig.</strong>
                </p>
              </div>

              <p>
                Som licenserad personlig tränare, kostrådgivare och mamma mitt i livet förstår jag att hälsa inte kan vara något som bara funkar under perfekta omständigheter. Den måste fungera när livet är rörigt, när schema ändras, när barn är hemma, när spontana grillkvällar dyker upp.
              </p>

              <p className="text-primary font-semibold">
                Vi skapade därför inte bara ett träningsprogram – vi skapade en livsstil som anpassar sig efter DIG.
              </p>

              <p>
                Sommarboosten är resultatet av fem års forskning, testning och förfining tillsammans med tusentals familjer som alla ville samma sak: att må bra, ha energi och njuta av sommaren utan att känna att de "sabbade" något.
              </p>

              <h2 className="flex items-center gap-3 text-green-800">
                <Sparkles className="w-8 h-8 text-orange-500" />
                Min personliga mission
              </h2>

              <p>
                Som din guide genom Sommarboosten finns jag här av en enkel anledning: <strong className="text-coral">Jag brinner för att hjälpa människor hitta balansen mellan att ha kul och att må bra.</strong>
              </p>

              <p>
                Efter 15 år som tränare har jag lärt mig att hållbar förändring inte kommer från perfekta planer eller järndisciplin. Den kommer från små, roliga steg som känns naturliga i DIN vardag.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl my-8">
                <h3 className="text-purple-800 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Genom Sommarboosten vill jag:
                </h3>
                <ul className="text-green-700 leading-relaxed space-y-2">
                  <li>• Visa dig att träning kan vara något du längtar efter istället för något du måste genomlida</li>
                  <li>• Hjälpa dig upptäcka att hälsosam mat kan vara både god och spontan</li>
                  <li>• Guida dig till vanor som håller hela livet, inte bara sommaren</li>
                  <li>• Bevisa att du kan njuta av glass, grillkvällar och after work SAMTIDIGT som du mår bättre än någonsin</li>
                </ul>
              </div>

              <p className="text-coral font-semibold text-lg">
                Jag kommer vara med dig hela vägen – genom tips, pepp, svar på frågor och påminnelser om att du är mycket starkare än du tror.
              </p>

              <h2>Vad gör oss olika</h2>

              <p>
                <strong className="text-primary">Vi skapade originalet.</strong> Sommarboosten var det första dedikerade sommarträningsprogrammet i Sverige, och vi har fem års erfarenhet av att hjälpa människor genom just dessa utmaningar. Idag finns det många som erbjuder liknande program, vilket vi ser som något positivt - fler människor får hjälp att må bra på sommaren.
              </p>

              <p>
                <strong className="text-coral">Vi förstår verkligheten.</strong> Det här är inte skapat av någon som lever i en bubble utan av en helt vanlig fyrbarnsmamma som jonglerar jobb, familj, hälsa och allt däremellan. Varje tips, varje recept, varje träningspass är testat i mitt eget kaotiska liv.
              </p>

              <p>
                <strong className="text-purple">Vi tror på träningsglädje.</strong> Medan andra fokuserar på kaloriförbränning och perfekta resultat fokuserar vi på att hitta glädjen i rörelse. För när träning känns bra så fortsätter du. Enkelt.
              </p>

              <p>
                <strong className="text-orange">Vi säger inga förbud.</strong> Du kommer aldrig höra oss säga att du inte får äta glass eller att grillkvällar är "fusk." Vi tror att allt har sin plats i en hälsosam livsstil – det handlar bara om balans.
              </p>

              <h2>Tillsammans skapar vi din bästa sommar</h2>
              
              <p>
                När du går med i Sommarboosten blir du del av något större än ett träningsprogram. Du blir del av en community av människor som förstår att:
              </p>

              <ul className="text-green-700 space-y-2">
                <li>• Hälsa ska vara roligt, inte stressande</li>
                <li>• Familjetid är viktigare än perfekta träningspass</li>
                <li>• Små steg leder till stora förändringar</li>
                <li>• Du förtjänar att må bra precis som du är</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-xl my-8">
                <h3 className="text-green-800 mb-4">Ett starkt team bakom kulisserna</h3>
                <p className="text-green-700 leading-relaxed">
                  Tillsammans med mitt team på <strong>Sund & Stark</strong> - och framför allt min partner Rickard som ansvarar för all teknik bakom kulisserna - har vi skapat något som tusentals familjer nu ser fram emot varje år.
                </p>
                <p className="text-green-700 leading-relaxed mt-4">
                  <strong>Våra roller är tydligt uppdelade:</strong> Jag sköter allt som rör träning, coaching och deltagarkontakt, medan Rickard säkerställer att all teknik, plattformar och system fungerar smidigt. Han är den som gör det möjligt för mig att fokusera helt på det jag brinner för - att hjälpa dig nå dina mål.
                </p>
              </div>

              <p className="text-primary font-semibold text-lg">
                Tillsammans har vi bevisat att sommaren kan vara både den roligaste OCH den hälsosammaste tiden på året.
              </p>

              <h2>Redo för din bästa sommar?</h2>
              
              <p>
                Jag tror på dig. Jag tror på din förmåga att skapa förändringar som håller. Jag tror på att du förtjänar en sommar där du både har kul OCH mår fantastisk.
              </p>
              
              <p className="text-coral font-semibold text-lg">
                Sommarboosten väntar på dig. Och jag kommer vara där hela vägen för att peppa, stötta och påminna dig om hur stark du är.
              </p>

              <p className="text-green-800 text-xl font-medium">
                Låt oss göra den här sommaren till din bästa någonsin – tillsammans.
              </p>

              <div className="text-center my-8 p-6 bg-gradient-to-r from-coral/10 to-purple/10 rounded-xl">
                <p className="italic text-lg text-green-800 mb-2">Kram,</p>
                <p className="font-bold text-xl text-primary">Charlotte</p>
                <p className="text-sm text-green-600 mt-2">Grundare, Sund & Stark</p>
                <p className="text-sm text-green-600">Skapare av Sommarboosten</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 border-2 border-green-300 p-6 sm:p-8 rounded-2xl text-primary mb-8 shadow-lg backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl mb-4">🌞</div>
              <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-green-800">
                Välkommen till din bästa sommar
              </h3>
              <p className="text-sm sm:text-base mb-6 text-green-700 font-text">
                Redo att börja? Anmäl ditt intresse så hör vi av oss när nästa kapitel börjar!
              </p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                <Input
                  type="email"
                  placeholder="Din e-postadress..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-green-300 bg-white text-green-800"
                  required
                />
                <Button type="submit" className="bg-green-600 text-white hover:bg-green-700 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                  Anmäl intresse ✨
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <Link to="/quiz" className="inline-block">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz för personlig vägledning
              </Button>
            </Link>
            <p className="text-sm text-green-600 opacity-80 font-text">
              Eller utforska mer om <Link to="/om-sommarboosten" className="text-green-700 hover:underline font-medium">Sommarboosten</Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaHarBorjadeDetPage;
