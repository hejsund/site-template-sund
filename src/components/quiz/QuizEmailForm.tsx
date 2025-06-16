
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserData } from '@/types/quiz';
import { pushToDataLayer } from '@/utils/pushToDataLayer';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { handleEmailSubmit as trackEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';

interface QuizEmailFormProps {
  userData: UserData;
  setUserData: (userData: UserData) => void;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  isRecommended: boolean;
  answers: Record<number, string>;
  score: number;
}

export const QuizEmailForm = ({ 
  userData, 
  setUserData, 
  isSubmitting, 
  onSubmit, 
  isRecommended,
  answers,
  score
}: QuizEmailFormProps) => {
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.email || isSubmitting) return;

    console.log('=== QUIZ EMAIL SUBMISSION START ===');
    console.log('Email:', userData.email);
    console.log('Is Recommended:', isRecommended);

    try {
      // Step 1: Database Insert (simplified to avoid vault issues)
      console.log('=== STEP 1: Database Insert ===');
      
      const insertData = {
        email: userData.email.trim(),
        source: 'quiz',
        user_agent: navigator.userAgent,
        age: userData.age || null,
        gender: userData.gender || null,
        quiz_answers: answers,
        quiz_score: score,
        recommendation_type: isRecommended ? 'recommended' : 'not_recommended'
      };

      console.log('Insert data:', insertData);

      const { data, error } = await supabase
        .from('sb_quiz_leads')
        .insert(insertData)
        .select()
        .single();

      if (error) {
        console.error('=== DATABASE INSERT FAILED ===');
        console.error('Error details:', error);
        
        // Handle specific error types
        if (error.message.includes('permission denied')) {
          console.log('Permission error detected, trying alternative approach...');
          
          // Try without some optional fields that might cause issues
          const simpleInsertData = {
            email: userData.email.trim(),
            source: 'quiz',
            quiz_score: score,
            recommendation_type: isRecommended ? 'recommended' : 'not_recommended'
          };

          const { data: retryData, error: retryError } = await supabase
            .from('sb_quiz_leads')
            .insert(simpleInsertData)
            .select()
            .single();

          if (retryError) {
            console.error('Retry also failed:', retryError);
            toast.error('Databasfel: Kontakta support för hjälp.');
            return;
          }
          
          console.log('=== DATABASE INSERT SUCCESS (retry) ===');
          console.log('Quiz lead saved with ID:', retryData.id);
          data = retryData;
        } else if (error.message.includes('duplicate key')) {
          toast.error('E-postadressen är redan registrerad.');
          return;
        } else {
          toast.error(`Databasfel: ${error.message}`);
          return;
        }
      } else {
        console.log('=== DATABASE INSERT SUCCESS ===');
        console.log('Quiz lead saved with ID:', data.id);
      }

      // Step 2: Real-time Airtable Sync (non-blocking)
      console.log('=== STEP 2: Real-time Airtable Sync ===');
      try {
        const { data: syncResponse, error: syncError } = await supabase.functions.invoke('realtime-airtable-sync', {
          body: {
            table: 'sb_quiz_leads',
            operation: 'INSERT',
            record_id: data.id,
            email: userData.email.trim()
          }
        });
        
        if (syncError) {
          console.error('Real-time sync failed:', syncError);
        } else {
          console.log('Real-time sync successful:', syncResponse);
        }
      } catch (syncError) {
        console.error('Real-time sync error:', syncError);
      }

      // Step 3: External Tracking (non-blocking)
      console.log('=== STEP 3: External Tracking ===');
      try {
        await trackEmailSubmit(userData.email);
        await logLead(userData.email, 'quiz_completion', `Quiz Completion - ${isRecommended ? 'Recommended' : 'Not Recommended'}`);
        console.log('External tracking completed successfully');
      } catch (trackingError) {
        console.error('Tracking error (non-critical):', trackingError);
      }

      // Call the original onSubmit for UI updates
      onSubmit(e);
      console.log('=== QUIZ EMAIL SUBMISSION COMPLETED ===');

    } catch (error: any) {
      console.error('=== UNEXPECTED ERROR ===');
      console.error('Error details:', error);
      toast.error('Ett oväntat fel inträffade. Försök igen.');
    }
  };

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
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
        Ange din e-post så skickar vi dig mer information om Sommarboosten.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
