import type { Fact, LockNotification, SocialLink } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  GLOBAL SITE CONTENT — name, headline, links, hero facts.
 *  Edit freely; plain strings only.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Sarvar Abdurakhimov",
  /** Shown in the browser tab. */
  title: "Sarvar Abdurakhimov — Mobile Engineer (React Native & Flutter)",
  metaDescription:
    "Mobile engineer with 8 years in React Native and Flutter. 30+ apps published on the App Store and Google Play.",
  /** Small green badge above the headline. Set to "" to hide it. */
  availability: "Open to work",
  /** The big serif headline. {em} wraps the italic blue word. */
  headline: { before: "Mobile engineer who ", em: "ships", after: " — 30+ apps on both stores." },
  lede: {
    /** Bold parts render dark, plain parts grey. */
    parts: [
      { text: "React Native & Flutter", bold: true },
      { text: ", eight years across fintech, delivery, streaming and HR. Currently building at " },
      { text: "Mint", bold: true },
      { text: "." },
    ],
  },
  email: "algokano@gmail.com",
  cvUrl: "/cv/Sarvar_Abdurakhimov_CV.pdf",
  /** Carrier text on the phone's status bar. */
  domain: "sarvardev.uz",
  copyrightYear: new Date().getFullYear(),
};

/** The four quick-scan facts under the hero. Keep values short. */
export const facts: Fact[] = [
  { value: "30+", label: "apps published" },
  { value: "8 yrs", label: "in mobile" },
  { value: "iOS + Android", label: "one codebase" },
  { value: "Tashkent", label: "working worldwide" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/algokano", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sarvarbek", icon: "linkedin" },
  { label: "Telegram", url: "https://t.me/Abdurahimov_Sarvar", icon: "telegram" },
  { label: "Email", url: "mailto:algokano@gmail.com", icon: "email" },
];

/** Contact-section direct links (under the form). */
export const directLinks: SocialLink[] = [
  { label: "algokano@gmail.com", url: "mailto:algokano@gmail.com", icon: "email" },
  { label: "@Abdurahimov_Sarvar", url: "https://t.me/Abdurahimov_Sarvar", icon: "telegram" },
  { label: "in/sarvarbek", url: "https://www.linkedin.com/in/sarvarbek", icon: "linkedin" },
];

/** Notifications on the phone's lock screen. Pressing one scrolls the page. */
export const lockNotifications: LockNotification[] = [
  {
    emoji: "📱",
    gradient: ["#3D9BFF", "#1D5BD8"],
    title: "App Store",
    text: "30+ apps shipped to both stores",
    goto: "projects",
  },
  {
    emoji: "💼",
    gradient: ["#30D48A", "#0F9D63"],
    title: "Career",
    text: "8 years · currently at Mint",
    goto: "experience",
  },
  {
    emoji: "✉️",
    gradient: ["#4C8DFF", "#1A56C4"],
    title: "Messages",
    text: "Scroll down — send one for real",
    goto: "contact",
  },
];
