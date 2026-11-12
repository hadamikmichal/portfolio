import { ArrowUp } from "lucide-react";
import { navigation, profile, socialLinks } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { MonogramMark } from "@/components/ui/Monogram";

export function Footer() {
  const socials = [
    { label: "GitHub", href: socialLinks.github },
    { label: "LinkedIn", href: socialLinks.linkedin },
  ].filter((s) => s.href.trim() !== "");

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="grid grid-cols-12 gap-x-5 gap-y-10 py-12 sm:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <MonogramMark className="text-2xl" />
          <p className="mt-4 text-sm">{profile.name}</p>
          <p className="mt-1 text-sm text-fg-muted">
            {profile.title} · {profile.location}
          </p>
        </div>

        <nav aria-label="Footer" className="col-span-6 md:col-span-3">
          <p className="label">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline text-sm text-fg-muted hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 md:col-span-3">
          <p className="label">Contact</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline text-sm break-all text-fg-muted hover:text-fg">
                Email
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-fg-muted hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-12 flex md:col-span-3 md:justify-end">
          <a
            href="#top"
            className="group inline-flex h-11 items-center gap-2 self-start border border-line px-4 font-mono text-xs tracking-wide text-fg-muted uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <p className="label col-span-12 flex flex-col justify-between gap-2 border-t border-line pt-6 sm:flex-row">
          <span>© {profile.name}</span>
          <span>{profile.domain}</span>
        </p>
      </Container>
    </footer>
  );
}
