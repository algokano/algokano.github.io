import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ContactPayload } from "@/lib/email";

/**
 * The thin layer of state shared between the page and the companion
 * phone: which section is active, which project is spotlighted, and
 * the contact draft that mirrors onto the phone as chat bubbles.
 */
interface InteractionValue {
  /** Index of the project shown on the phone's Projects screen. */
  spotlight: number;
  setSpotlight: (index: number) => void;
  /** Live contact-form draft, mirrored as ghost bubbles. */
  draft: ContactPayload;
  updateDraft: (patch: Partial<ContactPayload>) => void;
  /** Successfully sent messages — rendered as solid bubbles + replies. */
  delivered: ContactPayload[];
  commitDraft: () => void;
}

const InteractionContext = createContext<InteractionValue | null>(null);

const EMPTY_DRAFT: ContactPayload = { name: "", email: "", message: "" };

export function InteractionProvider({ children }: { children: React.ReactNode }) {
  const [spotlight, setSpotlight] = useState(0);
  const [draft, setDraft] = useState<ContactPayload>(EMPTY_DRAFT);
  const [delivered, setDelivered] = useState<ContactPayload[]>([]);

  const updateDraft = useCallback((patch: Partial<ContactPayload>) => {
    setDraft((prev) => ({ ...prev, ...patch }));
  }, []);

  const commitDraft = useCallback(() => {
    setDraft((prev) => {
      setDelivered((sent) => [...sent, prev]);
      return EMPTY_DRAFT;
    });
  }, []);

  const value = useMemo(
    () => ({ spotlight, setSpotlight, draft, updateDraft, delivered, commitDraft }),
    [spotlight, draft, updateDraft, delivered, commitDraft],
  );

  return <InteractionContext.Provider value={value}>{children}</InteractionContext.Provider>;
}

export function useInteraction(): InteractionValue {
  const ctx = useContext(InteractionContext);
  if (!ctx) throw new Error("useInteraction must be used inside <InteractionProvider>");
  return ctx;
}
