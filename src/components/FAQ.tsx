
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Måste jag ha redskap för att träna?",
    answer: "Nej! Alla träningspass kan göras med bara din egen kropp. Om du vill kan du använda vardagsföremål som vattenflaskor eller böcker, men det är inget krav. Vi visar alltid alternativ för alla nivåer."
  },
  {
    question: "Passar programmet mig som nybörjare?",
    answer: "Absolut! Sommarboosten är designad för alla nivåer. Vi börjar där du är och bygger upp gradvis. Charlotte visar alltid enklare alternativ, och du bestämmer takten själv."
  },
  {
    question: "Hur mycket tid behöver jag avsätta?",
    answer: "Du bestämmer själv! Träningspassen varierar från 10-30 minuter. Recepten är snabba och enkla. Många av våra deltagare ägnar 15-20 minuter om dagen åt programmet."
  },
  {
    question: "Vad händer om jag missar några dagar?",
    answer: "Inget problem alls! Det här är inte en strikt kur utan en livsstil. Du hoppar bara in där du är. Vi har förstått att livet ibland kommer emellan – och det är helt okej."
  },
  {
    question: "Finns det några kostnadsfria delar?",
    answer: "Ja! När du registrerar din e-post får du direkt tillgång till förhandsmaterial med tips, recept och träningspass. Sedan kan du välja om du vill vara med på hela resan."
  },
  {
    question: "Kan jag träna utomhus?",
    answer: "Självklart! Många av träningspassen är perfekta för utomhusträning. Vi har pass för park, strand, trädgård – var du än befinner dig. Sommaren är ju till för att vara ute!"
  },
  {
    question: "Vad kostar det och hur länge gäller erbjudandet?",
    answer: "När vi öppner upp för Sommarboosten 2025 får du 50% rabatt i 48 timmar. Ordinarie pris kommer att vara 997 kr, men tidiga anmälningar får det för 497 kr. Plus massa bonusar!"
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 gradient-green">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-primary">
            Vanliga frågor 🤔
          </h2>
          <p className="text-xl text-foreground/80">
            Här är svaren på det som de flesta undrar över. Saknar du något? Skriv till oss!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card-block">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left focus:outline-none group"
              >
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0 ml-4" size={24} />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0 ml-4" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-foreground/70 mb-4">
              Har du andra frågor? Vi älskar att höra från dig!
            </p>
            <a 
              href="mailto:hej@sundochstark.se" 
              className="text-primary font-medium hover:text-primary/80 transition-colors"
            >
              📧 hej@sundochstark.se
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
