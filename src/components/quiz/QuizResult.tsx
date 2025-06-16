
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { QuizEmailForm } from './QuizEmailForm';
import { QuizStartDates } from './QuizStartDates';
import { UserData, QuizProps, Recommendation } from '@/types/quiz';

interface QuizResultProps extends QuizProps {
  recommendation: Recommendation;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  emailSubmitted: boolean;
  isSubmitting: boolean;
  onEmailSubmit: (e: React.FormEvent) => void;
  onDateCardCTA: (stripeLink: string) => void;
  onReset: () => void;
  answers: Record<number, string>;
  score: number;
}

export const QuizResult = ({
  recommendation,
  userData,
  setUserData,
  emailSubmitted,
  isSubmitting,
  onEmailSubmit,
  onDateCardCTA,
  onReset,
  testMode = false,
  testDate,
  answers,
  score
}: QuizResultProps) => {
  if (emailSubmitted) {
    return (
      <div className="text-center space-y-6">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4 font-display">
            Tack för ditt svar! 🎉
          </h2>
          <p className="text-green-700 mb-6">
            {recommendation.recommended 
              ? "Kolla din e-post för rabattkoden!" 
              : "Vi skickar dig mer information om programmet snart!"}
          </p>
          
          {recommendation.recommended && (
            <QuizStartDates 
              onDateCardCTA={onDateCardCTA}
              testMode={testMode}
              testDate={testDate}
            />
          )}
          
          <Button
            onClick={onReset}
            variant="outline"
            className="mt-6"
          >
            Ta quiz igen
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-primary mb-4 font-display">
              {recommendation.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {recommendation.description}
            </p>
            
            {recommendation.advice && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">
                  💡 {recommendation.advice}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <QuizEmailForm
        userData={userData}
        setUserData={setUserData}
        isSubmitting={isSubmitting}
        onSubmit={onEmailSubmit}
        isRecommended={recommendation.recommended}
        answers={answers}
        score={score}
      />
      
      <div className="text-center">
        <Button
          onClick={onReset}
          variant="outline"
          className="text-gray-600"
        >
          ← Ta om quiz
        </Button>
      </div>
    </div>
  );
};
