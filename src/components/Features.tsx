
import { Dumbbell, ChefHat, Target, Users, Smartphone, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: "Träning som blir av",
    description: "30+ korta pass, anpassade till vardagen. Från 10-minuters morgonenergi till kvällsavslappning.",
    highlight: "Inga timslånga pass!"
  },
  {
    icon: ChefHat,
    title: "Somriga recept",
    description: "50+ rätter för grill, picknick och snabba middagar. Färgglatt, enkelt och helt utan dåligt samvete.",
    highlight: "Från smoothie till grillparty"
  },
  {
    icon: Target,
    title: "Veckoutmaningar",
    description: "Små steg som ger stor skillnad. Roliga utmaningar som passar ditt liv, inte tvärtom.",
    highlight: "Bygger nya vanor naturligt"
  },
  {
    icon: Users,
    title: "Gemenskap",
    description: "Du är inte ensam på denna resa! Stöttande community där vi peppar varandra framåt.",
    highlight: "Inga dömande blickar"
  },
  {
    icon: Smartphone,
    title: "Allt i vår app",
    description: "Ingen stress, bara flow. All inspiration, alla recept och träningspass i fickan.",
    highlight: "Fungerar offline också!"
  },
  {
    icon: Sparkles,
    title: "Bonus: Mindset-stöd",
    description: "Verktyg för att hantera vardagsstress och skapa mer glädje i din vardag.",
    highlight: "Mental träning för livet"
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 gradient-green">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Vad får du i Sommarboosten?
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Allt du behöver för att skapa din bästa sommar – enkelt, roligt och på dina villkor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="card-block group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-2xl p-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-foreground/70 mb-3 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-coral-light text-coral px-3 py-1 rounded-full text-sm font-medium">
                      ✨ {feature.highlight}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional value section */}
        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-4">
              + Så mycket mer än bara träning och mat
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              Det här är en helhetslösning för dig som vill må bra, ha energi och njuta av sommaren. 
              Utan stress, utan skuld – bara glädje och resultat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium">🌞 Vardagsanpassat</span>
              <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium">💚 Hållbart</span>
              <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium">🎯 Resultatfokuserat</span>
              <span className="bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium">😄 Roligt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
