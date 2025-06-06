
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
              
              {/* Video play overlay - always visible */}
              <div className="absolute inset-0 bg-black/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <Play className="text-primary ml-1" size={32} />
                  </div>
                  <p className="text-sm text-white font-medium drop-shadow-lg">Charlotte hälsar dig välkommen</p>
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
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight font-display">
              Hej, härliga du! 
            </h2>

            <div className="space-y-4 text-lg text-green-800 leading-relaxed font-text">
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
              <p className="text-sm text-green-700 mt-2 font-text">– Charlotte Steinwig</p>
            </div>
          </div>
        </div>

        {/* Added lifestyle image from image bank */}
        <div className="mt-16 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/0920abf0-6baa-45af-b26d-95485ad33852.png" 
              alt="Kvinna tränar utomhus - en del av en aktiv livsstil med Sommarboosten"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-semibold font-display">Träning kan vara roligt och enkelt</p>
              <p className="text-sm opacity-90 font-text">Hitta din egen väg till rörelse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
