
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroCTAButtons = () => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  const handleRegistrationClick = () => {
    // TODO: Update this link when registration page is ready
    window.open('https://buy.stripe.com/6oU3cw1hBbXwaF4e1rasg08', '_blank');
  };

  return (
    <div className="space-y-4 max-w-lg mx-auto">
      <Button 
        className="cta-primary h-12 sm:h-14 w-full text-sm sm:text-lg px-6 sm:px-8 rounded-xl"
        onClick={handleQuizClick}
      >
        Gör quiz först ✨
      </Button>
      
      <Button 
        className="cta-warm h-12 sm:h-14 w-full text-sm sm:text-lg px-6 sm:px-8 rounded-xl group"
        onClick={handleRegistrationClick}
      >
        <span className="flex items-center justify-center gap-2">
          Säkra din plats nu
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Button>
    </div>
  );
};
