
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Question } from '@/types/quiz';
import { pushToDataLayer } from '@/utils/pushToDataLayer';

interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (questionId: number, optionId: string) => void;
}

export const QuizQuestion = ({ 
  question, 
  currentQuestion, 
  totalQuestions, 
  onAnswer 
}: QuizQuestionProps) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (optionId: string) => {
    const option = question.options.find(opt => opt.id === optionId);
    if (!option) return;

    // Track quiz step
    pushToDataLayer(`quizStep_${question.id}`, {
      question: question.question,
      answer: option.text,
      score: option.score
    });

    onAnswer(question.id, optionId);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-green-600 font-text">
            Fråga {currentQuestion + 1} av {totalQuestions}
          </span>
          <span className="text-sm text-green-600 font-text">
            {Math.round(progress)}% klar
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 font-display">
          {question.question}
        </h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(option.id)}
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
