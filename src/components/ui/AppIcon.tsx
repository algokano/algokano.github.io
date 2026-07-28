import type { Project } from "@/content";
import styles from "./AppIcon.module.css";

interface AppIconProps {
  project: Pick<Project, "name" | "initials" | "gradient" | "iconUrl">;
  size: number;
}

/**
 * Squircle app icon. Renders the real icon image when `iconUrl` is set,
 * otherwise a gradient with the app's initials.
 */
export function AppIcon({ project, size }: AppIconProps) {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    fontSize: size * 0.33,
  };
  if (!project.iconUrl) {
    style.background = `linear-gradient(145deg, ${project.gradient[0]}, ${project.gradient[1]})`;
  }
  return (
    <span className={styles.icon} style={style} aria-hidden="true">
      {project.iconUrl ? (
        <img src={project.iconUrl} alt="" width={size} height={size} />
      ) : (
        project.initials
      )}
    </span>
  );
}
