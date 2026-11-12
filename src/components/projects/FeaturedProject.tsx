import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProjectCover } from "./ProjectCover";
import { cardFocus, ProjectMeta, ProjectTitleLink, TechTags, VisitRow } from "./ProjectParts";

interface FeaturedProjectProps {
  project: Project;
  /** Mirror the layout (cover on the right) for an asymmetric rhythm */
  reverse?: boolean;
}

export function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  return (
    <article className={cn("group relative grid grid-cols-12 gap-x-5 gap-y-8 sm:gap-x-8", cardFocus)}>
      <div className={cn("col-span-12 lg:col-span-7", reverse && "lg:order-2 lg:col-start-6")}>
        <ProjectCover project={project} sizes="(min-width: 1440px) 780px, (min-width: 1024px) 56vw, 100vw" />
      </div>

      <div className={cn("col-span-12 flex flex-col gap-7 lg:col-span-5", reverse && "lg:order-1")}>
        <ProjectMeta project={project} />

        <h3 className="heading text-[clamp(2rem,3.6vw,3.25rem)] transition-colors duration-300 group-hover:text-accent">
          <ProjectTitleLink project={project} />
        </h3>

        <p className="text-base leading-relaxed text-fg-muted">{project.description}</p>

        {project.detailsVerified && project.contribution && (
          <div className="border-l border-accent pl-5">
            <p className="label text-accent">My contribution</p>
            <p className="mt-2 text-sm leading-relaxed text-fg">{project.contribution}</p>
          </div>
        )}

        {project.highlights.length > 0 && (
          <ul aria-label="Highlights" className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-fg">
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-col gap-5">
          <TechTags items={project.technologies} />
          <VisitRow domain={project.domain} />
        </div>
      </div>
    </article>
  );
}
