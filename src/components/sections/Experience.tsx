import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn, formatMonth } from "@/lib/utils";

function Period({ entry }: { entry: ExperienceEntry }) {
  return (
    <p className="font-mono text-xs tracking-wide text-fg-muted tabular-nums">
      <time dateTime={entry.start}>{formatMonth(entry.start)}</time>
      <span aria-hidden="true"> — </span>
      <span className="sr-only"> to </span>
      {entry.end === "present" ? "Present" : <time dateTime={entry.end}>{formatMonth(entry.end)}</time>}
    </p>
  );
}

function Tags({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
      <p className="label w-28 shrink-0 pt-0.5">{label}</p>
      <ul aria-label={label} className="flex flex-wrap gap-x-3 gap-y-1">
        {items.map((t) => (
          <li key={t} className="font-mono text-xs text-fg">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-section">
      <Container>
        <SectionHeading index="05" label="Experience" title="Professional experience." id="experience-title" />

        <ol className="mt-14 lg:mt-20">
          {experience.map((entry, i) => (
            <Reveal as="li" key={entry.id} delay={0.03 * i}>
              <article className="group grid grid-cols-12 gap-x-5 gap-y-5 border-t border-line py-9 sm:gap-x-8 lg:py-12">
                {/* Timeline column */}
                <div className="col-span-12 flex items-center gap-3 md:col-span-3 md:flex-col md:items-start md:gap-4">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-2 shrink-0 transition-colors",
                      i === 0 ? "bg-accent" : "border border-line-strong group-hover:border-accent",
                    )}
                  />
                  <Period entry={entry} />
                </div>

                {/* Role */}
                <div className="col-span-12 md:col-span-9 lg:col-span-4">
                  <h3 className="text-2xl font-medium tracking-[-0.02em]">{entry.role}</h3>
                  <p className="mt-1.5 text-sm text-fg-muted">
                    {entry.company}
                    {entry.client && (
                      <>
                        <span aria-hidden="true" className="mx-2 text-line-strong">
                          /
                        </span>
                        <span className="sr-only">, client: </span>
                        <span className="text-fg">{entry.client}</span>
                      </>
                    )}
                  </p>
                </div>

                {/* Details */}
                <div className="col-span-12 flex flex-col gap-5 md:col-span-9 md:col-start-4 lg:col-span-5">
                  <p className="text-base leading-relaxed text-fg">{entry.project}</p>
                  <p className="text-sm leading-relaxed text-fg-muted">{entry.responsibilities}</p>
                  <div className="flex flex-col gap-3 pt-1">
                    {entry.architecture && <Tags label="Architecture" items={entry.architecture} />}
                    <Tags label="Technologies" items={entry.technologies} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
        <div className="border-t border-line" />
      </Container>
    </section>
  );
}
