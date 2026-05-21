"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { motionVariants, viewportOptions } from "@/lib/utils";
import ContactCTA from "@/components/sections/ContactCTA";

const PEOPLE = [
  {
    name:         "Dr. Saket Vyas",
    role:         "Designated Partner",
    education:    "LL.B, LL.M & Ph.D (Law)",
    experience:   "35+ Years of Experience",
    portrait:     "/images/founder-dr-saket-vyas.jpg",
    bio:          "Dr. Saket Vyas is the Designated Partner and guiding force of Sapphire Juris LLP, bringing over 35 years of distinguished legal practice across civil, criminal, constitutional, and corporate matters. His doctoral scholarship in law underpins a practice built on principled advocacy and unwavering integrity.",
    focus:        ["Civil Litigation", "Constitutional Law", "Criminal Defense", "Corporate Advisory"],
    notable:      [],
    slug:         "saket-vyas",
  },
  {
    name:         "Adv. Atharva Vyas",
    role:         "Managing Partner",
    education:    "B.A., LL.B, LL.M",
    experience:   null,
    portrait:     null,
    bio:          "Adv. Atharva Vyas leads the day-to-day practice of the firm as Managing Partner. His counsel extends to matters of corporate law, regulatory compliance, and civil litigation. He serves as Legal Advisor to Mahakal Mandir, Ujjain and PDPL Pharmaceutical, reflecting the trust placed in his strategic and transactional acumen.",
    focus:        ["Corporate & M&A", "Civil Litigation", "Regulatory & Compliance", "Arbitration & ADR"],
    notable:      ["Legal Advisor — Mahakal Mandir, Ujjain", "Legal Advisor — PDPL Pharmaceutical"],
    slug:         "atharva-vyas",
  },
  {
    name:         "Adv. Rishi Sharma",
    role:         "Senior Associate",
    education:    "LL.B",
    experience:   null,
    portrait:     null,
    bio:          "Adv. Rishi Sharma is a Senior Associate with a strong focus on commercial transactions, real estate law, and cross-border advisory. He serves as Legal Advisor to Sarthak Singapore Group and Drushika Real Estate, bringing a commercially astute perspective to every mandate he handles.",
    focus:        ["Real Estate", "Commercial Transactions", "Civil Litigation", "Corporate Advisory"],
    notable:      ["Legal Advisor — Sarthak Singapore Group", "Legal Advisor — Drushika Real Estate"],
    slug:         "rishi-sharma",
  },
  {
    name:         "Adv. Shashank Singh",
    role:         "Senior Associate",
    education:    "LL.B",
    experience:   null,
    portrait:     null,
    bio:          "Adv. Shashank Singh is a Senior Associate enrolled with the Supreme Court of India. He has served as Panel Counsel and Senior Panel Counsel for the Government of India before the Delhi High Court, bringing the rigour of constitutional and administrative law practice to the firm.",
    focus:        ["Constitutional Law", "Administrative Law", "Civil Litigation", "Criminal Defense"],
    notable:      ["Advocate — Supreme Court of India", "Panel Counsel — Government of India", "Sr. Panel Counsel — Govt. of India, Delhi High Court"],
    slug:         "shashank-singh",
  },
  {
    name:         "Adv. Saket Sharma",
    role:         "Junior Associate",
    education:    "LL.B",
    experience:   null,
    portrait:     null,
    bio:          "Adv. Saket Sharma is a Junior Associate whose practice is focused on consumer protection law. He brings diligence and client-first attention to consumer disputes, ensuring that individual and commercial clients receive effective representation before consumer forums.",
    focus:        ["Consumer Law", "Civil Litigation", "Dispute Resolution"],
    notable:      ["Expertise in Consumer Matters"],
    slug:         "saket-sharma",
  },
  {
    name:         "Arjun Kasera",
    role:         "Associate",
    education:    "LL.B",
    experience:   null,
    portrait:     null,
    bio:          "Arjun Kasera is an Associate at Sapphire Juris LLP, assisting across the firm's practice areas with research, drafting, and client advisory support. He brings a sharp analytical mind and a commitment to delivering thorough, well-reasoned work on every matter.",
    focus:        ["Civil Litigation", "Corporate Advisory", "Dispute Resolution"],
    notable:      [],
    slug:         "arjun-kasera",
  },
] as const;

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        heading={<>The Advocates{" "}<span style={{ color: "#C9A84C" }}>Behind Every Matter.</span></>}
        image="/images/people-bg.jpg"
      />

      <section
        style={{
          backgroundColor: "#0D1B2A",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {PEOPLE.map((person, i) => (
            <motion.div
              key={person.slug}
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
              {/* Portrait */}
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
                  {person.portrait ? (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('${person.portrait}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-cormorant)",
                          fontWeight: 300,
                          fontSize: "5rem",
                          color: "rgba(201,168,76,0.12)",
                          lineHeight: 1,
                        }}
                      >
                        {person.name.split(" ").slice(-1)[0][0]}
                      </span>
                    </div>
                  )}
                  {/* Bottom gradient */}
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
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "0.25rem" }}>
                      {person.role}
                    </p>
                    {person.experience && (
                      <p style={{ fontSize: "0.8rem", color: "#7A8FA6" }}>{person.experience}</p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                variants={motionVariants.fadeUp}
                style={{ order: i % 2 === 0 ? 1 : 0 }}
              >
                {/* Role badge */}
                <div
                  style={{
                    display:         "inline-flex",
                    alignItems:      "center",
                    padding:         "0.4rem 1rem",
                    border:          "1px solid rgba(201,168,76,0.4)",
                    borderRadius:    2,
                    backgroundColor: "rgba(201,168,76,0.07)",
                    marginBottom:    "1.25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily:    "var(--font-dm-sans)",
                      fontSize:      "0.75rem",
                      fontWeight:    600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color:         "#C9A84C",
                    }}
                  >
                    {person.role}
                  </span>
                </div>

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
                  {person.name}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "rgba(201,168,76,0.7)",
                    marginBottom: "2rem",
                  }}
                >
                  {person.education}
                </p>

                <p style={{ fontSize: "0.9375rem", color: "#7A8FA6", lineHeight: 1.8, marginBottom: "2rem" }}>
                  {person.bio}
                </p>

                {/* Notable appointments */}
                {person.notable.length > 0 && (
                  <div style={{ marginBottom: "2rem" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A5F78", marginBottom: "0.875rem" }}>
                      Notable Appointments
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {person.notable.map((n) => (
                        <div key={n} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                          <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#C9A84C", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.875rem", color: "#D4C5A0" }}>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Focus areas */}
                <div style={{ marginBottom: "2.5rem" }}>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A5F78", marginBottom: "0.875rem" }}>
                    Areas of Focus
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {person.focus.map((f) => (
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

                {/* Bar enrollment */}
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
                    {person.slug === "shashank-singh"
                      ? "Bar Council of India — Supreme Court of India"
                      : "Bar Council of Madhya Pradesh"}
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
