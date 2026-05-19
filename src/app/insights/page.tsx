"use client";

import { motion } from "framer-motion";
import { motionVariants, viewportOptions } from "@/lib/utils";

export default function InsightsPage() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        padding: "clamp(8rem, 15vw, 12rem) clamp(1.5rem, 5vw, 5rem)",
        textAlign: "center",
      }}
    >
      <motion.div
        variants={motionVariants.staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: 560 }}
      >
        {/* Ornament */}
        <motion.div
          variants={motionVariants.fadeIn}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ width: 48, height: 1, backgroundColor: "rgba(201,168,76,0.35)", display: "block" }} />
          <span style={{ width: 6, height: 6, borderRadius: 1, backgroundColor: "#C9A84C", transform: "rotate(45deg)", flexShrink: 0 }} />
          <span style={{ width: 48, height: 1, backgroundColor: "rgba(201,168,76,0.35)", display: "block" }} />
        </motion.div>

        <motion.p
          variants={motionVariants.fadeUp}
          className="text-eyebrow"
          style={{ marginBottom: "1.25rem" }}
        >
          Insights &amp; Commentary
        </motion.p>

        <motion.h1
          variants={motionVariants.fadeUp}
          className="text-display-lg"
          style={{ fontStyle: "italic", color: "#F5F0E8", marginBottom: "1.5rem" }}
        >
          Coming{" "}
          <span style={{ color: "#C9A84C" }}>Soon.</span>
        </motion.h1>

        <motion.p
          variants={motionVariants.fadeUp}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontSize: "1.125rem",
            color: "#7A8FA6",
            lineHeight: 1.75,
          }}
        >
          Our advocates are preparing a series of legal insights, case commentaries,
          and practice guidance. This section will be available shortly.
        </motion.p>
      </motion.div>
    </section>
  );
}
