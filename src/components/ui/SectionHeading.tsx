import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  /** "01" */
  index: string;
  label: string;
  title: string;
  /** id of the <h2>, referenced by the section's aria-labelledby */
  id: string;
  intro?: ReactNode;
}

/**
 * Swiss-style section header on the 12-column grid:
 * index + label on the left, heading and optional intro on the right.
 */
export function SectionHeading({ index, label, title, id, intro }: SectionHeadingProps) {
  return (
    <header className="grid grid-cols-12 gap-x-5 border-t border-line pt-5 sm:gap-x-8">
      <p className="label col-span-12 mb-8 flex items-center gap-2.5 md:col-span-3 md:mb-0">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
        <span>{label}</span>
      </p>
      <div className="col-span-12 md:col-span-9">
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
      </div>
    </header>
  );
}
