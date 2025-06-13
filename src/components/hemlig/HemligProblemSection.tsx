
import React from 'react';

export const HemligProblemSection: React.FC = () => {
  return (
    <section className="py-16 px-6" role="region">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-2xl border border-green-200">
          <h2 className="text-4xl font-bold text-green-800 mb-10 font-display text-center">
            Känner du igen dig i detta?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-3xl">😰</div>
              <p className="text-green-800 font-text font-medium">
                Du är rädd att allt ditt resultat från våren rinner ut i sanden i sommar
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-3xl">🍦</div>
              <p className="text-green-800 font-text font-medium">
                Du vill njuta av glass, grill och ledighet – men utan att känna att du sviker dig själv
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-3xl">💪</div>
              <p className="text-green-800 font-text font-medium">
                Du har tränat – men vet att rutinerna lätt försvinner när vardagen pausas
              </p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-3xl">😤</div>
              <p className="text-green-800 font-text font-medium">
                Du vill inte fler "program" som inte fungerar
              </p>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl">
            <p className="text-lg text-green-800 font-semibold">
              <strong>Om du nickade ja till något av detta</strong> – då är Sommarboosten skapad för dig.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
