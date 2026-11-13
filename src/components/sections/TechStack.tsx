import { technologies } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn, pad } from "@/lib/utils";

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="py-section">
      <Container>
        <SectionHeading
          title="Skills & tech stack"
          id="stack-title"
          intro={
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <span aria-hidden="true" className="size-1.5 bg-accent" />
              <span>Highlighted technologies were used across several of my commercial roles.</span>
            </p>
          }
        />

        <div className="mt-14 border-b border-line lg:mt-20">
          {technologies.map((category, i) => (
            <Reveal key={category.title} delay={0.03 * i}>
              <div className="grid grid-cols-12 gap-x-5 gap-y-4 border-t border-line py-6 sm:gap-x-8 md:py-7">
                <h3 className="col-span-12 flex items-baseline gap-4 text-base font-medium md:col-span-3">
                  <span className="label tabular-nums">{pad(i + 1)}</span>
                  {category.title}
                </h3>
                <ul className="col-span-12 flex flex-wrap gap-x-7 gap-y-2.5 md:col-span-9">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className={cn("flex items-center gap-2 text-[0.9375rem]", item.core ? "text-fg" : "text-fg-muted")}
                    >
                      {item.core && <span aria-hidden="true" className="size-1.5 bg-accent" />}
                      {item.name}
                      {item.core && <span className="sr-only"> (used across several roles)</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
