
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { QuizStartDates } from './QuizStartDates';
import { QuizEmailForm } from './QuizEmailForm';
import { HeroTestMode } from '../hero/HeroTestMode';
import { Recommendation, UserData, QuizProps } from '@/types/quiz';
import { useState } from 'react';

interface QuizResultProps extends QuizProps {
  recommendation: Recommendation;
  userData: UserData;
  setUserData: (userData: UserData) => void;
  emailSubmitted: boolean;
  isSubmitting: boolean;
  onEmailSubmit: (e: React.FormEvent) => void;
  onDateCardCTA: (stripeLink: string) => void;
  onReset: () => void;
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
  testMode: initialTestMode,
  testDate: initialTestDate
}: QuizResultProps) => {
  const [testMode, setTestMode] = useState(initialTestMode || false);
  const [testDate, setTestDate] = useState<Date>(initialTestDate || new Date());
  
  const genderText = 'Hej fina du!';

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <Progress value={100} className="h-2" />
      </div>
      
      {/* Test Mode Toggle */}
      <HeroTestMode 
        testMode={testMode}
        setTestMode={setTestMode}
        testDate={testDate}
        setTestDate={setTestDate}
      />
      
      <Card className="p-8">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">{recommendation.recommended ? '🎉' : '🤔'}</div>
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            {genderText} {recommendation.title}
          </h2>
          <p className="text-lg text-green-700 mb-6 font-text">
            {recommendation.description}
          </p>
          
          {recommendation.advice && (
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-2 font-display">
                Reflektion från dina svar:
              </h3>
              <p className="text-blue-700">{recommendation.advice}</p>
            </div>
          )}

          <div className={`rounded-xl p-6 mb-8 ${recommendation.recommended ? 'bg-green-50' : 'bg-orange-50'}`}>
            <h3 className="text-xl font-semibold text-primary mb-2 font-display">
              {recommendation.recommended ? 'Vår rekommendation:' : 'Vårt råd:'}
            </h3>
            <p className={`font-medium ${recommendation.recommended ? 'text-green-800' : 'text-orange-800'}`}>
              {recommendation.program}
            </p>
          </div>

          {/* Add start dates component for recommended users */}
          {recommendation.recommended && !emailSubmitted && (
            <QuizStartDates 
              testMode={testMode} 
              testDate={testDate} 
              onDateCardCTA={onDateCardCTA} 
            />
          )}

          {recommendation.recommended && !emailSubmitted && (
            <QuizEmailForm
              userData={userData}
              setUserData={setUserData}
              isSubmitting={isSubmitting}
              onSubmit={onEmailSubmit}
              isRecommended={true}
            />
          )}

          {recommendation.recommended && emailSubmitted && (
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-primary mb-3 font-display">
                  Tack! Nu får du din rabatt. Varför våra medlemmar älskar appen:
                </h4>
                <ul className="text-left space-y-2 text-green-800">
                  <li>✨ Brett utbud - träna var du vill</li>
                  <li>📱 Alla pass direkt i mobilen</li>
                  <li>⏰ Påminnelser som faktiskt motiverar</li>
                  <li>📊 Känn att du blir starkare</li>
                  <li>💬 Inspo med Charlotte när du behöver stöd</li>
                </ul>
              </div>

              {/* Email notification section */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="text-lg font-semibold text-blue-800 mb-3 font-display">📧 Viktigt att veta:</h4>
                <p className="text-sm text-blue-700 mb-3">
                  En unik köplänk med din 30% rabattkod skickas till din e-post inom kort.
                </p>
                <p className="text-sm text-blue-700">
                  Har du inte fått din rabattkod? Mejla oss på{' '}
                  <a href="mailto:hej@sundochstark.se" className="font-semibold underline hover:no-underline">
                    hej@sundochstark.se
                  </a>
                </p>
              </div>
              
              <p className="text-sm text-green-600 opacity-80 font-text">
                🕐 Erbjudandet gäller i 48 timmar från nu
              </p>
            </div>
          )}

          {!recommendation.recommended && (
            <div className="space-y-4">
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-3 font-display">
                  Andra alternativ som kan passa dig bättre:
                </h4>
                <ul className="text-left space-y-2 text-orange-800">
                  <li>💪 Traditionella gym med tunga vikter</li>
                  <li>🔥 Intensiva PT-program</li>
                  <li>🏋️‍♀️ Bodybuilding-fokuserade program</li>
                  <li>⚡ High-intensity träningsgrupper</li>
                </ul>
              </div>

              {!emailSubmitted && (
                <QuizEmailForm
                  userData={userData}
                  setUserData={setUserData}
                  isSubmitting={isSubmitting}
                  onSubmit={onEmailSubmit}
                  isRecommended={false}
                />
              )}

              {emailSubmitted && (
                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <p className="text-blue-800 font-medium">
                    Tack! Vi skickar dig mer information om programmet.
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={onReset} className="flex-1 cta-primary">
                  Gör om quizet
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
