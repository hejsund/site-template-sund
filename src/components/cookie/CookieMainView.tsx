
import React from 'react';

interface CookieMainViewProps {
  onAcceptAll: () => void;
  onCustomize: () => void;
}

export const CookieMainView: React.FC<CookieMainViewProps> = ({
  onAcceptAll,
  onCustomize
}) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 font-display">
        Vi använder cookies 🍪
      </h2>
      
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Vi använder cookies för att förbättra din upplevelse, visa relevanta annonser och samla in anonymiserad statistik. 
        Du kan anpassa dina inställningar eller godkänna alla. Vi respekterar din integritet.
      </p>
      
      {/* Desktop layout */}
      <div className="hidden sm:flex gap-4 justify-center">
        <button 
          onClick={onCustomize}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium px-6 py-3 rounded-xl border border-gray-300 hover:border-gray-400 transition-all duration-200 order-1"
        >
          Anpassa
        </button>
        
        <button 
          onClick={onAcceptAll}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-4 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl text-lg order-2"
        >
          Godkänn alla
        </button>
      </div>

      {/* Mobile layout */}
      <div className="flex sm:hidden flex-col gap-3">
        <button 
          onClick={onAcceptAll}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg text-lg order-1"
        >
          Godkänn alla
        </button>
        
        <button 
          onClick={onCustomize}
          className="w-full bg-transparent hover:bg-gray-50 text-gray-500 font-medium px-6 py-3 rounded-xl transition-all duration-200 order-2"
        >
          Anpassa
        </button>
      </div>
      
      <p className="text-sm text-gray-500 mt-6">
        Ditt val kommer att sparas för framtida besök
      </p>
    </div>
  );
};
