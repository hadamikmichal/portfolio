import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section aria-labelledby="work-title" id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeader index="03" label="Work" title="Selected work." id="work-title" />

        <div className="mt-14 grid grid-cols-12 gap-x-5 sm:gap-x-8 md:mt-20">
          <p className="col-span-12 max-w-xl text-base leading-relaxed text-fg-muted md:col-span-6 md:col-start-4 lg:text-lg">
            Web applications, portals and WordPress builds I have worked on — from licensing workflows to e-commerce.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {featured.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={0.08 * i}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </ul>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
          {rest.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={0.05 * (i % 3)}>
              <ProjectCard project={project} index={featured.length + i} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
