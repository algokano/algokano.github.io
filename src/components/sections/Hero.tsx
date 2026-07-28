import { facts, site, socials } from "@/content";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {site.availability && <span className={styles.avail}>{site.availability}</span>}

      <h1 className={styles.headline}>
        {site.headline.before}
        <em>{site.headline.em}</em>
        {site.headline.after}
      </h1>

      <p className={styles.lede}>
        {site.lede.parts.map((part, i) =>
          part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>,
        )}
      </p>

      <div className={styles.ctaRow}>
        <Button href="#contact" variant="solid">
          <Icon name="chat" />
          Message me
        </Button>
        <Button href={site.cvUrl} variant="line" target="_blank" rel="noopener">
          <Icon name="download" />
          Download CV
        </Button>
      </div>

      <div className={styles.facts}>
        {facts.map((fact) => (
          <div key={fact.label} className={styles.fact}>
            <b>{fact.value}</b>
            <span>{fact.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.socRow}>
        {socials.map((s) => (
          <a
            key={s.label}
            className={styles.soc}
            href={s.url}
            {...(s.url.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
          >
            <Icon name={s.icon} size={15} />
            {s.label}
          </a>
        ))}
      </div>

      <p className={styles.heroMini}>→ On desktop, a live phone follows you as you scroll.</p>
    </section>
  );
}
