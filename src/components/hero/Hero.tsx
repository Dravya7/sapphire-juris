"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { firmInfo } from "@/lib/design-tokens";
import { LogoMark } from "@/components/ui/LogoMark";

// ─────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────
const EXPO  = [0.16, 1, 0.3, 1] as const;
const EASE  = [0.25, 0.1, 0.25, 1] as const;

// ─────────────────────────────────────────────────────────
// Particle field — restrained gold dust
// ─────────────────────────────────────────────────────────
const PARTICLES = [
  { x: 8,  y: 22, s: 1.5, d: 26, dl: 0,   o: 0.4  },
  { x: 19, y: 68, s: 1,   d: 32, dl: 4,   o: 0.28 },
  { x: 31, y: 15, s: 2,   d: 22, dl: 8,   o: 0.38 },
  { x: 47, y: 80, s: 1,   d: 35, dl: 2,   o: 0.25 },
  { x: 62, y: 35, s: 1.5, d: 28, dl: 11,  o: 0.42 },
  { x: 74, y: 72, s: 1,   d: 24, dl: 6,   o: 0.3  },
  { x: 85, y: 18, s: 2,   d: 30, dl: 14,  o: 0.35 },
  { x: 93, y: 55, s: 1,   d: 20, dl: 3,   o: 0.28 },
  { x: 24, y: 44, s: 1.5, d: 27, dl: 9,   o: 0.32 },
  { x: 56, y: 92, s: 1,   d: 33, dl: 1,   o: 0.22 },
  { x: 78, y: 8,  s: 1.5, d: 19, dl: 16,  o: 0.4  },
  { x: 42, y: 58, s: 1,   d: 29, dl: 5,   o: 0.3  },
];

function ParticleField() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left:            `${p.x}%`,
            top:             `${p.y}%`,
            width:           p.s,
            height:          p.s,
            backgroundColor: "#C9A84C",
          }}
          animate={{ y: [0, -32, 0], opacity: [0, p.o, 0] }}
          transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Background
// ─────────────────────────────────────────────────────────
function HeroBackground({ y }: { y: MotionValue<number> }) {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Base navy */}
      <div className="absolute inset-0" style={{ backgroundColor: "#08131E" }} />

      {/* Photo layer — parallax */}
      <motion.div
        className="absolute inset-[-10%]"
        style={reduced ? {} : { y }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            filter:          "brightness(0.22) saturate(0.6)",
          }}
        />
      </motion.div>

      {/* Radial center brighten — draws eye to content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 46%, rgba(13,27,42,0) 0%, rgba(6,14,24,0.72) 100%)",
        }}
      />

      {/* Bottom blend */}
      <div
        className="absolute bottom-0 inset-x-0 h-56"
        style={{ background: "linear-gradient(to bottom, transparent, #0D1B2A)" }}
      />

      {/* Top blend with nav */}
      <div
        className="absolute top-0 inset-x-0 h-28"
        style={{ background: "linear-gradient(to bottom, rgba(8,19,30,0.7), transparent)" }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// Ornamental divider
// ─────────────────────────────────────────────────────────
function Ornament({ delay = 0 }: { delay?: number }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="flex items-center justify-center gap-4 my-8 sm:my-10"
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay, ease: [...EASE] }}
    >
      <motion.div
        className="h-px"
        style={{ backgroundColor: "rgba(201,168,76,0.38)" }}
        initial={reduced ? {} : { width: 0 }}
        animate={{ width: "clamp(2rem, 5vw, 3.5rem)" }}
        transition={{ duration: 1.1, delay: delay + 0.1, ease: [...EXPO] }}
      />
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="8"
          height="8"
          fill="rgba(201,168,76,0.55)"
          transform="rotate(45 4.5 4.5)"
        />
      </svg>
      <motion.div
        className="h-px"
        style={{ backgroundColor: "rgba(201,168,76,0.38)" }}
        initial={reduced ? {} : { width: 0 }}
        animate={{ width: "clamp(2rem, 5vw, 3.5rem)" }}
        transition={{ duration: 1.1, delay: delay + 0.1, ease: [...EXPO] }}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// Scroll indicator
