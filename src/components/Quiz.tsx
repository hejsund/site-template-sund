
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, Sparkles, Target, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { HeartLoader } from '@/components/HeartLoader';
import { scrollToTop } from '@/utils/scrollToTop';

interface QuizQuestion {
  question: string;
  options: string[];
}

interface QuizAnswer {
  questionIndex: number;
  answerIndex: number;
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What's your current activity level?",
    options: [
      "I exercise regularly and have a solid routine",
      "I'm somewhat active but inconsistent",
      "I'm mostly sedentary and want to start moving more"
    ]
  },
  {
    question: "What's your biggest challenge with staying healthy?",
    options: [
      "Finding time in my busy schedule",
      "Staying motivated and consistent",
      "Knowing what exercises or foods are best for me"
    ]
  },
  {
    question: "How would you describe your current eating habits?",
    options: [
      "I eat mostly healthy and plan my meals",
      "It varies - sometimes good, sometimes not so much",
      "I often eat on-the-go and struggle with healthy choices"
    ]
  },
  {
    question: "What matters most to you this summer?",
    options: [
      "Feeling strong, energized, and confident",
      "Finding balance and feeling good in my body",
      "Building healthy habits that actually stick"
    ]
  },
  {
    question: "How much time can you realistically dedicate to exercise daily?",
    options: [
      "30 minutes or more",
      "15-20 minutes",
      "10 minutes max"
    ]
  },
  {
    question: "What motivates you most?",
    options: [
      "Seeing tangible results and improvements",
      "Feeling better and having more energy",
      "Having support and accountability from others"
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleStartOver = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setScore(0);
    setIsSubmitting(false);
    scrollToTop();
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, { questionIndex: currentQuestion, answerIndex }];
    setAnswers(newAnswers);
    
    // Calculate score based on answers (lower index = higher score)
    // This is a simple scoring system where option 0 = 1 point, option 1 = 0.5 points, option 2 = 0 points
    let newScore = 0;
    newAnswers.forEach(answer => {
      if (answer.answerIndex === 0) newScore += 1;
      else if (answer.answerIndex === 1) newScore += 0.5;
    });
    
    setScore(newScore);
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Determine recommendation type based on score
      let recommendationType = 'beginner';
      if (score > 4) {
        recommendationType = 'advanced';
      } else if (score > 2) {
        recommendationType = 'intermediate';
      }

      // Save to Supabase - fix the insert to pass a single object instead of array
      const { error } = await supabase.from('sb_quiz_leads').insert({
        email,
        quiz_score: Math.round(score),
        quiz_answers: answers as any, // Cast to any to handle the JSON type
        recommendation_type: recommendationType,
        ip_address: null, // Collected server-side
        user_agent: navigator.userAgent
      });

      if (error) throw error;

      toast({
        title: "Thanks for your answers!",
        description: "We've sent your personalized recommendations to your email.",
      });

      // Clear email field
      setEmail('');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      toast({
        title: "Something went wrong",
        description: "We couldn't save your response right now. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderResults = () => {
    // Calculate percentage for visual representation
    const percentage = Math.round((score / 6) * 100);
    
    if (score <= 2) {
      return (
        <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-purple-700">
              <Sparkles className="inline-block mr-2 text-purple" />
              The Beginner's Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-4">
                You're at the beginning of your health journey and that's the perfect place to start! 
                The Summer Boost will give you simple, clear steps to build sustainable habits.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Beginner</span>
                  <span>{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2 bg-purple-100" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Perfect if you want to:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Start with simple, short workouts that fit your schedule</span>
                </li>
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Learn the basics of healthy eating without overwhelm</span>
                </li>
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Get support and motivation from a community</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Get personalized beginner tips:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border rounded-md"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleStartOver}
                variant="outline" 
                className="flex-1 text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
              >
                Take Quiz Again
              </Button>
              <Button 
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px] focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:outline-none"
              >
                {isSubmitting ? (
                  <HeartLoader size="sm" className="mr-2" />
                ) : null}
                {isSubmitting ? "Sending..." : "Get Tips Now"}
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (score <= 4) {
      return (
        <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-teal-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-green-700">
              <Target className="inline-block mr-2 text-neon-green" />
              The Balanced Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-4">
                You already have the basics in place and are ready for the next step! 
                The Summer Boost will help you find balance and build on your existing habits.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Intermediate</span>
                  <span>{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2 bg-green-100" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Perfect if you want to:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Improve your workout routine with effective sessions</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Optimize your nutrition for more energy and wellbeing</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Find balance between exercise, nutrition, and recovery</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Get personalized tips for your level:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border rounded-md"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleStartOver}
                variant="outline" 
                className="flex-1 text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
              >
                Take Quiz Again
              </Button>
              <Button 
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-neon-green hover:bg-neon-green/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px] focus:ring-2 focus:ring-neon-green focus:ring-offset-2 focus:outline-none"
              >
                {isSubmitting ? (
                  <HeartLoader size="sm" className="mr-2" />
                ) : null}
                {isSubmitting ? "Sending..." : "Get Personal Tips"}
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-coral-50 to-orange-50 border-coral-200">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-coral-700">
            <Zap className="inline-block mr-2 text-coral" />
            The Advanced Path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-lg mb-4">
              Wow! You already have a strong foundation and are ready for the next level. 
              The Summer Boost will give you challenges and strategies to maximize your results.
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Advanced</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-2 bg-coral-100" />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Perfect if you want to:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Take your workouts to the next level with challenging sessions</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Fine-tune your nutrition for optimal results</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Inspire others and share your success</span>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Get advanced tips for your level:
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 border rounded-md"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleStartOver}
              variant="outline" 
              className="flex-1 text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
            >
              Take Quiz Again
            </Button>
            <Button 
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px] focus:ring-2 focus:ring-coral focus:ring-offset-2 focus:outline-none"
            >
              {isSubmitting ? (
                <HeartLoader size="sm" className="mr-2" />
              ) : null}
              {isSubmitting ? "Sending..." : "Be First to Know"}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (showResult) {
    return renderResults();
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium">
            {Math.round(((currentQuestion) / quizQuestions.length) * 100)}%
          </span>
        </div>
        <Progress 
          value={((currentQuestion) / quizQuestions.length) * 100} 
          className="h-2"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-6 mt-4">
          {quizQuestions[currentQuestion].question}
        </h2>
        <div className="space-y-3">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-left h-auto py-4 px-4 border-gray-200 hover:border-primary hover:bg-primary/5 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none transition-colors"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export { Quiz };
