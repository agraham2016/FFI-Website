import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// The middleware only needs the edge-safe config; it verifies the session
// token and applies the `authorized` callback to protect matched routes.
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*", "/account/:path*"],
};
