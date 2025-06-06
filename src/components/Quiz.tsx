import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; score: number; flag?: string }[];
}

interface UserData {
  email: string;
  age: string;
  gender: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Hur gammal är du?",
    options: [
      { id: "a", text: "16-25 år", score: 2 },
      { id: "b", text: "26-35 år", score: 3 },
      { id: "c", text: "36-45 år", score: 3 },
      { id: "d", text: "46+ år", score: 2 }
    ]
  },
  {
    id: 2,
    question: "Vad beskriver dig bäst?",
    options: [
      { id: "a", text: "Kvinna", score: 0 },
      { id: "b", text: "Man", score: 0 },
      { id: "c", text: "Vill inte svara", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Vad är ditt huvudmål med träning?",
    options: [
      { id: "a", text: "Komma i form och känna mig starkare", score: 3 },
      { id: "b", text: "Hitta balans mellan träning och vila", score: 3 },
      { id: "c", text: "Öka min energi och välmående", score: 3 },
      { id: "d", text: "Bygga extremt mycket muskler och bli så stor som möjligt", score: -1, flag: "muscle_obsessed" }
    ]
  },
  {
    id: 4,
    question: "Hur mycket tid vill du helst träna per dag?",
    options: [
      { id: "a", text: "15-30 minuter är perfekt", score: 4 },
      { id: "b", text: "30-45 minuter passar bra", score: 3 },
      { id: "c", text: "1 timme eller mer", score: 1 },
      { id: "d", text: "2+ timmar, jag vill leva på gymmet", score: -1, flag: "gym_obsessed" }
    ]
  },
  {
    id: 5,
    question: "Vad tänker du om träning?",
    options: [
      { id: "a", text: "Det ska vara kul och kännas som lek", score: 4 },
      { id: "b", text: "Viktigt men får inte ta över livet", score: 3 },
      { id: "c", text: "Träning är träning, det behöver inte vara roligt", score: 1 },
      { id: "d", text: "Jag vill ha en PT som skriker åt mig att träna hårdare", score: -2, flag: "intense_training" }
    ]
  },
  {
    id: 6,
    question: "Hur ser din nuvarande livsstil ut?",
    options: [
      { id: "a", text: "Hektisk med lite tid för mig själv", score: 4 },
      { id: "b", text: "Balanserad men vill förbättra vanorna", score: 3 },
      { id: "c", text: "Aktiv men saknar struktur", score: 2 },
      { id: "d", text: "Tränar redan 6-7 dagar i veckan intensivt", score: -1, flag: "overtraining" }
    ]
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [flags, setFlags] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    email: '',
    age: '',
    gender: ''
  });
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleAnswer = (questionId: number, optionId: string) => {
    const option = questions[questionId - 1].options.find(opt => opt.id === optionId);
    if (!option) return;

    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    setScore(score + option.score);
    
    if (option.flag) {
      setFlags(prev => [...prev, option.flag!]);
    }

    // Store age and gender for personalization
    if (questionId === 1) {
      setUserData(prev => ({ ...prev, age: option.text }));
    }
    if (questionId === 2) {
      setUserData(prev => ({ ...prev, gender: option.text }));
    }

    if (currentQuestion < questions.length - 1) {
      // Reduced delay from 500ms to 150ms for snappier feel
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 150);
    } else {
      // Reduced delay from 500ms to 200ms
      setTimeout(() => setShowResult(true), 200);
    }
  };

  const getRecommendation = () => {
    const hasNegativeFlags = flags.some(flag => 
      ['muscle_obsessed', 'gym_obsessed', 'intense_training', 'overtraining'].includes(flag)
    );

    if (hasNegativeFlags || score < 0) {
      return {
        title: "Sommarboosten kanske inte är rätt för dig just nu 🤔",
        description: "Baserat på dina svar verkar du söka något mer intensivt än vad Sommarboosten erbjuder. Vårt program fokuserar på glädje, balans och hållbara vanor - inte extremträning eller muskelbyggande.",
        program: "Vi rekommenderar att du utforskar andra alternativ",
        recommended: false,
        advice: flags.includes('muscle_obsessed') 
          ? "Du vill bygga extremt mycket muskler, men Sommarboosten handlar om välmående och balans." 
          : flags.includes('gym_obsessed') || flags.includes('overtraining')
          ? "Du verkar redan träna mycket intensivt. Sommarboosten är för dig som vill ha roliga, korta pass."
          : "Du söker intensiv träning med hård coaching - det är inte vår stil. Vi tror på glädje!"
      };
    } else if (score >= 12) {
      return {
        title: "Perfekt match för Sommarboosten! 🌟",
        description: "Du är redo att ta nästa steg i din hälsoresan med glädje och balans. Sommarboosten kommer ge dig precis den struktur och motivation du behöver.",
        program: "Sommarboosten 2025 - Du kommer älska det!",
        recommended: true,
        advice: answers[4] === 'a' 
          ? "Du sa att träning ska vara kul som lek - det är EXAKT vad Sommarboosten handlar om!" 
          : "Din inställning till balans och välmående matchar perfekt med vår filosofi."
      };
    } else if (score >= 8) {
      return {
        title: "Sommarboosten passar dig utmärkt! 🌱",
        description: "Du har en bra grund att stå på. Sommarboosten hjälper dig att förfina dina vanor och hitta den rätta balansen mellan träning och liv.",
        program: "Sommarboosten 2025 - Starkt rekommenderat",
        recommended: true,
        advice: answers[6] === 'a' 
          ? "Du sa att du har en hektisk livsstil - våra korta, effektiva pass är perfekta för dig!" 
          : "Du verkar redan ha bra vanor, Sommarboosten hjälper dig att optimera dem."
      };
    } else {
      return {
        title: "Sommarboosten kan vara en bra start! 🌿",
        description: "Du står i början av din resa mot bättre hälsa. Sommarboosten ger dig en mjuk start med enkla, hållbara förändringar som växer med dig.",
        program: "Sommarboosten 2025 - Perfekt för nybörjare",
        recommended: true,
        advice: "Du verkar vara ny till träning - vår app guidar dig steg för steg på ett kul sätt!"
      };
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.email) {
      setEmailSubmitted(true);
      const recommendation = getRecommendation();
      if (recommendation.recommended) {
        toast.success('Grattis! Du får en gratis shaker och 15% rabatt! 🎉');
        // Here you would redirect to Shopify checkout
        console.log('Quiz completed - redirect to checkout with discount');
      } else {
        toast.info('Tack! Vi skickar dig mer information om programmet! 📧');
      }
      console.log('Quiz results:', { userData, score, answers, flags, recommendation });
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScore(0);
    setFlags([]);
    setShowResult(false);
    setEmailSubmitted(false);
    setUserData({ email: '', age: '', gender: '' });
  };

  const progress = showResult ? 100 : ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const recommendation = getRecommendation();
    const genderText = userData.gender === 'Kvinna' ? 'Hej söta!' : userData.gender === 'Man' ? 'Hej!' : 'Hej där!';
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="mb-8">
          <Progress value={100} className="h-2" />
        </div>
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

            {recommendation.recommended && !emailSubmitted && (
              <div className="bg-coral-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-coral-dark mb-2 font-display">
                  🎁 Få din present! 
                </h3>
                <p className="text-coral-dark font-medium mb-4">
                  Ange din e-post för gratis shaker och 15% rabatt (gäller 48h)
                </p>
                <div className="text-2xl font-bold text-coral-dark mb-2">
                  1695 kr <span className="text-lg line-through opacity-60">ord pris</span>
                </div>
                <div className="text-xl font-bold text-neon-green mb-4">
                  Med 15% rabatt: 1441 kr
                </div>
                
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Din e-postadress"
                    value={userData.email}
                    onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="text-center"
                  />
                  <Button type="submit" className="w-full cta-primary text-lg py-4">
                    Ja, jag vill ha min rabatt och börja! 🚀
                  </Button>
                </form>
              </div>
            )}

            {recommendation.recommended && emailSubmitted && (
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3 font-display">
                    Tack! Nu får du din rabatt. Varför våra medlemmar älskar appen:
                  </h4>
                  <ul className="text-left space-y-2 text-green-800">
                    <li>✨ Funkar offline - träna var du vill</li>
                    <li>📱 Alla pass direkt i mobilen</li>
                    <li>⏰ Påminnelser som faktiskt motiverar</li>
                    <li>📊 Se din utveckling dag för dag</li>
                    <li>💬 Chatta med Charlotte när du behöver stöd</li>
                  </ul>
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
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2 font-display">
                      Vill du ändå ha mer information om programmet?
                    </h3>
                    <p className="text-blue-700 mb-4">
                      Ange din e-post så skickar vi dig mer information om Sommarboosten.
                    </p>
                    
                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Din e-postadress"
                        value={userData.email}
                        onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="text-center"
                      />
                      <Button type="submit" className="w-full">
                        Ja, skicka mer information! 📧
                      </Button>
                    </form>
                  </div>
                )}

                {emailSubmitted && (
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <p className="text-blue-800 font-medium">
                      Tack! Vi skickar dig mer information om programmet.
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={resetQuiz} className="flex-1 cta-primary">
                    Gör om quizet
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-green-600 font-text">
            Fråga {currentQuestion + 1} av {questions.length}
          </span>
          <span className="text-sm text-green-600 font-text">
            {Math.round(progress)}% klar
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 font-display">
          {questions[currentQuestion].question}
        </h2>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(questions[currentQuestion].id, option.id)}
              className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 hover:border-primary transition-all duration-150 font-text hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {option.text}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};
