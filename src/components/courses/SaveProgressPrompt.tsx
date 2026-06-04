"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { CloudUpload, X } from "lucide-react";

const DISMISS_KEY = "ffi:save-progress-dismissed";

/**
 * A gentle nudge for signed-out learners to make a free account so their
 * progress is saved across devices. Hidden when signed in or dismissed.
 * `variant="compact"` is a smaller inline version for lesson pages.
 */
export function SaveProgressPrompt({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const { status } = useSession();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (status !== "unauthenticated" || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (variant === "compact") {
    return (
      <div className="mt-10 flex flex-col gap-3 rounded-2xl border border-brand-200 bg-brand-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2.5 text-sm text-ink-soft">
          <CloudUpload className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
          <span>
            Want to keep your progress? Make a free account and pick up where you
            left off on any device.
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Sign up free
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-5 shadow-soft sm:p-6">
      <button
        type="button"
        onClick={dismiss}
        aria-label="Hide this message"
        className="absolute right-3 top-3 rounded-md p-1 text-ink-subtle transition hover:bg-brand-100 hover:text-ink"
      >
        <X className="h-4 w-4" aria-hidden />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="rounded-xl bg-brand-100 p-2 text-brand-700">
          <CloudUpload className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-ink">
            Save your progress
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            Right now your progress is saved on this device. Make a free account so
            it&apos;s saved for good — then you can log in on your phone or computer
            and start right where you stopped.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
            >
              Create a free account
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              I already have one
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
