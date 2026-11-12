import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  id: string;
}

/**
 * Swiss-style section header: index + label in the left column,
 * large title spanning the rest of the 12-column grid.
 */
export function SectionHeader({ index, label, title, id }: SectionHeaderProps) {
  return (
    <header className="grid grid-cols-12 gap-x-5 border-t border-line pt-6 sm:gap-x-8">
      <p className="label col-span-12 mb-6 flex gap-3 md:col-span-3 md:mb-0">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true">/</span>
        <span>{label}</span>
      </p>
      <Reveal className="col-span-12 md:col-span-9">
        <h2 id={id} className="display text-[clamp(2.5rem,7vw,6rem)] text-fg">
          {title}
        </h2>
      </Reveal>
    </header>
  );
}
