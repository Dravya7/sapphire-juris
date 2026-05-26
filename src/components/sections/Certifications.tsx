"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { motionVariants, viewportOptions } from "@/lib/utils";

const CERT = {
  standard:    "ISO 9001:2015",
  system:      "Quality Management System",
  number:      "090705AW05SA",
  issuedBy:    "Global Standards",
  iafCode:     "35",
  since:       "23 May 2026",
  validUntil:  "22 May 2029",
  scope:       "Provision of Legal Advisory, Advocacy, Litigation Management and Corporate Legal Consultancy Services",
  verifyUrl:   "/iso-certificate.pdf",
} as const;

const DETAILS = [
  { label: "Certificate No.",  value: CERT.number      },
  { label: "Issued By",        value: CERT.issuedBy    },
  { label: "IAF Code",         value: CERT.iafCode     },
  { label: "Certified Since",  value: CERT.since       },
  { label: "Valid Until",      value: CERT.validUntil  },
] as const;

export default function Certifications() {
  return (
    <section
      style={{
        backgroundColor: "#08131E",
        borderTop:        "1px solid rgba(201,168,76,0.1)",
        borderBottom:     "1px solid rgba(201,168,76,0.1)",
        padding:          "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          variants={motionVariants.staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap:                 "clamp(3rem, 6vw, 6rem)",
            alignItems:          "center",
          }}
        >

          {/* Left — badge */}
          <motion.div variants={motionVariants.slideLeft}>
            <div
              style={{
                display:         "inline-flex",
                flexDirection:   "column",
                alignItems:      "flex-start",
                gap:             "1.5rem",
              }}
            >
              {/* Eyebrow */}
              <p className="text-eyebrow">Accreditation &amp; Quality</p>

              {/* ISO badge card */}
              <div
                style={{
                  border:          "1px solid rgba(201,168,76,0.3)",
                  borderRadius:    8,
                  backgroundColor: "rgba(201,168,76,0.04)",
                  padding:         "2.25rem 2.5rem",
                  position:        "relative",
                  overflow:        "hidden",
                  width:           "100%",
                  maxWidth:        380,
                }}
              >
                {/* Subtle radial glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position:   "absolute",
                    inset:      0,
                    background: "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(201,168,76,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Shield icon */}
                <div
                  style={{
                    width:           52,
                    height:          52,
                    borderRadius:    10,
                    border:          "1px solid rgba(201,168,76,0.35)",
                    backgroundColor: "rgba(201,168,76,0.09)",
                    display:         "flex",
                    alignItems:      "center",
                    justifyContent:  "center",
                    marginBottom:    "1.5rem",
                  }}
                >
                  <ShieldCheck size={26} color="#C9A84C" />
                </div>

                {/* Standard */}
                <p
                  style={{
                    fontFamily:    "var(--font-cormorant)",
                    fontWeight:    700,
                    fontSize:      "clamp(2rem, 4vw, 2.75rem)",
                    color:         "#C9A84C",
                    lineHeight:    1,
                    letterSpacing: "-0.01em",
                    marginBottom:  "0.375rem",
                  }}
                >
                  {CERT.standard}
                </p>

                <p
                  style={{
                    fontFamily:    "var(--font-dm-sans)",
                    fontSize:      "0.75rem",
                    fontWeight:    500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:         "rgba(201,168,76,0.6)",
                    marginBottom:  "1.5rem",
                  }}
                >
                  {CERT.system}
                </p>

                {/* Gold rule */}
                <div
                  style={{
                    height:          1,
                    backgroundColor: "rgba(201,168,76,0.15)",
                    marginBottom:    "1.5rem",
                  }}
                />

                {/* Scope */}
                <p
                  style={{
                    fontFamily:  "var(--font-dm-sans)",
                    fontSize:    "0.8125rem",
                    color:       "#7A8FA6",
                    lineHeight:  1.75,
                    marginBottom:"1.75rem",
                  }}
                >
                  {CERT.scope}
                </p>

                {/* Verify link */}
                <a
                  href={CERT.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:           "0.375rem",
                    fontSize:      "0.7rem",
                    fontWeight:    500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:         "rgba(201,168,76,0.65)",
                    textDecoration:"none",
                    transition:    "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C9A84C")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(201,168,76,0.65)")}
                >
                  Verify Certificate
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — details */}
          <motion.div variants={motionVariants.fadeUp}>
            <h2
              style={{
                fontFamily:   "var(--font-cormorant)",
                fontStyle:    "italic",
                fontWeight:   600,
                fontSize:     "clamp(1.75rem, 3vw, 2.5rem)",
                color:        "#F5F0E8",
                lineHeight:   1.15,
                marginBottom: "1rem",
              }}
            >
              Certified for Quality.{" "}
              <span style={{ color: "#C9A84C" }}>Trusted by Standard.</span>
            </h2>

            <p
              style={{
                fontFamily:   "var(--font-dm-sans)",
                fontSize:     "clamp(0.875rem, 1.3vw, 0.9375rem)",
                color:        "#7A8FA6",
                lineHeight:   1.85,
                marginBottom: "2.5rem",
                maxWidth:     480,
              }}
            >
              Sapphire Juris LLP is ISO 9001:2015 certified — an internationally
              recognised standard for quality management systems. This accreditation
              reflects our commitment to delivering consistent, process-driven legal
              services that meet the highest professional benchmarks.
            </p>

            {/* Detail grid */}
            <div
              style={{
                display:             "grid",
                gridTemplateColumns: "1fr 1fr",
                gap:                 "1px",
                backgroundColor:     "rgba(201,168,76,0.08)",
                border:              "1px solid rgba(201,168,76,0.08)",
                borderRadius:        6,
                overflow:            "hidden",
              }}
            >
              {DETAILS.map((d, i) => (
                <div
                  key={d.label}
                  style={{
                    padding:         "1.125rem 1.25rem",
                    backgroundColor: "rgba(8,19,30,0.9)",
                    gridColumn:      i === DETAILS.length - 1 && DETAILS.length % 2 !== 0 ? "span 2" : undefined,
                  }}
                >
                  <p
                    style={{
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color:         "#4A5F78",
                      marginBottom:  "0.375rem",
                    }}
                  >
                    {d.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize:   "0.875rem",
                      color:      "#D4C5A0",
                      fontWeight: 500,
                    }}
                  >
                    {d.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
