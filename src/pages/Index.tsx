
import { useState } from 'react';
import { LaunchTimer } from '@/components/LaunchTimer';
import { Hero } from '@/components/Hero';
import { LifestyleToCharlotteTransition } from '@/components/LifestyleToCharlotteTransition';
import { CharlotteIntro } from '@/components/CharlotteIntro';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { Features } from '@/components/Features';
import { FeaturesEndTransition } from '@/components/FeaturesEndTransition';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { SommarboostenArticle } from '@/components/SommarboostenArticle';
import { FinalCTA } from '@/components/FinalCTA';
import { FooterSection } from '@/components/FooterSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  // Note: In a real app, you'd want to lift this state up or use context
  // For now, we'll use the same default values as in Hero component
  const [testMode] = useState(false);
  const [testDate] = useState<Date>(new Date());
  const navigate = useNavigate();

  const handleRegistrationClick = () => {
    window.open('https://buy.stripe.com/bJe6oI0dx0eOaF49Lbasg0a', '_blank');
  };

  const handleQuizClick = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen">
      <LaunchTimer testMode={testMode} testDate={testDate} />
      <Hero />
      <LifestyleGallery />
      <LifestyleToCharlotteTransition
        testMode={testMode}
        testDate={testDate}
        onRegistrationClick={handleRegistrationClick}
      />
      <CharlotteIntro />
      <Features />
      <FeaturesEndTransition 
        testMode={testMode}
        testDate={testDate}
        onRegistrationClick={handleRegistrationClick}
        onQuizClick={handleQuizClick}
      />
      <Testimonials />
      <FAQ />
      <SommarboostenArticle />
      <FinalCTA />
      <FooterSection />
    </div>
  );
};

export default Index;
