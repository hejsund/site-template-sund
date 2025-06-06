
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Users, Trophy, Smartphone } from 'lucide-react';
import { toast } from 'sonner';

const ProgramYearPage = () => {
  const { year } = useParams<{ year: string }>();
  const { currentPhase } = useTimePhase();
  const [email, setEmail] = useState('');
  
  const programYear = year ? parseInt(year) : currentPhase.year;
  const isCurrentYear = programYear === new Date().getFullYear();
  const isPastYear = programYear < new Date().getFullYear();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(`Tack! Du kommer att höra från oss snart med mer information om Sommarboosten ${programYear}! 🌟`);
      setEmail('');
    }
  };

  const features = [
    {
      icon: Trophy,
      title: "Personlig träningsplan",
      description: "Anpassad efter din nivå och dina mål"
    },
    {
      icon: Smartphone,
      title: "Smart tränings-app",
      description: "Allt du behöver samlade i en användarvänlig app"
    },
    {
      icon: Calendar,
      title: "Flexibel struktur",
      description: "Träning som passar in i ditt liv"
    },
    {
      icon: Clock,
      title: "15-30 min/dag",
      description: "Effektiva träningspass som ger resultat"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6 font-display tracking-tight">
            Sommarboosten {programYear}
          </h1>
          
          {isPastYear && (
            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <p className="text-yellow-800 font-medium">
                Detta program har redan genomförts. Se aktuellt program för {new Date().getFullYear()}.
              </p>
            </div>
          )}
          
          <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8 font-text">
            {isCurrentYear 
              ? `${currentPhase.description} Gör denna ${currentPhase.seasonText} till din bästa någonsin!`
              : `Planera för sommaren ${programYear} och gör den till din bästa någonsin!`
            }
          </p>

          {/* Email signup form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-lg mx-auto mb-8 border border-white/50">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Din e-postadress..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base rounded-xl border-2 border-border focus:border-primary font-text"
                required
              />
              <div className="flex gap-3">
                <Button type="submit" className="cta-primary h-12 flex-1 text-lg rounded-xl">
                  Påminn mig
                </Button>
                <Button type="button" className="cta-warm h-12 flex-1 text-lg rounded-xl">
                  Gör quiz först
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 font-display">
                    {feature.title}
                  </h3>
                  <p className="text-green-700 font-text">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4 font-display">
              Vad ingår i Sommarboosten {programYear}?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-green-700 font-text">4 veckors progressiv träningsplan</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-green-700 font-text">Näringsrika recept för hela familjen</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-green-700 font-text">Daglig motivation och support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-green-700 font-text">Allt samlat i en smart tränings-app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramYearPage;
