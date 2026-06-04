import type { LucideIcon } from "lucide-react";
import type { ArticleSection } from "@/content/articles";

/** Each course maps to one of FFI's two service lines. */
export type CourseTrack = "supported-living" | "employment";

export type CourseLevel = "Start here" | "Core skills" | "Next steps";

/** A simple right/answer knowledge check shown at the end of a lesson. */
export type CheckOption = {
  id: string;
  label: string;
  correct?: boolean;
};

export type CheckQuestion = {
  prompt: string;
  options: CheckOption[];
  /** Friendly explanation shown after the learner answers. */
  explanation: string;
};

export type Lesson = {
  slug: string;
  title: string;
  minutes: string;
  /** One-line summary for the course outline. */
  summary: string;
  /** Lead paragraph at the top of the lesson. */
  intro: string;
  /** Short, plain-language "what you'll learn" goals. */
  objectives: string[];
  /** Lesson body — reuses the same section blocks as articles. */
  sections: ArticleSection[];
  /** Optional note for the family member or staff supporting the learner. */
  supporterNote?: string;
  /** Optional end-of-lesson knowledge check. */
  check?: CheckQuestion[];
};

export type CourseModule = {
  title: string;
  summary: string;
  lessons: Lesson[];
};

export type Course = {
  slug: string;
  track: CourseTrack;
  title: string;
  shortTitle: string;
  level: CourseLevel;
  icon: LucideIcon;
  /** Card + meta description. */
  description: string;
  /** Lead paragraph on the course overview page. */
  intro: string;
  /** Who this course is for. */
  audience: string;
  /** Plain-language reading-level note. */
  readingLevel: string;
  /** "By the end you'll be able to…" outcomes. */
  outcomes: string[];
  modules: CourseModule[];
};

export const trackLabels: Record<CourseTrack, string> = {
  "supported-living": "Living Skills",
  employment: "Work Skills",
};

export const trackServiceHref: Record<CourseTrack, string> = {
  "supported-living": "/services/supported-living",
  employment: "/services/employment",
};
