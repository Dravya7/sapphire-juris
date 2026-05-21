/**
 * design-tokens.ts
 * Typed design token constants — import these in components
 * instead of hardcoding strings. Keeps the system in sync
 * with tailwind.config.ts and globals.css.
 */

export const colors = {
  navy: {
    950: "#040D15",
    900: "#0A1520",
    800: "#0D1B2A",
    700: "#102235",
    600: "#132030",
    500: "#1A2B3C",
    400: "#1E3348",
  },
  gold: {
    600: "#A07828",
    500: "#B8962E",
    400: "#C9A84C",
    300: "#D4B96A",
    200: "#E8D4A0",
  },
  ink: {
    primary:   "#F5F0E8",
    secondary: "#D4C5A0",
    muted:     "#7A8FA6",
    faint:     "#4A5F78",
    hint:      "#2A3F55",
  },
} as const;

export const borders = {
  subtle:  "rgba(201, 168, 76, 0.12)",
  default: "rgba(201, 168, 76, 0.22)",
  medium:  "rgba(201, 168, 76, 0.40)",
  strong:  "rgba(201, 168, 76, 0.70)",
  full:    "#C9A84C",
} as const;

export const fonts = {
  serif: "var(--font-cormorant)",
  sans:  "var(--font-dm-sans)",
} as const;

export const easing = {
  luxury:  "cubic-bezier(0.25, 0.1, 0.25, 1)",
  expoOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  spring:  "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

export const duration = {
  fast:   150,
  normal: 250,
  slow:   400,
  slower: 600,
  slowest:900,
} as const;

/** Navigation items — single source of truth */
export const navItems = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Expertise",  href: "/expertise", hasMegaMenu: true },
  { label: "Our People", href: "/people" },
  { label: "Insights",   href: "/insights" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
] as const;

export const practiceAreas = [
  {
    label: "Civil Litigation",
    href:  "/expertise/civil-litigation",
    icon:  "scale",
  },
  {
    label: "Criminal Defense",
    href:  "/expertise/criminal-defense",
    icon:  "shield",
  },
  {
    label: "Corporate & M&A",
    href:  "/expertise/corporate",
    icon:  "building",
  },
  {
    label: "Family Law",
    href:  "/expertise/family-law",
    icon:  "users",
  },
  {
    label: "Real Estate",
    href:  "/expertise/real-estate",
    icon:  "home",
  },
  {
    label: "Intellectual Property",
    href:  "/expertise/ip",
    icon:  "lightbulb",
  },
  {
    label: "Constitutional Law",
    href:  "/expertise/constitutional",
    icon:  "landmark",
  },
  {
    label: "Arbitration & ADR",
    href:  "/expertise/arbitration",
    icon:  "gavel",
  },
  {
    label: "Employment & Labour",
    href:  "/expertise/employment",
    icon:  "briefcase",
  },
  {
    label: "Banking & Finance",
    href:  "/expertise/banking",
    icon:  "coins",
  },
  {
    label: "Data Privacy",
    href:  "/expertise/data-privacy",
    icon:  "lock",
  },
  {
    label: "Regulatory & Compliance",
    href:  "/expertise/regulatory",
    icon:  "file-check",
  },
] as const;

export const firmInfo = {
  name:          "Sapphire Juris LLP",
  tagline:       "Where Law Meets Integrity.",
  descriptor:    "Advocates & Legal Consultants",
  established:   "2024",
  phone:         "0731-3161885",
  email:         "contact@sapphirejuris.in",
  address:       "13, Sitabag Colony, Behind Regal Cinema, Nehru Park Road, Indore (M.P.) – 452003",
  officeHours:   "Monday – Saturday: 9:00 AM – 6:00 PM",
  advocates: [
    {
      name:        "Adv. Atharva Vyas",
      role:        "Senior Advocate",
      education:   "LL.M. — National Law School, Bangalore",
      enrollment:  "Bar Council of M.P. — Enrollment No. MP/12345/2014",
      slug:        "atharva-vyas",
    },
    {
      name:        "Adv. Rishi Sharma",
      role:        "Senior Advocate",
      education:   "LL.B. — Symbiosis Law School, Pune",
      enrollment:  "Bar Council of M.P. — Enrollment No. MP/67890/2014",
      slug:        "rishi-sharma",
    },
  ],
} as const;
