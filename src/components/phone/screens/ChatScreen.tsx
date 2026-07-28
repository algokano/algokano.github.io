import { Fragment } from "react";
import { useInteraction } from "@/state/InteractionContext";
import styles from "./screens.module.css";

const FIELD_LABELS = [
  ["name", "Name"],
  ["email", "Email"],
  ["message", "Message"],
] as const;

const truncate = (text: string) => (text.length > 90 ? `${text.slice(0, 90)}…` : text);

/**
 * Mirrors the contact form as an iMessage-style thread:
 * the live draft renders as translucent "ghost" bubbles, and every
 * sent message becomes solid bubbles with a Delivered receipt.
 */
export function ChatScreen() {
  const { draft, delivered } = useInteraction();
  const isTyping = Boolean(draft.name || draft.email || draft.message);

  return (
    <div className={styles.chat}>
      <div className={styles.chatHead}>
        <span className={styles.avatar}>SA</span>
        <span className={styles.chatMeta}>
          <b>Sarvar</b>
          <span>{isTyping ? "receiving…" : "replies fast"}</span>
        </span>
      </div>

      <div className={styles.thread}>
        <div className={`${styles.bubble} ${styles.sys}`}>Today</div>
        <div className={`${styles.bubble} ${styles.them}`}>
          Hey! 👋 Fill the form — your message shows up here live.
        </div>

        {delivered.map((msg, i) => (
          <Fragment key={i}>
            {FIELD_LABELS.map(([field, label]) =>
              msg[field] ? (
                <div key={field} className={`${styles.bubble} ${styles.me}`}>
                  <span className={styles.fieldTag}>{label}</span>
                  {truncate(msg[field])}
                </div>
              ) : null,
            )}
            <div className={`${styles.bubble} ${styles.sys}`}>Delivered ✓</div>
            <div className={`${styles.bubble} ${styles.them}`}>
              Got it! I'll get back to you soon 🚀
            </div>
          </Fragment>
        ))}

        {FIELD_LABELS.map(([field, label]) =>
          draft[field].trim() ? (
            <div key={field} className={`${styles.bubble} ${styles.me} ${styles.ghost}`}>
              <span className={styles.fieldTag}>{label}</span>
              {truncate(draft[field].trim())}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
}
