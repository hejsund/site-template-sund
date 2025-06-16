
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { pushToDataLayer, handleEmailSubmit } from '@/utils/pushToDataLayer';
import { logLead } from '@/utils/facebookEvents';
import { warmupListenerService } from '@/utils/listenerWarmup';
import { QuizQuestion } from './quiz/QuizQuestion';
import { QuizResult } from './quiz/QuizResult';
import { getRecommendation } from './quiz/QuizRecommendation';
import { questions } from '@/data/questions';
import { UserData, QuizProps } from '@/types/quiz';

export const Quiz = ({ testMode = false, testDate }: QuizProps = {}) => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track quiz begin when component mounts
  useEffect(() => {
    pushToDataLayer("quizBegin");
    // Warm up listener service when component mounts
    warmupListenerService();
  }, []);

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
      // Track quiz completion
      const recommendation = getRecommendation(score + option.score, flags, newAnswers);
      pushToDataLayer("quizComplete", {
        quiz_score: score + option.score,
        quiz_result: recommendation.type,
        total_questions: questions.length
      });
      
      // Reduced delay from 500ms to 200ms
      setTimeout(() => setShowResult(true), 200);
    }
  };

  const handleEmailSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.email || isSubmitting) return;

    setIsSubmitting(true);
    console.log('Submitting email from quiz');
    
    // Warm up listener service before submitting lead
    await warmupListenerService();
    
    try {
      // Track email submission with hashing
      await handleEmailSubmit(userData.email);

      // Log Facebook CAPI lead event
      await logLead(userData.email, 'quiz_email_signup', 'Quiz Email Signup');
      
      const recommendation = getRecommendation(score, flags, answers);
      
      // Save quiz result to Supabase
      const { error } = await supabase
        .from('sb_quiz_leads')
        .insert({
          email: userData.email.trim(),
          age: userData.age,
          gender: userData.gender,
          quiz_score: score,
          quiz_answers: answers,
          recommendation_type: recommendation.type,
          user_agent: navigator.userAgent,
        });

      if (error) {
        console.error('Error saving quiz result:', error);
        toast.error('Det uppstod ett fel. Försök igen.');
        return;
      }

      setEmailSubmitted(true);
      
      if (recommendation.recommended) {
        toast.success('Grattis! Du kan få en rabattkod med 30% rabatt! 🎉');
        // Here you would redirect to Shopify checkout
        console.log('Quiz completed - redirect to checkout with discount');
      } else {
        toast.success('Tack! Vi skickar dig mer information om programmet! 📧');
      }
      
      console.log('Quiz results saved successfully');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Det uppstod ett fel. Försök igen.');
    } finally {
      setIsSubmitting(false);
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
    
    // Track quiz reset
    pushToDataLayer("quizReset");
    
    // Scroll to top of page when quiz resets
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDateCardCTA = (stripeLink: string) => {
    window.open(stripeLink, '_blank');
  };

  if (showResult) {
    const recommendation = getRecommendation(score, flags, answers);
    
    return (
      <QuizResult
        recommendation={recommendation}
        userData={userData}
        setUserData={setUserData}
        emailSubmitted={emailSubmitted}
        isSubmitting={isSubmitting}
        onEmailSubmit={handleEmailSubmitForm}
        onDateCardCTA={handleDateCardCTA}
        onReset={resetQuiz}
        testMode={testMode}
        testDate={testDate}
        answers={answers}
        score={score}
      />
    );
  }

  return (
    <QuizQuestion
      question={questions[currentQuestion]}
      currentQuestion={currentQuestion}
      totalQuestions={questions.length}
      onAnswer={handleAnswer}
    />
  );
};
