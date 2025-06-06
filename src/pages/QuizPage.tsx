
import { Quiz } from '@/components/Quiz';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
            Hitta din väg till bästa hälsan
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto font-text">
            Svara på några enkla frågor så hjälper vi dig att hitta den perfekta vägen framåt. 
            Det tar bara 2 minuter! 🌟
          </p>
        </div>
        
        <Quiz />
      </div>
    </div>
  );
};

export default QuizPage;
