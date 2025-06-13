
import { useEffect } from 'react';
import { Quiz } from '@/components/Quiz';

const QuizPage = () => {
  useEffect(() => {
    // Ensure page starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display">
              Vi guidar dig till rätt hälsoresa – baserat på dig.
            </h1>
            <p className="text-lg text-green-700 max-w-2xl mx-auto font-text">
              Svara på 6 snabba frågor så matchar vi dig med din perfekta väg framåt.
              Tar bara 1 minut! 🌟
            </p>
          </div>
          
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
