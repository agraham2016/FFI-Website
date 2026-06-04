import type { Course, CourseTrack, Lesson } from "./types";
import { personalCareHygiene } from "./personal-care-hygiene";
import { buildingDailyRoutines } from "./building-daily-routines";
import { eatingWell } from "./eating-well";
import { stayingActive } from "./staying-active";
import { healthyRelationships } from "./healthy-relationships";
import { findingTheRightJob } from "./finding-the-right-job";
import { applyingForJobs } from "./applying-for-jobs";
import { interviewingWithConfidence } from "./interviewing-with-confidence";
import { succeedingAtWork } from "./succeeding-at-work";
import { growingYourCareer } from "./growing-your-career";

export type {
  Course,
  CourseModule,
  CourseTrack,
  CourseLevel,
  Lesson,
  CheckQuestion,
  CheckOption,
} from "./types";
export { trackLabels, trackServiceHref } from "./types";

export const courses: Course[] = [
  // Living Skills (supported-living)
  personalCareHygiene,
  buildingDailyRoutines,
  eatingWell,
  stayingActive,
  healthyRelationships,
  // Work Skills (employment)
  findingTheRightJob,
  applyingForJobs,
  interviewingWithConfidence,
  succeedingAtWork,
  growingYourCareer,
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCoursesByTrack(track: CourseTrack): Course[] {
  return courses.filter((c) => c.track === track);
}

export function lessonCount(course: Course): number {
  return course.modules.reduce((n, m) => n + m.lessons.length, 0);
}

export type FlatLesson = {
  lesson: Lesson;
  moduleTitle: string;
  /** 1-based position across the whole course. */
  number: number;
};

/** All lessons in order, with their module title and overall position. */
export function flattenLessons(course: Course): FlatLesson[] {
  const flat: FlatLesson[] = [];
  let number = 0;
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      number += 1;
      flat.push({ lesson, moduleTitle: mod.title, number });
    }
  }
  return flat;
}

export function getLesson(
  courseSlug: string,
  lessonSlug: string
): { course: Course; flat: FlatLesson; prev: FlatLesson | null; next: FlatLesson | null } | undefined {
  const course = getCourse(courseSlug);
  if (!course) return undefined;
  const all = flattenLessons(course);
  const idx = all.findIndex((f) => f.lesson.slug === lessonSlug);
  if (idx === -1) return undefined;
  return {
    course,
    flat: all[idx],
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
