
import { Play } from 'lucide-react';

export const CharlotteIntro = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Charlotte's actual photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src="/lovable-uploads/0a9897c0-1dce-4db3-b5ee-b2a62d6f836b.png" 
                alt="Charlotte Steinwig - grundare av Sund & Stark"
                className="w-full h-auto object-cover rounded-3xl"
              />
              
              {/* Video play overlay */}
              <div className="absolute inset-0 bg-black/20 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Play className="text-primary ml-1" size={32} />
                  </div>
                  <p className="text-sm text-white font-medium">Charlotte hälsar dig välkommen</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-coral rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block bg-green-100 text-primary px-6 py-2 rounded-full text-sm font-medium">
              💚 Ett personligt meddelande från Charlotte
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-display">
              Hej, härliga du! 
            </h2>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed font-text">
              <p>
                Jag vet hur det känns – sommaren kan vara både njutning och stress. Men jag tror att du kan få båda delarna att fungera tillsammans.
              </p>
              
              <p>
                Jag har själv provat mig fram genom åren, och i <strong className="text-primary">Sommarboosten</strong> får du det bästa av det jag lärt mig. Allt på ett enkelt sätt, med glädje i fokus!
              </p>
              
              <p>
                <span className="text-coral font-medium">Inget pekpinne, inga förbud</span> – bara verktyg som hjälper dig att skapa den sommar DU vill ha.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-primary">
              <p className="text-primary font-medium italic font-text">
                "Sommaren handlar om att leva – och Sommarboosten handlar om att du äger dina val."
              </p>
              <p className="text-sm text-foreground/60 mt-2 font-text">– Charlotte Steinwig</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
