"use client";

import { motion } from "framer-motion";
import { motionVariants, viewportOptions } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:  "Sapphire Juris handled my property dispute with exceptional precision. The team's command of land laws in Madhya Pradesh was evident at every stage of the proceedings.",
    name:   "Raghav Mehta",
    matter: "Real Estate Litigation",
  },
  {
    quote:  "Their counsel during our company's acquisition was indispensable. The depth of M&A expertise gave us complete confidence through a complex and high-stakes transaction.",
    name:   "Priya Agarwal",
    matter: "Corporate & M&A",
  },
  {
    quote:  "I was referred to Sapphire Juris during a very difficult family matter. Their sensitivity alongside rigorous legal acumen made an overwhelming situation truly manageable.",
    name:   "Vikram Singhania",
    matter: "Family Law",
  },
] as const;

function QuoteMark() {
  return (
    <span
      style={{
        fontFamily: "var(--font-cormorant)",
        fontSize: "5rem",
        lineHeight: 0.8,
        color: "rgba(201,168,76,0.18)",
        display: "block",
        marginBottom: "0.5rem",
        fontStyle: "normal",
        userSelect: "none",
      }}
      aria-hidden
    >
      &ldquo;
    </span>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: "#0D1B2A",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          variants={motionVariants.staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            Client Testimonials
          </motion.p>

          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-display-lg"
            style={{ fontStyle: "italic", color: "#F5F0E8" }}
          >
            Counsel That{" "}
            <span style={{ color: "#C9A84C" }}>Speaks for Itself.</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={motionVariants.staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "1.5rem",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={motionVariants.staggerItem}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "2rem 1.75rem 1.75rem",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 8,
                backgroundColor: "rgba(10,21,32,0.5)",
              }}
            >
              <QuoteMark />

              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.0625rem, 1.5vw, 1.1875rem)",
                  color: "#D4C5A0",
                  lineHeight: 1.7,
                  flex: 1,
                  marginBottom: "1.75rem",
                }}
              >
                {t.quote}
              </p>

              <div
                style={{
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#F5F0E8",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                  }}
                >
                  {t.matter}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
