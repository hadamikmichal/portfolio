"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure context / denied) — the mailto link remains.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-11 items-center gap-2 border border-line-strong px-4 font-mono text-xs tracking-wide text-fg-muted uppercase transition-colors hover:border-fg hover:text-fg"
    >
      {copied ? <Check className="size-3.5 text-accent" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
      <span>{copied ? "Copied" : "Copy email"}</span>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
