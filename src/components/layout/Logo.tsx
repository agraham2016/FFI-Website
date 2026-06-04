import { cn } from "@/lib/cn";

/**
 * FFI mark — a stylized landscape inside a circle, evoking the
 * "Foundation for Independence" wordmark on the existing print materials:
 * sun on the horizon, layered hills, a path forward.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("shrink-0", className)}
    >
      <circle cx="24" cy="24" r="22" fill="currentColor" opacity="0.10" />
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.45"
      />
      {/* Sun */}
      <circle cx="24" cy="20" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      {/* Far hill */}
      <path
        d="M6 28c4-3 8-3 12 0s8 3 12 0 8-3 12 0v6H6v-6Z"
        fill="currentColor"
        opacity="0.25"
      />
      {/* Near hill */}
      <path
        d="M6 32c4-2.5 8-2.5 12 0s8 2.5 12 0 8-2.5 12 0v4H6v-4Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Path */}
      <path
        d="M24 36c-1.5-2 .5-4 0-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}
