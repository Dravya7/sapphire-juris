"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { navItems, practiceAreas } from "@/lib/design-tokens";
import { LogoMark } from "@/components/ui/LogoMark";

const EXPO = [0.16, 1, 0.3, 1] as const;
const EASE = [0.25, 0.1, 0.25, 1] as const;

// ─────────────────────────────────────────────────────────
// Logo — shield mark + wordmark + divider + subtitle
// ─────────────────────────────────────────────────────────
function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Sapphire Juris — Home"
      style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
      className="shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] focus-visible:rounded-sm"
    >
      <div style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)", transform: compact ? "scale(0.85)" : "scale(1)" }}>
        <LogoMark size={compact ? 34 : 42} />
      </div>

      {/* Wordmark */}
      <span
        style={{
          fontFamily:    "var(--font-cormorant)",
          fontWeight:    700,
          fontSize:      compact ? "1.05rem" : "1.2rem",
          lineHeight:    1,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color:         "#F5F0E8",
          whiteSpace:    "nowrap",
          transition:    "font-size 0.35s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      >
        Sapphire Juris
      </span>

      {/* Vertical divider — hidden on small mobile */}
      <span
        aria-hidden="true"
        className="hidden sm:block"
        style={{
          width:           1,
          height:          compact ? 24 : 30,
          backgroundColor: "rgba(201,168,76,0.3)",
          flexShrink:      0,
          transition:      "height 0.35s",
        }}
      />

      {/* Subtitle — hidden on small mobile */}
      <span
        className="hidden sm:block"
        style={{
          fontFamily:    "var(--font-dm-sans)",
          fontWeight:    400,
          fontSize:      "0.44rem",
          lineHeight:    1.5,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color:         "rgba(201,168,76,0.65)",
          maxWidth:      72,
          maxHeight:     compact ? 0 : "2.5rem",
          opacity:       compact ? 0 : 1,
          overflow:      "hidden",
          transition:    "max-height 0.35s cubic-bezier(0.25,0.1,0.25,1), opacity 0.25s",
        }}
      >
        Advocates &amp;<br />Legal Consultants
      </span>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────
// Search overlay
// ─────────────────────────────────────────────────────────
function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center px-6"
          style={{ backgroundColor: "rgba(6,14,24,0.97)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={onClose}
            aria-label="Close search"
            className="absolute top-6 right-7 transition-opacity duration-150 opacity-50 hover:opacity-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] rounded-sm"
            style={{ color: "#C9A84C" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
              <path d="M2 2l14 14M16 2L2 16" />
            </svg>
          </button>
          <motion.p
            className="mb-6 tracking-[0.16em] uppercase"
            style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.625rem", color: "rgba(201,168,76,0.55)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.35, ease: [...EXPO] }}
          >
            Search
          </motion.p>
          <motion.div
            className="w-full"
            style={{ maxWidth: 640 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [...EXPO] }}
          >
            <input
              ref={inputRef}
              type="search"
              placeholder="Type to search…"
              aria-label="Search the site"
              className="w-full focus:outline-none bg-transparent"
              style={{
                fontFamily:   "var(--font-cormorant)",
                fontStyle:    "italic",
                fontSize:     "clamp(1.5rem, 3vw, 2.25rem)",
                color:        "#F5F0E8",
                borderBottom: "1px solid rgba(201,168,76,0.3)",
                padding:      "0.5rem 0 0.875rem",
                caretColor:   "#C9A84C",
              }}
            />
          </motion.div>
          <motion.div
            className="flex gap-6 mt-8 w-full"
            style={{ maxWidth: 640 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [...EASE] }}
          >
            {(["People", "Expertise", "Insights"] as const).map((cat) => (
              <button
                key={cat}
                className="transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-dm-sans)", fontSize: "0.6875rem", fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "rgba(201,168,76,0.45)", padding: 0, background: "none", border: "none", cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(201,168,76,0.45)"; }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────
// Mega menu
// ─────────────────────────────────────────────────────────
function MegaMenu({ isOpen }: { isOpen: boolean }) {
  const half = Math.ceil(practiceAreas.length / 2);
  const col1 = practiceAreas.slice(0, half);
  const col2 = practiceAreas.slice(half);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="region"
          aria-label="Expertise"
          className="absolute top-full left-0 right-0 z-[100]"
          style={{
            backgroundColor: "#071422",
            borderBottom: "1px solid rgba(201,168,76,0.1)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
          }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [...EASE] }}
        >
          <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.08)" }} />
          <div className="max-w-[1280px] mx-auto" style={{ padding: "2.5rem clamp(1.5rem,5vw,5rem) 3rem" }}>
            <div className="grid gap-16" style={{ gridTemplateColumns: "1fr 1fr 260px" }}>
              <div>
                <p className="mb-5" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>
                  Practice Areas
                </p>
                <ul className="space-y-0.5">
                  {col1.map((area) => (
                    <li key={area.label}>
                      <Link
                        href={area.href}
                        className="group flex items-center gap-0 py-[0.4rem] transition-colors duration-150"
                        style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8125rem", color: "rgba(212,197,160,0.65)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#D4C5A0"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212,197,160,0.65)"; }}
                      >
                        <span
                          className="block h-px bg-[#C9A84C] mr-0 transition-all duration-200"
                          style={{ width: 0, flexShrink: 0 }}
                          ref={(el) => {
                            if (el) {
                              el.parentElement?.addEventListener("mouseenter", () => { el.style.width = "14px"; el.style.marginRight = "10px"; });
                              el.parentElement?.addEventListener("mouseleave", () => { el.style.width = "0"; el.style.marginRight = "0"; });
                            }
                          }}
                        />
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-5 invisible" aria-hidden="true" style={{ fontSize: "0.6rem" }}>_</p>
                <ul className="space-y-0.5">
                  {col2.map((area) => (
                    <li key={area.label}>
                      <Link
                        href={area.href}
                        className="group flex items-center py-[0.4rem] transition-colors duration-150"
                        style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8125rem", color: "rgba(212,197,160,0.65)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#D4C5A0"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212,197,160,0.65)"; }}
                      >
                        <span
                          className="block h-px bg-[#C9A84C] mr-0 transition-all duration-200"
                          style={{ width: 0, flexShrink: 0 }}
                          ref={(el) => {
                            if (el) {
                              el.parentElement?.addEventListener("mouseenter", () => { el.style.width = "14px"; el.style.marginRight = "10px"; });
                              el.parentElement?.addEventListener("mouseleave", () => { el.style.width = "0"; el.style.marginRight = "0"; });
                            }
                          }}
                        />
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderLeft: "1px solid rgba(201,168,76,0.1)", paddingLeft: "2rem" }} className="flex flex-col justify-between">
                <div>
                  <p className="mb-4" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(201,168,76,0.5)" }}>
                    Get Started
                  </p>
                  <p className="mb-3 leading-snug" style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.25rem", fontWeight: 500, color: "#F5F0E8" }}>
                    Begin with a consultation.
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.8rem", lineHeight: 1.7, color: "rgba(122,143,166,0.9)" }}>
                    Speak directly with our advocates about your matter.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 transition-all duration-200 group"
                  style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9A84C" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#D4B96A"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                >
                  Book a Consultation
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <path d="M2 7h10M7 2l5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────
// Mobile menu
// ─────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onClose, currentPath }: { isOpen: boolean; onClose: () => void; currentPath: string }) {
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) requestAnimationFrame(() => setExpertiseOpen(false));
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[90]"
            style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(2px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed top-0 right-0 bottom-0 z-[95] flex flex-col overflow-y-auto md:hidden"
            style={{ width: "min(340px, 88vw)", backgroundColor: "#07111E", borderLeft: "1px solid rgba(201,168,76,0.12)" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [...EXPO] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between shrink-0" style={{ padding: "1.375rem 1.75rem", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              <Logo />
              <button
                onClick={onClose}
                aria-label="Close menu"
                style={{ color: "rgba(201,168,76,0.6)", padding: "6px" }}
                className="transition-colors duration-150 hover:text-[#C9A84C] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] rounded-sm"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 3l12 12M15 3L3 15" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav aria-label="Mobile navigation" className="flex-1" style={{ padding: "1.5rem 1.75rem" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {navItems.map((item) => (
                  <li key={item.href} style={{ borderBottom: "1px solid rgba(201,168,76,0.06)" }}>
                    {"hasMegaMenu" in item && item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => setExpertiseOpen((p) => !p)}
                          className="w-full flex items-center justify-between transition-colors duration-150"
                          style={{
                            fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", letterSpacing: "0.01em",
                            color: expertiseOpen ? "#C9A84C" : "#D4C5A0",
                            background: "none", border: "none", cursor: "pointer", textAlign: "left",
                            padding: "1rem 0",
                          }}
                        >
                          {item.label}
                          <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor"
                            strokeWidth="1.3" strokeLinecap="round"
                            style={{ color: "rgba(201,168,76,0.6)", transition: "transform 0.2s", transform: expertiseOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                          >
                            <path d="M2 3.5l3 3 3-3" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {expertiseOpen && (
                            <motion.ul
                              style={{ listStyle: "none", padding: "0 0 0.75rem 0.75rem", margin: 0, overflow: "hidden" }}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.24 }}
                            >
                              {practiceAreas.map((area) => (
                                <li key={area.label}>
                                  <Link
                                    href={area.href}
                                    onClick={onClose}
                                    style={{ display: "block", padding: "0.5rem 0", fontFamily: "var(--font-dm-sans)", fontSize: "0.8125rem", color: "rgba(122,143,166,0.85)" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(122,143,166,0.85)"; }}
                                  >
                                    {area.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        style={{
                          display: "block", padding: "1rem 0",
                          fontFamily: "var(--font-dm-sans)", fontSize: "0.875rem", letterSpacing: "0.01em",
                          color: currentPath === item.href ? "#C9A84C" : "#D4C5A0",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                        onMouseLeave={(e) => { if (currentPath !== item.href) e.currentTarget.style.color = "#D4C5A0"; }}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="shrink-0" style={{ padding: "1.25rem 1.75rem", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center w-full transition-all duration-200"
                style={{
                  backgroundColor: "#C9A84C", color: "#0D1B2A",
                  fontFamily: "var(--font-dm-sans)", fontSize: "0.75rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "0.9rem 1.5rem", borderRadius: "3px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#B8962E"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C9A84C"; }}
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────
// Hamburger
// ─────────────────────────────────────────────────────────
function Hamburger({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", width: 22 }}>
      <span
        style={{
          display: "block", height: 1, width: 22,
          backgroundColor: "#C9A84C", opacity: open ? 1 : 0.75,
          transform: open ? "translateY(6px) rotate(45deg)" : "none",
          transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
          transformOrigin: "center",
        }}
      />
      <span
        style={{
          display: "block", height: 1, width: 15,
          backgroundColor: "#C9A84C",
          opacity: open ? 0 : 0.5,
          transform: open ? "scaleX(0)" : "scaleX(1)",
          transition: "opacity 0.18s, transform 0.18s",
        }}
      />
      <span
        style={{
          display: "block", height: 1, width: 22,
          backgroundColor: "#C9A84C", opacity: open ? 1 : 0.75,
          transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
          transition: "transform 0.28s cubic-bezier(0.16,1,0.3,1), opacity 0.2s",
          transformOrigin: "center",
        }}
      />
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// Navbar
// ─────────────────────────────────────────────────────────
export function Navbar() {
  const pathname                    = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [megaOpen, setMegaOpen]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timer                       = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => { setMegaOpen(false); setMobileOpen(false); });
  }, [pathname]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMegaOpen(false); setSearchOpen(false); setMobileOpen(false); }
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, []);

  const openMega  = useCallback(() => { if (timer.current) clearTimeout(timer.current); setMegaOpen(true); }, []);
  const closeMega = useCallback(() => { timer.current = setTimeout(() => setMegaOpen(false), 120); }, []);
  const keepMega  = useCallback(() => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <>
      <header
        className={cn("fixed top-0 inset-x-0 z-[80]")}
        style={{
          backgroundColor: scrolled ? "rgba(7,17,30,0.97)" : "#0A1520",
          height:          scrolled ? "62px" : "76px",
          borderBottom:    "1px solid rgba(201,168,76,0.08)",
          backdropFilter:  scrolled ? "blur(12px)" : "none",
          transition:      "height 0.38s cubic-bezier(0.25,0.1,0.25,1), background-color 0.38s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      >
        <div
          className="h-full w-full flex items-center justify-between"
          style={{ paddingInline: "clamp(1rem, 2.5vw, 2.5rem)", gap: "1.5rem" }}
        >
          <Logo compact={scrolled} />

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center" style={{ gap: "0" }}>
            {navItems.map((item) =>
              "hasMegaMenu" in item && item.hasMegaMenu ? (
                <div key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] focus-visible:rounded-sm transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-dm-sans)", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em",
                      color: megaOpen ? "#C9A84C" : "rgba(240,235,225,0.82)",
                      padding: "0.5rem 1rem", background: "none", border: "none", cursor: "pointer",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; }}
                    onMouseLeave={(e) => { if (!megaOpen) e.currentTarget.style.color = "rgba(240,235,225,0.82)"; }}
                  >
                    {item.label}
                    <svg aria-hidden="true" width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"
                      style={{ opacity: 0.55, transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                      <path d="M1.5 3l3 3 3-3" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] focus-visible:rounded-sm transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-dm-sans)", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em",
                    color: pathname === item.href ? "#C9A84C" : "rgba(240,235,225,0.82)",
                    padding: "0.5rem 1rem", display: "block",
                  }}
                  onMouseEnter={(e) => { if (pathname !== item.href) e.currentTarget.style.color = "#C9A84C"; }}
                  onMouseLeave={(e) => { if (pathname !== item.href) e.currentTarget.style.color = "rgba(240,235,225,0.82)"; }}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-[1rem] right-[1rem] transition-all duration-200 origin-left"
                    style={{
                      height: 1, backgroundColor: "#C9A84C",
                      opacity: pathname === item.href ? 0.55 : 0,
                      transform: pathname === item.href ? "scaleX(1)" : "scaleX(0)",
                    }}
                    ref={(el) => {
                      if (el) {
                        const link = el.parentElement;
                        if (!link || pathname === item.href) return;
                        link.addEventListener("mouseenter", () => { el.style.opacity = "0.4"; el.style.transform = "scaleX(1)"; });
                        link.addEventListener("mouseleave", () => { el.style.opacity = "0"; el.style.transform = "scaleX(0)"; });
                      }
                    }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center" style={{ gap: "0", flexShrink: 0 }}>
            {/* Book a Consultation — bordered box */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C]"
              style={{
                fontFamily:   "var(--font-dm-sans)",
                fontSize:     "0.7rem",
                fontWeight:   500,
                letterSpacing:"0.1em",
                textTransform:"uppercase",
                color:        "#C9A84C",
                border:       "1px solid rgba(201,168,76,0.55)",
                padding:      "0.65rem 1.4rem",
                whiteSpace:   "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.08)";
                e.currentTarget.style.borderColor = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.55)";
              }}
            >
              Book a Consultation
            </Link>

            {/* Hamburger box — mobile only */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
              className="md:hidden flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A84C] transition-colors duration-150"
              style={{
                border:          "1px solid rgba(201,168,76,0.55)",
                padding:         "0.625rem 0.875rem",
                backgroundColor: mobileOpen ? "rgba(201,168,76,0.08)" : "transparent",
              }}
            >
              <Hamburger open={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div onMouseEnter={keepMega} onMouseLeave={closeMega}>
          <MegaMenu isOpen={megaOpen} />
        </div>
      </header>

      {/* Layout spacer */}
      <div
        aria-hidden="true"
        style={{ height: scrolled ? 62 : 76, transition: "height 0.38s cubic-bezier(0.25,0.1,0.25,1)" }}
      />

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      {mobileOpen && (
        <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} currentPath={pathname} />
      )}
    </>
  );
}

export default Navbar;
