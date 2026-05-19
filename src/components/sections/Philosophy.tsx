"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionVariants, viewportOptions } from "@/lib/utils";

const PILLARS = [
  {
    numeral: "I",
    title:   "Integrity as Foundation",
    body:    "We hold ourselves to an uncompromising standard of professional ethics and candor. Our reputation is built, case by case, on the trust of those we serve.",
  },
  {
    numeral: "II",
    title:   "Rigorous Preparation",
    body:    "Every matter receives exhaustive research, meticulous drafting, and strategic foresight. We approach the law with the discipline it demands.",
  },
  {
    numeral: "III",
    title:   "Clarity in Counsel",
    body:    "Complex legal questions deserve clear, direct answers. We translate the law into language that empowers informed decisions—never obscuring, always illuminating.",
  },
] as const;

function GoldRule() {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOptions.once}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "3.5rem",
      }}
    >
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOptions.once}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "rgba(201,168,76,0.3)",
          transformOrigin: "left",
        }}
      />
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: 1,
          backgroundColor: "#C9A84C",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOptions.once}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "rgba(201,168,76,0.3)",
          transformOrigin: "right",
        }}
      />
    </motion.div>
  );
}

export default function Philosophy() {
  return (
    <section
      style={{
        backgroundColor: "#040D15",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Eyebrow */}
        <motion.p
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          className="text-eyebrow"
          style={{ textAlign: "center", marginBottom: "1.5rem" }}
        >
          Our Philosophy
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          className="text-display-xl"
          style={{
            fontStyle: "italic",
            color: "#F5F0E8",
            textAlign: "center",
            marginBottom: "1.25rem",
          }}
        >
          Law Practiced{" "}
          <span style={{ color: "#C9A84C" }}>with Purpose.</span>
        </motion.h2>

        {/* Pull quote */}
        <motion.p
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
            color: "#7A8FA6",
            textAlign: "center",
            maxWidth: 640,
            margin: "0 auto 4rem",
            lineHeight: 1.65,
          }}
        >
          &ldquo;We believe the finest legal counsel combines disciplined
          scholarship with unwavering human judgment.&rdquo;
        </motion.p>

        <GoldRule />

        {/* Three pillars */}
        <motion.div
          variants={motionVariants.staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
            gap: "0",
          }}
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.numeral}
              variants={motionVariants.staggerItem}
              style={{
                padding: "2.5rem clamp(1.5rem, 3vw, 2.5rem)",
                borderLeft: i > 0 ? "1px solid rgba(201,168,76,0.12)" : "none",
                position: "relative",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "rgba(201,168,76,0.18)",
                  lineHeight: 1,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {pillar.numeral}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  fontSize: "1.375rem",
                  color: "#F5F0E8",
                  marginBottom: "1rem",
                  lineHeight: 1.25,
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#7A8FA6",
                  lineHeight: 1.75,
                }}
              >
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
