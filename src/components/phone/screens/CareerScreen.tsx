import { jobs, phoneJobLabel } from "@/content";
import { flashElement } from "@/lib/scroll";
import styles from "./screens.module.css";

export function CareerScreen() {
  return (
    <div>
      <p className={styles.head}>Career</p>
      <div className={styles.rows}>
        {jobs.map((job, index) => {
          const { name, role } = phoneJobLabel(job);
          return (
            <button
              key={job.company}
              type="button"
              className={`${styles.row} ${job.current ? styles.now : ""}`}
              onClick={() => flashElement(document.getElementById(`job-${index}`))}
            >
              <span className={styles.dot} />
              <span className={styles.rowBody}>
                <b>{name}</b>
                <span>{role}</span>
              </span>
              <span className={styles.year}>{job.periodShort}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
