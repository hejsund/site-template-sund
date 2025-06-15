
export interface Question {
  id: number;
  question: string;
  options: { id: string; text: string; score: number; flag?: string }[];
}

export interface UserData {
  email: string;
  age: string;
  gender: string;
}

export interface QuizProps {
  testMode?: boolean;
  testDate?: Date;
}

export interface Recommendation {
  title: string;
  description: string;
  program: string;
  recommended: boolean;
  type: string;
  advice?: string;
}
