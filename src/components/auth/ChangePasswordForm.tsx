"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { labelClass, primaryBtnClass } from "./AuthCard";
import { PasswordInput } from "./PasswordInput";

export function ChangePasswordForm() {
  const router = useRouter();
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOk(false);
    if (next !== confirm) {
      setError("The two new passwords don't match.");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/account/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentPassword: current, newPassword: next }),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong.");
      return;
    }
    setOk(true);
    setCurrent("");
    setNext("");
    setConfirm("");
    router.refresh();
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {error ? (
        <div className="flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{error}</span>
        </div>
      ) : null}
      {ok ? (
        <div className="flex items-start gap-2 rounded-xl bg-green-50 p-3 text-sm text-green-900">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>Your password has been changed.</span>
        </div>
      ) : null}

      <div>
        <label htmlFor="current" className={labelClass}>
          Current password
        </label>
        <PasswordInput id="current" value={current} onChange={setCurrent} />
      </div>
      <div>
        <label htmlFor="new" className={labelClass}>
          New password
        </label>
        <PasswordInput
          id="new"
          value={next}
          onChange={setNext}
          autoComplete="new-password"
          placeholder="At least 8 letters or numbers"
        />
      </div>
      <div>
        <label htmlFor="confirm" className={labelClass}>
          Type the new password again
        </label>
        <PasswordInput
          id="confirm"
          value={confirm}
          onChange={setConfirm}
          autoComplete="new-password"
        />
      </div>

      <button type="submit" disabled={loading} className={primaryBtnClass}>
        {loading ? "Saving…" : "Change password"}
      </button>
    </form>
  );
}
