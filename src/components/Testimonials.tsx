
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Lina",
    text: "Tack Instructor Name för att du visar att det kan vara enkelt och kul! Jag njuter mer än någonsin.",
    rating: 5,
    highlight: "Njuter mer än någonsin"
  },
  {
    name: "Anna",
    text: "Jag älskar att det är helt utan förbud – inga pekpinnar, bara inspiration!",
    rating: 5,
    highlight: "Utan förbud"
  },
  {
    name: "Maria",
    text: "Äntligen ett program som passar mitt schema. 15 minuter på morgonen och jag känner mig som en vinnare hela dagen.",
    rating: 5,
    highlight: "Passar mitt schema"
  },
  {
    name: "Emma",
    text: "Recepten är så enkla att barnen kan hjälpa till. Vi har aldrig ätit så bra som nu!",
    rating: 5,
    highlight: "Hela familjen älskar det"
  },
  {
    name: "Sofie",
    text: "Jag trodde inte jag var en 'tränings-person', men nu ser jag fram emot mina pass. Instructor Name gör allt så tillgängligt.",
    rating: 5,
    highlight: "Ser fram emot träningen"
  },
  {
    name: "Petra",
    text: "Det är så enkelt att få till träningen med appen – precis som det ska vara!.",
    rating: 5,
    highlight: "Fantastisk app"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-green-800">
            Vad säger de som redan varit med? 💚
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Äkta berättelser från riktiga människor som skapat sin bästa sommar med Company Name.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-block relative group hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-4 right-4 text-green-200 group-hover:text-green-300 transition-colors" size={24} />
              
              <div className="mb-4">
                <div className="flex space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-coral fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-green-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-green-800">
                    – {testimonial.name}
                  </p>
                  <span className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof section with improved contrast */}
        <div className="mt-16 text-center">
          <div className="gradient-warm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-black mb-4 text-white">
              Över 2 000 personer har redan hittat sin glädje! 🌟
            </h3>
            <p className="text-lg text-white/95 mb-6">
              Bli en del av communityn som stöttar varandra att må bra, ha kul och skapa den sommar de drömmer om.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/90">Skulle rekommendera</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-white/90">Genomsnittligt betyg</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2,000+</div>
                <div className="text-white/90">Nöjda deltagare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
