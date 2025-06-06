
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    },
    {
      src: "/lovable-uploads/c2e01a19-6725-4264-b55c-620731d63025.png",
      alt: "Sommarglädje och aktivitet",
      title: "Sommarens glädje",
      description: "Varje dag kan vara ett äventyr"
    },
    {
      src: "/lovable-uploads/bff87cd9-ad93-40ea-9efb-e759131d22d1.png",
      alt: "Familjetid och gemenskap",
      title: "Familjetid som räknas",
      description: "Skapa minnen tillsammans"
    },
    {
      src: "/lovable-uploads/da91e45b-8314-4025-a9e0-0de2406ff5c5.png",
      alt: "Naturens kraft för välmående",
      title: "Naturens healing",
      description: "Hitta ro i det enkla"
    },
    {
      src: "/lovable-uploads/bca7b0a7-03fd-4d88-b59a-9a8d209e682d.png",
      alt: "Aktiv livsstil",
      title: "Rörelse som energi",
      description: "Känn kraften i din kropp"
    },
    {
      src: "/lovable-uploads/fd45d991-ea51-4cda-a3cc-24f6c2b05728.png",
      alt: "Hälsosamma vanor",
      title: "Vanor som varar",
      description: "Små steg, stora förändringar"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 font-display">
            Din livsstil, din väg till välmående
          </h2>
          <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto font-text">
            Upptäck hur enkelt det kan vara att skapa en livsstil som ger dig energi, glädje och hälsa
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/60"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 sm:p-6 transform translate-y-0 transition-all duration-300 group-hover:translate-y-0 border-t border-white/20">
                      <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 font-display">
                        {image.title}
                      </h3>
                      <p className="text-sm sm:text-base text-green-700 font-text leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>

        {/* Mobile dots indicator */}
        <div className="flex justify-center mt-8 sm:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(images.length / 1) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-green-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
