import { experience } from "@/data/experience";
import type { ExperienceEntry } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** "11/2025" → "2025-11" for the machine-readable <time> attribute. */
function toIso(date: string) {
  const [month, year] = date.split("/");
  return year && month ? `${year}-${month}` : undefined;
}

function Period({ entry }: { entry: ExperienceEntry }) {
  return (
    <p className="font-mono text-xs tracking-wide text-fg-muted tabular-nums">
      <time dateTime={toIso(entry.start)}>{entry.start}</time>
      <span aria-hidden="true"> — </span>
      <span className="sr-only"> to </span>
      {entry.end === "Present" ? <span>Present</span> : <time dateTime={toIso(entry.end)}>{entry.end}</time>}
    </p>
  );
}

export function ExperienceTimeline() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeader index="04" label="Experience" title="Where I've worked." id="experience-title" />

        <ol className="relative mt-14 md:mt-20">
          {experience.map((entry, i) => (
            <Reveal as="li" key={`${entry.company}-${entry.start}`} delay={0.04 * i}>
              <article className="group grid grid-cols-12 gap-x-5 gap-y-3 border-t border-line py-8 sm:gap-x-8 md:py-10">
                {/* Date column with timeline marker */}
                <div className="col-span-12 flex items-center gap-3 md:col-span-3 md:items-start">
                  <span
                    aria-hidden="true"
                    className={`size-2 shrink-0 md:mt-1 ${i === 0 ? "bg-accent" : "border border-line-strong bg-ink group-hover:border-accent"}`}
                  />
                  <Period entry={entry} />
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">{entry.role}</h3>
                  <p className="mt-1 text-sm text-fg-muted">
                    {entry.companyUrl ? (
                      <a
                        href={entry.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline hover:text-fg"
                      >
                        {entry.company}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      entry.company
                    )}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="text-base leading-relaxed text-fg">{entry.summary}</p>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5" aria-label="Technologies">
                    {entry.technologies.map((t) => (
                      <li key={t} className="font-mono text-xs text-fg-subtle">
                        {t}
                      </li>
                    ))}
                  </ul>
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
