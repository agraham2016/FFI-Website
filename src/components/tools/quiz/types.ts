export type QuizOption = {
  id: string;
  label: string;
  scores: Record<string, number>;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  helper?: string;
  options: QuizOption[];
};

export type QuizResultCard = {
  eyebrow?: string;
  title: string;
  body: string;
  highlights?: string[];
  next?: { label: string; href: string }[];
};

export type QuizScores = Record<string, number>;

export type Quiz = {
  id: string;
  intro?: string;
  questions: QuizQuestion[];
  computeResult: (scores: QuizScores) => QuizResultCard;
};
