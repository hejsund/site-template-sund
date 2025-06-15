
import { Question } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "Hur gammal är du?",
    options: [
      { id: "a", text: "16-25 år", score: 2 },
      { id: "b", text: "26-35 år", score: 3 },
      { id: "c", text: "36-45 år", score: 3 },
      { id: "d", text: "46+ år", score: 2 }
    ]
  },
  {
    id: 2,
    question: "Vad beskriver dig bäst?",
    options: [
      { id: "a", text: "Kvinna", score: 0 },
      { id: "b", text: "Man", score: 0 },
      { id: "c", text: "Vill inte svara", score: 0 }
    ]
  },
  {
    id: 3,
    question: "Vad är ditt huvudmål med träning?",
    options: [
      { id: "a", text: "Komma i form och känna mig starkare", score: 3 },
      { id: "b", text: "Hitta balans mellan träning och vila", score: 3 },
      { id: "c", text: "Öka min energi och välmående", score: 3 },
      { id: "d", text: "Bygga extremt mycket muskler och bli så stor som möjligt", score: -1, flag: "muscle_obsessed" }
    ]
  },
  {
    id: 4,
    question: "Hur mycket tid vill du helst träna per dag?",
    options: [
      { id: "a", text: "15-30 minuter är perfekt", score: 4 },
      { id: "b", text: "30-45 minuter passar bra", score: 3 },
      { id: "c", text: "1 timme eller mer", score: 1 },
      { id: "d", text: "2+ timmar, jag vill leva på gymmet", score: -1, flag: "gym_obsessed" }
    ]
  },
  {
    id: 5,
    question: "Vad tänker du om träning?",
    options: [
      { id: "a", text: "Det ska vara kul och kännas som lek", score: 4 },
      { id: "b", text: "Viktigt men får inte ta över livet", score: 3 },
      { id: "c", text: "Träning är träning, det behöver inte vara roligt", score: 1 },
      { id: "d", text: "Jag vill ha en PT som skriker åt mig att träna hårdare", score: -2, flag: "intense_training" }
    ]
  },
  {
    id: 6,
    question: "Hur ser din nuvarande livsstil ut?",
    options: [
      { id: "a", text: "Hektisk med lite tid för mig själv", score: 4 },
      { id: "b", text: "Balanserad men vill förbättra vanorna", score: 3 },
      { id: "c", text: "Aktiv men saknar struktur", score: 2 },
      { id: "d", text: "Tränar redan 6-7 dagar i veckan intensivt", score: -1, flag: "overtraining" }
    ]
  }
];
