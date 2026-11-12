import { techStack } from "@/data/tech-stack";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TechStack() {
  return (
    <section aria-labelledby="stack-title" id="stack" className="py-24 sm:py-32">
      <Container>
        <SectionHeader index="02" label="Stack" title="Tools of the trade." id="stack-title" />

        <div className="mt-14 border-b border-line md:mt-20">
          {techStack.map((category, i) => (
            <Reveal key={category.title} delay={0.04 * i}>
              <div className="group grid grid-cols-12 gap-x-5 gap-y-4 border-t border-line py-7 sm:gap-x-8">
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                  <span className="label tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-accent">
                    {category.title}
                  </h3>
                </div>
                <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="border border-line px-3 py-1.5 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                    >
                      {item}
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
