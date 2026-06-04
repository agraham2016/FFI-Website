"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LogIn, UserRound } from "lucide-react";

export function AuthNav({ className }: { className?: string }) {
  const { status, data } = useSession();

  if (status === "loading") {
    return <span className={className} aria-hidden />;
  }

  if (status === "authenticated") {
    const isAdmin = data?.user?.role === "admin";
    return (
      <Link
        href={isAdmin ? "/admin" : "/account"}
        className={
          className ??
          "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-50 hover:text-brand-800"
        }
      >
        <UserRound className="h-4 w-4" aria-hidden />
        {isAdmin ? "Admin" : "My account"}
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className={
        className ??
        "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-50 hover:text-brand-800"
      }
    >
      <LogIn className="h-4 w-4" aria-hidden />
      Sign in
    </Link>
  );
}
