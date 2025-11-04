
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface HemligLinksSectionProps {
  totalRemainingHours: number;
}

export const HemligLinksSection: React.FC<HemligLinksSectionProps> = ({ totalRemainingHours }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-700 to-green-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 font-display text-white">
            Vill du läsa mer först?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 font-display text-white">🏠 Utforska vår hemsida</h3>
              <p className="text-green-200 mb-4 font-text">
                Läs mer om våra program, artiklar och Instructor Name bakom Program Name.
              </p>
              <a 
                href="/" 
                className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Besök startsidan
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3 font-display text-white">🌟 Company Name</h3>
              <p className="text-green-200 mb-4 font-text">
                Upptäck fler program och resurser för en hållbar hälsa.
              </p>
              <a 
                href="https://sundochstark.se" 
                className="inline-flex items-center text-white hover:text-green-200 transition-colors font-semibold underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Besök sundochstark.se
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-green-600/30 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 font-display text-white">⚡ Sista chansen</h3>
            <p className="text-green-100 mb-4 font-text">
              Kom ihåg att detta specialerbjudande med <strong>50% rabatt</strong> löper ut snart! 
              Ta steget nu medan du har chansen – din framtida jag kommer att tacka dig.
            </p>
            <p className="text-sm text-green-200 font-text">
              🎯 Varför vänta på en bättre tid när den perfekta tiden är nu?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
