
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Award, Users, BookOpen, Instagram, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { FooterSection } from '@/components/FooterSection';

const AboutCharlottePage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('sb_home_page_leads')
        .insert({
          email: email,
          source: 'about_charlotte',
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-6 font-display">
                  Charlotte Steinwig
                </h1>
                <p className="text-xl text-green-700 mb-6 font-text">
                  Grundare av Sommarboosten och mamma till fyra barn som hjälper familjer hitta balans mellan hälsa och vardagslivets krav.
                </p>
                <div className="flex items-center space-x-6">
                  <a 
                    href="https://instagram.com/sundochstark" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">@sundochstark</span>
                  </a>
                  <a 
                    href="mailto:hej@sundochstark.se" 
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Kontakta Charlotte</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-coral/20 rounded-3xl flex items-center justify-center">
                <div className="text-6xl">👩‍🦰</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl space-y-12">
            
            {/* Story Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-coral w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary font-display">
                  Min resa till hälsa och balans
                </h2>
              </div>
              <div className="space-y-6 text-green-700 font-text leading-relaxed">
                <p className="text-lg">
                  Som mamma till fyra barn vet jag hur utmanande det kan vara att prioritera sin egen hälsa. 
                  I många år försökte jag hitta den perfekta balansen mellan att vara en närvarande förälder, 
                  ha en karriär och samtidigt ta hand om mig själv.
                </p>
                <p>
                  Det var efter mitt fjärde barn som jag insåg att jag måste sluta försöka göra allt perfekt 
                  och istället fokusera på det som verkligen fungerade. Små, enkla vanor som kunde integreras 
                  i vårt redan packade familjeliv.
                </p>
                <p>
                  Sommarboosten föddes ur denna insikt - att hälsa inte behöver vara komplicerat eller 
                  extremt för att vara effektivt. Det handlar om att hitta glädje i rörelse, njutning i mat 
                  och balans i vardagen.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-primary w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary font-display">
                  Bakgrund & utbildning
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-800 mb-3 font-display">Utbildning</h3>
                  <ul className="space-y-2 text-green-700 font-text">
                    <li>• Certifierad personlig tränare</li>
                    <li>• Kostrådgivning specialisering</li>
                    <li>• Familjehälsa och livsstilscoaching</li>
                    <li>• Mindfulness och stresshantering</li>
                  </ul>
                </div>
                <div className="bg-coral/10 p-6 rounded-xl border border-coral/30">
                  <h3 className="font-bold text-coral mb-3 font-display">Erfarenhet</h3>
                  <ul className="space-y-2 text-green-700 font-text">
                    <li>• 15+ års erfarenhet inom hälsa</li>
                    <li>• Hjälpt 1000+ familjer</li>
                    <li>• Författare till 3 hälsoböcker</li>
                    <li>• Föreläsare om familjeliv & hälsa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-purple w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary font-display">
                  Min filosofi
                </h2>
              </div>
              <div className="bg-gradient-to-r from-purple/10 to-coral/10 p-8 rounded-2xl border border-purple/30">
                <blockquote className="text-lg text-green-700 font-text italic mb-6">
                  "Hälsa ska inte vara en börda eller något som skapar stress. Det ska vara en källa 
                  till glädje och energi som berikar hela familjen."
                </blockquote>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl mb-2">🌱</div>
                    <h4 className="font-bold text-primary mb-2 font-display">Enkelt</h4>
                    <p className="text-sm text-green-700 font-text">Komplicerat håller inte i längden</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">💚</div>
                    <h4 className="font-bold text-coral mb-2 font-display">Hållbart</h4>
                    <p className="text-sm text-green-700 font-text">Vanor som fungerar hela livet</p>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">✨</div>
                    <h4 className="font-bold text-purple mb-2 font-display">Lustfyllt</h4>
                    <p className="text-sm text-green-700 font-text">Glädje är nyckeln till framgång</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Touch */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-orange w-8 h-8" />
                <h2 className="text-3xl font-bold text-primary font-display">
                  Livet utanför jobbet
                </h2>
              </div>
              <div className="bg-orange/10 p-6 rounded-xl border border-orange/30">
                <p className="text-green-700 font-text leading-relaxed mb-4">
                  När jag inte hjälper andra familjer hitta sin hälsobalans, tillbringar jag tid med 
                  mina fyra barn (8, 11, 14 och 16 år) och min man. Vi älskar att vara utomhus, 
                  laga mat tillsammans och upptäcka nya aktiviteter som hela familjen kan njuta av.
                </p>
                <p className="text-green-700 font-text leading-relaxed">
                  Jag tror starkt på att föregå med exempel - mina barn ser mig träna, experimentera 
                  med nya recept och prioritera min egen hälsa. På så sätt lär de sig att hälsa är 
                  något naturligt och roligt, inte något man "måste" göra.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-white border-2 border-primary p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary font-display">
                  Vill du komma i kontakt? 🌟
                </h3>
                <p className="text-green-700 font-text mb-6">
                  Anmäl ditt intresse för Sommarboosten eller ställ en fråga direkt till mig!
                </p>
                
                <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4 sm:flex sm:space-y-0 sm:gap-3">
                  <Input
                    type="email"
                    placeholder="Din e-postadress..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 rounded-xl border-2 border-primary/30"
                    required
                    disabled={isSubmitting}
                  />
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white h-12 w-full sm:w-auto px-6 rounded-xl font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Skickar...' : 'Skicka ✨'}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-green-200">
                  <Link to="/quiz" className="inline-block">
                    <Button className="bg-coral hover:bg-coral/90 text-white px-8 py-3 rounded-xl font-semibold">
                      Ta vårt quiz för personlig vägledning
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutCharlottePage;
