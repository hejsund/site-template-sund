
import { useLifestyleImages } from '@/hooks/useLifestyleImages';

export const LifestyleGallery = () => {
  const { data: images = [], isLoading, error } = useLifestyleImages();

  if (isLoading) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-[4/5] bg-green-100 rounded-2xl sm:rounded-3xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading lifestyle images:', error);
    return (
      <section className="py-16 sm:py-20 px-3 sm:px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-4 sm:mb-6 font-display">
            Din livsstil, din väg till välmående
          </h2>
          <p className="text-lg text-green-700">Det gick inte att ladda bilderna just nu. Försök igen senare.</p>
        </div>
      </section>
    );
  }

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image) => (
            <div key={image.id} className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
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
                {/* Display tags if available - for debugging/admin purposes */}
                {image.tags && image.tags.length > 0 && process.env.NODE_ENV === 'development' && (
                  <div className="mt-2 text-xs text-gray-500">
                    Tags: {image.tags.join(', ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
