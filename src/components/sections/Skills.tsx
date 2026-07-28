import { Fragment } from "react";
import { skillGroups } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section id="skills">
      <SectionHeader no="03" kicker="Toolkit" title="What I work with." />
      <div className={styles.rows}>
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 4) * 55} className={styles.row}>
            <b>{group.label}</b>
            <div>
              {group.items.map((skill, i) => (
                <Fragment key={skill.name}>
                  {i > 0 && <span className={styles.sep}>·</span>}
                  <span className={skill.highlight ? styles.hot : undefined}>{skill.name}</span>
                </Fragment>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
