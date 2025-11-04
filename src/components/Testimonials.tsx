
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sofia",
    text: "Jag längtar efter att få en stund varje dag där jag inte behöver prestera eller fixa något. Bara vara.",
    rating: 5,
    highlight: "Längtar efter lugnet"
  },
  {
    name: "Emma",
    text: "December brukar rusa förbi. Den här gången vill jag verkligen vara närvarande och känna efter.",
    rating: 5,
    highlight: "Vill sakta ner"
  },
  {
    name: "Anna",
    text: "Att det bara är 3-10 minuter känns perfekt. Det kan jag få till, även när dagarna är fullspäckade.",
    rating: 5,
    highlight: "Enkelt att få till"
  },
  {
    name: "Linda",
    text: "Jag behöver någon som håller mig en stund. Som påminner mig om att jag också är viktig.",
    rating: 5,
    highlight: "Behöver bli hållen"
  },
  {
    name: "Maria",
    text: "Inga krav, inget att förbereda – bara trycka på play. Det är precis vad jag behöver just nu.",
    rating: 5,
    highlight: "Utan krav"
  },
  {
    name: "Karin",
    text: "Att få börja varje decemberdag med något som faktiskt är för mig – vilken gåva det är.",
    rating: 5,
    highlight: "En gåva till mig själv"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-green-800">
            Vad längtar du efter? 🌙
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Kanske känner du igen dig i någon av dessa tankar. Du är inte ensam i hur du känner.
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
                    <Star key={i} className="text-neon-green fill-current" size={16} />
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

        {/* First launch invitation with WCAG compliant contrast */}
        <div className="mt-16 text-center">
          <div className="bg-green-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-white">
            <h3 className="text-3xl font-black mb-4 text-white">
              Bli en av de första att uppleva kalendern 🌟
            </h3>
            <p className="text-lg text-white/95 mb-6">
              Detta är första året vi kör Julkalender 2025. Gå med på resan mot en mjukare, mer närvarande december – tillsammans med andra som längtar efter samma sak.
            </p>
            <p className="text-base text-white/90 italic">
              24 dagar av stillhet, närvaro och vänlighet mot dig själv.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
