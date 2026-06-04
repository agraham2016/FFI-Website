"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { labelClass, primaryBtnClass } from "./AuthCard";
import { PasswordInput } from "./PasswordInput";

export function ResetPasswordForm() {
  const token = useSearchParams().get("token") ?? "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  if (done) {
    return (
      <div className="space-y-4">
        <div className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-900">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <span>Your password is set. You can sign in now.</span>
        </div>
        <Link href="/login" className={primaryBtnClass}>
          Go to sign in
        </Link>
      </div>
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("The two passwords don't match.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }
    setDone(true);
  };

  if (!token) {
    return (
      <div className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-800">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
        <span>This reset link is missing its code. Please request a new link.</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      {error ? (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{error}</span>
        </div>
      ) : null}

      <div>
        <label htmlFor="password" className={labelClass}>
          New password
        </label>
        <PasswordInput
          id="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          placeholder="At least 8 letters or numbers"
        />
      </div>

      <div>
        <label htmlFor="confirm" className={labelClass}>
          Type it again
        </label>
        <PasswordInput
          id="confirm"
          value={confirm}
          onChange={setConfirm}
          autoComplete="new-password"
        />
      </div>

      <button type="submit" disabled={loading} className={primaryBtnClass}>
        {loading ? "Saving…" : "Save new password"}
      </button>
    </form>
  );
}
