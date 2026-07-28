import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  /** Two-digit index shown before the kicker, e.g. "01". */
  no: string;
  kicker: string;
  title: string;
  lede?: string;
}

export function SectionHeader({ no, kicker, title, lede }: SectionHeaderProps) {
  return (
    <>
      <p className={styles.kicker}>
        <span className={styles.no}>{no}</span>
        {kicker}
      </p>
      <h2 className={styles.title}>{title}</h2>
      {lede && <p className={styles.lede}>{lede}</p>}
    </>
  );
}
