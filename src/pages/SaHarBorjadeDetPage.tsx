
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, ArrowLeft, Heart, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-warm-50 via-orange-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-purple/10 to-orange/20"></div>
          <Sparkles className="absolute top-10 right-10 text-orange opacity-20 animate-float" size={60} />
          <Heart className="absolute top-20 left-10 text-coral opacity-20 animate-float" size={40} style={{ animationDelay: '1s' }} />
          <Calendar className="absolute bottom-20 right-20 text-purple opacity-20 animate-float" size={50} style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient mb-6 font-display leading-tight">
              Så här började det
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-700 max-w-3xl mx-auto leading-relaxed font-text mb-8">
              Historien bakom Sommarboosten och hur en enkel idé blev till en rörelse som förändrat tusentals familjer.
            </p>
            <div className="text-3xl opacity-80">🌟💫✨</div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

      {/* Article Content */}
      <section className="py-12 sm:py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            
            <div className="prose prose-lg max-w-none">
              <p className="lead text-green-700 font-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className="bg-coral/10 border-l-4 border-coral p-6 my-8 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-coral" />
                  <h3 className="text-xl font-bold text-coral">En dröm blir verklighet</h3>
                </div>
                <p className="text-coral font-medium font-text mb-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                </p>
              </div>

              <h2 className="flex items-center gap-3 text-green-800">
                <Sparkles className="w-8 h-8 text-orange-500" />
                Början av något större
              </h2>

              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>

              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl my-8">
                <h3 className="text-purple-800 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  De första stegen
                </h3>
                <p className="text-green-700 leading-relaxed">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </div>

              <h2>Utvecklingen genom åren</h2>
              
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>

              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>

              <h3>2019 - Första året</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <h3>2020-2023 - Tillväxt och utveckling</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h3>2024 och framåt</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="bg-green-50 p-6 rounded-xl my-8">
                <h3 className="text-green-800 mb-4">Idag</h3>
                <p className="text-green-700 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                </p>
              </div>

              <h2>Varför vi fortsätter</h2>
              
              <p>
                Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>

              <p className="font-semibold text-coral">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Email Sign-up */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary p-6 sm:p-8 rounded-2xl text-primary mb-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-black mb-4 font-display text-primary text-center">
              Vill du vara en del av fortsättningen? 🌟
            </h3>
            <p className="text-sm sm:text-base mb-6 text-green-700 font-text text-center">
              Anmäl ditt intresse så hör vi av oss när nästa kapitel börjar!
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
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <Link to="/quiz" className="inline-block">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold">
                Ta vårt quiz för personlig vägledning
              </Button>
            </Link>
            <p className="text-sm text-green-600 opacity-80 font-text">
              Eller utforska mer om <Link to="/om-sommarboosten" className="text-primary hover:underline font-medium">Sommarboosten</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaHarBorjadeDetPage;
