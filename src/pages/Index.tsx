
import { useState } from 'react';
import { LaunchTimer } from '@/components/LaunchTimer';
import { Hero } from '@/components/Hero';
import { CharlotteIntro } from '@/components/CharlotteIntro';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { SommarboostenArticle } from '@/components/SommarboostenArticle';
import { FinalCTA } from '@/components/FinalCTA';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  // Note: In a real app, you'd want to lift this state up or use context
  // For now, we'll use the same default values as in Hero component
  const [testMode] = useState(false);
  const [testDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen">
      <LaunchTimer testMode={testMode} testDate={testDate} />
      <Hero />
      <CharlotteIntro />
      <LifestyleGallery />
      <Features />
      <Testimonials />
      <FAQ />
      <SommarboostenArticle />
      <FinalCTA />
      <FooterSection />
    </div>
  );
};

export default Index;
