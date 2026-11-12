import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { ProjectCover } from "./ProjectCover";
import { cardFocus, ProjectMeta, ProjectTitleLink, TechTags, VisitRow } from "./ProjectParts";

export function ProjectCard({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col border border-line bg-ink-2 transition-colors duration-300 hover:border-line-strong hover:bg-card",
        cardFocus,
      )}
    >
      <ProjectCover project={project} sizes={sizes} className="border-0 border-b" />

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <ProjectMeta project={project} />

        <h3 className="heading text-[1.75rem] transition-colors duration-300 group-hover:text-accent">
          <ProjectTitleLink project={project} />
        </h3>

        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>

        {project.detailsVerified && project.contribution && (
          <p className="border-l border-line-strong pl-4 text-sm leading-relaxed text-fg">
            <span className="sr-only">My contribution: </span>
            {project.contribution}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-5 pt-2">
          <TechTags items={project.technologies} />
          <VisitRow domain={project.domain} />
        </div>
      </div>
    </article>
  );
}
