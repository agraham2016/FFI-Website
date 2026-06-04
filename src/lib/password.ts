import bcrypt from "bcryptjs";
import { createHash, randomBytes, randomInt } from "crypto";

const BCRYPT_ROUNDS = 12;

export const MIN_PASSWORD_LENGTH = 8;

export function hashPassword(plain: string): Promise<string> {
  return bcrypt.hash(plain, BCRYPT_ROUNDS);
}

export function verifyPassword(plain: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}

/** Returns a problem string if the password is too weak, otherwise null. */
export function validatePassword(plain: unknown): string | null {
  if (typeof plain !== "string") return "Please enter a password.";
  if (plain.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return null;
}

/** A raw, single-use reset token (the part that goes in the email link). */
export function generateResetToken(): string {
  return randomBytes(32).toString("hex");
}

/** We only ever store the hash of a reset token, never the raw value. */
export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/**
 * A readable temporary password an admin can give a locked-out learner.
 * The account is flagged so the user must change it at next login.
 */
export function generateTempPassword(): string {
  // Avoid ambiguous characters (0/O, 1/l) for read-aloud over the phone.
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < 8; i += 1) out += alphabet[randomInt(alphabet.length)];
  return `FFI-${out.slice(0, 4)}-${out.slice(4)}`;
}

export function normalizeEmail(email: unknown): string {
  return String(email ?? "").trim().toLowerCase();
}
