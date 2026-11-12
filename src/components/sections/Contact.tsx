import { ArrowUpRight, Download } from "lucide-react";
import { contact, cvPath, profile, socialLinks } from "@/data/profile";
import { AvailabilityStatus } from "@/components/ui/AvailabilityStatus";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { hasCv } from "@/lib/cv";

export function Contact() {
  const socials = [
    { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
    { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedinIcon },
  ].filter((s) => s.href.trim() !== "");

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink-2 py-section">
      <Container>
        <div className="grid grid-cols-12 gap-x-5 border-t border-line pt-5 sm:gap-x-8">
          <p className="label col-span-12 mb-10 flex items-center gap-2.5 md:col-span-3 md:mb-0">
            <span className="text-accent">06</span>
            <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
            <span>Contact</span>
          </p>

          <div className="col-span-12 md:col-span-9">
            <Reveal>
              <h2 id="contact-title" className="display text-[clamp(2.75rem,8vw,7.5rem)]">
                {contact.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">{contact.copy}</p>
              <AvailabilityStatus className="mt-6" />
            </Reveal>

            <Reveal delay={0.14} className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`mailto:${profile.email}`} size="lg" icon={<ArrowUpRight className="size-5" />}>
                {contact.cta}
              </Button>
              {hasCv && (
                <Button
                  href={cvPath}
                  download="Michal-Hadamik-CV.pdf"
                  variant="secondary"
                  size="lg"
                  icon={<Download className="size-4" />}
                >
                  Download CV
                </Button>
              )}
            </Reveal>

            <Reveal delay={0.2} className="mt-16 grid gap-10 border-t border-line pt-8 sm:grid-cols-2">
              <div>
                <p className="label">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline mt-3 inline-block text-xl font-medium tracking-[-0.02em] break-all hover:text-accent sm:text-2xl"
                >
                  {profile.email}
                </a>
                <div className="mt-5">
                  <CopyEmailButton email={profile.email} />
                </div>
              </div>

              {socials.length > 0 && (
                <div>
                  <p className="label">Elsewhere</p>
                  <ul className="mt-3 flex flex-col">
                    {socials.map(({ label, href, Icon }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex h-12 items-center gap-3 text-lg transition-colors hover:text-accent"
                        >
                          <Icon className="size-5" />
                          {label}
                          <span className="sr-only"> (opens in a new tab)</span>
                          <ArrowUpRight
                            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
