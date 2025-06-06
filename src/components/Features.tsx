
import { Smartphone, Users, Clock, Shield, Heart, Zap } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: "Beprövad webb-app för alla",
    description: "Fungerar smidigt på alla enheter. Appen är testad och älskad av tusentals användare.",
    color: "text-coral"
  },
  {
    icon: Users,
    title: "Gemenskap & stöd",
    description: "Träffa likasinnade människor och få motivation i vår fantastiska community.",
    color: "text-purple"
  },
  {
    icon: Clock,
    title: "Bara 15 min/dag",
    description: "Perfekt för dig med hektisk vardag. Små steg som gör stor skillnad över tid.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Evidensbaserat",
    description: "Allt vi lär ut bygger på vetenskaplig forskning och beprövade metoder.",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Hållbart & hälsosamt",
    description: "Inga extremer eller snabba fixes. Vi fokuserar på långsiktiga, hälsosamma vanor.",
    color: "text-coral"
  },
  {
    icon: Zap,
    title: "Mer energi direkt",
    description: "Känn skillnad redan första veckan. Mer energi, bättre sömn och ökad välmående.",
    color: "text-purple"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-800">
            Varför väljer tusentals Sommarboosten? 🌟
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Vi har skapat något som verkligen fungerar. Här är vad som gör oss unika.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-block text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6 group-hover:bg-green-100 transition-colors ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-green-800">
                {feature.title}
              </h3>
              
              <p className="text-green-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Redo att göra skillnad i ditt liv?
            </h3>
            <p className="text-lg text-green-100 mb-6">
              Över 2,000 personer har redan tagit steget. Nu är det din tur att skapa förändring som håller.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
