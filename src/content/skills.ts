import type { PhoneSkill, SkillGroup } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  SKILLS — rows on the page. `highlight: true` renders bold ink.
 * ─────────────────────────────────────────────────────────────
 */
export const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    items: [
      { name: "React Native", highlight: true },
      { name: "Flutter", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Dart" },
      { name: "Expo" },
    ],
  },
  {
    label: "Native",
    items: [
      { name: "Swift" },
      { name: "Kotlin" },
      { name: "Native modules" },
      { name: "Reanimated" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Redux Toolkit" },
      { name: "Zustand" },
      { name: "React Query" },
      { name: "GraphQL" },
      { name: "Firebase" },
    ],
  },
  {
    label: "Shipping",
    items: [
      { name: "Fastlane" },
      { name: "GitHub Actions" },
      { name: "App Store Connect" },
      { name: "Play Console" },
      { name: "Sentry" },
    ],
  },
];

/** The five rows on the phone's Toolkit screen. */
export const phoneSkills: PhoneSkill[] = [
  { name: "React Native", note: "8 yrs · main weapon", color: "#61DAFB" },
  { name: "Flutter", note: "3 yrs · production", color: "#45C9F5" },
  { name: "TypeScript", note: "everywhere", color: "#3178C6" },
  { name: "Firebase", note: "auth → analytics", color: "#FFCA28" },
  { name: "Fastlane + CI", note: "release trains", color: "#4C8DFF" },
];
