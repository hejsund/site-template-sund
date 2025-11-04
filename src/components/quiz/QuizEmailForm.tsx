
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserData } from '@/types/quiz';
import { pushToDataLayer } from '@/utils/pushToDataLayer';

interface QuizEmailFormProps {
  userData: UserData;
  setUserData: (userData: UserData) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  isRecommended: boolean;
}

export const QuizEmailForm = ({ 
  userData, 
  setUserData, 
  isSubmitting, 
  onSubmit, 
  isRecommended 
}: QuizEmailFormProps) => {
  if (isRecommended) {
    return (
      <div className="bg-coral-50 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-coral-dark mb-2 font-display">
          🎁 Få din present! 
        </h3>
        <p className="text-coral-dark font-medium mb-4">
          Ange din e-post för rabattkoden och 30% rabatt (gäller 48h)
        </p>
        <div className="text-2xl font-bold text-coral-dark mb-2">
          1695 kr <span className="text-lg line-through opacity-60">ord pris</span>
        </div>
        <div className="text-xl font-bold text-neon-green mb-4">
          Med 30% rabatt: 1199 kr
        </div>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Din e-postadress"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
            className="text-center"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            className="w-full cta-primary text-base sm:text-lg py-4 leading-tight whitespace-nowrap"
            disabled={isSubmitting}
            onClick={() => pushToDataLayer("buyButton", { source: "quiz_result" })}
          >
            {isSubmitting ? 'Skickar...' : 'Ja, få rabatt! 🚀'}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-2 font-display">
        Vill du ändå ha mer information om programmet?
      </h3>
      <p className="text-blue-700 mb-4">
        Ange din e-post så skickar vi dig mer information om Program Name.
      </p>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Din e-postadress"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          required
          className="text-center"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Skickar...' : 'Ja, skicka info! 📧'}
        </Button>
      </form>
    </div>
  );
};
