"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AlertCircle } from "lucide-react";
import { fieldClass, labelClass, primaryBtnClass } from "./AuthCard";
import { PasswordInput } from "./PasswordInput";

export function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    // Auto sign-in after creating the account.
    const signin = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (signin?.error) {
      router.push("/login");
      return;
    }
    router.push("/account");
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

      <div>
        <label htmlFor="name" className={labelClass}>
          Your name <span className="font-normal text-ink-subtle">(optional)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
          placeholder="First name is fine"
        />
      </div>

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
      </div>

      <div>
        <label htmlFor="password" className={labelClass}>
          Make a password
        </label>
        <PasswordInput
          id="password"
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
          placeholder="At least 8 letters or numbers"
        />
        <p className="mt-1.5 text-xs text-ink-subtle">
          Use at least 8 characters. Tap the eye to see what you typed.
        </p>
      </div>

      <button type="submit" disabled={loading} className={primaryBtnClass}>
        {loading ? "Creating your account…" : "Create account"}
      </button>
    </form>
  );
}
