import type { Variants } from "framer-motion";

/* Shared bezier easing curve used throughout */
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const V: Record<string, Variants> = {
  /** Stagger children in sequence */
  stagger: {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  },

  /** Text rises from bottom of overflow-hidden clip */
  rise: {
    hidden: { y: "110%" },
    show:   { y: "0%", transition: { duration: 0.9, ease } },
  },

  /** Section entrance — fade + translate up */
  fadeUp: {
    hidden: { opacity: 0, y: 36 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
  },

  /** Hero headline — 3D rotateX + rise */
  blurRise: {
    hidden: { y: "110%", rotateX: 60, opacity: 0 },
    show:   { y: "0%",   rotateX: 0,  opacity: 1, transition: { duration: 1.2, ease } },
  },
};
