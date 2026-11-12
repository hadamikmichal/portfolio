import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";
import { DevNote } from "@/components/ui/DevNote";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * The whole card is clickable through a stretched link (`after:absolute after:inset-0`),
 * while the heading remains the accessible name of the link.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return project.featured ? <FeaturedCard project={project} index={index} /> : <CompactCard project={project} index={index} />;
}

function ExternalLink({ project, className }: { project: Project; className: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`after:absolute after:inset-0 after:content-[''] focus-visible:outline-none ${className}`}
    >
      {project.title}
      <span className="sr-only"> — visit {project.domain} (opens in a new tab)</span>
    </a>
  );
}

function Meta({ project, index }: ProjectCardProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className="label flex items-center gap-3">
        <span className="text-accent tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <span>{project.category}</span>
      </p>
      {project.period && <p className="label tabular-nums">{project.period}</p>}
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="font-mono text-xs text-fg-subtle">
          {t}
        </li>
      ))}
    </ul>
  );
}

function DomainRow({ domain }: { domain: string }) {
  return (
    <div className="flex items-center justify-between border-t border-line pt-4 text-sm text-fg-muted transition-colors group-hover:text-fg">
      <span className="font-mono text-xs">{domain}</span>
      <span className="grid size-9 place-items-center border border-line-strong transition-all duration-500 ease-out-expo group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
        <ArrowUpRight
          className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-px group-hover:-translate-y-px"
          aria-hidden="true"
        />
      </span>
    </div>
  );
}

const cardBase =
  "group relative flex h-full flex-col border border-line bg-ink-raised transition-colors duration-500 ease-out-expo hover:border-line-strong hover:bg-ink-high has-[a:focus-visible]:border-accent";

function FeaturedCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`${cardBase} gap-10 p-6 sm:p-10`}>
      <Meta project={project} index={index} />

      <div className="flex flex-1 flex-col gap-8">
        <h3 className="display text-[clamp(2.25rem,5vw,4.5rem)] transition-colors duration-500 group-hover:text-accent">
          <ExternalLink project={project} className="" />
        </h3>

        <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">{project.description}</p>

        {project.contribution && (
          <div className="max-w-xl border-l-2 border-accent pl-5">
            <p className="label">My contribution</p>
            <p className="mt-2 text-sm leading-relaxed text-fg sm:text-base">{project.contribution}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-6">
        <TechList items={project.technologies} />
        <DomainRow domain={project.domain} />
      </div>
    </article>
  );
}

function CompactCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`${cardBase} gap-8 p-6 sm:p-8`}>
      <Meta project={project} index={index} />

      <div className="flex flex-1 flex-col gap-4">
        <h3 className="display text-[clamp(1.75rem,3vw,2.5rem)] transition-colors duration-500 group-hover:text-accent">
          <ExternalLink project={project} className="" />
        </h3>
        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
        {project.needsReview && (
          <p className="relative z-10">
            <DevNote>review description &amp; add responsibilities</DevNote>
          </p>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <TechList items={project.technologies} />
        <DomainRow domain={project.domain} />
      </div>
    </article>
  );
}
