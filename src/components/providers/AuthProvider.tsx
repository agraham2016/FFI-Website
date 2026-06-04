"use client";

import { SessionProvider } from "next-auth/react";
import { ProgressSync } from "./ProgressSync";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProgressSync />
      {children}
    </SessionProvider>
  );
}
