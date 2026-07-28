import { useEffect, useRef, type JSX } from "react";

interface RevealProps {
  as?: keyof JSX.IntrinsicElements;
  /** Stagger delay in ms. */
  delay?: number;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

/** Fades its content up when scrolled into view (`.rise` → `.in`). */
export function Reveal({ as: Tag = "div", delay = 0, className, children, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    // @ts-expect-error — polymorphic ref; every rendered tag is an HTMLElement.
    <Tag ref={ref} id={id} className={`rise ${className ?? ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
