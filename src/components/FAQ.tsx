
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Vad är en ljudkalender?",
    answer: "En ljudkalender är precis som en traditionell adventskalender – men istället för choklad eller presenter får du varje dag ett nytt ljudspår. I denna kalender får du 24 guidade aktiveringar för kropp, sinne och hjärta. Varje ljudspår är 3-10 minuter långt."
  },
  {
    question: "Hur lång tid tar det varje dag?",
    answer: "Varje ljudspår är mellan 3-10 minuter. Du behöver inte förbereda något, inte ha några redskap och inte byta om. Bara trycka på play, luta dig tillbaka och ta emot. Perfekt för dig som har en hektisk vardag."
  },
  {
    question: "När får jag tillgång till kalendern?",
    answer: "Alla som köper kalendern får tillgång redan fredagen den 29 november, så att du kan landa och bekanta dig med plattformen i lugn och ro innan advent börjar. Första ljudspåret släpps den 1 december."
  },
  {
    question: "Hur lyssnar jag på ljudspåren?",
    answer: "Efter köpet får du en inloggning till vår plattform där alla ljudspår finns samlade. Du kan lyssna var du vill – i soffan, på promenaden, på väg till jobbet eller innan du somnar. På datorn, mobilen eller surfplattan."
  },
  {
    question: "Måste jag lyssna varje dag?",
    answer: "Nej, inget måste här! Du kan lyssna när det passar dig. Ljudspåren kommer att finnas tillgängliga även efter december om du skulle vilja gå tillbaka till något. Detta är ingen prestation – utan en gåva till dig själv."
  },
  {
    question: "Kan jag använda friskvårdsbidrag?",
    answer: "Ja! Kalendern räknas som 'internetbaserade träningsprogram som yoga' gällande friskvårdsbidrag. Du får ett kvitto efter köpet som du kan använda för att ansöka om friskvårdsbidrag hos din arbetsgivare."
  },
  {
    question: "Hur mycket kostar kalendern?",
    answer: "Kalendern kostar 249 kr, vilket motsvarar cirka 10 kr per dag för 24 dagars guidade stunder av stillhet och närvaro."
  },
  {
    question: "Vad händer om jag köper efter 27 november?",
    answer: "Vi tar inte emot köp efter den 27 november. Detta för att vi vill kunna ge alla deltagare en lugn och närvarande start. Vi loggar sedan ut för december för att kunna vara närvarande med våra familjer – precis som vi lär ut i kalendern."
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
