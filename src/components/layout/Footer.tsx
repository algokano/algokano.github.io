import { site } from "@/content";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        © {site.copyrightYear} {site.name}
      </span>
      <span>React · GitHub Pages · {site.domain}</span>
      <a href="#top">Top ↑</a>
    </footer>
  );
}
