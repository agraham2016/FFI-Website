"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Copy,
  KeyRound,
  Mail,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";

type AdminUser = {
  id: string;
  email: string;
  name: string | null;
  role: string;
  mustChangePassword: boolean;
  createdAt: string;
  _count: { progress: number };
};

type ResetResult =
  | { email: string; mode: "temp"; tempPassword: string }
  | { email: string; mode: "link"; emailed: boolean; link: string };

export function AdminUsers() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyEmail, setBusyEmail] = useState<string | null>(null);
  const [result, setResult] = useState<ResetResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (query = "") => {
    setLoading(true);
    setError(null);
    const res = await fetch(`/api/admin/users?q=${encodeURIComponent(query)}`);
    if (!res.ok) {
      setError("Could not load users.");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setUsers(data.users ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const reset = async (email: string, mode: "temp" | "link") => {
    setBusyEmail(email);
    setResult(null);
    setError(null);
    const res = await fetch("/api/admin/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, mode }),
    });
    setBusyEmail(null);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Reset failed.");
      return;
    }
    const data = await res.json();
    setResult({ email, ...data });
    load(q);
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          load(q);
        }}
        className="flex gap-2"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by email"
            className="w-full rounded-xl border border-brand-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl border border-brand-200 bg-white px-4 text-sm font-semibold text-brand-800 hover:bg-brand-50"
        >
          <RefreshCw className="h-4 w-4" aria-hidden />
          Refresh
        </button>
      </form>

      {error ? (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-800">{error}</p>
      ) : null}

      {result ? (
        <div className="rounded-2xl border border-accent-200 bg-accent-50/60 p-4 text-sm">
          {result.mode === "temp" ? (
            <div>
              <p className="font-semibold text-ink">
                Temporary password for {result.email}
              </p>
              <p className="mt-1 text-ink-soft">
                Read this to the user. They&apos;ll be asked to change it at next
                sign-in.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <code className="rounded-lg bg-white px-3 py-1.5 font-mono text-base font-semibold text-brand-800 shadow-sm">
                  {result.tempPassword}
                </code>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(result.tempPassword)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200 bg-white px-2.5 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-50"
                >
                  <Copy className="h-3.5 w-3.5" aria-hidden /> Copy
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="font-semibold text-ink">Reset link for {result.email}</p>
              <p className="mt-1 text-ink-soft">
                {result.emailed
                  ? "Emailed to the user."
                  : "Email isn't configured, so share this link with the user directly:"}
              </p>
              {!result.emailed ? (
                <code className="mt-2 block break-all rounded-lg bg-white px-3 py-2 font-mono text-xs text-brand-800 shadow-sm">
                  {result.link}
                </code>
              ) : null}
            </div>
          )}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-brand-100">
        <table className="w-full text-left text-sm">
          <thead className="bg-brand-50/60 text-xs uppercase tracking-wide text-ink-subtle">
            <tr>
              <th className="px-4 py-3 font-semibold">User</th>
              <th className="px-4 py-3 font-semibold">Progress</th>
              <th className="px-4 py-3 font-semibold">Reset password</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-50">
            {loading ? (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-ink-muted">
                  Loading…
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-ink-muted">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id} className="align-top">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 font-medium text-ink">
                      {u.email}
                      {u.role === "admin" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-brand-800">
                          <ShieldCheck className="h-3 w-3" aria-hidden /> Admin
                        </span>
                      ) : null}
                    </div>
                    {u.name ? (
                      <div className="text-xs text-ink-subtle">{u.name}</div>
                    ) : null}
                    {u.mustChangePassword ? (
                      <div className="mt-1 text-xs font-medium text-accent-700">
                        Must change password at next login
                      </div>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-ink-muted">
                    {u._count.progress} course{u._count.progress === 1 ? "" : "s"}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        disabled={busyEmail === u.email}
                        onClick={() => reset(u.email, "temp")}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-800 disabled:opacity-50"
                      >
                        <KeyRound className="h-3.5 w-3.5" aria-hidden /> Temp password
                      </button>
                      <button
                        type="button"
                        disabled={busyEmail === u.email}
                        onClick={() => reset(u.email, "link")}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-brand-50 disabled:opacity-50"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden /> Email link
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
