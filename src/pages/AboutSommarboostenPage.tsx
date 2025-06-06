import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Sparkles, Sun, Calendar, Users, Target, Dumbbell, Apple } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const AboutSommarboostenPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Tack! Du kommer att höra från oss snart med mer information! 🌟');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-orange-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-purple/10 to-orange/20"></div>
          <Sun className="absolute top-10 right-10 text-orange opacity-20 animate-float" size={60} />
          <Heart className="absolute top-20 left-10 text-coral opacity-20 animate-float" size={40} style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute bottom-20 right-20 text-purple opacity-20 animate-float" size={50} style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient mb-6 font-display leading-tight">
              Vad är Sommarboosten?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700 max-w-3xl mx-auto leading-relaxed font-text mb-8">
              En 4-veckors resa mot en sundare, starkare och gladare version av dig själv. 
              Perfekt för att kickstarta din sommar med energi och glädje!
            </p>
            <div className="text-3xl opacity-80">🌻☀️🌊</div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="text-orange w-8 h-8" />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient font-display">
                  Din drömresa börjar här
                </h2>
              </div>
              <p className="text-base sm:text-lg text-green-700 leading-relaxed font-text mb-6">
                Sommarboosten är inte bara ett träningsprogram – det är en komplett livsstilsförändring 
                som gör hälsa till en naturlig del av din vardag. Under 4 veckor får du verktyg, 
                inspiration och stöd för att skapa varaktiga vanor som håller hela året.
              </p>
              <div className="bg-coral/10 border-l-4 border-coral p-4 rounded-lg">
                <p className="text-sm sm:text-base text-coral font-medium font-text">
                  ✨ "Som fyrbarnsmamma med 15 års erfarenhet av att hjälpa familjer hitta balans, vet jag vad som fungerar i verkligheten - inte bara i teorin."
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-purple w-8 h-8" />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient font-display">
                  Vad ingår i Sommarboosten?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-green-200 p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Dumbbell className="text-green-600 w-6 h-6" />
                    <h3 className="text-lg font-bold text-green-800 font-display">Träning som inspirerar</h3>
                  </div>
                  <p className="text-sm text-green-700 font-text leading-relaxed">
                    15-30 minuters effektiva träningspass som du kan göra hemma eller utomhus. 
                    Ingen utrustning krävs – bara din egen kropp och viljan att röra dig.
                  </p>
                </div>

                <div className="bg-white border border-coral/30 p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Apple className="text-coral w-6 h-6" />
                    <h3 className="text-lg font-bold text-coral font-display">Supergoda recept</h3>
                  </div>
                  <p className="text-sm text-green-700 font-text leading-relaxed">
                    Näringsrika och smakrika recept som tar max 20 minuter att laga. 
                    Perfekta för upptagna dagar när du ändå vill äta hälsosamt och gott.
                  </p>
                </div>

                <div className="bg-white border border-purple/30 p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-purple w-6 h-6" />
                    <h3 className="text-lg font-bold text-purple font-display">Gemenskap & stöd</h3>
                  </div>
                  <p className="text-sm text-green-700 font-text leading-relaxed">
                    En varm och uppmuntrande community där du kan dela din resa, 
                    ställa frågor och få inspiration från andra deltagare.
                  </p>
                </div>

                <div className="bg-white border border-orange/30 p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-orange w-6 h-6" />
                    <h3 className="text-lg font-bold text-orange font-display">Personlig coaching</h3>
                  </div>
                  <p className="text-sm text-green-700 font-text leading-relaxed">
                    Veckovis guidning från Charlotte med tips, motivation och svar på 
                    dina frågor. Du är aldrig ensam på din resa.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-coral w-8 h-8" />
                <h2 className="text-2xl sm:text-3xl font-black text-gradient font-display">
                  Vår filosofi
                </h2>
              </div>
              <div className="bg-gradient-to-r from-coral/10 via-purple/10 to-orange/15 p-6 sm:p-8 rounded-2xl border border-coral/30">
                <p className="text-base sm:text-lg text-green-700 leading-relaxed font-text mb-6">
                  Vi tror på att hälsa ska vara lustfyllt, inte krångligt. Sommarboosten bygger på enkla, 
                  hållbara vanor som passar in i ditt verkliga liv. Inga extremer, inga omöjliga mål – 
                  bara små steg som leder till stora förändringar.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <div className="text-2xl mb-2">🌱</div>
                    <h4 className="font-bold text-primary mb-2 font-display">Hållbart</h4>
                    <p className="text-sm text-green-700 font-text">Vanor som håller hela livet</p>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl mb-2">😊</div>
                    <h4 className="font-bold text-coral mb-2 font-display">Lustfyllt</h4>
                    <p className="text-sm text-green-700 font-text">Glädje ska genomsyra allt</p>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl mb-2">✨</div>
                    <h4 className="font-bold text-purple mb-2 font-display">Enkelt</h4>
                    <p className="text-sm text-green-700 font-text">Passar in i ditt liv</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-primary w-8 h-8" />
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-primary font-display">
                  Din 4-veckors resa
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  { week: 1, title: "Grunderna", desc: "Lär dig de enkla baserna för hälsosam kost och rolig träning" },
                  { week: 2, title: "Rutiner", desc: "Bygg upp dina dagliga vanor och hitta din egen rytm" },
                  { week: 3, title: "Balans", desc: "Hitta jämvikten mellan träning, vila och njutning" },
                  { week: 4, title: "Framtid", desc: "Få verktyg för att fortsätta din hälsoresa på egen hand" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-green-200">
                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold font-display">
                      {item.week}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-1 font-display">{item.title}</h4>
                      <p className="text-sm text-green-700 font-text">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white border-2 border-primary p-6 sm:p-8 rounded-2xl text-primary mb-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-primary">
                  Redo att börja din resa? 🌟
                </h3>
                <p className="text-sm sm:text-base mb-6 text-green-700 font-text">
                  Anmäl ditt intresse så hör vi av oss när nästa Sommarboosten startar!
                </p>
                
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-3 sm:space-y-0 sm:flex sm:gap-3">
                  <Input
                    type="email"
                    placeholder="Din e-postadress..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 text-sm sm:text-base rounded-xl border-2 border-primary/30 bg-white text-green-800"
                    required
                  />
                  <Button type="submit" className="bg-primary text-white hover:bg-primary/90 h-12 w-full sm:w-auto text-sm sm:text-base px-6 rounded-xl font-semibold">
                    Anmäl intresse ✨
                  </Button>
                </form>
              </div>

              <div className="space-y-4">
                <Link to="/quiz" className="inline-block">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold">
                    Ta vårt quiz för personlig vägledning
                  </Button>
                </Link>
                <p className="text-sm text-green-600 opacity-80 font-text">
                  Eller gå tillbaka till <Link to="/" className="text-primary hover:underline font-medium">startsidan</Link>
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default AboutSommarboostenPage;
