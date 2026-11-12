import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { cn, pad } from "@/lib/utils";

/**
 * The project title is the link; its ::after stretches over the whole card
 * so the entire card is clickable while the heading stays the accessible name.
 */
export function ProjectTitleLink({ project, className }: { project: Project; className?: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none", className)}
    >
      {project.title}
      <span className="sr-only"> — visit {project.domain} (opens in a new tab)</span>
    </a>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <p className="label flex items-center gap-2.5">
      <span className="text-accent tabular-nums">{pad(project.number)}</span>
      <span aria-hidden="true" className="h-px w-4 bg-line-strong" />
      <span>{project.category}</span>
    </p>
  );
}

export function TechTags({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li key={t} className="border border-line px-2 py-1 font-mono text-[0.6875rem] text-fg-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function VisitRow({ domain }: { domain: string }) {
  return (
    <div className="flex items-center justify-between border-t border-line pt-4">
      <span className="font-mono text-xs text-fg-muted transition-colors group-hover:text-fg">{domain}</span>
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center border border-line-strong text-fg transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-ink"
      >
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
      </span>
    </div>
  );
}

/** Card-level focus ring: the stretched link is invisible, so the card shows focus instead. */
export const cardFocus = "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-accent";
