export const LifestyleGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/ce7277f6-3378-4978-9239-9c8955f81251.png",
      alt: "Charlotte tränar utomhus bland blommande träd - glädje och energi",
      caption: "Träning som känns som lek",
      category: "Träning",
      summerEmoji: "🌸"
    },
    {
      src: "/lovable-uploads/d1b5db2e-b7b6-4cd0-b524-9aca1776e629.png",
      alt: "Charlotte gör yoga-rörelse bland rosa blommor - balans och styrka",
      caption: "Balans i vardagen",
      category: "Välmående",
      summerEmoji: "🧘‍♀️"
    },
    {
      src: "/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png",
      alt: "Charlotte vid havet med handduk - avkoppling och glädje",
      caption: "Tid för vila och reflektion",
      category: "Återhämtning",
      summerEmoji: "🏖️"
    },
    {
      src: "/lovable-uploads/da91e45b-8314-4025-a9e0-0de2406ff5c5.png",
      alt: "Charlotte ler stort vid vattnet - sommarglädje och energi",
      caption: "Naturlig sommarglädje",
      category: "Livsglädje",
      summerEmoji: "☀️"
    },
    {
      src: "/lovable-uploads/437463b5-03c3-41d4-89b9-895d45a19d51.png",
      alt: "Näringsrik skål med blåbär och yoghurt - enkla, hälsosamma måltider",
      caption: "Enkla, näringsrika måltider",
      category: "Näring",
      summerEmoji: "🫐"
    },
    {
      src: "/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png",
      alt: "Hemlagade rostade mackor med tomater - mat som ger energi",
      caption: "Mat som smakar fantastiskt",
      category: "Recept",
      summerEmoji: "🍅"
    },
    {
      src: "/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png",
      alt: "Kokosbollar på skärbräda - hälsosamma mellanmål",
      caption: "Hälsosamma favoritgodis",
      category: "Mellanmål",
      summerEmoji: "🥥"
    },
    {
      src: "/lovable-uploads/7eeaadd6-cfbf-4f28-8d1c-4c9222ab292a.png",
      alt: "Hemlagad chokladkaka med nötter - njutning utan dåligt samvete",
      caption: "Njutning utan dåligt samvete",
      category: "Bakning",
      summerEmoji: "🍰"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-3 sm:px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto">
        {/* Mobile-optimized header with better contrast and fixed text clipping */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            ✨ Så här kan din sommar se ut
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 md:mb-8 text-gradient leading-[1.3] font-display px-2 py-2">
            Äkta ögonblick från vardagen
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-text px-2">
            Detta är vad Sommarboosten handlar om – glädje, balans och att njuta av livet på riktigt.
          </p>
          <div className="text-2xl sm:text-3xl mt-4 opacity-80">🌻🌊☀️</div>
        </div>

        {/* Instagram-style square grid with improved hover overlay and text contrast */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 bg-white h-full">
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg">{image.summerEmoji}</span>
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
                
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced gradient overlay with better opacity and color coverage */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Text content in semi-transparent button-style container */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                    <h3 className="font-black text-xs sm:text-sm mb-1 font-display leading-tight text-green-800">{image.caption}</h3>
                    <p className="text-xs text-green-600 font-text">Upptäck hur enkelt det kan vara</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl mb-2">🏃‍♀️</div>
            <div className="text-3xl sm:text-4xl font-black text-primary mb-2 font-display">15 min</div>
            <p className="text-sm sm:text-base text-foreground/70 font-text">Genomsnittlig träningstid per dag</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl mb-2">🍽️</div>
            <div className="text-3xl sm:text-4xl font-black text-primary mb-2 font-display">Från 10 min</div>
            <p className="text-sm sm:text-base text-foreground/70 font-text">Över 50 snabba, goda och somriga recept!</p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-2xl mb-2">😊</div>
            <div className="text-3xl sm:text-4xl font-black text-primary mb-2 font-display">100%</div>
            <p className="text-sm sm:text-base text-foreground/70 font-text">Fokus på glädje och välmående</p>
          </div>
        </div>

        {/* Enhanced summer CTA section with improved text contrast */}
        <div className="bg-gradient-to-r from-primary via-green-500 to-green-400 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-warm-contrast shadow-2xl relative overflow-hidden">
          {/* Summer background effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 text-4xl animate-float">☀️</div>
            <div className="absolute bottom-4 left-4 text-3xl animate-float" style={{ animationDelay: '1s' }}>🌊</div>
            <div className="absolute top-1/2 left-8 text-2xl animate-float" style={{ animationDelay: '2s' }}>🌺</div>
          </div>
          
          <div className="relative z-10">
            <div className="text-3xl sm:text-4xl mb-4">🏖️✨🌻</div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 font-display leading-tight opacity-90">
              Redo att skapa din bästa sommar?
            </h3>
            <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto font-text leading-relaxed px-2">
              Detta är inte bara bilder – det här är känslan av en sommar där allt flyter på naturligt. 
              Där träning blir glädje och du vaknar med energi för varje ny dag.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="bg-white text-primary hover:bg-green-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display w-full sm:w-auto">
                Säkra din plats nu! 🌟
              </button>
              <p className="text-xs sm:text-sm opacity-80 font-text">Begränsat antal platser · Ingen bindning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
