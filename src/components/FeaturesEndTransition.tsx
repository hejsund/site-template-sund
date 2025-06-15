
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Trophy } from 'lucide-react';
import { useDynamicText } from '@/hooks/useDynamicText';

interface FeaturesEndTransitionProps {
  testMode?: boolean;
  testDate?: Date;
  onRegistrationClick: () => void;
  onQuizClick: () => void;
}

export const FeaturesEndTransition = ({ 
  testMode = false, 
  testDate, 
  onRegistrationClick,
  onQuizClick 
}: FeaturesEndTransitionProps) => {
  const { hasAvailableStarts, statusText, ctaText } = useDynamicText(testMode, testDate);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-white font-display">
                Är du redo att göra skillnad?
              </h2>
              <p className="text-xl text-green-100 mb-4 leading-relaxed">
                Över 2,000 personer har redan tagit steget. Nu är det din tur att skapa förändring som håller.
              </p>
            </div>

            {/* Dynamic status section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-green-100" />
                <h3 className="text-lg font-bold text-white">Aktuell status</h3>
              </div>
              
              <div className="text-center">
                <p className="text-green-100 text-lg mb-2">
                  {statusText}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Button
                onClick={onQuizClick}
                className="bg-white text-green-800 hover:bg-green-50 h-14 text-lg font-bold group"
              >
                <span className="flex items-center gap-2">
                  Börja med quiz
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button
                onClick={scrollToHero}
                className="bg-yellow-400 text-green-900 hover:bg-yellow-300 h-14 text-lg font-bold group"
              >
                <span className="flex items-center gap-2">
                  {ctaText}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-green-100 opacity-80">
                🌟 Begränsade platser · Personlig vägledning · Livslång förändring
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
