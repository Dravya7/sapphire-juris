"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

function GoldOrnament() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-3 mb-10"
    >
      <div
        style={{
          width:           "2rem",
          height:          1,
          backgroundColor: "rgba(201,168,76,0.4)",
        }}
      />
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="rgba(201,168,76,0.55)"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="0.5"
          y="0.5"
          width="6"
          height="6"
          transform="rotate(45 3.5 3.5)"
        />
      </svg>
      <div
        style={{
          width:           "2rem",
          height:          1,
          backgroundColor: "rgba(201,168,76,0.4)",
        }}
      />
    </div>
  );
}

export default function AboutPreview() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial:   reduced ? {} : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport:  { once: true, amount: 0.2 },
    transition: {
      duration: 0.75,
      delay,
      ease: EXPO,
    },
  });

  return (
    <section
      aria-label="About Sapphire Juris"
      style={{
        backgroundColor: "#0D1B2A",
        paddingBlock:    "clamp(5rem, 10vw, 9rem)",
      }}
    >
      <div
        style={{
          maxWidth:      1280,
          marginInline:  "auto",
          paddingInline: "clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        {/* Two-column grid */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap:                 "clamp(3rem, 6vw, 7rem)",
          }}
        >

          {/* ── Left — text ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0)}
              style={{
                fontFamily:    "var(--font-dm-sans)",
                fontSize:      "0.6875rem",
                fontWeight:    500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "#C9A84C",
                marginBottom:  "1.75rem",
              }}
            >
              About The Firm
            </motion.p>

            {/* Heading */}
            <motion.h2
              {...fadeUp(0.1)}
              style={{
                fontFamily:    "var(--font-cormorant)",
                fontStyle:     "italic",
                fontWeight:    600,
                fontSize:      "clamp(2rem, 4vw, 3.25rem)",
                lineHeight:    1.1,
                letterSpacing: "-0.01em",
                color:         "#F5F0E8",
                marginBottom:  "2rem",
              }}
            >
              Built on Principle.{" "}
              <span style={{ color: "#C9A84C" }}>
                Defined by Precision.
              </span>
            </motion.h2>

            {/* Gold ornament */}
            <motion.div {...fadeUp(0.18)}>
              <GoldOrnament />
            </motion.div>

            {/* Body — paragraph 1 */}
            <motion.p
              {...fadeUp(0.22)}
              style={{
                fontFamily:   "var(--font-dm-sans)",
                fontSize:     "clamp(0.875rem, 1.3vw, 0.9375rem)",
                lineHeight:   1.85,
                color:        "rgba(122,143,166,0.95)",
                marginBottom: "1.25rem",
              }}
            >
              Sapphire Juris is a boutique law firm headquartered in Indore,
              Madhya Pradesh — founded on the conviction that exceptional legal
              counsel begins with integrity, not volume. We serve individuals,
              businesses, and institutions who demand discretion, rigour, and
              outcomes.
            </motion.p>

            {/* Body — paragraph 2 */}
            <motion.p
              {...fadeUp(0.28)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize:   "clamp(0.875rem, 1.3vw, 0.9375rem)",
                lineHeight: 1.85,
                color:      "rgba(122,143,166,0.85)",
              }}
            >
              Our practice spans civil litigation, corporate advisory, criminal
              defence, and constitutional matters. Every mandate is approached
              with the same standard: principled advocacy, strategic precision,
              and an unwavering commitment to our client&apos;s interests.
            </motion.p>

            {/* Divider */}
            <motion.div
              {...fadeUp(0.34)}
              aria-hidden="true"
              style={{
                height:          1,
                backgroundColor: "rgba(201,168,76,0.1)",
                marginBlock:     "2.25rem",
              }}
            />

            {/* Learn more link */}
            <motion.div {...fadeUp(0.38)}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] rounded-sm"
                style={{
                  fontFamily:    "var(--font-dm-sans)",
                  fontSize:      "0.72rem",
                  fontWeight:    500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color:         "rgba(201,168,76,0.7)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(201,168,76,0.7)"; }}
              >
                <span>Our Story</span>
                {/* Line */}
                <span
                  aria-hidden="true"
                  className="block h-px transition-all duration-300 group-hover:w-8"
                  style={{
                    width:           "1.5rem",
                    backgroundColor: "rgba(201,168,76,0.5)",
                    flexShrink:      0,
                  }}
                />
                {/* Arrow */}
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* ── Right — image ── */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: 0.2, ease: EXPO }}
            className="relative"
            style={{ aspectRatio: "4 / 5" }}
          >
            {/* Main image */}
            <div
              className="absolute inset-0 rounded-sm overflow-hidden"
              style={{
                backgroundImage:    "url('/images/about-preview.jpg')",
                backgroundSize:     "cover",
                backgroundPosition: "center",
                backgroundColor:    "#0A1825",
              }}
            >
              {/* Overlay — darkens image for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,19,30,0.65) 0%, rgba(8,19,30,0.1) 60%, transparent 100%)",
                }}
              />
            </div>

            {/* Offset border frame — editorial detail */}
            <div
              aria-hidden="true"
              className="absolute rounded-sm pointer-events-none"
              style={{
                inset:       "-10px -10px 10px 10px",
                border:      "1px solid rgba(201,168,76,0.14)",
                zIndex:      -1,
              }}
            />

            {/* Est. badge — bottom left of image */}
            <div
              className="absolute bottom-6 left-6"
              style={{
                backgroundColor: "rgba(8,19,30,0.85)",
                border:          "1px solid rgba(201,168,76,0.2)",
                borderRadius:    "2px",
                padding:         "0.6rem 0.9rem",
              }}
            >
              <p
                style={{
                  fontFamily:    "var(--font-dm-sans)",
                  fontSize:      "0.55rem",
                  fontWeight:    500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color:         "rgba(201,168,76,0.55)",
                  marginBottom:  "0.2rem",
                }}
              >
                Established
              </p>
              <p
                style={{
                  fontFamily:  "var(--font-cormorant)",
                  fontSize:    "1.5rem",
                  fontWeight:  600,
                  color:       "#C9A84C",
                  lineHeight:  1,
                }}
              >
                2024
              </p>
            </div>

            {/* Tagline — bottom right of image */}
            <div
              className="absolute bottom-6 right-6 text-right"
              style={{ maxWidth: "10rem" }}
            >
              <p
                style={{
                  fontFamily:  "var(--font-cormorant)",
                  fontStyle:   "italic",
                  fontSize:    "0.9375rem",
                  color:       "rgba(245,240,232,0.75)",
                  lineHeight:  1.4,
                }}
              >
                Where Law Meets Integrity.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom stats strip ── */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EXPO }}
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap:                 "2px",
            marginTop:           "clamp(4rem, 7vw, 6rem)",
            borderTop:           "1px solid rgba(201,168,76,0.08)",
            paddingTop:          "clamp(3rem, 5vw, 4rem)",
          }}
        >
          {[
            { number: "500+",  label: "Cases Handled"       },
            { number: "98%",   label: "Client Satisfaction" },
            { number: "10+",   label: "Years of Practice"   },
            { number: "15+",   label: "Practice Areas"      },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col"
              style={{
                paddingInline: "clamp(1rem, 2vw, 2rem)",
                paddingBlock:  "1rem",
                borderLeft:    i > 0 ? "1px solid rgba(201,168,76,0.08)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily:    "var(--font-cormorant)",
                  fontSize:      "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight:    600,
                  color:         "#C9A84C",
                  lineHeight:    1,
                  marginBottom:  "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily:    "var(--font-dm-sans)",
                  fontSize:      "0.6875rem",
                  fontWeight:    400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color:         "rgba(122,143,166,0.8)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Founder's Note ── */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EXPO }}
          style={{
            marginTop:       "clamp(4rem, 7vw, 6rem)",
            border:          "1px solid rgba(201,168,76,0.12)",
            borderRadius:    "4px",
            backgroundColor: "rgba(10,21,32,0.55)",
            overflow:        "hidden",
          }}
        >
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            }}
          >
            {/* Founder portrait */}
            <div
              style={{
                position:    "relative",
                minHeight:   "clamp(320px, 45vw, 520px)",
                borderRight: "1px solid rgba(201,168,76,0.08)",
                overflow:    "hidden",
              }}
            >
              <div
                style={{
                  position:           "absolute",
                  inset:              0,
                  backgroundImage:    "url('/images/founder-dr-saket-vyas.jpg')",
                  backgroundSize:     "cover",
                  backgroundPosition: "center top",
                }}
              />
              {/* Subtle bottom gradient for blending */}
              <div
                aria-hidden="true"
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to top, rgba(7,17,30,0.45) 0%, transparent 55%)",
                }}
              />
            </div>

            {/* Note content */}
            <div style={{ padding: "clamp(2rem, 4vw, 3.5rem)" }}>
              {/* Eyebrow */}
              <p
                style={{
                  fontFamily:    "var(--font-dm-sans)",
                  fontSize:      "0.6rem",
                  fontWeight:    500,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color:         "#C9A84C",
                  marginBottom:  "1rem",
                }}
              >
                From The Founder
              </p>

              {/* Heading */}
              <h3
                style={{
                  fontFamily:    "var(--font-cormorant)",
                  fontWeight:    600,
                  fontSize:      "clamp(1.5rem, 2.5vw, 2rem)",
                  color:         "#F5F0E8",
                  lineHeight:    1.15,
                  marginBottom:  "0.75rem",
                }}
              >
                A Note from the Founder
              </h3>

              {/* Gold accent line */}
              <div
                style={{
                  width:           "3rem",
                  height:          2,
                  backgroundColor: "#C9A84C",
                  marginBottom:    "1.75rem",
                }}
              />

              <p
                style={{
                  fontFamily:   "var(--font-dm-sans)",
                  fontSize:     "clamp(0.875rem, 1.2vw, 0.9375rem)",
                  lineHeight:   1.85,
                  color:        "rgba(122,143,166,0.9)",
                  marginBottom: "1.25rem",
                }}
              >
                At SAPPHIRE JURIS – Advocates &amp; Legal Consultants, we believe
                that law is not merely about litigation — it is about trust,
                responsibility, and delivering meaningful solutions with integrity.
              </p>
              <p
                style={{
                  fontFamily:   "var(--font-dm-sans)",
                  fontSize:     "clamp(0.875rem, 1.2vw, 0.9375rem)",
                  lineHeight:   1.85,
                  color:        "rgba(122,143,166,0.82)",
                  marginBottom: "1.25rem",
                }}
              >
                Our firm is founded on the principles of professionalism, ethical
                advocacy, and client-centric service. With a commitment to excellence,
                we strive to provide strategic and effective legal guidance across
                diverse areas of practice while maintaining the highest standards of
                fairness and dedication.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize:   "clamp(0.875rem, 1.2vw, 0.9375rem)",
                  lineHeight: 1.85,
                  color:      "rgba(122,143,166,0.75)",
                }}
              >
                At Sapphire Juris, we combine legal insight with a modern approach
                to ensure that every client receives clear, practical, and
                result-oriented representation. As the legal landscape evolves, our
                commitment to justice, integrity, and excellence remains unwavering.
                We look forward to serving you with trust and dedication.
              </p>

              {/* Signature block */}
              <div
                style={{
                  marginTop:   "2rem",
                  paddingTop:  "1.5rem",
                  borderTop:   "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily:    "var(--font-cormorant)",
                    fontSize:      "1.375rem",
                    fontWeight:    500,
                    color:         "#D4C5A0",
                    lineHeight:    1.2,
                    marginBottom:  "0.25rem",
                  }}
                >
                  Dr. Saket Vyas
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-dm-sans)",
                    fontSize:      "0.6875rem",
                    fontWeight:    400,
                    color:         "rgba(201,168,76,0.7)",
                    marginBottom:  "0.25rem",
                  }}
                >
                  LLB, LLM &amp; Ph.D (Law)
                </p>
                <p
                  style={{
                    fontFamily:    "var(--font-dm-sans)",
                    fontSize:      "0.6rem",
                    fontWeight:    400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color:         "rgba(201,168,76,0.4)",
                  }}
                >
                  Founder &amp; Mentor — Sapphire Juris
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}