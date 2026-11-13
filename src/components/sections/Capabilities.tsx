import { Blocks, Layers, type LucideIcon, Network, PanelsTopLeft } from "lucide-react";
import { capabilities } from "@/data/capabilities";
import type { Capability } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pad } from "@/lib/utils";

const icons: Record<Capability["icon"], LucideIcon> = {
  frontend: PanelsTopLeft,
  fullstack: Layers,
  wordpress: Blocks,
  architecture: Network,
};

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="bg-ink-2 py-section">
      <Container>
        <SectionHeading
          title="What I do"
          id="capabilities-title"
          intro="Areas I have worked in professionally — from interfaces and APIs to content platforms and system architecture."
        />

        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {capabilities.map((capability, i) => {
            const Icon = icons[capability.icon];
            return (
              <Reveal
                as="li"
                key={capability.id}
                delay={0.06 * i}
                className="group flex flex-col bg-ink-2 p-6 transition-colors duration-300 hover:bg-card sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className="size-6 text-fg-muted transition-colors duration-300 group-hover:text-accent"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span className="label tabular-nums">{pad(i + 1)}</span>
                </div>
                <h3 className="mt-14 text-xl font-medium tracking-[-0.02em] lg:mt-20">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">{capability.description}</p>
                <ul aria-label="Related technologies" className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-8">
                  {capability.related.map((tech) => (
                    <li key={tech} className="font-mono text-[0.6875rem] text-fg-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
