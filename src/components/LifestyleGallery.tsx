
export const LifestyleGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/617bd669-c316-43bc-b203-4a8d32228528.png",
      alt: "Träning som känns som lek",
      title: "Träning som känns som lek",
      description: "Upptäck hur enkelt det kan vara"
    },
    {
      src: "/lovable-uploads/5f369290-4679-4086-8f9a-0d8720545743.png", 
      alt: "Hälsosam mat för hela familjen",
      title: "Mat hela familjen älskar",
      description: "Enkla recept med smak av sommar"
    },
    {
      src: "/lovable-uploads/cb1cd869-a091-4612-b282-44d8a6771b89.png",
      alt: "Balans mellan aktivitet och vila",
      title: "Balans som faktiskt fungerar", 
      description: "Hitta din egen väg till välmående"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 font-display">
            Så här ser en Sommarboost-dag ut
          </h2>
          <p className="text-lg sm:text-xl text-green-700 max-w-2xl mx-auto font-text">
            Vardagslivets glädje med hälsosamma vanor som sticker
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-200 group-hover:from-black/50"></div>
              </div>
              
              {/* White background overlay for better text readability */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 sm:p-6 transform translate-y-0 transition-all duration-200 group-hover:translate-y-0">
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-display">
                  {image.title}
                </h3>
                <p className="text-sm sm:text-base text-green-700 font-text leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
