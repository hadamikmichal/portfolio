import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  /** Trailing icon; nudged on hover */
  icon?: ReactNode;
  /** Opens in a new tab with safe rel attributes */
  external?: boolean;
  size?: "md" | "lg";
}

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-fg",
  secondary: "border border-line-strong text-fg hover:border-fg hover:bg-fg/5",
};

/**
 * Link styled as a button. All CTAs on this site navigate somewhere,
 * so an <a> is the semantically correct element.
 */
export function Button({
  href,
  variant = "primary",
  icon,
  external,
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group/button inline-flex items-center justify-center gap-3 text-sm font-medium transition-colors duration-300",
        size === "md" ? "h-12 px-5" : "h-14 px-7 text-base",
        variants[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {icon && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-out-quint group-hover/button:translate-x-0.5"
        >
          {icon}
        </span>
      )}
    </a>
  );
}
