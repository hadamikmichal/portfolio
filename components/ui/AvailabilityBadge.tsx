import { availability } from "@/data/site";
import type { AvailabilityStatus } from "@/data/types";

const dotColor: Record<AvailabilityStatus, string> = {
  available: "bg-emerald-400",
  limited: "bg-amber-400",
  unavailable: "bg-fg-subtle",
};

export function AvailabilityBadge({ className = "" }: { className?: string }) {
  const { status, label } = availability;
  return (
    <p className={`inline-flex items-center gap-2.5 font-mono text-xs tracking-wide text-fg-muted uppercase ${className}`}>
      <span className="relative flex size-2" aria-hidden="true">
        {status === "available" && (
          <span className={`absolute inline-flex size-full animate-ping rounded-full opacity-60 ${dotColor[status]}`} />
        )}
        <span className={`relative inline-flex size-2 rounded-full ${dotColor[status]}`} />
      </span>
      <span>
        <span className="sr-only">Status: </span>
        {label}
      </span>
    </p>
  );
}
