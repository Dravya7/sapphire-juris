"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { firmInfo, practiceAreas } from "@/lib/design-tokens";
import { motionVariants, viewportOptions } from "@/lib/utils";
import { LogoMark } from "@/components/ui/LogoMark";

const YEAR = new Date().getFullYear();

const FIRM_NAV = [
  { label: "About",      href: "/about" },
  { label: "Our People", href: "/people" },
  { label: "Expertise",  href: "/expertise" },
  { label: "Insights",   href: "/insights" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
] as const;

const LEFT_AREAS  = practiceAreas.slice(0, 6);
const RIGHT_AREAS = practiceAreas.slice(6, 12);

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#040D15",
        borderTop: "1px solid rgba(201,168,76,0.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem clamp(1.5rem, 5vw, 5rem) 4rem",
        }}
      >
        <motion.div
          variants={motionVariants.staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem 2.5rem",
          }}
        >
          {/* ── Brand column ─────────────────────────── */}
          <motion.div
            variants={motionVariants.fadeUp}
            className="footer-brand"
            style={{ gridColumn: "span 2", minWidth: 0 }}
          >
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", marginBottom: "1.25rem", textDecoration: "none" }}
              aria-label="Sapphire Juris — Home"
            >
              <LogoMark size={42} />
              <span style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700, fontSize: "1.125rem", letterSpacing: "0.05em", textTransform: "uppercase", color: "#F5F0E8" }}>
                Sapphire Juris<sup style={{ fontSize: "0.45em", color: "#C9A84C", marginLeft: "1px" }}>®</sup>
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "1.0625rem",
                color: "#C9A84C",
                marginBottom: "0.875rem",
              }}
            >
              {firmInfo.tagline}
            </p>

            <p
              style={{
                fontSize: "0.8125rem",
                color: "#7A8FA6",
                lineHeight: 1.75,
                maxWidth: 280,
              }}
            >
              A premium boutique law firm in Indore, Madhya Pradesh.
              Rigorous counsel. Unwavering integrity.
            </p>

            <p
              style={{
                fontSize: "0.75rem",
                color: "#4A5F78",
                marginTop: "1.25rem",
              }}
            >
              {firmInfo.officeHours}
            </p>
          </motion.div>

          {/* ── Firm links ───────────────────────────── */}
          <motion.div variants={motionVariants.fadeUp}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4A5F78",
                marginBottom: "1.25rem",
              }}
            >
              Firm
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {FIRM_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="footer-link"
                    style={{
                      fontSize: "0.875rem",
                      color: "#7A8FA6",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Practice areas (left) ────────────────── */}
          <motion.div variants={motionVariants.fadeUp}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4A5F78",
                marginBottom: "1.25rem",
              }}
            >
              Practice Areas
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {LEFT_AREAS.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="footer-link"
                    style={{ fontSize: "0.8125rem", color: "#7A8FA6", textDecoration: "none" }}
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Practice areas (right) ───────────────── */}
          <motion.div variants={motionVariants.fadeUp}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "transparent",
                marginBottom: "1.25rem",
                userSelect: "none",
              }}
              aria-hidden
            >
              ·
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {RIGHT_AREAS.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="footer-link"
                    style={{ fontSize: "0.8125rem", color: "#7A8FA6", textDecoration: "none" }}
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ──────────────────────────────── */}
          <motion.div variants={motionVariants.fadeUp}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#4A5F78",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1.125rem",
              }}
            >
              <li>
                <a
                  href={`tel:${firmInfo.phone}`}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "0.8125rem",
                    color: "#7A8FA6",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={13} style={{ flexShrink: 0 }} />
                  {firmInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${firmInfo.email}`}
                  className="footer-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "0.8125rem",
                    color: "#7A8FA6",
                    textDecoration: "none",
                  }}
                >
                  <Mail size={13} style={{ flexShrink: 0 }} />
                  {firmInfo.email}
                </a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.625rem",
                  fontSize: "0.8125rem",
                  color: "#7A8FA6",
                  lineHeight: 1.6,
                }}
              >
                <MapPin size={13} style={{ marginTop: 3, flexShrink: 0 }} />
                {firmInfo.address}
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom bar ────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          padding: "1.375rem clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.625rem",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#2A3F55", margin: 0 }}>
            {`© ${YEAR} Sapphire Juris®. All rights reserved. · Advocates & Legal Consultants, Indore, M.P.`}
          </p>
          <p style={{ fontSize: "0.75rem", color: "#2A3F55", margin: 0 }}>
            Not a solicitation of legal advice · Confidential consultations available
          </p>
        </div>
      </div>

    </footer>
  );
}
