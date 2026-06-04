"use client";

import { QuizEngine } from "@/components/tools/quiz/QuizEngine";
import { serviceFitQuiz } from "@/content/quizzes/serviceFit";

export function ServiceFitQuizClient() {
  return <QuizEngine quiz={serviceFitQuiz} />;
}
