export const ImageIntroSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image 1 - Charlotte with coffee and dog */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/charlotte-coffee.jpg"
              alt="Charlotte med kaffe - Något nytt väntar"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image 2 - Charlotte smiling */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/charlotte-smile.jpg"
              alt="Charlotte - En ljudkalender med små dagliga stunder av stillhet"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Optional text below images */}
        <div className="text-center mt-12">
          <p className="text-xl text-green-700 font-text italic">
            Hej! Jag är Charlotte, och jag har skapat denna kalender för dig. 🌿
          </p>
        </div>
      </div>
    </section>
  );
};
