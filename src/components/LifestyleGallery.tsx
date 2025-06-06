
export const LifestyleGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/ce7277f6-3378-4978-9239-9c8955f81251.png",
      alt: "Charlotte tränar utomhus bland blommande träd - glädje och energi",
      caption: "Träning som känns som lek",
      category: "Träning"
    },
    {
      src: "/lovable-uploads/d1b5db2e-b7b6-4cd0-b524-9aca1776e629.png",
      alt: "Charlotte gör yoga-rörelse bland rosa blommor - balans och styrka",
      caption: "Balans i vardagen",
      category: "Välmående"
    },
    {
      src: "/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png",
      alt: "Charlotte vid havet med handduk - avkoppling och glädje",
      caption: "Tid för vila och reflektion",
      category: "Återhämtning"
    },
    {
      src: "/lovable-uploads/da91e45b-8314-4025-a9e0-0de2406ff5c5.png",
      alt: "Charlotte ler stort vid vattnet - sommarglädje och energi",
      caption: "Naturlig sommarglädje",
      category: "Livsglädje"
    },
    {
      src: "/lovable-uploads/437463b5-03c3-41d4-89b9-895d45a19d51.png",
      alt: "Näringsrik skål med blåbär och yoghurt - enkla, hälsosamma måltider",
      caption: "Enkla, näringsrika måltider",
      category: "Näring"
    },
    {
      src: "/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png",
      alt: "Hemlagade rostade mackor med tomater - mat som ger energi",
      caption: "Mat som smakar fantastiskt",
      category: "Recept"
    },
    {
      src: "/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png",
      alt: "Kokosbollar på skärbräda - hälsosamma mellanmål",
      caption: "Hälsosamma favoritgodis",
      category: "Mellanmål"
    },
    {
      src: "/lovable-uploads/7eeaadd6-cfbf-4f28-8d1c-4c9222ab292a.png",
      alt: "Hemlagad chokladkaka med nötter - njutning utan dåligt samvete",
      caption: "Njutning utan dåligt samvete",
      category: "Bakning"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6">
            ✨ Så här kan din sommar se ut
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient leading-tight font-display">
            Äkta ögonblick från vardagen
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-text">
            Detta är vad Sommarboosten handlar om – glädje, balans och att njuta av livet på riktigt.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`group cursor-pointer animate-fade-in ${
                index === 0 || index === 3 ? 'lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105 bg-white">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-semibold">
                    {image.category}
                  </span>
                </div>
                
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    index === 0 || index === 3 ? 'h-80 lg:h-96' : 'h-64'
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-lg mb-2 font-display">{image.caption}</h3>
                  <p className="text-sm opacity-90 font-text">Upptäck hur enkelt det kan vara</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2 font-display">15 min</div>
            <p className="text-foreground/70 font-text">Genomsnittlig träningstid per dag</p>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2 font-display">10 min</div>
            <p className="text-foreground/70 font-text">Snabba, enkla recept</p>
          </div>
          <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary mb-2 font-display">100%</div>
            <p className="text-foreground/70 font-text">Fokus på glädje och välmående</p>
          </div>
        </div>

        {/* Call to action section */}
        <div className="bg-gradient-to-r from-primary to-green-500 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Redo att skapa din bästa sommar?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-text leading-relaxed">
            Detta är inte bara bilder – det här är känslan av en sommar där allt flyter på naturligt. 
            Där träning blir glädje och du vaknar med energi för varje ny dag.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-display">
              Säkra din plats nu! 🌟
            </button>
            <p className="text-sm opacity-80 font-text">Begränsat antal platser · Ingen bindning</p>
          </div>
        </div>
      </div>
    </section>
  );
};
