import { availability } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Renders nothing unless `availability.enabled` is true in data/profile.ts. */
export function AvailabilityStatus({ className }: { className?: string }) {
  if (!availability.enabled) return null;
  return (
    <p className={cn("inline-flex items-center gap-2 font-mono text-[0.6875rem] tracking-[0.08em] text-fg-muted uppercase", className)}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {availability.label}
    </p>
  );
}
