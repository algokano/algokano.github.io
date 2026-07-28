import { useState } from "react";
import { directLinks } from "@/content";
import { emailConfigured, sendMessage } from "@/lib/email";
import { useInteraction } from "@/state/InteractionContext";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import styles from "./Contact.module.css";

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "error";

const VALIDATORS: Record<Field, (value: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  message: (v) => v.trim().length > 4,
};

const ERROR_TEXT: Record<Field, string> = {
  name: "Tell me who you are.",
  email: "That address doesn't look right.",
  message: "A sentence is plenty.",
};

export function Contact() {
  const { draft, updateDraft, commitDraft } = useInteraction();
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateDraft({ [field]: e.target.value });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const invalid = (Object.keys(VALIDATORS) as Field[]).filter((f) => !VALIDATORS[f](draft[f]));
    if (invalid.length > 0) {
      setErrors(Object.fromEntries(invalid.map((f) => [f, true])));
      document.getElementById(`cf-${invalid[0]}`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      await sendMessage(draft);
      commitDraft();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const field = (name: Field, label: string, input: React.ReactNode) => (
    <div className={`${styles.field} ${errors[name] ? styles.err : ""}`}>
      <label htmlFor={`cf-${name}`}>{label} *</label>
      {input}
      <p className={styles.errMsg}>{ERROR_TEXT[name]}</p>
    </div>
  );

  return (
    <section id="contact">
      <SectionHeader
        no="04"
        kicker="Contact"
        title="Type here — watch it land on the phone."
        lede="This form sends straight to my inbox. On desktop, the phone shows your message arriving as you type."
      />

      <Reveal className={styles.card}>
        <div className={styles.inner}>
          <form onSubmit={onSubmit} noValidate>
            <div className={styles.twoCol}>
              {field(
                "name",
                "Name",
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Jane Cooper"
                  autoComplete="name"
                  value={draft.name}
                  onChange={onChange("name")}
                />,
              )}
              {field(
                "email",
                "Email",
                <input
                  id="cf-email"
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  value={draft.email}
                  onChange={onChange("email")}
                />,
              )}
            </div>
            {field(
              "message",
              "Message",
              <textarea
                id="cf-message"
                rows={4}
                placeholder="What are you building?"
                value={draft.message}
                onChange={onChange("message")}
              />,
            )}
            <div className={styles.sendRow}>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending" && <span className={styles.spinner} />}
                Send message
              </Button>
              <span className={styles.note}>
                {emailConfigured
                  ? "No newsletter. Just my inbox."
                  : "Opens your email app with the message ready."}
              </span>
            </div>

            {status === "sent" && (
              <div className={styles.sentOk} role="status">
                <Icon name="check" size={17} />
                <div>
                  <b>Delivered.</b> I'll get back to you soon.
                </div>
              </div>
            )}
            {status === "error" && (
              <div className={styles.sentErr} role="alert">
                Something went wrong while sending — please use one of the direct links below.
              </div>
            )}
          </form>

          <div className={styles.directRow}>
            {directLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                {...(link.url.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
