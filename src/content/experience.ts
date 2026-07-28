import type { Job } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EXPERIENCE — newest first. Keep exactly one `current: true`.
 *  These rows render both on the page and on the phone screen.
 * ─────────────────────────────────────────────────────────────
 */
export const jobs: Job[] = [
  {
    company: "Mint",
    role: "Mobile Engineer — React Native, TypeScript",
    period: "2024 — now",
    periodShort: "now",
    current: true,
  },
  {
    company: "Vention",
    role: "React Native & Flutter Developer — fintech clients",
    period: "2022 — 2024",
    periodShort: "'22–'24",
  },
  {
    company: "Genesis Innovation · UZCARD",
    role: "React Native Developer — national payments",
    period: "2021 — 2022",
    periodShort: "'21–'22",
  },
  {
    company: "OKS Technologies",
    role: "React Native Developer — e-commerce & marketplaces",
    period: "2019 — 2020",
    periodShort: "'19–'20",
  },
  {
    company: "Mobile First",
    role: "React Native Developer — first apps shipped",
    period: "2017 — 2019",
    periodShort: "'17–'19",
  },
  {
    company: "TUIT",
    role: "BSc Software Engineering, Tashkent University of IT",
    period: "2016 — 2020",
    periodShort: "'16–'20",
  },
];

/** Short company names for the phone's Career screen. */
export const phoneJobLabel = (job: Job): { name: string; role: string } => {
  const name = job.company.includes("·") ? job.company : job.company;
  const role = job.role.split("—")[0].trim();
  return { name, role };
};
