import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — class name merge utility
 * Combines clsx + tailwind-merge for clean conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Framer Motion variant presets
 * Import these in components for consistent animations
 */
export const motionVariants = {
  /** Simple fade from transparent */
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Fade up — used for section content reveals */
  fadeUp: {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Fade up with adjustable delay */
  fadeUpDelay: (delay = 0) => ({
    hidden:  { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  }),

  /** Stagger container — wraps staggered children */
  staggerContainer: (stagger = 0.08) => ({
    hidden:  {},
    visible: { transition: { staggerChildren: stagger } },
  }),

  /** Child item for stagger groups */
  staggerItem: {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Slide in from left */
  slideLeft: {
    hidden:  { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Slide in from right */
  slideRight: {
    hidden:  { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Scale from slightly smaller */
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  },

  /** Mega menu slide down */
  megaMenuReveal: {
    hidden:  { opacity: 0, y: -8, pointerEvents: "none" as const },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto" as const,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      pointerEvents: "none" as const,
      transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] },
    },
  },

  /** Search overlay expand */
  overlayReveal: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.22 } },
    exit:    { opacity: 0, transition: { duration: 0.18 } },
  },

  /** Modal scale-in */
  modalReveal: {
    hidden:  { opacity: 0, scale: 0.96, y: 8 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.2 },
    },
  },
} as const;

/**
 * Viewport options for useInView / whileInView
 */
export const viewportOptions = {
  once:   { once: true,  amount: 0.15 },
  repeat: { once: false, amount: 0.15 },
  half:   { once: true,  amount: 0.5  },
} as const;
