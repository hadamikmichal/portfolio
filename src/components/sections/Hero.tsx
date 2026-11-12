import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MonogramPanel } from "@/components/ui/Monogram";
import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

export function Hero() {
  const [lineOne, lineTwo] = profile.headline;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col pt-16">
      <Container className="flex flex-1 flex-col pt-8 sm:pt-14 lg:pt-12">
        {/* Label row */}
        <Reveal onMount className="flex items-center justify-between border-t border-line pt-5">
          <p className="label flex items-center gap-2.5 text-fg">
            <span aria-hidden="true" className="size-1.5 bg-accent" />
            {profile.heroLabel}
          </p>
          <p className="label hidden sm:block">Portfolio — {profile.domain}</p>
        </Reveal>

        {/* Headline */}
        <h1 id="hero-title" className="display mt-12 text-[clamp(2.6rem,6.5vw,6.25rem)] sm:mt-16 lg:mt-14">
          <span className="sr-only">
            {profile.name}, {profile.title}.{" "}
          </span>
          <Reveal onMount as="span" delay={0.1} y={28} className="block">
            {lineOne}
          </Reveal>
          <Reveal onMount as="span" delay={0.2} y={28} className="block text-fg-muted">
            {lineTwo}
          </Reveal>
        </h1>

        {/* Intro · stack · monogram */}
        <div className="mt-12 grid grid-cols-12 gap-x-5 gap-y-10 sm:gap-x-8 lg:mt-14">
          <div className="col-span-12 md:col-span-7 lg:col-span-6">
            <Reveal onMount delay={0.35}>
              <p className="max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">{profile.intro}</p>
            </Reveal>
            <Reveal onMount delay={0.45} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#work" icon={<ArrowDown className="size-4" />}>
                Explore selected work
              </Button>
              <Button href="#contact" variant="secondary" icon={<ArrowRight className="size-4" />}>
                Let&apos;s talk
              </Button>
            </Reveal>
          </div>

          <Reveal onMount delay={0.55} className="col-span-12 md:col-span-5 lg:col-span-3">
            <p className="label">Core stack</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-y-2.5">
              {profile.coreStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2.5 text-sm text-fg">
                  <span aria-hidden="true" className="hidden h-px w-3 bg-line-strong md:block" />
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="col-span-12 hidden lg:col-span-3 lg:block">
            <MonogramPanel />
          </div>
        </div>

        {/* Bridge into Selected Work — the spacer keeps a minimum gap and pushes it to the bottom */}
        <div aria-hidden="true" className="min-h-14 flex-1" />
        <a
          href="#work"
          className="group flex items-center justify-between border-t border-line pt-5 pb-6 transition-colors hover:border-accent sm:pb-8"
        >
          <span className="label flex items-center gap-3 text-fg">
            <ArrowDown
              className="size-3.5 text-accent transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            Selected work
          </span>
          <span className="label tabular-nums">
            {pad(1)} — {pad(projects.length)}
          </span>
        </a>
      </Container>
    </section>
  );
}
