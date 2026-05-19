"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale, Shield, Building2, Users, Home, Lightbulb,
  Landmark, Gavel, Briefcase, Coins, Lock, FileCheck2,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import { practiceAreas } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  scale:        Scale,
  shield:       Shield,
  building:     Building2,
  users:        Users,
  home:         Home,
  lightbulb:    Lightbulb,
  landmark:     Landmark,
  gavel:        Gavel,
  briefcase:    Briefcase,
  coins:        Coins,
  lock:         Lock,
  "file-check": FileCheck2,
};

const DESCRIPTIONS: Record<string, string> = {
  "Civil Litigation":        "Skilled advocacy across all trial and appellate forums, from district courts to the High Court.",
  "Criminal Defense":        "Rigorous defense strategy grounded in procedural precision and command of criminal precedent.",
  "Corporate & M&A":         "Transaction counsel for complex mergers, acquisitions, joint ventures, and restructurings.",
  "Family Law":              "Principled representation in matrimonial disputes, custody matters, and succession proceedings.",
  "Real Estate":             "Comprehensive counsel on property transactions, title disputes, and regulatory compliance.",
  "Intellectual Property":   "Protecting creative and commercial assets through strategic IP registration and enforcement.",
  "Constitutional Law":      "Fundamental rights litigation and judicial review argued before the highest constitutional forums.",
  "Arbitration & ADR":       "Efficient, confidential resolution of commercial and investor-state disputes.",
  "Employment & Labour":     "Workplace counsel for corporations, institutions, and senior executives across all industries.",
  "Banking & Finance":       "Regulatory guidance and dispute resolution for banks, NBFCs, and financial institutions.",
  "Data Privacy":            "Compliance frameworks, data governance strategy, and breach response in the digital age.",
  "Regulatory & Compliance": "Navigating sector-specific regulatory requirements with precision and commercial insight.",
};

function AreaCard({ area, index }: { area: typeof practiceAreas[number]; index: number }) {
  const Icon = ICON_MAP[area.icon] ?? Scale;
  const desc = DESCRIPTIONS[area.label] ?? "";

  return (
    <motion.div
      variants={motionVariants.staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={area.href}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1.75rem 1.5rem",
          border: "1px solid rgba(201,168,76,0.12)",
          borderRadius: 8,
          textDecoration: "none",
          height: "100%",
          backgroundColor: "rgba(10,21,32,0.6)",
          transition: "border-color 0.3s ease, background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.38)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(19,32,48,0.9)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.12)";
          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(10,21,32,0.6)";
        }}
      >
        <span
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            border: "1px solid rgba(201,168,76,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(201,168,76,0.08)",
            flexShrink: 0,
          }}
        >
          <Icon size={18} color="#C9A84C" />
        </span>

        <span
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 600,
            fontSize: "1.125rem",
            color: "#F5F0E8",
            lineHeight: 1.25,
          }}
        >
          {area.label}
        </span>

        <span
          style={{
            fontSize: "0.8125rem",
            color: "#7A8FA6",
            lineHeight: 1.7,
            flex: 1,
          }}
        >
          {desc}
        </span>

        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginTop: "auto",
          }}
        >
          Learn more
          <ArrowRight size={12} />
        </span>
      </Link>
    </motion.div>
  );
}

export default function PracticeAreas() {
  return (
    <section
      style={{
        backgroundColor: "#0A1520",
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
          style={{ marginBottom: "4rem" }}
        >
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            Areas of Practice
          </motion.p>

          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-display-lg"
            style={{
              fontStyle: "italic",
              color: "#F5F0E8",
              maxWidth: 680,
              marginBottom: "1.5rem",
            }}
          >
            Comprehensive Legal Counsel{" "}
            <span style={{ color: "#C9A84C" }}>Across Every Domain.</span>
          </motion.h2>

          <motion.p
            variants={motionVariants.fadeUp}
            style={{
              fontSize: "1rem",
              color: "#7A8FA6",
              maxWidth: 540,
              lineHeight: 1.75,
            }}
          >
            Our advocates bring deep, specialist knowledge to each area of practice,
            ensuring you receive counsel that is both precise and strategically informed.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={motionVariants.staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))",
            gap: "1.25rem",
          }}
        >
          {practiceAreas.map((area, i) => (
            <AreaCard key={area.href} area={area} index={i} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            marginTop: "3.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href="/expertise" className="btn-secondary">
            View All Practice Areas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
