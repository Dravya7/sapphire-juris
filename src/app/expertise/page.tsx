"use client";

import { motion } from "framer-motion";
import {
  Scale, Shield, Building2, Users, Home, Lightbulb,
  Landmark, Gavel, Briefcase, Coins, Lock, FileCheck2,
  type LucideIcon,
} from "lucide-react";
import { practiceAreas } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";
import ContactCTA from "@/components/sections/ContactCTA";
import { PageHero } from "@/components/ui/PageHero";

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

const AREA_DETAILS: Record<string, { short: string; body: string }> = {
  "Civil Litigation": {
    short: "Skilled advocacy across all civil forums.",
    body:  "Our civil litigation practice encompasses all tiers of the judiciary — from district courts to the High Court of Madhya Pradesh and the Supreme Court of India. We represent individuals, corporate entities, and institutions in property disputes, contract enforcement, injunctions, tort claims, and recovery proceedings.",
  },
  "Criminal Defense": {
    short: "Principled defense grounded in procedural mastery.",
    body:  "We represent accused persons and entities at every stage — from bail applications and anticipatory bail to trial and appeals. Our approach combines rigorous fact-investigation with command of criminal procedure and evidentiary law to mount the strongest possible defense.",
  },
  "Corporate & M&A": {
    short: "Strategic counsel for complex business transactions.",
    body:  "We advise founders, investors, and corporations on mergers, acquisitions, joint ventures, shareholder agreements, and business restructurings. Our transactional team combines commercial judgment with meticulous due diligence to deliver outcomes that are legally sound and strategically aligned.",
  },
  "Family Law": {
    short: "Sensitive representation in personal and family matters.",
    body:  "We handle matrimonial disputes, divorce proceedings, custody and guardianship matters, maintenance claims, and succession disputes with both discretion and determination. We understand the personal stakes involved and ensure our clients receive both expert advocacy and considered counsel.",
  },
  "Real Estate": {
    short: "Comprehensive property and land law advisory.",
    body:  "Our real estate practice covers title due diligence, property transactions, development agreements, landlord-tenant disputes, and regulatory compliance under RERA and related legislation. We advise developers, investors, and individuals on transactions across Madhya Pradesh.",
  },
  "Intellectual Property": {
    short: "Protection for creative and commercial assets.",
    body:  "We advise on trademark registration and enforcement, copyright protection, trade secrets, and IP licensing. Our practice also covers IP disputes before the Trade Marks Registry, Intellectual Property Appellate Board, and courts of competent jurisdiction.",
  },
  "Constitutional Law": {
    short: "Fundamental rights litigation at the highest forums.",
    body:  "We represent clients in writ petitions before the High Court and Supreme Court in matters involving fundamental rights, governmental overreach, public interest, and constitutional interpretation. Our constitutional practice is grounded in a deep commitment to the rule of law.",
  },
  "Arbitration & ADR": {
    short: "Efficient, confidential commercial dispute resolution.",
    body:  "We represent parties in domestic and international arbitration proceedings under institutional rules and ad hoc arrangements. Our ADR practice also encompasses mediation and conciliation — offering clients faster, more flexible alternatives to court-based litigation.",
  },
  "Employment & Labour": {
    short: "Workplace counsel for employers and senior executives.",
    body:  "We advise corporations, institutions, and senior professionals on employment contracts, non-compete covenants, workplace investigations, disciplinary proceedings, and labour law compliance. We also represent clients before labour courts and industrial tribunals.",
  },
  "Banking & Finance": {
    short: "Regulatory and dispute resolution for the financial sector.",
    body:  "Our banking practice covers loan documentation, security enforcement, debt recovery proceedings, regulatory compliance for NBFCs and banks, and representation in matters before the Debt Recovery Tribunal and related forums.",
  },
  "Data Privacy": {
    short: "Compliance frameworks for the digital age.",
    body:  "We advise on data protection compliance under the Digital Personal Data Protection Act and applicable international frameworks. Our practice covers privacy policy drafting, data governance structures, vendor agreements, and incident response strategy.",
  },
  "Regulatory & Compliance": {
    short: "Navigating complex regulatory environments across sectors.",
    body:  "We advise clients across sectors — healthcare, education, real estate, financial services — on their regulatory obligations, licensing requirements, and compliance frameworks. We also represent clients in proceedings before regulatory bodies and appellate authorities.",
  },
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Areas of Practice"
        heading={<>Comprehensive Counsel.{" "}<span style={{ color: "#C9A84C" }}>Every Domain.</span></>}
        image="/images/expertise-bg.jpg"
        brightness={0.2}
      />
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
            background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
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
            Areas of Practice
          </motion.p>
          <motion.h1
            variants={motionVariants.fadeUpDelay(0.08)}
            initial="hidden"
            animate="visible"
            className="text-display-xl"
            style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 720 }}
          >
            Twelve Disciplines.{" "}
            <span style={{ color: "#C9A84C" }}>One Standard of Excellence.</span>
          </motion.h1>
        </div>
      </div>

      {/* Practice areas list */}
      <section
        style={{
          backgroundColor: "#0D1B2A",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            variants={motionVariants.staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
            style={{ display: "flex", flexDirection: "column", gap: "0" }}
          >
            {practiceAreas.map((area, i) => {
              const Icon = ICON_MAP[area.icon] ?? Scale;
              const detail = AREA_DETAILS[area.label];
              return (
                <motion.div
                  key={area.href}
                  variants={motionVariants.staggerItem}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: "2rem",
                    alignItems: "start",
                    padding: "2.5rem 0",
                    borderBottom: "1px solid rgba(201,168,76,0.1)",
                    borderTop: i === 0 ? "1px solid rgba(201,168,76,0.1)" : "none",
                  }}
                >
                  {/* Icon */}
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 8,
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(201,168,76,0.06)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <Icon size={19} color="#C9A84C" />
                  </span>

                  {/* Content */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 600,
                        fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                        color: "#F5F0E8",
                        marginBottom: "0.625rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {area.label}
                    </h2>
                    {detail && (
                      <>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#D4C5A0",
                            marginBottom: "0.875rem",
                            fontStyle: "italic",
                            fontFamily: "var(--font-cormorant)",
                          }}
                        >
                          {detail.short}
                        </p>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#7A8FA6",
                            lineHeight: 1.75,
                            maxWidth: 680,
                          }}
                        >
                          {detail.body}
                        </p>
                      </>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
