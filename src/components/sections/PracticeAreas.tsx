"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Scale, Shield, Building2, Users, Home, Lightbulb,
  Landmark, Gavel, Briefcase, Coins, Lock, FileCheck2,
  ChevronLeft, ChevronRight, type LucideIcon,
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

const GAP = 20;
const TOTAL = practiceAreas.length;

export default function PracticeAreas() {
  const [current, setCurrent]     = useState(0);
  const [itemWidth, setItemWidth] = useState(340);
  const [visible, setVisible]     = useState(3);
  const containerRef              = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const v = w >= 960 ? 3 : w >= 600 ? 2 : 1;
      setVisible(v);
      setItemWidth((w - (v - 1) * GAP) / v);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const maxIndex = Math.max(0, TOTAL - visible);

  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const offset = current * (itemWidth + GAP);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

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
          style={{
            display:        "flex",
            alignItems:     "flex-end",
            justifyContent: "space-between",
            flexWrap:       "wrap",
            gap:            "2rem",
            marginBottom:   "3.5rem",
          }}
        >
          <div>
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
              style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 580 }}
            >
              Comprehensive Legal Counsel{" "}
              <span style={{ color: "#C9A84C" }}>Across Every Domain.</span>
            </motion.h2>
          </div>

          {/* Arrow buttons — top right */}
          <motion.div
            variants={motionVariants.fadeUp}
            style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}
          >
            {[{ fn: prev, disabled: current === 0, Icon: ChevronLeft },
              { fn: next, disabled: current === maxIndex, Icon: ChevronRight }].map(({ fn, disabled, Icon }, i) => (
              <button
                key={i}
                onClick={fn}
                disabled={disabled}
                style={{
                  width:           44,
                  height:          44,
                  borderRadius:    "50%",
                  border:          `1px solid ${disabled ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.35)"}`,
                  backgroundColor: disabled ? "transparent" : "rgba(201,168,76,0.07)",
                  color:           disabled ? "rgba(201,168,76,0.22)" : "#C9A84C",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  cursor:          disabled ? "not-allowed" : "pointer",
                  transition:      "border-color 0.2s, background-color 0.2s, color 0.2s",
                  flexShrink:      0,
                }}
                onMouseEnter={(e) => {
                  if (!disabled) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(201,168,76,0.14)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.6)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!disabled) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(201,168,76,0.07)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.35)";
                  }
                }}
              >
                <Icon size={18} />
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <div ref={containerRef} style={{ overflow: "hidden" }}>
          <motion.div
            animate={{ x: -offset }}
            transition={{ type: "spring", damping: 32, stiffness: 300, mass: 0.8 }}
            style={{ display: "flex", gap: GAP }}
          >
            {practiceAreas.map((area) => {
              const Icon = ICON_MAP[area.icon] ?? Scale;
              const desc = DESCRIPTIONS[area.label] ?? "";
              return (
                <div
                  key={area.href}
                  style={{
                    flexShrink:      0,
                    width:           itemWidth,
                    display:         "flex",
                    flexDirection:   "column",
                    gap:             "1rem",
                    padding:         "1.75rem 1.5rem",
                    border:          "1px solid rgba(201,168,76,0.12)",
                    borderRadius:    8,
                    backgroundColor: "rgba(10,21,32,0.6)",
                    transition:      "border-color 0.3s, background-color 0.3s",
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
                      width:           40,
                      height:          40,
                      borderRadius:    8,
                      border:          "1px solid rgba(201,168,76,0.25)",
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      backgroundColor: "rgba(201,168,76,0.08)",
                      flexShrink:      0,
                    }}
                  >
                    <Icon size={18} color="#C9A84C" />
                  </span>

                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontWeight: 600,
                      fontSize:   "1.125rem",
                      color:      "#F5F0E8",
                      lineHeight: 1.25,
                    }}
                  >
                    {area.label}
                  </span>

                  <span
                    style={{
                      fontSize:   "0.8125rem",
                      color:      "#7A8FA6",
                      lineHeight: 1.7,
                    }}
                  >
                    {desc}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display:        "flex",
            justifyContent: "center",
            gap:            "0.5rem",
            marginTop:      "2.5rem",
          }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width:           i === current ? 24 : 6,
                height:          6,
                borderRadius:    3,
                backgroundColor: i === current ? "#C9A84C" : "rgba(201,168,76,0.22)",
                border:          "none",
                cursor:          "pointer",
                padding:         0,
                transition:      "width 0.35s ease, background-color 0.35s ease",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{ marginTop: "3.5rem", display: "flex", justifyContent: "center" }}
        >
          <Link href="/expertise" className="btn-secondary">
            View All Practice Areas
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
