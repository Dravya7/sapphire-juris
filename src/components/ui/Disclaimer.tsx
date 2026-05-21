"use client";

import { useState, useEffect } from "react";
import { LogoMark } from "@/components/ui/LogoMark";

const STORAGE_KEY = "sj-disclaimer-accepted";

export function Disclaimer() {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accepted = localStorage.getItem(STORAGE_KEY);
      if (!accepted) setVisible(true);
    }
  }, []);

  function proceed() {
    if (!checked) return;
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          9999,
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        padding:         "clamp(1rem, 4vw, 2rem)",
        backgroundColor: "rgba(4, 13, 21, 0.97)",
        backdropFilter:  "blur(6px)",
      }}
    >
      <div
        style={{
          width:           "100%",
          maxWidth:        740,
          backgroundColor: "#07111E",
          border:          "1px solid rgba(201,168,76,0.25)",
          borderRadius:    6,
          padding:         "clamp(2rem, 5vw, 3.5rem)",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "2rem" }}>
          <LogoMark size={38} />
          <span
            style={{
              fontFamily:    "var(--font-cormorant)",
              fontWeight:    700,
              fontSize:      "1.05rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color:         "#F5F0E8",
            }}
          >
            Sapphire Juris LLP
          </span>
        </div>

        {/* Gold rule */}
        <div
          aria-hidden="true"
          style={{
            height:          1,
            backgroundColor: "rgba(201,168,76,0.2)",
            marginBottom:    "2rem",
          }}
        />

        {/* Title */}
        <h1
          id="disclaimer-title"
          style={{
            fontFamily:    "var(--font-cormorant)",
            fontWeight:    600,
            fontSize:      "clamp(1.5rem, 3vw, 2rem)",
            color:         "#C9A84C",
            marginBottom:  "1.25rem",
            letterSpacing: "0.02em",
          }}
        >
          Disclaimer
        </h1>

        {/* Body */}
        <p
          style={{
            fontFamily:   "var(--font-dm-sans)",
            fontSize:     "clamp(0.8125rem, 1.2vw, 0.9rem)",
            color:        "rgba(122,143,166,0.9)",
            lineHeight:   1.85,
            marginBottom: "2rem",
          }}
        >
          The Bar Council of India does not permit advertisement or solicitation
          by advocates in any form or manner. By accessing this website,{" "}
          <span style={{ color: "#D4C5A0" }}>sapphirejuris.com</span>, you
          acknowledge and confirm that you are seeking information relating to{" "}
          <span style={{ color: "#D4C5A0" }}>Sapphire Juris LLP</span> of your
          own accord and that there has been no form of solicitation,
          advertisement or inducement by Sapphire Juris LLP or its members. The
          content of this website is for informational purposes only and should
          not be interpreted as soliciting or advertisement. No
          material/information provided on this website should be construed as
          legal advice. Sapphire Juris LLP shall not be liable for consequences
          of any action taken by relying on the material/information provided on
          this website. The contents of this website are the intellectual
          property of Sapphire Juris LLP.
        </p>

        {/* Checkbox */}
        <label
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "0.75rem",
            cursor:     "pointer",
            marginBottom: "1.75rem",
          }}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            style={{ width: 16, height: 16, cursor: "pointer", accentColor: "#C9A84C" }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize:   "0.875rem",
              color:      "#D4C5A0",
            }}
          >
            I accept the above.
          </span>
        </label>

        {/* CTA */}
        <button
          onClick={proceed}
          disabled={!checked}
          style={{
            fontFamily:      "var(--font-dm-sans)",
            fontSize:        "0.75rem",
            fontWeight:      500,
            letterSpacing:   "0.12em",
            textTransform:   "uppercase",
            padding:         "0.875rem 2.25rem",
            border:          "1px solid",
            borderColor:     checked ? "#C9A84C" : "rgba(201,168,76,0.25)",
            backgroundColor: checked ? "#C9A84C" : "transparent",
            color:           checked ? "#0D1B2A" : "rgba(201,168,76,0.35)",
            borderRadius:    3,
            cursor:          checked ? "pointer" : "not-allowed",
            transition:      "background-color 0.2s, color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => { if (checked) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#B8962E"; }}
          onMouseLeave={(e) => { if (checked) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C9A84C"; }}
        >
          Proceed to Website
        </button>
      </div>
    </div>
  );
}
