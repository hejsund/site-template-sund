
import React from 'react';
import { Play } from 'lucide-react';

interface HemligVideoProps {
  showExpiredContent: boolean;
}

export const HemligVideo: React.FC<HemligVideoProps> = ({ showExpiredContent }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-green-50 to-green-100" role="region">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-8 font-display">
          Här är videon jag lovade dig
        </h2>
        
        {showExpiredContent ? (
          <div className="aspect-video bg-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <div className="text-center text-slate-600">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-semibold">🎥 Videon är inte längre tillgänglig.</p>
            </div>
          </div>
        ) : (
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
            <iframe
              src="https://www.youtube.com/embed/ieq8A_WLACo"
              title="Exklusiv video för föreläsningsdeltagare"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        
        <p className="text-lg text-green-700 font-text">
          I den här videon delar jag de viktigaste insikterna om varför just <strong>sommaren</strong> är den perfekta tiden att investera i din hälsa.
        </p>
      </div>
    </section>
  );
};
