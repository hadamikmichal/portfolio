/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** 3 → "03" */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "2025-11" → "November 2025"; "present" → "Present" */
export function formatMonth(value: string) {
  if (value === "present") return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/** "2025-11" → "Nov 2025" */
export function formatMonthShort(value: string) {
  if (value === "present") return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1].slice(0, 3)} ${year}`;
}
