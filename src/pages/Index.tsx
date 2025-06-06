
import { Hero } from '@/components/Hero';
import { CharlotteIntro } from '@/components/CharlotteIntro';
import { LifestyleGallery } from '@/components/LifestyleGallery';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { SommarboostenArticle } from '@/components/SommarboostenArticle';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CharlotteIntro />
      <LifestyleGallery />
      <Features />
      <Testimonials />
      <FAQ />
      <SommarboostenArticle />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
