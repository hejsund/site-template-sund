
import React from 'react';
import { CheckCircle } from 'lucide-react';

export const HemligSolutionSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-display text-center">
            Din lösning: Program Name
          </h2>
          
          <p className="text-xl text-green-700 text-center mb-10 font-text leading-relaxed">
            Ett sommarprogram för dig som vill fortsätta ta hand om dig – utan att offra livets goda.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 font-display text-lg mb-2">💪 60 träningspass</h3>
                <p className="text-green-700">Styrka, puls, yoga, stretch – allt du behöver</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 font-display text-lg mb-2">🍓 50+ somriga recept</h3>
                <p className="text-green-700">Näringsrikt men utan förbud eller kaloriräkning</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 font-display text-lg mb-2">🏖️ Fungerar var du än är</h3>
                <p className="text-green-700">Hemma, i stugan, på stranden – ingen utrustning krävs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl">
              <CheckCircle className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-800 font-display text-lg mb-2">📱 Allt i vår app</h3>
                <p className="text-green-700">Enkelt, överskådligt och alltid tillgängligt</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-green-700 font-text mb-6">
              Vill du läsa mer om upplägget? <a href="https://program-name.se" className="text-green-600 underline hover:no-underline font-semibold" target="_blank" rel="noopener noreferrer">Läs mer på program-name.se</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
