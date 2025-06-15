import React from 'react';
import { ArrowRight, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HemligHeroProps {
  showExpiredContent: boolean;
  totalRemainingHours: number;
  onBuyButtonClick: (source: string) => void;
}

export const HemligHero: React.FC<HemligHeroProps> = ({ 
  showExpiredContent, 
  totalRemainingHours, 
  onBuyButtonClick 
}) => {
  return (
    <section className="py-12 px-6" role="main">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black text-green-800 mb-6 font-display leading-tight">
          Tack för att du var med
        </h1>
        
        <p className="text-xl md:text-2xl text-green-700 mb-8 font-text leading-relaxed max-w-3xl mx-auto">
          {/* OLD TEXT - KEEPING FOR HEMLIG PAGE: */}
          Det här är bara för dig som sett föreläsningen eller vill se den i efterhand. Föreläsningen hittar du längre ner på sidan. Som utlovat så får du 50% rabatt på vårt sommar-program och det är precis vad föreläsningen handlar om.
          
          {/* NOTE: When main launch happens, consider updating this text to: */}
          {/* "Anmälan är nu öppen för alla! Du som var med på föreläsningen får fortfarande din 50% rabatt." */}
        </p>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12">
          <p className="text-green-800 font-text leading-relaxed mb-4">
            <strong>Vill du läsa mer om Sommarboosten?</strong> Du hittar all information på vår hemsida.
            {/* FUTURE UPDATE: "Anmälan är nu öppen! Läs mer och anmäl dig på vår hemsida." */}
          </p>
          <a 
            href="https://sommarboosten.se" 
            className="inline-flex items-center text-green-700 hover:text-green-800 transition-colors font-semibold underline hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs mer på sommarboosten.se
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        {!showExpiredContent && (
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-6 md:p-8 mb-12 border-2 border-green-300 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-8 md:w-10 h-8 md:h-10 text-green-700" />
              <h2 className="text-2xl md:text-3xl font-black text-green-800 font-display">Exklusivt erbjudande</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-4 md:p-6 mb-6 shadow-lg">
              <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xs md:text-sm text-slate-500 mb-1">Ordinarie pris:</div>
                  <div className="text-lg md:text-2xl font-bold text-slate-400 line-through whitespace-nowrap">
                    1 695 kr
                  </div>
                </div>
                <div className="text-2xl md:text-4xl text-green-600">→</div>
                <div className="text-center">
                  <div className="text-xs md:text-sm text-slate-500 mb-1">Ditt pris:</div>
                  <div className="text-2xl md:text-4xl font-black text-red-500 whitespace-nowrap">
                    847,50 kr
                  </div>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-xl p-3 md:p-4 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="bg-green-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full font-bold text-base md:text-xl">50% RABATT</span>
                </div>
                <p className="text-green-800 font-semibold text-center text-sm md:text-base">
                  Gäller endast i <span className="font-black">{totalRemainingHours} timmar</span> från att du klickade dig hit
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-green-800 font-bold text-lg md:text-xl mb-2">🎯 Säkra din plats med 50% rabatt</p>
                <p className="text-green-700 text-sm md:text-base">Använd koden <span className="bg-green-100 px-2 py-1 rounded font-bold">TACK50</span> i kassan</p>
              </div>
              
              <Button 
                className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full group"
                onClick={() => onBuyButtonClick('hero_cta')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Köp nu – 50% rabatt
                  <ArrowRight className="w-5 md:w-6 h-5 md:h-6" />
                </span>
              </Button>
            </div>
          </div>
        )}

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <p className="text-green-800 font-text leading-relaxed">
            <strong>Viktigt:</strong> Den här sidan är personlig och stängs när nedräkningen når noll. 
            Erbjudandet gäller max {totalRemainingHours} timmar från att du kom hit – eller tills 15 juni kl. 23:59.
            {/* NOTE FOR MONDAY: This entire hemlig page should be closed/hidden */}
            {/* FUTURE TEXT: "Detta specialerbjudande har löpt ut. Anmälan är nu öppen för alla på ordinarie pris." */}
          </p>
        </div>
      </div>
    </section>
  );
};
