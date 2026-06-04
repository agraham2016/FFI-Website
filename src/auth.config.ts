import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe Auth.js config. This file MUST NOT import Node-only modules
 * (Prisma, bcrypt, crypto) because it is loaded by the middleware, which runs
 * on the edge runtime. The credential-checking provider lives in `auth.ts`.
 */
export const authConfig = {
  trustHost: true,
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  providers: [],
  callbacks: {
    // Route protection for the middleware matcher (see src/middleware.ts).
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = Boolean(auth?.user);
      const role = (auth?.user as { role?: string } | undefined)?.role;
      const path = nextUrl.pathname;

      if (path.startsWith("/admin")) return isLoggedIn && role === "admin";
      if (path.startsWith("/account")) return isLoggedIn;
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = (user as { role?: string }).role ?? "user";
        token.mustChangePassword =
          (user as { mustChangePassword?: boolean }).mustChangePassword ?? false;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? session.user.id;
        session.user.role = (token.role as string) ?? "user";
        session.user.mustChangePassword = Boolean(token.mustChangePassword);
      }
      return session;
    },
  },
} satisfies NextAuthConfig;
