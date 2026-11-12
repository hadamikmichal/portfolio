import { about, profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const facts = [
  { label: "Role", value: profile.title },
  { label: "Location", value: profile.location },
  { label: "Commercial work since", value: String(profile.careerStart) },
  { label: "English", value: profile.english },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-section">
      <Container>
        <SectionHeading index="02" label="About" title={about.heading} id="about-title" />

        <div className="mt-14 grid grid-cols-12 gap-x-5 gap-y-14 sm:gap-x-8 lg:mt-20">
          <Reveal className="col-span-12 md:order-2 md:col-span-9">
            <p className="max-w-4xl text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] font-medium tracking-[-0.025em] text-fg">
              {about.lead}
            </p>
            <div className="mt-10 grid max-w-4xl gap-6 text-base leading-relaxed text-fg-muted sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 lg:text-[1.0625rem]">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:order-1 md:col-span-3">
            <dl className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label} className="border-t border-line pt-3">
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
