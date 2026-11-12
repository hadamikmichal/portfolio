import { existsSync } from "node:fs";
import { join } from "node:path";
import { cvPath } from "@/data/profile";

/**
 * Server-only: true when the CV PDF exists in /public.
 * Evaluated at build time — the Download CV button never points to a missing file.
 */
export const hasCv = existsSync(join(process.cwd(), "public", cvPath));
