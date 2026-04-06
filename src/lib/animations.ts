import type { Variants } from "framer-motion";

// Spring suave — sensación orgánica para una marca de salud
export const spring = { type: "spring" as const, stiffness: 80, damping: 18 };
export const springFast = { type: "spring" as const, stiffness: 120, damping: 20 };

// Fade + slide desde abajo — base de todas las revelaciones
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { ...spring } },
};

// Para contenedores que disparan hijos en cascada
export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

// Fade simple (sin movimiento) para elementos sutiles
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Scale desde centro — para badges y botones
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { ...springFast } },
};

// Slide desde abajo más pronunciado — para hero principal
export const heroSlide: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ...spring } },
};
