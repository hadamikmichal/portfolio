import Image from "next/image";
import type { Project } from "@/data/types";
import { cn, pad } from "@/lib/utils";

interface ProjectCoverProps {
  project: Project;
  /** Passed to next/image so the browser downloads the right width */
  sizes: string;
  className?: string;
}

/**
 * Real screenshot when `project.image` is set, otherwise a designed typographic cover.
 * The frame keeps a fixed aspect ratio, so the layout never depends on an asset existing.
 */
export function ProjectCover({ project, sizes, className }: ProjectCoverProps) {
  return (
    <div className={cn("relative aspect-[16/10] overflow-hidden border border-line bg-card", className)}>
      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={sizes}
            className="object-cover object-top transition-transform duration-700 ease-out-quint group-hover:scale-[1.025]"
          />
          {/* Slight dimming so bright screenshots sit calmly on the dark page; lifts on hover */}
          <div className="absolute inset-0 bg-ink/25 transition-opacity duration-500 group-hover:opacity-0" />
        </>
      ) : (
        <TypographicCover project={project} />
      )}
    </div>
  );
}

function TypographicCover({ project }: { project: Project }) {
  return (
    <div role="img" aria-label={`${project.title} — designed project cover`} className="absolute inset-0">
      {/* Abstract contour rings, anchored top-right */}
      <svg
        aria-hidden="true"
        className="absolute -top-1/3 -right-1/4 h-[150%] text-line transition-transform duration-700 ease-out-quint group-hover:scale-105"
        viewBox="0 0 400 400"
        fill="none"
      >
        {Array.from({ length: 9 }, (_, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={22 + i * 22}
            stroke={i === 3 ? "var(--color-accent)" : "currentColor"}
            strokeOpacity={i === 3 ? 0.9 : 1}
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8">
        <div className="label flex justify-between">
          <span>{project.category}</span>
          <span className="tabular-nums">{pad(project.number)}</span>
        </div>
        <div>
          <p className="heading max-w-[80%] text-[clamp(2rem,5vw,4.5rem)] text-fg">{project.title}</p>
          <p className="mt-3 flex items-center gap-2 font-mono text-xs text-fg-muted">
            <span aria-hidden="true" className="size-1.5 bg-accent" />
            {project.domain}
          </p>
        </div>
      </div>
    </div>
  );
}
