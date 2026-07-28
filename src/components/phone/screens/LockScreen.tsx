import { lockNotifications } from "@/content";
import { useClock } from "@/hooks/useClock";
import { scrollToSection } from "@/lib/scroll";
import styles from "./screens.module.css";

export function LockScreen() {
  const { time, date } = useClock();

  return (
    <div className={styles.lock}>
      <div className={styles.lockDate}>{date}</div>
      <div className={styles.lockTime}>{time}</div>
      <div className={styles.notifStack}>
        {lockNotifications.map((n, i) => (
          <button
            key={n.title}
            type="button"
            className={styles.notif}
            style={{ animationDelay: `${i * 0.14}s` }}
            onClick={() => scrollToSection(n.goto)}
          >
            <span
              className={styles.notifIcon}
              style={{ background: `linear-gradient(140deg, ${n.gradient[0]}, ${n.gradient[1]})` }}
            >
              {n.emoji}
            </span>
            <span className={styles.notifBody}>
              <b>{n.title}</b>
              <span>{n.text}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
