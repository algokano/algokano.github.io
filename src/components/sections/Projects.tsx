import { visibleProjects } from "@/content";
import { useInteraction } from "@/state/InteractionContext";
import { AppIcon } from "@/components/ui/AppIcon";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Projects.module.css";

const platformLabel = (platforms: readonly string[]) =>
  platforms.map((p) => (p === "ios" ? "iOS" : "Android")).join(" + ");

export function Projects() {
  const { setSpotlight } = useInteraction();

  return (
    <section id="projects">
      <SectionHeader
        no="01"
        kicker="Selected work"
        title="Apps you can download right now."
        lede="Store links on every card. On desktop, hover a card — it opens on the phone; press items on the phone and the page answers."
      />
      <div className={styles.grid}>
        {visibleProjects.map((project, index) => (
          <Reveal
            as="article"
            key={project.id}
            delay={(index % 4) * 55}
            className={styles.card}
            id={`project-${project.id}`}
          >
            <div
              className={styles.inner}
              onMouseEnter={() => setSpotlight(index)}
              onFocus={() => setSpotlight(index)}
            >
              <div className={styles.top}>
                <AppIcon project={project} size={50} />
                <div>
                  <b>{project.name}</b>
                  <span>
                    {project.category} · {platformLabel(project.platforms)}
                  </span>
                </div>
              </div>
              <p>{project.description}</p>
              <div className={styles.links}>
                {project.appStoreUrl && (
                  <a href={project.appStoreUrl} target="_blank" rel="noopener">
                    <Icon name="apple" size={13} /> App Store ↗
                  </a>
                )}
                {project.playStoreUrl && (
                  <a href={project.playStoreUrl} target="_blank" rel="noopener">
                    <Icon name="play" size={13} /> Google Play ↗
                  </a>
                )}
                {project.websiteUrl && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener">
                    <Icon name="globe" size={13} /> Website ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
