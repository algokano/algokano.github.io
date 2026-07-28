import type { Project } from "./types";

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — one object per app, shown in display order.
 *
 *  ── To ADD an app ──
 *  Copy any block below and change the fields:
 *    {
 *      id: "my-app",                         // unique, lowercase
 *      name: "My App",
 *      category: "Finance",
 *      platforms: ["ios", "android"],        // or just one
 *      description: "One or two sentences.",
 *      initials: "MA",                       // fallback icon letters
 *      gradient: ["#5B6BFF", "#2ED3B7"],     // fallback icon colors
 *      iconUrl: "/images/projects/myapp.png",// real icon (drop the file
 *                                            //   into public/images/projects)
 *      appStoreUrl: "https://apps.apple.com/...",   // optional
 *      playStoreUrl: "https://play.google.com/...", // optional
 *      websiteUrl: "https://myapp.com",             // optional fallback link
 *    },
 *
 *  Store links are checked before showing — only add links that open.
 *  If a listing dies later, delete that URL line (the card adapts) or
 *  hide the whole project.
 *
 *  ── To HIDE an app (e.g. removed from the stores) ──
 *  Add `hidden: true` to its block. Delete that line to show it again.
 *
 *  ── To REMOVE an app forever ──
 *  Delete its whole { ... } block.
 * ─────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    id: "gtwork",
    name: "GTWork",
    category: "Business",
    platforms: ["ios", "android"],
    description:
      "Workforce platform for Israel's casual-work market — scheduling, timesheets, payouts.",
    initials: "GT",
    gradient: ["#5B6BFF", "#2ED3B7"],
    iconUrl: "/images/projects/gtw.webp",
    appStoreUrl: "https://apps.apple.com/il/app/go-to-work/id6477906965",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.gotowork.mobile",
    hidden: true,
  },
  {
    id: "amega",
    name: "Amega",
    category: "Finance",
    platforms: ["android"],
    description:
      "Trading app — currencies, stocks, indices, metals, commodities in a few taps.",
    initials: "AM",
    gradient: ["#1E3AFF", "#7A5BFF"],
    iconUrl: "/images/projects/amega.png",
    // Play listing is geo-restricted (404 outside supported regions),
    // so we link the official app page instead.
    websiteUrl: "https://www.amega.finance/app",
  },
  {
    id: "zimzim",
    name: "ZimZim",
    category: "Delivery",
    platforms: ["ios", "android"],
    description:
      "Online shopping and delivery across Uzbekistan, fast even on slow networks.",
    initials: "ZZ",
    gradient: ["#FF6B4A", "#FFB05C"],
    iconUrl: "/images/projects/zimzim.webp",
    appStoreUrl: "https://apps.apple.com/uz/app/zimzim/id1609958406",
    playStoreUrl: "https://play.google.com/store/apps/details?id=uz.zimzim",
  },
  {
    id: "biztv",
    name: "BizTv",
    category: "Media",
    platforms: ["ios", "android"],
    description: "Live TV and radio streaming connecting the Uzbek diaspora to home.",
    initials: "BT",
    gradient: ["#00A8E8", "#0057B8"],
    iconUrl: "/images/projects/biztv.png",
    appStoreUrl: "https://apps.apple.com/uz/app/biz/id1519518494",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.biztv",
  },
  {
    id: "optom-bozor",
    name: "Optom Bozor",
    category: "Wholesale",
    platforms: ["ios", "android"],
    description: "Bulk sourcing for small businesses on Uzbekistan's domestic market.",
    initials: "OB",
    gradient: ["#F2A93B", "#E8622C"],
    iconUrl: "/images/projects/optombozor.png",
    // Play listing was removed; the App Store one is still live.
    appStoreUrl: "https://apps.apple.com/uz/app/optom-bozor/id1530573088",
  },

  /* ── Hidden — kept for the future; remove `hidden: true` to show. ── */
  {
    id: "prodom",
    name: "Prodom",
    category: "Real estate",
    platforms: ["ios", "android"],
    description: "Uzbekistan's property marketplace — buy, sell, rent with rich search.",
    initials: "PD",
    gradient: ["#2BB673", "#0E7C5A"],
    appStoreUrl: "https://apps.apple.com/us/app/prodom-uz/id1572230128",
    playStoreUrl: "https://play.google.com/store/apps/details?id=uz.prodom",
    hidden: true,
  },
  {
    id: "tarvuz",
    name: "Tarvuz",
    category: "Marketplace",
    platforms: ["ios", "android"],
    description: "Classifieds with secure messaging, listing promotion, three languages.",
    initials: "TV",
    gradient: ["#E8465B", "#FF8A5B"],
    iconUrl: "/images/projects/tarvuz.jpg",
    appStoreUrl: "https://apps.apple.com/uz/app/tarvuz/id1527926461",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.tarvuz",
    hidden: true,
  },
  {
    id: "askdoctor",
    name: "Askdoctor",
    category: "Health",
    platforms: ["android"],
    description: "Doctor consultations by phone, chat or video.",
    initials: "AD",
    gradient: ["#28C7C7", "#1B7FA8"],
    iconUrl: "/images/projects/Askdoctor.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.askdoctor",
    hidden: true,
  },
  {
    id: "tantana",
    name: "Tantana",
    category: "Events",
    platforms: ["ios", "android"],
    description: "Everything needed to plan a celebration in Uzbekistan.",
    initials: "TN",
    gradient: ["#C049B8", "#7B3FE4"],
    iconUrl: "/images/projects/Tantana.jpg",
    appStoreUrl: "https://apps.apple.com/uz/app/tantanaapp/id1483930147",
    playStoreUrl: "https://play.google.com/store/apps/details?id=uz.tantana",
    hidden: true,
  },
  {
    id: "tokyo-2020",
    name: "Tokyo 2020",
    category: "Sports",
    platforms: ["ios", "android"],
    description: "Direct line between Uzbek Olympic athletes and the Ministry of Sport.",
    initials: "T20",
    gradient: ["#D9264B", "#7A1030"],
    appStoreUrl: "https://apps.apple.com/us/app/sportuzchat/id1498352113",
    playStoreUrl: "https://play.google.com/store/apps/details?id=uz.tokyochat",
    hidden: true,
  },
  {
    id: "mytask",
    name: "MyTask",
    category: "Productivity",
    platforms: ["android"],
    description: "Project and task management for distributed teams.",
    initials: "MT",
    gradient: ["#6C5CE7", "#3E2FB0"],
    iconUrl: "/images/projects/mytask.png",
    playStoreUrl: "https://play.google.com/store/apps/details?id=uz.mytask",
    hidden: true,
  },
  {
    id: "crowntools",
    name: "Crowntools",
    category: "Business",
    platforms: ["ios"],
    description: "Dealer app for commodity circulation, run from the field.",
    initials: "CT",
    gradient: ["#8E9AAF", "#4A5568"],
    appStoreUrl: "https://apps.apple.com/us/app/crowntools/id1504275768",
    hidden: true,
  },
];

/** What the site actually renders — everything not marked hidden. */
export const visibleProjects: Project[] = projects.filter((p) => !p.hidden);
