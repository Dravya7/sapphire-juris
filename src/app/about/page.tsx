"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { firmInfo } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";
import ContactCTA from "@/components/sections/ContactCTA";

const VALUES = [
  {
    title: "Client-First Commitment",
    body:  "Every decision we make is filtered through one question: what is best for our client? We do not pursue strategy for its own sake — we pursue outcomes.",
  },
  {
    title: "Depth Over Volume",
    body:  "As a boutique firm, we deliberately limit our caseload to ensure every matter receives the focus and expertise it deserves. Quality is non-negotiable.",
  },
  {
    title: "Transparent Communication",
    body:  "We believe our clients deserve candid counsel — honest assessments of strength, risk, and realistic outcomes. No false promises, no vague assurances.",
  },
  {
    title: "Continuous Scholarship",
    body:  "The law is not static. Our advocates maintain an active engagement with developments in case law, legislation, and legal scholarship to serve clients at the highest level.",
  },
] as const;

function PageBanner() {
  return (
    <div
      style={{
        backgroundColor: "#0A1520",
        padding: "clamp(7rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Poster background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/poster.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "brightness(0.18) saturate(0.6)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
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
          About the Firm
        </motion.p>
        <motion.h1
          variants={motionVariants.fadeUpDelay(0.08)}
          initial="hidden"
          animate="visible"
          className="text-display-xl"
          style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 700 }}
        >
          Built on Principle.{" "}
          <span style={{ color: "#C9A84C" }}>Defined by Precision.</span>
        </motion.h1>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageBanner />

      {/* Story section */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "start",
          }}
        >
          {/* Text */}
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
              Our Story
            </motion.p>

            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-display-md"
              style={{ fontStyle: "italic", color: "#F5F0E8", marginBottom: "2rem" }}
            >
              A firm founded on{" "}
              <span style={{ color: "#C9A84C" }}>the belief that the law works best when practiced with conscience.</span>
            </motion.h2>

            <motion.div variants={motionVariants.fadeUp}>
              <p style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Sapphire Juris was established in Indore, Madhya Pradesh, with a singular
                conviction: that a boutique law firm, freed from the pressures of volume
                and scale, could deliver a standard of legal counsel rarely found elsewhere.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Our founders — Adv. Atharva Vyas and Adv. Rishi Sharma — trained at
                premier institutions and built their practices across commercial litigation,
                corporate advisory, and constitutional law before co-founding the firm.
                They share an uncompromising commitment to excellence and a deep respect
                for the client relationship.
              </p>
              <p style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8 }}>
                Today, Sapphire Juris is recognised as a trusted partner for individuals,
                corporations, and institutions navigating complex legal challenges across
                Madhya Pradesh and beyond.
              </p>
            </motion.div>

            <motion.div
              variants={motionVariants.fadeUp}
              style={{ marginTop: "2.5rem" }}
            >
              <Link
                href="/people"
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
                Meet Our Advocates
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={motionVariants.slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              {[
                { num: "500+",  label: "Cases Handled" },
                { num: "98%",   label: "Client Satisfaction" },
                { num: "35+",   label: "Years of Practice" },
                { num: "15+",   label: "Practice Areas" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "2.5rem 2rem",
                    backgroundColor: i % 2 === 0 ? "rgba(10,21,32,0.6)" : "rgba(13,27,42,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 600,
                      fontSize: "clamp(2rem, 4vw, 2.75rem)",
                      color: "#C9A84C",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </span>
                  <span style={{ fontSize: "0.8125rem", color: "#7A8FA6" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: 8,
                backgroundColor: "rgba(10,21,32,0.4)",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#4A5F78",
                  marginBottom: "0.875rem",
                }}
              >
                Established
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "1.0625rem",
                  color: "#D4C5A0",
                  lineHeight: 1.65,
                }}
              >
                Sapphire Juris® was founded in {firmInfo.established} in Indore, M.P. —
                committed from day one to principled, precise legal practice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values section */}
      <section
        style={{
          backgroundColor: "#0A1520",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            variants={motionVariants.staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
            style={{ marginBottom: "4rem" }}
          >
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-eyebrow"
              style={{ marginBottom: "1rem" }}
            >
              Our Values
            </motion.p>
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-display-lg"
              style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 580 }}
            >
              The principles that{" "}
              <span style={{ color: "#C9A84C" }}>guide every decision.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={motionVariants.staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "1.5rem",
            }}
          >
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                variants={motionVariants.staggerItem}
                style={{
                  padding: "2rem 1.75rem",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: 8,
                  backgroundColor: "rgba(4,13,21,0.5)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: "#F5F0E8",
                    marginBottom: "0.875rem",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#7A8FA6", lineHeight: 1.75 }}>
                  {v.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
