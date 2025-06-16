import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTimePhase } from '@/contexts/TimePhaseContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, Users, Trophy, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { FooterSection } from '@/components/FooterSection';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';
import { warmupListenerService } from '@/utils/listenerWarmup';

const ProgramYearPage = () => {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const { currentPhase } = useTimePhase();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const programYear = year ? parseInt(year) : currentPhase.year;
  const isCurrentYear = programYear === new Date().getFullYear();
  const isPastYear = programYear < new Date().getFullYear();

  // Warm up listener service when user visits the page
  useEffect(() => {
    warmupListenerService();
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    console.log('Submitting email signup from program year page');
    
    // Warm up listener service before submitting lead
    await warmupListenerService();
    
    try {
      // Track email submission with GTM (email is hashed in this function)
      await trackEmailSubmit(email);

      // Log Facebook CAPI lead event
      await logLead(email, 'program_year_email_signup', `Program Year ${programYear} Email Signup`);

      // Save email to Supabase without encryption
      console.log('Attempting to save email to home page leads...');
      const insertData = {
        email: email.trim(),
        source: `program_year_${programYear}`,
        user_agent: navigator.userAgent,
      };
      
      console.log('Insert data:', insertData);

      const { data, error } = await supabase
        .from('sb_home_page_leads')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('Database save failed:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        
        // Still show success since external tracking worked
        toast.success('Tack för din intresseanmälan!');
        setEmail('');
        console.log('Email signup marked as completed despite database error');
        return;
      }

      console.log('Lead saved successfully with ID:', data.id);
      
      toast.success('Tack för din intresseanmälan!');
      setEmail('');
    } catch (error) {
      console.error('Unexpected error:', error);
      
      // Prioritize user experience - external tracking likely worked
      toast.success('Tack för din intresseanmälan!');
      setEmail('');
      console.log('Email signup marked as completed after unexpected error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuizRedirect = () => {
    navigate('/quiz');
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
              ? `Anmälan är öppen! Gör denna sommar till din bästa någonsin med 6 veckor av träning, näring och glädje!`
              : `Anmälan är öppen för sommaren ${programYear}! Gör den till din bästa någonsin!`
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
                disabled={isSubmitting}
              />
              <div className="flex gap-3">
                <Button 
                  type="submit" 
                  className="cta-primary h-12 flex-1 text-lg rounded-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Skickar...' : 'Anmäl dig'}
                </Button>
                <Button 
                  type="button" 
                  className="cta-warm h-12 flex-1 text-lg rounded-xl"
                  onClick={handleQuizRedirect}
                >
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
                <span className="text-green-700 font-text">6 veckors träningsprogram online</span>
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
      <FooterSection />
    </div>
  );
};

export default ProgramYearPage;
