
import { Play } from 'lucide-react';

export const CharlotteIntro = () => {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Charlotte's photo with enhanced summer styling */}
          <div className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <img 
                src="/lovable-uploads/0a9897c0-1dce-4db3-b5ee-b2a62d6f836b.png" 
                alt="Charlotte Steinwig - grundare av Sund & Stark"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
              />
              
              {/* Enhanced video play overlay */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                    <Play className="text-primary ml-1" size={24} />
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium drop-shadow-lg px-2">Charlotte hälsar dig välkommen</p>
                </div>
              </div>
              
              {/* Summer decorative elements */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-coral rounded-full opacity-60 flex items-center justify-center text-white text-xs sm:text-base">☀️</div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple rounded-full opacity-60 flex items-center justify-center text-white text-xs">🌺</div>
            </div>
          </div>

          {/* Content with mobile optimization */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div className="inline-block bg-green-100 text-primary px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium">
              💚 Ett personligt meddelande från Charlotte
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-primary leading-tight font-display">
              Hej, härliga du! 
              <span className="block text-xl sm:text-2xl md:text-3xl mt-2 opacity-80">🌞</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-green-800 leading-relaxed font-text">
              <p>
                Jag vet hur det känns – sommaren kan vara både njutning och stress. Men jag tror att du kan få båda delarna att fungera tillsammans.
              </p>
              
              <p>
                Jag har själv provat mig fram genom åren, och i <strong className="text-primary">Sommarboosten</strong> får du det bästa av det jag lärt mig. Allt på ett enkelt sätt, med glädje i fokus! 🌻
              </p>
              
              <p>
                <span className="text-coral font-medium">Inget pekpinne, inga förbud</span> – bara verktyg som hjälper dig att skapa den sommar DU vill ha.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-primary shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-shadow duration-300">
              <div className="text-lg sm:text-xl mb-2">🌊</div>
              <p className="text-primary font-medium italic font-text text-sm sm:text-base">
                "Sommaren handlar om att leva – och Sommarboosten handlar om att du äger dina val."
              </p>
              <p className="text-xs sm:text-sm text-green-700 mt-2 font-text">– Charlotte Steinwig</p>
            </div>
          </div>
        </div>

        {/* Enhanced lifestyle image with summer vibes */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/0920abf0-6baa-45af-b26d-95485ad33852.png" 
              alt="Kvinna tränar utomhus - en del av en aktiv livsstil med Sommarboosten"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
              <div className="text-2xl sm:text-3xl mb-2">🏃‍♀️</div>
              <h3 className="text-base sm:text-lg font-medium font-display">Träning kan vara roligt och enkelt</h3>
              <p className="text-xs sm:text-sm opacity-90 font-text">Hitta din egen väg till rörelse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
