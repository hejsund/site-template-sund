
import { Hero } from '@/components/Hero';
import { CharlotteIntro } from '@/components/CharlotteIntro';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CharlotteIntro />
      <Features />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
