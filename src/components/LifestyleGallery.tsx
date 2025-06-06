
export const LifestyleGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/cb1cd869-a091-4612-b282-44d8a6771b89.png",
      alt: "Charlotte utomhus med ett stort leende - så här ska en sommar kännas",
      caption: "Glädje och energi utomhus"
    },
    {
      src: "/lovable-uploads/dd9c854e-5f3a-4e94-b87a-5db173a99705.png",
      alt: "Charlotte vid havet - avkoppling och balans",
      caption: "Balans vid vattnet"
    },
    {
      src: "/lovable-uploads/fd45d991-ea51-4cda-a3cc-24f6c2b05728.png",
      alt: "Färsk och näringsrik mat - enkla recept för en energifylld sommar",
      caption: "Färska, enkla måltider"
    },
    {
      src: "/lovable-uploads/059d2e15-d355-4a51-a399-e40bddb1fb40.png",
      alt: "Solnedgång vid stranden - tid för reflektion och glädje",
      caption: "Tid för reflektion"
    }
  ];

  return (
    <section className="py-20 px-4 gradient-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient font-display">
            Så här kan din sommar se ut 🌟
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-text">
            Äkta ögonblick från vardagen – detta är vad Sommarboosten handlar om. Glädje, balans och att njuta av livet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium font-text">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto shadow-xl">
            <p className="text-lg text-foreground/80 font-text leading-relaxed">
              <strong className="text-primary">Detta är inte bara bilder</strong> – det här är känslan av en sommar där allt flyter på naturligt. 
              Där träning blir glädje, mat smakar fantastiskt och du vaknar med energi för varje ny dag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
