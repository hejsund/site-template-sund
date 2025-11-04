
import React from 'react';
import { ArrowRight, Timer, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HemligUrgencySectionProps {
  showExpiredContent: boolean;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onBuyButtonClick: (source: string) => void;
}

export const HemligUrgencySection: React.FC<HemligUrgencySectionProps> = ({ 
  showExpiredContent, 
  timeLeft, 
  onBuyButtonClick 
}) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-2xl border-l-8 border-green-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full -ml-12 -mb-12 opacity-50"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-green-500 text-white rounded-full p-4">
                <Timer className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-black text-green-800 font-display">
                Vad händer om du väntar?
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                <p className="text-green-800 font-text leading-relaxed text-lg">
                  <strong>Sanningen?</strong> Det är lätt att tänka "jag gör det senare" – men just sommaren är den period då små val får störst effekt.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
                <p className="text-green-800 font-text leading-relaxed text-lg">
                  <strong>Varför nu?</strong> Program Name är byggt för att fungera även när rutinerna är lösa – just då det brukar vara som svårast.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center">
                <Gift className="w-12 h-12 mx-auto mb-4" />
                <p className="font-bold text-xl mb-2">
                  Det här är din chans att ta ett steg
                </p>
                <p className="text-lg opacity-90">
                  Ett rimligt, hållbart och effektivt steg – innan sommaren drar igång.
                </p>
              </div>
            </div>

            {!showExpiredContent && (
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-green-800 font-bold text-xl mb-2">⏰ Ta steget nu – rabatt-koden TACK50 ger dig 50% rabatt</p>
                  <p className="text-green-700 text-base mb-4">
                    Erbjudandet löper ut om <span className="whitespace-nowrap font-bold">{timeLeft.days} dagar</span>, <span className="whitespace-nowrap font-bold">{timeLeft.hours} timmar</span> och <span className="whitespace-nowrap font-bold">{timeLeft.minutes} minuter</span>
                  </p>
                </div>
                
                <Button 
                  className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full group"
                  onClick={() => onBuyButtonClick('urgency_section')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Säkra din plats nu
                    <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                  </span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
