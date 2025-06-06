
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; score: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Vad är ditt huvudmål för din hälsoresan?",
    options: [
      { id: "a", text: "Komma i form och känna mig starkare", score: 3 },
      { id: "b", text: "Hitta balans mellan träning och vila", score: 2 },
      { id: "c", text: "Lära mig hälsosamma matvanor", score: 1 },
      { id: "d", text: "Öka min energi och välmående", score: 2 }
    ]
  },
  {
    id: 2,
    question: "Hur mycket tid kan du avsätta för träning per dag?",
    options: [
      { id: "a", text: "15-20 minuter", score: 3 },
      { id: "b", text: "30-45 minuter", score: 2 },
      { id: "c", text: "1 timme eller mer", score: 1 },
      { id: "d", text: "Det varierar från dag till dag", score: 2 }
    ]
  },
  {
    id: 3,
    question: "Vad beskriver bäst din nuvarande livsstil?",
    options: [
      { id: "a", text: "Hektisk med lite tid för mig själv", score: 3 },
      { id: "b", text: "Balanserad men vill förbättra vanorna", score: 2 },
      { id: "c", text: "Aktiv men saknar struktur", score: 1 },
      { id: "d", text: "Söker motivation och gemenskap", score: 2 }
    ]
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleAnswer = (questionId: number, optionId: string, optionScore: number) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    setScore(score + optionScore);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    } else {
      setTimeout(() => setShowResult(true), 500);
    }
  };

  const getRecommendation = () => {
    if (score >= 8) {
      return {
        title: "Perfekt match för Sommarboosten! 🌟",
        description: "Du är redo att ta nästa steg i din hälsoresan. Sommarboosten kommer ge dig den struktur och motivation du behöver för att nå dina mål.",
        program: "Sommarboosten 2025 - Fullständigt program"
      };
    } else if (score >= 5) {
      return {
        title: "Sommarboosten passar dig utmärkt! 🌱",
        description: "Du har en bra grund att stå på. Sommarboosten hjälper dig att förfina dina vanor och hitta den rätta balansen.",
        program: "Sommarboosten 2025 - Rekommenderas starkt"
      };
    } else {
      return {
        title: "Sommarboosten kan vara en bra start! 🌿",
        description: "Du står i början av din resa mot bättre hälsa. Sommarboosten ger dig en mjuk start med enkla, hållbara förändringar.",
        program: "Sommarboosten 2025 - Perfekt för nybörjare"
      };
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast.success(`Tack ${name}! Du kommer att höra från oss snart med din personliga rekommendation! 🌟`);
      // Here you would typically send the data to your backend
      console.log('Quiz results:', { name, email, score, answers, recommendation: getRecommendation() });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-primary mb-4 font-display">
            {recommendation.title}
          </h2>
          <p className="text-lg text-green-700 mb-6 font-text">
            {recommendation.description}
          </p>
          
          <div className="bg-green-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-2 font-display">
              Din rekommendation:
            </h3>
            <p className="text-green-800 font-medium">{recommendation.program}</p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-primary mb-4 font-display">
                Få din personliga rekommendation direkt i mejlet:
              </h4>
              <Input
                type="text"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-3"
                required
              />
              <Input
                type="email"
                placeholder="Din e-postadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full cta-primary">
              Få min rekommendation! ✨
            </Button>
          </form>
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
        
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(questions[currentQuestion].id, option.id, option.score)}
              className="w-full p-4 text-left bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 hover:border-primary transition-all duration-200 font-text"
            >
              {option.text}
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
};
