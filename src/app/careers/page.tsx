"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { firmInfo } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";

const QUALITIES = [
  "Exceptional academic credentials from a recognised law school",
  "Strong analytical and written communication skills",
  "Commitment to professional ethics and client service",
  "Curiosity, diligence, and the drive to grow as an advocate",
] as const;

export default function CareersPage() {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          backgroundColor: "#0A1520",
          padding: "clamp(7rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 60% 70% at 60% 40%, rgba(201,168,76,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
          <motion.p
            variants={motionVariants.fadeUp}
            initial="hidden"
            animate="visible"
            className="text-eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            Careers
          </motion.p>
          <motion.h1
            variants={motionVariants.fadeUpDelay(0.08)}
            initial="hidden"
            animate="visible"
            className="text-display-xl"
            style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 660 }}
          >
            Join a Firm That{" "}
            <span style={{ color: "#C9A84C" }}>Holds Itself to the Highest Standard.</span>
          </motion.h1>
        </div>
      </div>

      {/* Main content */}
      <section
        style={{
          backgroundColor: "#0D1B2A",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "start",
          }}
        >
          <motion.div
            variants={motionVariants.staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
          >
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-eyebrow"
              style={{ marginBottom: "1rem" }}
            >
              Why Sapphire Juris
            </motion.p>
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-display-md"
              style={{ fontStyle: "italic", color: "#F5F0E8", marginBottom: "1.5rem" }}
            >
              A practice built for those who take the law seriously.
            </motion.h2>
            <motion.p
              variants={motionVariants.fadeUp}
              style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8, marginBottom: "1.25rem" }}
            >
              Sapphire Juris is a boutique firm where talented advocates work directly
              on substantive matters from the outset. We believe in mentorship, not hierarchy
              for its own sake — and in the idea that genuine professional growth happens
              when you are trusted with real responsibility.
            </motion.p>
            <motion.p
              variants={motionVariants.fadeUp}
              style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8 }}
            >
              We are always open to hearing from outstanding advocates and law graduates
              who share our values and aspire to practice at the highest level.
            </motion.p>
          </motion.div>

          <motion.div
            variants={motionVariants.slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
          >
            <div
              style={{
                padding: "2.5rem",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 8,
                backgroundColor: "rgba(10,21,32,0.4)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontWeight: 600,
                  fontSize: "1.375rem",
                  color: "#F5F0E8",
                  marginBottom: "1.5rem",
                }}
              >
                What We Look For
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {QUALITIES.map((q) => (
                  <li
                    key={q}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      alignItems: "flex-start",
                      fontSize: "0.9rem",
                      color: "#7A8FA6",
                      lineHeight: 1.65,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 1,
                        backgroundColor: "#C9A84C",
                        transform: "rotate(45deg)",
                        flexShrink: 0,
                        marginTop: 7,
                      }}
                    />
                    {q}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.12)",
                  paddingTop: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "#7A8FA6",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  Send your curriculum vitae and a brief covering letter to our recruiting
                  address. We review all applications carefully and respond to those that
                  meet our criteria.
                </p>
                <Link
                  href={`mailto:${firmInfo.email}?subject=Application — Sapphire Juris`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C9A84C",
                    textDecoration: "none",
                  }}
                >
                  {firmInfo.email}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
