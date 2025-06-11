
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
    question: "Hur skulle du beskriva din nuvarande livsstil?",
    options: [
      "Jag är aktiv och tränar regelbundet",
      "Jag rör mig ibland men har ingen rutin",
      "Jag är mest stillasittande"
    ]
  },
  {
    question: "Vad är din största utmaning med träning?",
    options: [
      "Att hitta tid i vardagen",
      "Att hålla motivationen uppe",
      "Att veta vad jag ska göra"
    ]
  },
  {
    question: "Hur ser dina matvanor ut?",
    options: [
      "Jag äter mestadels hälsosamt och planerar mina måltider",
      "Det varierar, ibland bra och ibland sämre",
      "Jag äter ofta snabbt och enkelt, inte alltid så nyttigt"
    ]
  },
  {
    question: "Vad är viktigast för dig i sommar?",
    options: [
      "Att känna mig stark och energifylld",
      "Att hitta balans och må bra",
      "Att komma igång med hälsosammare vanor"
    ]
  },
  {
    question: "Hur mycket tid kan du lägga på träning per dag?",
    options: [
      "30 minuter eller mer",
      "15-20 minuter",
      "Max 10 minuter"
    ]
  },
  {
    question: "Vad motiverar dig mest?",
    options: [
      "Att se resultat och förbättringar",
      "Att må bättre och ha mer energi",
      "Gemenskap och att få stöd från andra"
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
        title: "Ogiltig e-postadress",
        description: "Vänligen ange en giltig e-postadress.",
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
        title: "Tack för ditt svar!",
        description: "Vi har skickat dina personliga tips till din e-post.",
      });

      // Clear email field
      setEmail('');
    } catch (error) {
      console.error('Error submitting quiz:', error);
      toast({
        title: "Något gick fel",
        description: "Vi kunde inte spara ditt svar just nu. Försök igen senare.",
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
              Nybörjarens Väg
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-4">
                Du är i början av din hälsoresa och det är en perfekt plats att starta! 
                Sommarboosten kommer ge dig enkla, tydliga steg för att bygga hållbara vanor.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Nybörjare</span>
                  <span>{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2 bg-purple-100" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Perfekt för dig som vill:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Komma igång med enkla, korta träningspass</span>
                </li>
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Lära dig grunderna i hälsosam kost utan krångel</span>
                </li>
                <li className="flex items-start">
                  <Heart className="mr-2 h-5 w-5 text-purple shrink-0 mt-0.5" />
                  <span>Få stöd och motivation från en gemenskap</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-purple-100 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-purple-600 mb-1">Begränsad tid - 29% rabatt!</div>
                <div className="text-2xl font-bold text-purple-700">1 199 kr</div>
                <div className="text-sm text-purple-500 line-through">1 689 kr</div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Få personliga tips för nybörjare:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Din e-postadress"
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
                Gör quizet igen
              </Button>
              <Button 
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
              >
                {isSubmitting ? (
                  <HeartLoader size="sm" className="mr-2" />
                ) : null}
                {isSubmitting ? "Skickar..." : "Få tips direkt"}
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
              Balanserade Vägen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-4">
                Du har redan grunderna på plats och är redo att ta nästa steg! 
                Sommarboosten kommer hjälpa dig att hitta balans och bygga vidare på dina vanor.
              </p>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Medel</span>
                  <span>{percentage}%</span>
                </div>
                <Progress value={percentage} className="h-2 bg-green-100" />
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-2">Perfekt för dig som vill:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Förbättra din träningsrutin med effektiva pass</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Optimera din kost för mer energi och välmående</span>
                </li>
                <li className="flex items-start">
                  <Target className="mr-2 h-5 w-5 text-neon-green shrink-0 mt-0.5" />
                  <span>Hitta balans mellan träning, kost och återhämtning</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 p-4 bg-green-100 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-green-600 mb-1">Begränsad tid - 29% rabatt!</div>
                <div className="text-2xl font-bold text-green-700">1 199 kr</div>
                <div className="text-sm text-green-500 line-through">1 689 kr</div>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Få personliga tips för din nivå:
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Din e-postadress"
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
                Gör quizet igen
              </Button>
              <Button 
                onClick={handleEmailSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-neon-green hover:bg-neon-green/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
              >
                {isSubmitting ? (
                  <HeartLoader size="sm" className="mr-2" />
                ) : null}
                {isSubmitting ? "Skickar..." : "Få personliga tips"}
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
            Avancerade Vägen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-lg mb-4">
              Wow! Du har redan en stark grund och är redo för nästa nivå. 
              Sommarboosten kommer ge dig utmaningar och strategier för att maximera dina resultat.
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Avancerad</span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-2 bg-coral-100" />
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2">Perfekt för dig som vill:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Ta din träning till nästa nivå med utmanande pass</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Finjustera din kost för optimala resultat</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-2 h-5 w-5 text-coral shrink-0 mt-0.5" />
                <span>Inspirera andra och dela dina framgångar</span>
              </li>
            </ul>
          </div>

          <div className="mb-6 p-4 bg-coral-100 rounded-lg">
            <div className="text-center">
              <div className="text-sm text-coral-600 mb-1">Begränsad tid - 29% rabatt!</div>
              <div className="text-2xl font-bold text-coral-700">1 199 kr</div>
              <div className="text-sm text-coral-500 line-through">1 689 kr</div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Få avancerade tips för din nivå:
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                placeholder="Din e-postadress"
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
              Gör quizet igen
            </Button>
            <Button 
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-coral hover:bg-coral/90 text-white text-sm sm:text-base px-3 py-2 h-auto min-h-[44px]"
            >
              {isSubmitting ? (
                <HeartLoader size="sm" className="mr-2" />
              ) : null}
              {isSubmitting ? "Skickar..." : "Bli först att veta"}
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
            Fråga {currentQuestion + 1} av {quizQuestions.length}
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
              className="w-full justify-start text-left h-auto py-4 px-4 border-gray-200 hover:border-primary hover:bg-primary/5"
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
