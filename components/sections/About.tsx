import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const focusAreas = [
  {
    title: "Frontend engineering",
    body: "Angular and TypeScript are my primary tools. I work with RxJS for reactive state and data flows, and build interfaces that stay maintainable as requirements grow.",
  },
  {
    title: "Complex business applications",
    body: "Multi-step forms, conditional wizard logic and workflows reproduced from legacy systems — the kind of applications where correctness matters more than decoration.",
  },
  {
    title: "Fullstack experience",
    body: "On the backend I have worked with Node.js and NestJS, applying DDD and CQRS, as well as PHP and REST APIs.",
  },
  {
    title: "WordPress & e-commerce",
    body: "Custom WordPress themes and plugins, ACF-driven content management and WooCommerce stores, built pixel-perfect from design.",
  },
];

const facts = [
  { label: "Commercial work since", value: "2018" },
  { label: "Location", value: site.location },
  { label: "English", value: site.english },
  { label: "Primary stack", value: "Angular · TypeScript" },
];

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeader index="01" label="About" title="Engineering with intent." id="about-title" />

        <div className="mt-14 grid grid-cols-12 gap-x-5 gap-y-14 sm:gap-x-8 md:mt-20">
          {/* Facts column */}
          <Reveal className="col-span-12 md:col-span-3">
            <dl className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label} className="border-t border-line pt-3">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Narrative */}
          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <p className="max-w-4xl text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
                I&apos;m a Software Engineer with several years of commercial experience building and maintaining web
                applications — from complex business platforms and online licensing systems to e-commerce and custom
                WordPress websites.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid max-w-4xl gap-6 text-base leading-relaxed text-fg-muted sm:grid-cols-2 sm:gap-8 lg:text-lg">
                <p>
                  I can independently deliver projects end to end: requirements analysis and planning, implementation,
                  testing, deployment and further development.
                </p>
                <p>
                  I also use AI-assisted development tools such as Claude Code, Codex and Cursor as part of my daily
                  workflow — to move faster while keeping the engineering judgement where it belongs.
                </p>
              </div>
            </Reveal>

            <ul className="mt-16 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
              {focusAreas.map((area, i) => (
                <Reveal as="li" key={area.title} delay={0.05 * i} className="bg-ink p-6 sm:p-8">
                  <span className="label text-accent">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-medium tracking-tight">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{area.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
