import { projects } from "@/data/projects";
import { FeaturedProject } from "@/components/projects/FeaturedProject";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

/**
 * Editorial layout: featured projects in alternating mirrored rows,
 * then the rest on a 6-column grid (3 narrow cards, then 2 wide).
 */
export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" aria-labelledby="work-title" className="py-section">
      <Container>
        <SectionHeading
          index="01"
          label="Work"
          title="Selected work."
          id="work-title"
          intro="Enterprise applications, content platforms, analytics and e-commerce — a selection of projects I have contributed to."
        />

        <ol className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
          {featured.map((project, i) => (
            <Reveal as="li" key={project.id}>
              <FeaturedProject project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </ol>

        <ol className="mt-20 grid gap-5 border-t border-line pt-10 sm:grid-cols-2 lg:mt-28 lg:grid-cols-6">
          {rest.map((project, i) => {
            const wide = i >= 3;
            return (
              <Reveal
                as="li"
                key={project.id}
                delay={0.05 * (i % 3)}
                className={cn(wide ? "lg:col-span-3" : "lg:col-span-2", i === rest.length - 1 && rest.length % 2 === 1 && "sm:col-span-2")}
              >
                <ProjectCard
                  project={project}
                  sizes={wide ? "(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
                />
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
