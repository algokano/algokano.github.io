import { jobs } from "@/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section id="experience">
      <SectionHeader no="02" kicker="Experience" title="Eight years, five teams, zero gaps." />
      <div className={styles.ledger}>
        {jobs.map((job, index) => (
          <Reveal key={job.company} delay={(index % 4) * 55} className={styles.row} id={`job-${index}`}>
            <span className={styles.when}>{job.period}</span>
            <div>
              <h3>
                {job.company}
                {job.current && <span className={styles.nowChip}>CURRENT</span>}
              </h3>
              <div className={styles.role}>{job.role}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
