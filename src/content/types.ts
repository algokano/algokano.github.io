/**
 * Content model for the whole site.
 * Everything a visitor reads lives in the files next to this one —
 * you should never need to touch a component to change text or data.
 */

export type Platform = "ios" | "android";

export interface Project {
  /** Unique slug, used as React key. */
  id: string;
  name: string;
  /** Short category shown under the name, e.g. "Finance". */
  category: string;
  platforms: Platform[];
  /** 1–2 sentences. Keep it under ~140 characters so cards stay even. */
  description: string;
  /** Letters shown on the generated app icon (max 3). */
  initials: string;
  /** Two CSS colors for the icon gradient, e.g. ["#5B6BFF", "#2ED3B7"]. */
  gradient: [string, string];
  /**
   * Optional real icon. Put the file in /public/images/projects and
   * reference it as "/images/projects/file.png". When set, it replaces
   * the initials icon.
   */
  iconUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  /**
   * Fallback link when a store listing is gone or geo-blocked —
   * e.g. the app's official landing page.
   */
  websiteUrl?: string;
  /**
   * Set to true to keep a project in this file but hide it from the
   * site (e.g. the app was taken off the stores). Remove the flag to
   * show it again.
   */
  hidden?: boolean;
}

export interface Job {
  company: string;
  role: string;
  /** Display period, e.g. "2022 — 2024". */
  period: string;
  /** Short period for the phone screen, e.g. "'22–'24". */
  periodShort: string;
  /** Marks the row with the green CURRENT chip. Keep exactly one true. */
  current?: boolean;
}

export interface SkillGroup {
  /** Row label, e.g. "Core". */
  label: string;
  /** Skills in display order. */
  items: Skill[];
}

export interface Skill {
  name: string;
  /** Bold + ink color on the page. Use for your strongest skills. */
  highlight?: boolean;
}

export interface PhoneSkill {
  name: string;
  note: string;
  /** Dot color on the phone's Toolkit screen. */
  color: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "telegram" | "email" | "instagram";
}

export interface Fact {
  value: string;
  label: string;
}

export interface LockNotification {
  emoji: string;
  /** Two CSS colors for the notification icon. */
  gradient: [string, string];
  title: string;
  text: string;
  /** Section id to scroll to when pressed: "projects" | "experience" | "skills" | "contact". */
  goto: string;
}
