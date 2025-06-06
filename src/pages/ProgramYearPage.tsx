
import { useParams } from 'react-router-dom';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Users, Trophy } from 'lucide-react';

const ProgramYearPage = () => {
  const { year } = useParams<{ year: string }>();
  const { currentPhase } = useTimePhase();
  
  const programYear = year ? parseInt(year) : currentPhase.year;
  const isCurrentYear = programYear === new Date().getFullYear();
  const isPastYear = programYear < new Date().getFullYear();

  const features = [
    {
      icon: Trophy,
      title: "Personlig träningsplan",
      description: "Anpassad efter din nivå och dina mål"
    },
    {
      icon: Users,
      title: "Community support",
      description: "Träna tillsammans med andra i samma resa"
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
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
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

          {currentPhase.isActive && isCurrentYear ? (
            <Button className="cta-primary text-xl px-8 py-4">
              {currentPhase.ctaText} - {programYear}
            </Button>
          ) : (
            <Button className="cta-warm text-xl px-8 py-4">
              {currentPhase.ctaText}
            </Button>
          )}
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
                <span className="text-green-700 font-text">8 veckors progressiv träningsplan</span>
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
                <span className="text-green-700 font-text">Privat community med likasinnade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramYearPage;
