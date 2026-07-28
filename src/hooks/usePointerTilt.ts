import { useEffect, type RefObject } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Gives the device a subtle 3D tilt that follows the mouse (desktop only). */
export function usePointerTilt(ref: RefObject<HTMLElement | null>) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.transform = `perspective(1300px) rotateY(${x * 5}deg) rotateX(${-y * 3.5}deg)`;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, [ref, reduce]);
}
