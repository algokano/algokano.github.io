import { site } from "@/content";
import styles from "./Masthead.module.css";

const LINKS = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;

interface MastheadProps {
  activeSection: string;
}

export function Masthead({ activeSection }: MastheadProps) {
  return (
    <header className={styles.masthead}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#top">
          {site.name}
          <i>.</i>
        </a>
        <nav className={styles.links} aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={activeSection === link.id ? styles.on : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className={styles.write} href="#contact">
            Write to me →
          </a>
        </nav>
      </div>
    </header>
  );
}
