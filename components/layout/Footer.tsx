import { ArrowUp } from "lucide-react";
import { navItems, site, socials } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const verifiedSocials = socials.filter((s) => s.href);

  return (
    <footer className="border-t border-line py-10">
      <Container className="grid grid-cols-12 gap-x-5 gap-y-8 sm:gap-x-8">
        <div className="col-span-12 md:col-span-3">
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-fg-subtle">
            {site.role} · {site.location}
          </p>
        </div>

        <nav aria-label="Footer" className="col-span-6 md:col-span-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-underline text-sm text-fg-muted hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
            {verifiedSocials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm text-fg-muted hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 flex justify-end md:col-span-3">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-fg-muted uppercase hover:text-fg"
          >
            Back to top
            <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <p className="label col-span-12 border-t border-line pt-6">
          © {site.name}. Designed &amp; built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
