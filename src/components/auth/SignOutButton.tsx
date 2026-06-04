"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-brand-300 hover:bg-brand-50"
    >
      <LogOut className="h-4 w-4" aria-hidden />
      Sign out
    </button>
  );
}
