/**
 * Inline SVG icon set. One tiny component instead of an icon library —
 * every icon the site uses is defined here.
 */
export type IconName =
  | "github"
  | "linkedin"
  | "telegram"
  | "email"
  | "instagram"
  | "apple"
  | "play"
  | "chat"
  | "download"
  | "check"
  | "signal"
  | "globe";

const PATHS: Record<IconName, React.ReactNode> = {
  github: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.74 2.5 4.74 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.19 1.45-2.19 2.96V21h-4V9Z"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      d="M21.9 4.3 18.8 19c-.23 1.03-.85 1.28-1.72.8l-4.75-3.5-2.29 2.2c-.25.26-.47.48-.96.48l.34-4.86 8.84-7.99c.38-.34-.09-.53-.6-.19L6.73 12.6 2.05 11.1c-1.02-.32-1.04-1.02.21-1.51L20.6 2.75c.85-.31 1.59.2 1.3 1.55Z"
    />
  ),
  email: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </g>
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </g>
  ),
  apple: (
    <path
      fill="currentColor"
      d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.8-.9-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.5ZM14.2 5.4c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z"
    />
  ),
  play: (
    <path
      fill="currentColor"
      d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.4-9.7-9.4-9.7Zm10.6 8.5 2.6-2.7-11-6.3 8.4 9Zm2.6 8.1-2.6-2.7-8.4 9 11-6.3Zm1.3-6.9-2.9 1.7 2.9 1.7 2.3-1.3c.7-.4.7-1.4 0-1.8l-2.3-1.3v1Z"
    />
  ),
  chat: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      d="M21 12a8 8 0 0 1-8 8H4l2.4-3A8 8 0 1 1 21 12Z"
    />
  ),
  download: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      d="M12 3v12M7 11l5 5 5-5M5 21h14"
    />
  ),
  check: (
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 6 9 17l-5-5"
    />
  ),
  globe: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </g>
  ),
  signal: (
    <g fill="currentColor">
      <rect x="0" y="8" width="3" height="4" rx="1" />
      <rect x="5" y="5" width="3" height="7" rx="1" />
      <rect x="10" y="2" width="3" height="10" rx="1" />
      <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35" />
    </g>
  ),
};

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 16, className }: IconProps) {
  const viewBox = name === "signal" ? "0 0 18 12" : "0 0 24 24";
  return (
    <svg
      className={className}
      width={size}
      height={name === "signal" ? size * (12 / 18) : size}
      viewBox={viewBox}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
