"use client";

import { QuizEngine } from "@/components/tools/quiz/QuizEngine";
import { dspFitQuiz } from "@/content/quizzes/dspFit";

export function DspFitClient() {
  return <QuizEngine quiz={dspFitQuiz} />;
}
