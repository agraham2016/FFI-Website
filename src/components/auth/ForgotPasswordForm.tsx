"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { fieldClass, labelClass, primaryBtnClass } from "./AuthCard";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="space-y-4">
        <div className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <span>
            If an account uses that email, we&apos;ve sent a link to reset the
            password. Check your inbox (and spam folder). The link works for 1 hour.
          </span>
        </div>
        <Link
          href="/login"
          className="block text-center text-sm font-medium text-brand-700 hover:text-brand-800"
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
          placeholder="you@example.com"
        />
        <p className="mt-1.5 text-xs text-ink-subtle">
          We&apos;ll email you a link to make a new password.
        </p>
      </div>

      <button type="submit" disabled={loading} className={primaryBtnClass}>
        {loading ? "Sending…" : "Send reset link"}
      </button>
    </form>
  );
}
