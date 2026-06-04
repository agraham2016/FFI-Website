import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to save and continue your FFI course progress.",
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to pick up your courses where you left off."
      footer={
        <>
          New here?{" "}
          <Link href="/signup" className="font-medium text-brand-700 hover:text-brand-800">
            Create an account
          </Link>
          <span className="mx-2 text-brand-200">·</span>
          <Link
            href="/forgot-password"
            className="font-medium text-brand-700 hover:text-brand-800"
          >
            Forgot password?
          </Link>
        </>
      }
    >
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthCard>
  );
}
