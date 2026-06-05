import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Foundation for Independence brand mark — the actual logo badge
 * (transparent background) supplied by the client.
 *
 * Decorative by default (alt=""): every place it's used sits next to a
 * visible "Foundation for Independence" wordmark or an aria-label.
 */
export function Logo({
  className,
  alt = "",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={500}
      height={500}
      priority
      className={cn("shrink-0 object-contain", className)}
    />
  );
}
