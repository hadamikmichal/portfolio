import type { ReactNode } from "react";

const isDev = process.env.NODE_ENV === "development";

/**
 * Marks content that still needs the owner's input.
 * Rendered only in development — production output never shows it.
 */
export function DevNote({ children }: { children: ReactNode }) {
  if (!isDev) return null;
  return (
    <span className="inline-flex items-center gap-1.5 border border-dashed border-accent/60 px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-accent uppercase">
      TODO · {children}
    </span>
  );
}

export const showDevNotes = isDev;
