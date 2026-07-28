import { visibleProjects } from "@/content";
import { flashElement } from "@/lib/scroll";
import { useInteraction } from "@/state/InteractionContext";
import { AppIcon } from "@/components/ui/AppIcon";
import styles from "./screens.module.css";

export function ProjectsScreen() {
  const { spotlight, setSpotlight } = useInteraction();
  const current = visibleProjects[spotlight];

  const openStore = () => {
    const url = current.appStoreUrl ?? current.playStoreUrl ?? current.websiteUrl;
    if (url) window.open(url, "_blank", "noopener");
  };

  const pressCell = (index: number) => {
    setSpotlight(index);
    flashElement(document.getElementById(`project-${visibleProjects[index].id}`));
  };

  return (
    <div>
      <p className={styles.head}>Projects</p>

      <button
        type="button"
        className={styles.spotlight}
        onClick={openStore}
        title={`Open ${current.name} in the store`}
      >
        <AppIcon project={current} size={72} />
        <b>{current.name}</b>
        <span className={styles.spotCat}>
          {current.category} ·{" "}
          {current.platforms.map((p) => (p === "ios" ? "iOS" : "Android")).join(" + ")}
        </span>
        <p>{current.description}</p>
      </button>

      <div className={styles.appGrid}>
        {visibleProjects.map((project, index) => (
          <button
            key={project.id}
            type="button"
            className={`${styles.cell} ${index === spotlight ? styles.hot : ""}`}
            onClick={() => pressCell(index)}
            aria-label={`Show ${project.name}`}
          >
            <AppIcon project={project} size={43} />
            <small>{project.name.split(" ")[0]}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
