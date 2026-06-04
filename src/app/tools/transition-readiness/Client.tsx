"use client";

import { QuizEngine } from "@/components/tools/quiz/QuizEngine";
import { transitionReadinessQuiz } from "@/content/quizzes/transitionReadiness";

export function TransitionReadinessClient() {
  return <QuizEngine quiz={transitionReadinessQuiz} />;
}
