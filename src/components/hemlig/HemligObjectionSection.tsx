
import React from 'react';
import { XCircle } from 'lucide-react';

export const HemligObjectionSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold text-green-800 mb-8 font-display flex items-center gap-3">
            <span className="text-3xl">❌</span>
            Det här är inte ett quick fix – men det fungerar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <XCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-text font-medium">Det är inte en diet</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <XCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-text font-medium">Du räknar inte kalorier</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <XCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-text font-medium">Du behöver inte gymkort</span>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
              <XCircle className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-text font-medium">Du behöver inte vara "duktig"</span>
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-green-100 to-green-200 p-8 rounded-2xl">
            <p className="text-green-800 font-text text-xl font-semibold mb-4">
              Du behöver bara vilja ta hand om dig själv
            </p>
            <p className="text-green-700 font-text">
              Och vara redo att investera i din hälsa och välmående denna sommar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
