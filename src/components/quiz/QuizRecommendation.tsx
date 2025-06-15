
import { Recommendation } from '@/types/quiz';

export const getRecommendation = (
  score: number, 
  flags: string[], 
  answers: Record<number, string>
): Recommendation => {
  const hasNegativeFlags = flags.some(flag => 
    ['muscle_obsessed', 'gym_obsessed', 'intense_training', 'overtraining'].includes(flag)
  );

  if (hasNegativeFlags || score < 0) {
    return {
      title: "Sommarboosten kanske inte är rätt för dig just nu 🤔",
      description: "Baserat på dina svar verkar du söka något mer intensivt än vad Sommarboosten erbjuder. Vårt program fokuserar på glädje, balans och hållbara vanor - inte extremträning eller muskelbyggande.",
      program: "Vi rekommenderar att du utforskar andra alternativ",
      recommended: false,
      type: "not_recommended",
      advice: flags.includes('muscle_obsessed') 
        ? "Du vill bygga extremt mycket muskler, men Sommarboosten handlar om välmående och balans." 
        : flags.includes('gym_obsessed') || flags.includes('overtraining')
        ? "Du verkar redan träna mycket intensivt. Sommarboosten är för dig som vill ha roliga, korta pass."
        : "Du söker intensiv träning med hård coaching - det är inte vår stil. Vi tror på glädje!"
    };
  } else if (score >= 12) {
    return {
      title: "Perfekt match för Sommarboosten! 🌟",
      description: "Du är redo att ta nästa steg i din hälsoresan med glädje och balans. Sommarboosten kommer ge dig precis den struktur och motivation du behöver.",
      program: "Sommarboosten 2025 - Du kommer älska det!",
      recommended: true,
      type: "perfect_match",
      advice: answers[4] === 'a' 
        ? "Du sa att träning ska vara kul som lek - det är EXAKT vad Sommarboosten handlar om!" 
        : "Din inställning till balans och välmående matchar perfekt med vår filosofi."
    };
  } else if (score >= 8) {
    return {
      title: "Sommarboosten passar dig utmärkt! 🌱",
      description: "Du har en bra grund att stå på. Sommarboosten hjälper dig att förfina dina vanor och hitta den rätta balansen mellan träning och liv.",
      program: "Sommarboosten 2025 - Starkt rekommenderat",
      recommended: true,
      type: "good_match",
      advice: answers[6] === 'a' 
        ? "Du sa att du har en hektisk livsstil - våra korta, effektiva pass är perfekta för dig!" 
        : "Du verkar redan ha bra vanor, Sommarboosten hjälper dig att optimera dem."
    };
  } else {
    return {
      title: "Sommarboosten kan vara en bra start! 🌿",
      description: "Du står i början av din resa mot bättre hälsa. Sommarboosten ger dig en mjuk start med enkla, hållbara förändringar som växer med dig.",
      program: "Sommarboosten 2025 - Perfekt för nybörjare",
      recommended: true,
      type: "beginner_match",
      advice: "Du verkar vara ny till träning - vår app guidar dig steg för steg på ett kul sätt!"
    };
  }
};
