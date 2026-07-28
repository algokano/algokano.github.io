import { phoneSkills } from "@/content";
import { scrollToSection } from "@/lib/scroll";
import styles from "./screens.module.css";

export function SkillsScreen() {
  return (
    <div>
      <p className={styles.head}>Toolkit</p>
      <div className={styles.rows}>
        {phoneSkills.map((skill) => (
          <button
            key={skill.name}
            type="button"
            className={styles.row}
            onClick={() => scrollToSection("skills")}
          >
            <span className={styles.dot} style={{ background: skill.color }} />
            <span className={styles.rowBody}>
              <b>{skill.name}</b>
              <span>{skill.note}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
