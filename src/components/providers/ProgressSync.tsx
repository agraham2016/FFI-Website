"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const PREFIX = "ffi:course:";
const EVENT = "ffi-course-progress";

function readLocal(slug: string): string[] {
  try {
    const raw = localStorage.getItem(PREFIX + slug);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}

/**
 * Once per sign-in, merge any progress saved in localStorage (e.g. earned while
 * logged out) into the user's account, then refresh so server-rendered pages
 * (like /account) reflect it. Mounted globally inside the session provider.
 */
export function ProgressSync() {
  const { status } = useSession();
  const router = useRouter();
  const done = useRef(false);

  useEffect(() => {
    if (status !== "authenticated" || done.current) return;
    done.current = true;

    (async () => {
      const slugs: string[] = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (key?.startsWith(PREFIX)) slugs.push(key.slice(PREFIX.length));
      }
      if (slugs.length === 0) return;

      let server: Record<string, string[]> = {};
      try {
        const res = await fetch("/api/progress");
        if (res.ok) server = (await res.json())?.progress ?? {};
      } catch {
        return;
      }

      let changed = false;
      for (const slug of slugs) {
        const local = readLocal(slug);
        const serverList = server[slug] ?? [];
        const union = Array.from(new Set([...serverList, ...local]));
        if (union.length > serverList.length) {
          changed = true;
          await fetch("/api/progress", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ courseSlug: slug, completedLessons: union }),
          }).catch(() => {});
          localStorage.setItem(PREFIX + slug, JSON.stringify(union));
          window.dispatchEvent(new CustomEvent(EVENT, { detail: { slug } }));
        }
      }
      if (changed) router.refresh();
    })();
  }, [status, router]);

  return null;
}
