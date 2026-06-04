import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { SignupForm } from "@/components/auth/SignupForm";

export const metadata: Metadata = {
  title: "Create an account",
  description:
    "Create a free account to save your course progress across your devices.",
};

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your free account"
      subtitle="An account saves your progress so you can continue on any device. It's free, and you can use the courses without one too."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-700 hover:text-brand-800">
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthCard>
  );
}
