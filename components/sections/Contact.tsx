import { ArrowUpRight, Download } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { cv, site, socials } from "@/data/site";
import type { SocialLink } from "@/data/types";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { DevNote, showDevNotes } from "@/components/ui/DevNote";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<SocialLink["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const linkRow =
  "group flex items-center justify-between gap-4 border-t border-line py-5 text-fg transition-colors hover:text-accent";

export function Contact() {
  // In production, only render the links list when there is something verified to show
  const hasLinks = showDevNotes || cv.available || socials.some((s) => s.href);

  return (
    <section aria-labelledby="contact-title" id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-12 gap-x-5 border-t border-line pt-6 sm:gap-x-8">
          <p className="label col-span-12 mb-10 flex gap-3 md:col-span-3 md:mb-0">
            <span className="text-accent">05</span>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </p>

          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 id="contact-title" className="display text-[clamp(2.75rem,8vw,7.5rem)]">
                Let&apos;s build something <span className="text-accent">that works.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
                Have a project, a role or a question? Email is the fastest way to reach me.
              </p>
              <AvailabilityBadge className="mt-6" />
            </Reveal>

            <Reveal delay={0.15} className="mt-14">
              <p className="label">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-3 inline-flex flex-wrap items-center gap-x-4 text-[clamp(1.25rem,4.2vw,3.25rem)] font-medium tracking-tight break-all transition-colors hover:text-accent"
              >
                <span className="link-underline">{site.email}</span>
                <ArrowUpRight
                  className="size-[0.8em] shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </a>
              <div className="mt-6">
                <CopyEmailButton email={site.email} />
              </div>
            </Reveal>

            {hasLinks && (
            <Reveal delay={0.2} className="mt-16">
              <ul className="max-w-2xl border-b border-line">
                {socials.map((social) => {
                  const Icon = icons[social.icon];
                  if (social.href) {
                    return (
                      <li key={social.label}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className={linkRow}>
                          <span className="flex items-center gap-4">
                            <Icon className="size-5" />
                            <span className="text-lg">{social.label}</span>
                            <span className="sr-only"> (opens in a new tab)</span>
                          </span>
                          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  }
                  // Unverified profile — only visible during development
                  return showDevNotes ? (
                    <li key={social.label} className="flex items-center justify-between border-t border-line py-5 text-fg-subtle">
                      <span className="flex items-center gap-4">
                        <Icon className="size-5" />
                        <span className="text-lg">{social.label}</span>
                      </span>
                      <DevNote>add verified URL in data/site.ts</DevNote>
                    </li>
                  ) : null;
                })}

                {cv.available ? (
                  <li>
                    <a href={cv.href} download className={linkRow}>
                      <span className="flex items-center gap-4">
                        <Download className="size-5" aria-hidden="true" />
                        <span className="text-lg">Download CV</span>
                        <span className="label">PDF</span>
                      </span>
                      <ArrowUpRight className="size-5 rotate-90 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                    </a>
                  </li>
                ) : (
                  showDevNotes && (
                    <li className="flex items-center justify-between border-t border-line py-5 text-fg-subtle">
                      <span className="flex items-center gap-4">
                        <Download className="size-5" aria-hidden="true" />
                        <span className="text-lg">Download CV</span>
                      </span>
                      <DevNote>add public/cv/michal-hadamik-cv.pdf</DevNote>
                    </li>
                  )
                )}
              </ul>
            </Reveal>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
