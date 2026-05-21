"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { motionVariants, viewportOptions } from "@/lib/utils";

const GALLERY = [
  { src: "/images/hero-bg.jpg",               caption: "Courts of Justice",   span: 2 },
  { src: "/images/about-bg.jpg",              caption: "The Chambers",        span: 1 },
  { src: "/images/expertise-bg.jpg",          caption: "Scales of Justice",   span: 1 },
  { src: "/images/contact-bg.jpg",            caption: "Sapphire Juris LLP",  span: 1 },
  { src: "/images/people-bg.jpg",             caption: "The Boardroom",       span: 1 },
  { src: "/images/about-preview.jpg",         caption: "Lady Justice",        span: 1 },
  { src: "/images/founder-dr-saket-vyas.jpg", caption: "Dr. Saket Vyas",      span: 1 },
] as const;

export default function Testimonials() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#0D1B2A",
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
          style={{ marginBottom: "3.5rem" }}
        >
          <motion.p
            variants={motionVariants.fadeUp}
            className="text-eyebrow"
            style={{ marginBottom: "1rem" }}
          >
            The Firm in Focus
          </motion.p>

          <motion.h2
            variants={motionVariants.fadeUp}
            className="text-display-lg"
            style={{ fontStyle: "italic", color: "#F5F0E8", maxWidth: 600 }}
          >
            A Glimpse Into{" "}
            <span style={{ color: "#C9A84C" }}>Our World.</span>
          </motion.h2>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          variants={motionVariants.staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions.once}
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gridAutoRows:        "220px",
            gap:                 "0.875rem",
          }}
        >
          {GALLERY.map((item) => (
            <motion.div
              key={item.src}
              variants={motionVariants.staggerItem}
              onClick={() => setLightbox(item.src)}
              style={{
                gridRow:      item.span === 2 ? "span 2" : "span 1",
                position:     "relative",
                overflow:     "hidden",
                borderRadius: 6,
                border:       "1px solid rgba(201,168,76,0.1)",
                cursor:       "pointer",
              }}
              whileHover="hover"
            >
              {/* Image */}
              <motion.div
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position:           "absolute",
                  inset:              0,
                  backgroundImage:    `url('${item.src}')`,
                  backgroundSize:     "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Base overlay */}
              <div
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "rgba(4,13,21,0.3)",
                }}
              />

              {/* Hover gradient */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position:   "absolute",
                  inset:      0,
                  background: "linear-gradient(to top, rgba(4,13,21,0.85) 0%, rgba(4,13,21,0.1) 55%, transparent 100%)",
                }}
              />

              {/* Gold border on hover */}
              <motion.div
                variants={{ hover: { opacity: 1 } }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position:      "absolute",
                  inset:         0,
                  borderRadius:  6,
                  border:        "1px solid rgba(201,168,76,0.45)",
                  pointerEvents: "none",
                }}
              />

              {/* Caption */}
              <motion.p
                variants={{ hover: { opacity: 1, y: 0 } }}
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                style={{
                  position:      "absolute",
                  bottom:        "1rem",
                  left:          "1.125rem",
                  fontFamily:    "var(--font-cormorant)",
                  fontStyle:     "italic",
                  fontSize:      "0.9375rem",
                  color:         "#D4C5A0",
                  letterSpacing: "0.01em",
                  pointerEvents: "none",
                }}
              >
                {item.caption}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            style={{
              position:        "fixed",
              inset:           0,
              zIndex:          9000,
              backgroundColor: "rgba(4,13,21,0.96)",
              display:         "flex",
              alignItems:      "center",
              justifyContent:  "center",
              padding:         "clamp(1rem, 4vw, 3rem)",
              cursor:          "zoom-out",
            }}
          >
            <motion.img
              src={lightbox}
              alt=""
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth:     "90vw",
                maxHeight:    "85vh",
                objectFit:    "contain",
                borderRadius: 6,
                border:       "1px solid rgba(201,168,76,0.2)",
                cursor:       "default",
              }}
            />
            <button
              onClick={() => setLightbox(null)}
              style={{
                position:        "absolute",
                top:             "1.5rem",
                right:           "1.5rem",
                width:           40,
                height:          40,
                borderRadius:    "50%",
                border:          "1px solid rgba(201,168,76,0.3)",
                backgroundColor: "rgba(10,21,32,0.8)",
                color:           "#C9A84C",
                display:         "flex",
                alignItems:      "center",
                justifyContent:  "center",
                cursor:          "pointer",
              }}
            >
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
