/** Page-side reactions to presses on the phone. */

const behavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: behavior() });
}

/** Scrolls an element into view and pulses a blue outline on it. */
export function flashElement(el: HTMLElement | null) {
  if (!el) return;
  el.scrollIntoView({ behavior: behavior(), block: "center" });
  el.classList.remove("flash");
  // Force a reflow so the animation restarts when re-applied.
  void el.offsetWidth;
  el.classList.add("flash");
}
