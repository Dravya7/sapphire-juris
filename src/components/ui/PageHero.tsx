"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

interface PageHeroProps {
  eyebrow:    string;
  heading:    React.ReactNode;
  image:      string;
  /** 0–1, default 0.22 — how dark to render the photo */
  brightness?: number;
}

export function PageHero({ eyebrow, heading, image, brightness = 0.22 }: PageHeroProps) {
  const reduced = useReducedMotion();
  const ref     = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const parallax    = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <div
      ref={ref}
      style={{
        position:     "relative",
        overflow:     "hidden",
        paddingTop:   "clamp(7rem, 12vw, 10rem)",
        paddingBottom:"clamp(4rem, 6vw, 6rem)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      {/* Base layer */}
      <div style={{ position: "absolute", inset: 0, backgroundColor: "#08131E" }} />

      {/* Photo — parallax */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-10%]"
        style={reduced ? {} : { y: parallax }}
      >
        <div
          style={{
            position:           "absolute",
            inset:              0,
            backgroundImage:    `url('${image}')`,
            backgroundSize:     "cover",
            backgroundPosition: "center",
            filter:             `brightness(${brightness}) saturate(0.65)`,
          }}
        />
      </motion.div>

      {/* Radial vignette — draws focus to text */}
      <div
        aria-hidden="true"
        style={{
          position:   "absolute",
          inset:      0,
          background: "radial-gradient(ellipse 70% 80% at 30% 50%, rgba(8,19,30,0.0) 0%, rgba(4,13,21,0.75) 100%)",
        }}
      />

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        style={{
          position:   "absolute",
          bottom:     0,
          left:       0,
          right:      0,
          height:     "8rem",
          background: "linear-gradient(to bottom, transparent, #0D1B2A)",
        }}
      />

      {/* Top fade into navbar */}
      <div
        aria-hidden="true"
        style={{
          position:   "absolute",
          top:        0,
          left:       0,
          right:      0,
          height:     "5rem",
          background: "linear-gradient(to bottom, rgba(8,19,30,0.6), transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position:      "relative",
          zIndex:        1,
          maxWidth:      1280,
          margin:        "0 auto",
          paddingInline: "clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-eyebrow"
          style={{ marginBottom: "1rem" }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-xl"
          style={{ color: "#F5F0E8", maxWidth: 720 }}
        >
          {heading}
        </motion.h1>
      </div>
    </div>
  );
}
