"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { motionVariants, viewportOptions } from "@/lib/utils";
import { firmInfo } from "@/lib/design-tokens";

function Ornament() {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOptions.once}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOptions.once}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 60,
          height: 1,
          backgroundColor: "rgba(201,168,76,0.4)",
          transformOrigin: "right",
          display: "block",
        }}
      />
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: 1,
          backgroundColor: "#C9A84C",
          transform: "rotate(45deg)",
          flexShrink: 0,
        }}
      />
      <motion.span
        initial={prefersReduced ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOptions.once}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 60,
          height: 1,
          backgroundColor: "rgba(201,168,76,0.4)",
          transformOrigin: "left",
          display: "block",
        }}
      />
    </motion.div>
  );
}

export default function ContactCTA() {
  return (
    <section
      style={{
        backgroundColor: "#040D15",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        textAlign: "center",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Ornament />

        <motion.p
          variants={motionVariants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          className="text-eyebrow"
          style={{ marginBottom: "1.5rem" }}
        >
          Begin Your Matter
        </motion.p>

        <motion.h2
          variants={motionVariants.fadeUpDelay(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          className="text-display-xl"
          style={{ fontStyle: "italic", color: "#F5F0E8", marginBottom: "1.5rem" }}
        >
          Ready to Begin?{" "}
          <span style={{ color: "#C9A84C" }}>Let&rsquo;s Talk.</span>
        </motion.h2>

        <motion.p
          variants={motionVariants.fadeUpDelay(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            fontSize: "1rem",
            color: "#7A8FA6",
            lineHeight: 1.75,
            marginBottom: "3rem",
          }}
        >
          Schedule a confidential consultation with our advocates. We will review your
          matter carefully and advise you on the best path forward.
        </motion.p>

        <motion.div
          variants={motionVariants.fadeUpDelay(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact" className="btn-primary">
            Book a Consultation
          </Link>
          <Link
            href={`tel:${firmInfo.phone}`}
            className="btn-secondary"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            {firmInfo.phone}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
