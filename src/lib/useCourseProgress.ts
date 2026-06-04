"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PREFIX = "ffi:course:";
const EVENT = "ffi-course-progress";

function read(slug: string): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(PREFIX + slug);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function write(slug: string, lessons: string[]) {
  try {
    window.localStorage.setItem(PREFIX + slug, JSON.stringify(lessons));
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { slug } }));
  } catch {
    /* storage may be unavailable (private mode, etc.) — fail quietly */
  }
}

async function fetchServerProgress(): Promise<Record<string, string[]> | null> {
  try {
    const res = await fetch("/api/progress");
    if (!res.ok) return null; // 401 when signed out, or any error → local only
    const data = await res.json();
    return (data?.progress as Record<string, string[]>) ?? {};
  } catch {
    return null;
  }
}

function putServerProgress(slug: string, lessons: string[]) {
  fetch("/api/progress", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ courseSlug: slug, completedLessons: lessons }),
  }).catch(() => {
    /* best-effort sync; local copy is the fallback */
  });
}

/**
 * Tracks which lessons of a course the learner has completed.
 *
 * - Signed OUT: progress lives in localStorage (no account needed).
 * - Signed IN: on load we merge localStorage with the server copy (so progress
 *   made while logged out is absorbed into the account), then keep the server
 *   in sync on every change. `localStorage` doubles as an offline cache.
 */
export function useCourseProgress(slug: string) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const authedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const local = read(slug);
    setCompleted(local);
    setHydrated(true);

    // Keep components on the same page in sync (and other tabs).
    const sync = () => setCompleted(read(slug));
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail as { slug?: string } | undefined;
      if (!detail || detail.slug === slug) sync();
    };
    window.addEventListener("storage", sync);
    window.addEventListener(EVENT, onCustom as EventListener);

    // If signed in, merge local + server and converge both.
    (async () => {
      const server = await fetchServerProgress();
      if (cancelled || server === null) return; // signed out → local only
      authedRef.current = true;
      const serverList = server[slug] ?? [];
      const union = Array.from(new Set([...serverList, ...read(slug)]));
      if (union.length !== serverList.length) putServerProgress(slug, union);
      write(slug, union); // updates local + notifies listeners
    })();

    return () => {
      cancelled = true;
      window.removeEventListener("storage", sync);
      window.removeEventListener(EVENT, onCustom as EventListener);
    };
  }, [slug]);

  const persist = useCallback(
    (lessons: string[]) => {
      write(slug, lessons);
      if (authedRef.current) putServerProgress(slug, lessons);
    },
    [slug]
  );

  const markComplete = useCallback(
    (lessonSlug: string) => {
      const cur = read(slug);
      if (!cur.includes(lessonSlug)) persist([...cur, lessonSlug]);
    },
    [slug, persist]
  );

  const markIncomplete = useCallback(
    (lessonSlug: string) => {
      persist(read(slug).filter((l) => l !== lessonSlug));
    },
    [slug, persist]
  );

  const reset = useCallback(() => persist([]), [persist]);

  const isComplete = useCallback(
    (lessonSlug: string) => completed.includes(lessonSlug),
    [completed]
  );

  return {
    completed,
    completedCount: completed.length,
    hydrated,
    isComplete,
    markComplete,
    markIncomplete,
    reset,
  };
}
