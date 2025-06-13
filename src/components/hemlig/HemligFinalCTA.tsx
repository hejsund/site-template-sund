
import React from 'react';
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HemligFinalCTAProps {
  showExpiredContent: boolean;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  totalRemainingHours: number;
  onBuyButtonClick: (source: string) => void;
}

export const HemligFinalCTA: React.FC<HemligFinalCTAProps> = ({ 
  showExpiredContent, 
  timeLeft, 
  totalRemainingHours, 
  onBuyButtonClick 
}) => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-green-200"></div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-green-300">
          <div className="mb-8">
            <div className="text-4xl mb-4">🌟✨🌻</div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-green-800 font-display">
              Redo att investera i din bästa sommar?
            </h2>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-4 md:p-6 lg:p-8 mb-8 border-2 border-green-300">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 lg:gap-6 mb-6">
              <div className="text-center">
                <div className="text-xs md:text-sm text-slate-500 mb-1">Ordinarie pris:</div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-400 line-through whitespace-nowrap">
                  1 695 kr
                </div>
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl text-green-600">→</div>
              <div className="text-center">
                <div className="text-xs md:text-sm text-slate-500 mb-1">Ditt pris idag:</div>
                <div className="text-2xl md:text-3xl lg:text-5xl font-black text-red-500 whitespace-nowrap">
                  847,50 kr
                </div>
              </div>
            </div>
            
            <div className="flex flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-4">
              <span className="bg-green-600 text-white px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-full font-bold text-sm md:text-lg lg:text-xl">50% RABATT</span>
              <span className="bg-red-600 text-white px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 rounded-full font-bold text-sm md:text-lg lg:text-xl whitespace-nowrap">{totalRemainingHours}h KVAR</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4 text-left mb-8">
            {[
              "50% rabatt – endast för dig",
              "60 träningspass för hela sommaren",
              "50+ somriga recept utan förbud",
              "Träning som fungerar överallt",
              "Allt samlat i vår app",
              "Tydligt upplägg med struktur"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-green-800 font-medium text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {showExpiredContent ? (
            <div className="bg-slate-100 rounded-2xl p-6 md:p-8 border border-slate-300 text-center">
              <XCircle className="w-12 md:w-16 h-12 md:h-16 text-slate-500 mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4">Erbjudandet har löpt ut</h3>
              <p className="text-slate-600 font-text">
                Du är alltid välkommen att läsa mer på <a href="https://sommarboosten.se" className="text-green-600 underline hover:no-underline" target="_blank" rel="noopener noreferrer">sommarboosten.se</a>
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <p className="text-green-800 font-bold text-lg md:text-xl mb-2">💳 Använd rabatt-koden TACK50 för 50% rabatt</p>
                <p className="text-green-700 text-sm md:text-base">
                  ⏰ <strong>Endast <span className="whitespace-nowrap">{timeLeft.days} dagar</span>, <span className="whitespace-nowrap">{timeLeft.hours} timmar</span> kvar</strong> på detta exklusiva erbjudande
                </p>
              </div>
              
              <Button 
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-lg md:text-xl px-6 md:px-12 py-4 md:py-6 w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => onBuyButtonClick('final_cta')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Säkra din plats – 50% rabatt
                  <ArrowRight className="w-6 h-6 flex-shrink-0" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
