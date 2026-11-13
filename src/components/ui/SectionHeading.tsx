import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  title: string;
  /** id of the <h2>, referenced by the section's aria-labelledby */
  id: string;
  intro?: ReactNode;
}

/**
 * Section header: a single plain-language heading with an optional intro.
 * Deliberately no index numbers or eyebrow labels — the heading alone names the section.
 */
export function SectionHeading({ title, id, intro }: SectionHeadingProps) {
  return (
    <header className="border-t border-line pt-8 sm:pt-10">
      <Reveal>
        <h2 id={id} className="heading max-w-4xl text-[clamp(2.25rem,5.2vw,4.75rem)]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.08}>
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{intro}</div>
        </Reveal>
      )}
    </header>
  );
}