// ─────────────────────────────────────────────────────────
function ScrollCue() {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      initial={reduced ? {} : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [...EASE] }}
    >
      <div
        className="relative overflow-hidden"
        style={{ width: 1, height: 44, backgroundColor: "rgba(201,168,76,0.12)" }}
      >
        <motion.div
          className="absolute inset-x-0 top-0"
          style={{ backgroundColor: "rgba(201,168,76,0.5)" }}
          animate={{ height: ["0%", "100%", "0%"], top: ["0%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
        />
      </div>
      <span
        className="block tracking-[0.22em] uppercase"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize:   "0.55rem",
          color:      "rgba(74,95,120,0.9)",
        }}
      >
        Scroll
      </span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────
export function Hero() {
  const reduced     = useReducedMotion();
  const ref         = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const parallax    = useTransform(scrollY, [0, 700], [0, 90]);
  return (
    <section
      ref={ref}
      aria-label="Sapphire Juris — Advocates & Legal Consultants"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh", marginTop: "-76px" }}
    >
      <HeroBackground y={parallax} />
      <ParticleField />

      {/* ── Content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6 sm:px-12 pb-28"
      >

        {/* Shield logo mark */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial={reduced ? {} : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [...EXPO] }}
          aria-hidden="true"
        >
          <LogoMark size={90} />
        </motion.div>

        {/* Firm name */}
        <motion.h1
          className="mx-auto"
          style={{ maxWidth: "clamp(20rem, 90vw, 960px)", marginBottom: "1.25rem" }}
          initial={reduced ? {} : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [...EXPO] }}
        >
          <span
            style={{
              display:       "block",
              fontFamily:    "var(--font-cormorant)",
              fontWeight:    700,
              fontSize:      "clamp(2.8rem, 8vw, 6.5rem)",
              lineHeight:    1.0,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color:         "#F5F0E8",
            }}
          >
            Sapphire Juris
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [...EXPO] }}
          style={{
            fontFamily:    "var(--font-cormorant)",
            fontSize:      "clamp(1.1rem, 2.2vw, 1.6rem)",
            fontWeight:    400,
            letterSpacing: "0.06em",
            color:         "#C9A84C",
            marginBottom:  "1.25rem",
          }}
        >
          {firmInfo.tagline}
        </motion.p>

        {/* Descriptor */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.44, ease: [...EXPO] }}
          style={{
            fontFamily:    "var(--font-dm-sans)",
            fontSize:      "0.6rem",
            fontWeight:    500,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color:         "rgba(201,168,76,0.55)",
          }}
        >
          {firmInfo.descriptor}
        </motion.p>

        {/* Ornament divider */}
        <Ornament delay={0.6} />

        {/* CTA group */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: "0.875rem", marginTop: "0" }}
          initial={reduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [...EXPO] }}
        >
          {/* Primary */}
          <Link
            href="/contact"
            className="group relative overflow-hidden inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2A]"
            style={{
              backgroundColor: "#C9A84C",
              color:           "#0D1B2A",
              fontFamily:      "var(--font-dm-sans)",
              fontSize:        "0.8125rem",
              fontWeight:      500,
              letterSpacing:   "0.04em",
              textTransform:   "uppercase",
              padding:         "0.875rem 2.25rem",
              borderRadius:    "3px",
              border:          "1px solid #C9A84C",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B8962E";
              e.currentTarget.style.borderColor     = "#B8962E";
              e.currentTarget.style.transform       = "translateY(-1px)";
              e.currentTarget.style.boxShadow       = "0 8px 28px rgba(201,168,76,0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C9A84C";
              e.currentTarget.style.borderColor     = "#C9A84C";
              e.currentTarget.style.transform       = "translateY(0)";
              e.currentTarget.style.boxShadow       = "none";
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0) scale(0.985)"; }}
            onMouseUp={(e)   => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          >
            {/* Subtle shimmer on hover */}
            <span
              aria-hidden="true"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.1) 50%, transparent 65%)",
              }}
            />
            <span className="relative z-10">Book a Consultation</span>
          </Link>

          {/* Secondary */}
          <Link
            href="/expertise"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1B2A]"
            style={{
              backgroundColor: "transparent",
              color:           "rgba(201,168,76,0.75)",
              fontFamily:      "var(--font-dm-sans)",
              fontSize:        "0.8125rem",
              fontWeight:      500,
              letterSpacing:   "0.04em",
              textTransform:   "uppercase",
              padding:         "0.875rem 2.25rem",
              borderRadius:    "3px",
              border:          "1px solid rgba(201,168,76,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color       = "#C9A84C";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
              e.currentTarget.style.transform   = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color       = "rgba(201,168,76,0.75)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)";
              e.currentTarget.style.transform   = "translateY(0)";
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = "translateY(0) scale(0.985)"; }}
            onMouseUp={(e)   => { e.currentTarget.style.transform = "translateY(-1px)"; }}
          >
            <span>Our Expertise</span>
            <svg
              aria-hidden="true"
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M2 7h10M7 2l5 5-5 5" />
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* Scroll cue */}
      <ScrollCue />
    </section>
  );
}

export default Hero;