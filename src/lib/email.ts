import emailjs from "@emailjs/browser";
import { site } from "@/content";

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

export const emailConfigured = Boolean(
  config.serviceId && config.templateId && config.publicKey,
);

/**
 * Sends the contact message through EmailJS.
 * When EmailJS isn't configured yet, falls back to the visitor's own
 * mail client with everything pre-filled — contact keeps working
 * before the keys are added.
 */
export async function sendMessage(payload: ContactPayload): Promise<void> {
  if (!emailConfigured) {
    const subject = encodeURIComponent(`Message from ${payload.name} via ${site.domain}`);
    const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} <${payload.email}>`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    return;
  }

  await emailjs.send(
    config.serviceId!,
    config.templateId!,
    {
      from_name: payload.name,
      reply_to: payload.email,
      message: payload.message,
    },
    { publicKey: config.publicKey! },
  );
}
