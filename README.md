# sarvardev.uz

Personal CV website of Sarvar Abdurakhimov — React 19 + Vite + TypeScript,
deployed to GitHub Pages at [www.sarvardev.uz](https://www.sarvardev.uz).

The concept: a scrollable résumé page with a **live companion phone** that
mirrors whatever section you're reading. Every item on the phone is pressable,
and the contact form types itself onto the phone as a chat.

## Editing content (no code knowledge needed)

**All text and data live in [`src/content/`](src/content)** — components never
hard-code content. Open the file, edit the list, commit, and the site redeploys
itself.

| What you want to change            | File                              |
| ---------------------------------- | --------------------------------- |
| Add / remove / reorder projects    | `src/content/projects.ts`         |
| Hide / show a project              | `src/content/projects.ts` — add or remove `hidden: true` |
| Project icon image                 | drop the file in `public/images/projects/`, set `iconUrl` |
| Jobs & education timeline          | `src/content/experience.ts`       |
| Skills (page rows + phone screen)  | `src/content/skills.ts`           |
| Name, headline, links, hero facts  | `src/content/site.ts`             |
| Lock-screen notifications          | `src/content/site.ts`             |
| CV file                            | replace `public/cv/…pdf` (keep the name, or update `cvUrl` in `site.ts`) |

Each file has a comment block at the top showing exactly what to copy-paste.
For example, adding a project is one object:

```ts
{
  id: "my-app",
  name: "My App",
  category: "Finance",
  platforms: ["ios", "android"],
  description: "One or two sentences.",
  initials: "MA",
  gradient: ["#5B6BFF", "#2ED3B7"],
  appStoreUrl: "https://apps.apple.com/...",
  playStoreUrl: "https://play.google.com/...",
  iconUrl: "/images/projects/myapp.png", // optional real icon
},
```

Colors and fonts are CSS variables in `src/styles/global.css` (`:root` block).

## Development

```sh
npm install
npm run dev       # local dev server
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Contact form (EmailJS)

The form sends through [EmailJS](https://www.emailjs.com) — free tier, no server.
Until it's configured, the form falls back to opening the visitor's mail app
with the message pre-filled, so contact always works.

To enable real in-page sending:

1. Create an EmailJS account, connect your Gmail as a **Service**, and create a
   **Template** using the variables `{{from_name}}`, `{{reply_to}}`, `{{message}}`.
2. Locally: copy `.env.example` to `.env` and fill in the three values.
3. Production: add the same three values as **repository secrets**
   (Settings → Secrets and variables → Actions):
   `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

One-time setup: in the repo **Settings → Pages**, set **Source** to
**GitHub Actions**. The custom domain (`public/CNAME`) is preserved on every
deploy.

## Structure

```
src/
├── content/          ← ALL editable text & data (typed)
├── components/
│   ├── layout/       Masthead, Footer
│   ├── sections/     Hero, Projects, Experience, Skills, Contact
│   ├── phone/        The companion device + its five screens
│   └── ui/           Button, Icon, AppIcon, SectionHeader, Reveal
├── hooks/            useClock, useActiveSection, usePointerTilt, …
├── lib/              email (EmailJS + mailto fallback), scroll helpers
├── state/            InteractionContext — page ↔ phone shared state
└── styles/           design tokens + base styles
```
