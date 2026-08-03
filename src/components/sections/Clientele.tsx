"use client";

import { motion } from "framer-motion";
import { motionVariants, viewportOptions } from "@/lib/utils";

type Client = {
  name:        string;
  description: string;
  logo:        string; // path under /public
};

const CLIENTS: Client[] = [
  {
    name:        "Indore Institute of Law",
    description: "NAAC A+ accredited law college in Indore offering LLB, BBA LLB, and LLM programmes.",
    logo:        "/images/clients/indore-institute-of-law.png",
  },
  {
    name:        "Drushika Real Estate",
    description: "Real estate development and property advisory firm.",
    logo:        "/images/clients/drushika-real-estate.png",
  },
  {
    name:        "Crush Coffee",
    description: "Contemporary café chain serving coffee, shakes, and all-day dining.",
    logo:        "/images/clients/crush-coffee.png",
  },
  {
    name:        "Lokswami Official News",
    description: "Regional news and media publication.",
    logo:        "/images/clients/lokswami-news.png",
  },
  {
    name:        "World Book of Records, London",
    description: "International organisation documenting and certifying record-breaking achievements.",
    logo:        "/images/clients/world-book-of-records.png",
  },
  {
    name:        "Corporate Certifications & Services",
    description: "Corporate certification, compliance, and advisory services.",
    logo:        "/images/clients/corporate-certifications-services.png",
  },
  {
    name:        "H2O Plastifree Water",
    description: "Packaged drinking water brand focused on sustainable, plastic-free packaging.",
    logo:        "/images/clients/h2o-plastifree.png",
  },
  {
    name:        "Baheti Print World",
    description: "Commercial printing and print solutions provider.",
    logo:        "/images/clients/baheti-print-world.png",
  },
  {
    name:        "Puris Cars Coatings",
    description: "Premium car detailing and ceramic coating specialists.",
    logo:        "/images/clients/puris-cars-coatings.png",
  },
];

// Duplicated once so the marquee can loop seamlessly at -50%
const LOOP = [...CLIENTS, ...CLIENTS];

function ClientCard({ client }: { client: Client }) {
  return (
    <div
      className="group"
      style={{
        flex:            "0 0 auto",
        width:           "clamp(200px, 22vw, 260px)",
        border:          "1px solid rgba(201,168,76,0.1)",
        borderRadius:    6,
        backgroundColor: "rgba(13,27,42,0.5)",
        padding:         "1.75rem 1.5rem",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        textAlign:       "center",
        transition:      "border-color 0.25s, background-color 0.25s",
      }}
    >
      {/* Logo */}
      <div
        style={{
          height:         56,
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          marginBottom:   "1.25rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          style={{
            maxHeight:  "100%",
            maxWidth:   "100%",
            objectFit:  "contain",
            filter:     "grayscale(1) brightness(1.6) opacity(0.7)",
            transition: "filter 0.3s",
          }}
          className="group-hover:grayscale-0 group-hover:opacity-100"
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0) opacity(1)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) brightness(1.6) opacity(0.7)"; }}
        />
      </div>

      {/* Name */}
      <p
        style={{
          fontFamily:   "var(--font-dm-sans)",
          fontSize:     "0.8125rem",
          fontWeight:   600,
          color:        "#F5F0E8",
          marginBottom: "0.375rem",
          lineHeight:   1.3,
        }}
      >
        {client.name}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize:   "0.7rem",
          lineHeight: 1.6,
          color:      "rgba(122,143,166,0.85)",
        }}
      >
        {client.description}
      </p>
    </div>
  );
}

export default function Clientele() {
  return (
    <section
      aria-label="Our Clientele"
      style={{
        backgroundColor: "#08131E",
        borderTop:       "1px solid rgba(201,168,76,0.1)",
        borderBottom:    "1px solid rgba(201,168,76,0.1)",
        paddingBlock:    "clamp(4rem, 8vw, 6rem)",
        overflow:        "hidden",
      }}
    >
      {/* Heading */}
      <motion.div
        variants={motionVariants.fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions.once}
        style={{
          maxWidth:       1280,
          marginInline:   "auto",
          paddingInline:  "clamp(1.5rem, 5vw, 5rem)",
          textAlign:      "center",
          marginBottom:   "clamp(2.5rem, 5vw, 3.5rem)",
        }}
      >
        <p
          style={{
            fontFamily:    "var(--font-dm-sans)",
            fontSize:      "0.6875rem",
            fontWeight:    500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         "#C9A84C",
            marginBottom:  "1rem",
          }}
        >
          Trusted By
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant)",
            fontStyle:  "italic",
            fontWeight: 600,
            fontSize:   "clamp(1.75rem, 3.5vw, 2.75rem)",
            color:      "#F5F0E8",
            lineHeight: 1.15,
          }}
        >
          Our Clientele
        </h2>
      </motion.div>

      {/* Marquee */}
      <div
        style={{
          position:       "relative",
          maxWidth:       "100vw",
        }}
      >
        {/* Fade edges */}
        <div
          aria-hidden="true"
          style={{
            position:      "absolute",
            inset:         0,
            zIndex:        2,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, #08131E 0%, transparent 8%, transparent 92%, #08131E 100%)",
          }}
        />

        <div
          className="clientele-track"
          style={{
            display: "flex",
            gap:     "1.25rem",
            width:   "max-content",
          }}
        >
          {LOOP.map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}