
import React from 'react';

export const HemligAuthoritySection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-10 border-2 border-green-300">
          <h2 className="text-3xl font-bold text-green-800 mb-6 font-display flex items-center gap-3">
            <span className="text-3xl">🙋‍♀️</span>
            Charlottes resa – Bakgrunden till Sommarboosten
          </h2>
          
          <div className="space-y-4 text-green-800 font-text leading-relaxed text-lg">
            <p>
              Jag är inte någon perfekt hälsoguru. Jag är fyrbarnsmamma, mitt i livet, med full kalender och vardagskaos.
            </p>
            
            <p>
              Under många år körde jag all in på våren – och rasade ur allt på sommaren.
              Det är där Sommarboosten föddes: ur behovet av något som faktiskt fungerar även under den årstid då vi annars brukar släppa taget.
            </p>
            
            <div className="bg-white rounded-xl p-6 border border-green-300">
              <p className="font-semibold text-green-800">
                "Jag skapade Sommarboosten för att ge dig verktygen jag önskat att jag hade haft – så att du slipper samma berg-och-dalbana som jag genomlevde."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
