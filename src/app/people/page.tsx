"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { firmInfo } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";
import ContactCTA from "@/components/sections/ContactCTA";

const EXTENDED_ADVOCATES = [
  {
    ...firmInfo.advocates[0],
    bio: "Adv. Atharva Vyas is a distinguished advocate with a practice spanning commercial litigation, constitutional law, and corporate advisory. His academic training at National Law School of India University, Bangalore provided a rigorous foundation in both theory and practice.",
    focus: ["Civil Litigation", "Constitutional Law", "Corporate & M&A", "Arbitration & ADR"],
  },
  {
    ...firmInfo.advocates[1],
    bio: "Adv. Rishi Sharma brings a client-centered approach to complex legal challenges, with particular expertise in family law, real estate litigation, and criminal defense. His training at Symbiosis Law School, Pune instilled both practical skill and principled approach.",
    focus: ["Criminal Defense", "Family Law", "Real Estate", "Employment & Labour"],
  },
] as const;

export default function PeoplePage() {
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
        {/* Poster background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/poster.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.15) saturate(0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 50% 70% at 30% 60%, rgba(201,168,76,0.04) 0%, transparent 70%)",
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
            Our People
          </motion.p>
          <motion.h1
            variants={motionVariants.fadeUpDelay(0.08)}
            initial="hidden"
            animate="visible"
            className="text-display-xl"
            style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 680 }}
          >
            The Advocates{" "}
            <span style={{ color: "#C9A84C" }}>Behind Every Matter.</span>
          </motion.h1>
        </div>
      </div>

      {/* Advocate profiles */}
      <section
        style={{
          backgroundColor: "#0D1B2A",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {EXTENDED_ADVOCATES.map((advocate, i) => (
            <motion.div
              key={advocate.slug}
              variants={motionVariants.staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions.once}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
                gap: "clamp(2.5rem, 5vw, 5rem)",
                alignItems: "start",
              }}
            >
              {/* Portrait placeholder */}
              <motion.div
                variants={i % 2 === 0 ? motionVariants.slideLeft : motionVariants.slideRight}
                style={{ order: i % 2 === 0 ? 0 : 1 }}
              >
                <div
                  style={{
                    aspectRatio: "3 / 4",
                    borderRadius: 8,
                    backgroundColor: "rgba(10,21,32,0.8)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    position: "relative",
                    overflow: "hidden",
                    maxWidth: 380,
                  }}
                >
                  {/* Monogram */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "5rem",
                        color: "rgba(201,168,76,0.12)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {advocate.name.split(" ").slice(-1)[0][0]}
                    </span>
                  </div>
                  {/* Bottom gradient with info */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "1.5rem",
                      background: "linear-gradient(to top, rgba(4,13,21,0.95) 0%, rgba(4,13,21,0.4) 70%, transparent 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        marginBottom: "0.375rem",
                      }}
                    >
                      Established {firmInfo.established}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#7A8FA6" }}>
                      {advocate.enrollment.split("—")[0].trim()}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                variants={motionVariants.fadeUp}
                style={{ order: i % 2 === 0 ? 1 : 0 }}
              >
                <p
                  className="text-eyebrow"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {advocate.role}
                </p>

                <h2
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                    color: "#F5F0E8",
                    marginBottom: "0.5rem",
                    lineHeight: 1.15,
                  }}
                >
                  {advocate.name}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "#C9A84C",
                    marginBottom: "2rem",
                  }}
                >
                  {advocate.education}
                </p>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#7A8FA6",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {advocate.bio}
                </p>

                {/* Focus areas */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <p
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#4A5F78",
                      marginBottom: "0.875rem",
                    }}
                  >
                    Areas of Focus
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {advocate.focus.map((f) => (
                      <span
                        key={f}
                        style={{
                          display: "inline-block",
                          padding: "0.375rem 0.875rem",
                          border: "1px solid rgba(201,168,76,0.2)",
                          borderRadius: 100,
                          fontSize: "0.75rem",
                          color: "#D4C5A0",
                          backgroundColor: "rgba(201,168,76,0.05)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enrollment */}
                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    border: "1px solid rgba(201,168,76,0.12)",
                    borderRadius: 6,
                    backgroundColor: "rgba(10,21,32,0.4)",
                    marginBottom: "2rem",
                  }}
                >
                  <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A5F78", marginBottom: "0.375rem" }}>
                    Bar Enrollment
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#7A8FA6" }}>
                    {advocate.enrollment}
                  </p>
                </div>

                <Link
                  href="/contact"
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
                  Book a Consultation
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
