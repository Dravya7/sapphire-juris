"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/navbar/ui/Button";
import { cn, motionVariants } from "@/lib/utils";
import { navItems, practiceAreas, firmInfo } from "@/lib/design-tokens";

// ─────────────────────────────────────────────────────────
// Logo mark
// ─────────────────────────────────────────────────────────
function LogoMark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${firmInfo.name} — Home`}
      className={cn(
        "flex items-center gap-2.5 group shrink-0",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[#0D1B2A] rounded-sm",
        className
      )}
    >
      {/* Gold star badge */}
      <span
        aria-hidden="true"
        className="
          w-8 h-8 rounded-full
          bg-[#C9A84C] text-[#0D1B2A]
          flex items-center justify-center
          text-[13px] font-bold
          shrink-0
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        ★
      </span>
      {/* Brand name */}
      <span
        className="
          font-serif text-[#C9A84C]
          text-[1.05rem] font-semibold tracking-wide
          leading-none
          transition-colors duration-200
          group-hover:text-[#D4B96A]
        "
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        {firmInfo.name}
      </span>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────
// Search overlay
// ─────────────────────────────────────────────────────────
interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const searchCategories = ["People", "Expertise", "Insights"] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          className="
            fixed inset-0 z-[200]
            bg-[#0D1B2A]/[0.98]
            flex flex-col items-center justify-center
            px-6
          "
          variants={prefersReduced ? {} : motionVariants.overlayReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="
              absolute top-5 right-6
              text-[#C9A84C] text-2xl leading-none
              opacity-70 hover:opacity-100
              transition-opacity duration-150
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-[#C9A84C]
              rounded-sm
            "
          >
            ✕
          </button>

          {/* Search input */}
          <motion.div
            className="w-full max-w-[680px] mb-6"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <input
              ref={inputRef}
              type="search"
              placeholder="Search…"
              aria-label="Search the site"
              className="
                w-full h-14
                bg-[#132030]
                border border-[#C9A84C]
                rounded-[6px]
                px-5
                text-[#F5F0E8] placeholder-[#4A5F78]
                text-[1rem]
                font-sans
                focus:outline-none
                focus:border-[#D4B96A]
                transition-colors duration-200
              "
            />
          </motion.div>

          {/* Category tiles */}
          <motion.div
            className="flex gap-3 w-full max-w-[680px]"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {searchCategories.map((cat) => (
              <button
                key={cat}
                className="
                  flex-1 py-3
                  bg-[#132030]
                  border border-[rgba(201,168,76,0.18)]
                  rounded-[6px]
                  text-[#C9A84C]
                  font-sans text-[0.75rem] font-medium
                  tracking-[0.1em] uppercase
                  hover:border-[rgba(201,168,76,0.45)]
                  hover:bg-[#1A2B3C]
                  transition-colors duration-200
                "
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
// Mega Menu (Expertise dropdown)
// ─────────────────────────────────────────────────────────
interface MegaMenuProps {
  isOpen: boolean;
}

function MegaMenu({ isOpen }: MegaMenuProps) {
  const prefersReduced = useReducedMotion();

  const half = Math.ceil(practiceAreas.length / 2);
  const col1 = practiceAreas.slice(0, half);
  const col2 = practiceAreas.slice(half);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="region"
          aria-label="Expertise navigation"
          className="
            absolute top-full left-0 right-0
            bg-[#0D1B2A]
            border-t border-b border-[rgba(201,168,76,0.12)]
            shadow-[0_16px_48px_rgba(0,0,0,0.5)]
            z-[100]
          "
          variants={prefersReduced ? {} : motionVariants.megaMenuReveal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-[1280px] mx-auto px-[clamp(1.5rem,5vw,5rem)] py-8">
            <div className="grid grid-cols-[1fr_1fr_300px] gap-12">
              {/* Column 1 */}
              <div>
                <p className="text-eyebrow mb-5">Practice Areas</p>
                <ul className="space-y-1">
                  {col1.map((area) => (
                    <li key={area.label}>
                      <Link
                        href={area.href}
                        className="
                          group flex items-center gap-2
                          py-1.5 pr-2
                          text-[#D4C5A0] text-[0.875rem]
                          hover:text-[#C9A84C]
                          transition-colors duration-150
                          rounded-sm
                          focus-visible:outline-none
                          focus-visible:ring-1
                          focus-visible:ring-[#C9A84C]
                        "
                      >
                        <span
                          className="
                            block w-0 h-px bg-[#C9A84C]
                            transition-all duration-200
                            group-hover:w-3
                          "
                          aria-hidden="true"
                        />
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <p className="text-eyebrow mb-5 opacity-0 pointer-events-none" aria-hidden="true">
                  &nbsp;
                </p>
                <ul className="space-y-1">
                  {col2.map((area) => (
                    <li key={area.label}>
                      <Link
                        href={area.href}
                        className="
                          group flex items-center gap-2
                          py-1.5 pr-2
                          text-[#D4C5A0] text-[0.875rem]
                          hover:text-[#C9A84C]
                          transition-colors duration-150
                          rounded-sm
                          focus-visible:outline-none
                          focus-visible:ring-1
                          focus-visible:ring-[#C9A84C]
                        "
                      >
                        <span
                          className="
                            block w-0 h-px bg-[#C9A84C]
                            transition-all duration-200
                            group-hover:w-3
                          "
                          aria-hidden="true"
                        />
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Feature card */}
              <div
                className="
                  bg-[#132030]
                  border border-[rgba(201,168,76,0.18)]
                  rounded-[10px] p-5
                  flex flex-col justify-between
                "
              >
                <div>
                  <p className="text-eyebrow mb-3">Featured</p>
                  <p
                    className="text-[#F5F0E8] mb-2 leading-snug"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                    }}
                  >
                    Book a Consultation
                  </p>
                  <p className="text-[#7A8FA6] text-[0.8125rem] leading-relaxed">
                    Speak directly with our advocates about your legal matter.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="
                    mt-4 inline-flex items-center gap-1.5
                    text-[#C9A84C] text-[0.8125rem] font-medium
                    hover:gap-2.5 transition-all duration-200
                  "
                >
                  Get in touch
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
// Mobile Menu
// ─────────────────────────────────────────────────────────
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const prefersReduced = useReducedMotion();
  const [expertiseOpen, setExpertiseOpen] = useState(false);

useEffect(() => {
  document.body.style.overflow = isOpen ? "hidden" : "";

  if (!isOpen && expertiseOpen) {
    const timer = setTimeout(() => setExpertiseOpen(false), 0);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen, expertiseOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[90] bg-black/40"
            initial={prefersReduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="
              fixed top-0 right-0 bottom-0 z-[95]
              w-[min(380px,90vw)]
              bg-[#0D1B2A]
              border-l border-[rgba(201,168,76,0.14)]
              overflow-y-auto
              flex flex-col
            "
            initial={prefersReduced ? {} : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(201,168,76,0.1)]">
              <LogoMark />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="
                  text-[#7A8FA6] hover:text-[#C9A84C]
                  text-xl leading-none
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-[#C9A84C] rounded-sm p-1
                "
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="flex-1 px-6 py-6">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <li key={item.href}>
                    {("hasMegaMenu" in item && item.hasMegaMenu) ? (
                      <>
                        <button
                          onClick={() => setExpertiseOpen((p) => !p)}
                          className="
                            w-full flex items-center justify-between
                            py-3 px-0
                            text-[#D4C5A0] text-[1rem] font-medium
                            hover:text-[#C9A84C]
                            transition-colors duration-150
                            border-b border-[rgba(201,168,76,0.08)]
                          "
                        >
                          {item.label}
                          <span
                            className={cn(
                              "text-[#C9A84C] transition-transform duration-200",
                              expertiseOpen && "rotate-180"
                            )}
                          >
                            ▾
                          </span>
                        </button>
                        <AnimatePresence>
                          {expertiseOpen && (
                            <motion.ul
                              className="py-2 pl-3 space-y-1"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              {practiceAreas.map((area) => (
                                <li key={area.label}>
                                  <Link
                                    href={area.href}
                                    onClick={onClose}
                                    className="
                                      block py-1.5
                                      text-[#7A8FA6] text-[0.875rem]
                                      hover:text-[#C9A84C]
                                      transition-colors duration-150
                                    "
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
                        className={cn(
                          "block py-3 text-[1rem] font-medium",
                          "border-b border-[rgba(201,168,76,0.08)]",
                          "transition-colors duration-150",
                          currentPath === item.href
                            ? "text-[#C9A84C]"
                            : "text-[#D4C5A0] hover:text-[#C9A84C]"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-[rgba(201,168,76,0.1)]">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={onClose}
              >
                Book a Consultation
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────
// Hamburger icon
// ─────────────────────────────────────────────────────────
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span aria-hidden="true" className="flex flex-col justify-center items-end gap-[5px] w-5">
      <span
        className={cn(
          "block h-px bg-[#C9A84C] transition-all duration-300 origin-center",
          isOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5"
        )}
      />
      <span
        className={cn(
          "block h-px bg-[#C9A84C] transition-all duration-200",
          isOpen ? "opacity-0 w-0" : "opacity-100 w-3.5"
        )}
      />
      <span
        className={cn(
          "block h-px bg-[#C9A84C] transition-all duration-300 origin-center",
          isOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-4"
        )}
      />
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────────────────
export function Navbar() {
  const pathname          = usePathname();
  const [scrolled, setScrolled]         = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const megaMenuTimer                   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReduced                  = useReducedMotion();

  // Scroll detection — shrinks nav past 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    requestAnimationFrame(() => {
      setMegaMenuOpen(false);
      setMobileOpen(false);
    });
  }, [pathname]);

  // Keyboard: Escape closes everything
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaMenuOpen(false);
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const openMegaMenu = useCallback(() => {
    if (megaMenuTimer.current) clearTimeout(megaMenuTimer.current);
    setMegaMenuOpen(true);
  }, []);

  const closeMegaMenu = useCallback(() => {
    megaMenuTimer.current = setTimeout(() => setMegaMenuOpen(false), 120);
  }, []);

  const keepMegaMenu = useCallback(() => {
    if (megaMenuTimer.current) clearTimeout(megaMenuTimer.current);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[80]",
          "transition-all",
          prefersReduced ? "" : "duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          scrolled
            ? "h-14 bg-[#0D1B2A]/[0.97] backdrop-blur-md shadow-[0_1px_0_rgba(201,168,76,0.12)]"
            : "h-[60px] bg-[#0D1B2A]"
        )}
      >
        <div
          className="
            h-full
            max-w-[1280px] mx-auto
            px-[clamp(1.5rem,5vw,5rem)]
            flex items-center justify-between
            gap-8
          "
        >
          {/* Logo */}
          <LogoMark />

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navItems.map((item) =>
              ("hasMegaMenu" in item && item.hasMegaMenu) ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenu}
                >
                  <button
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                    className={cn(
                      "relative px-3.5 py-1.5",
                      "font-sans text-[0.875rem] font-medium",
                      "text-[#D4C5A0]",
                      "transition-colors duration-200",
                      "hover:text-[#C9A84C]",
                      "focus-visible:outline-none focus-visible:ring-2",
                      "focus-visible:ring-[#C9A84C] focus-visible:rounded-sm",
                      "flex items-center gap-1",
                      megaMenuOpen && "text-[#C9A84C]"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "text-[10px] transition-transform duration-200 text-[#C9A84C]",
                        megaMenuOpen && "rotate-180"
                      )}
                    >
                      ▾
                    </span>
                  </button>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative group px-3.5 py-1.5",
                    "font-sans text-[0.875rem] font-medium",
                    "transition-colors duration-200",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[#C9A84C] focus-visible:rounded-sm",
                    pathname === item.href
                      ? "text-[#C9A84C]"
                      : "text-[#D4C5A0] hover:text-[#C9A84C]"
                  )}
                >
                  {item.label}
                  {/* Underline indicator */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute bottom-0 left-3.5 right-3.5 h-px bg-[#C9A84C]",
                      "transition-all duration-200 origin-left",
                      pathname === item.href
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                    )}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Search — desktop */}
            <button
              aria-label="Open search"
              onClick={() => setSearchOpen(true)}
              className="
                hidden lg:flex
                items-center justify-center
                w-8 h-8
                text-[#7A8FA6] hover:text-[#C9A84C]
                transition-colors duration-200
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#C9A84C]
                rounded-sm
              "
            >
              <svg
                aria-hidden="true"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              >
                <circle cx="7.5" cy="7.5" r="5" />
                <path d="M13 13l-2.5-2.5" />
              </svg>
            </button>

            {/* CTA — desktop */}
            <Button
              href="/contact"
              variant="nav"
              size="sm"
              className="hidden lg:inline-flex"
            >
              Book a Consultation
            </Button>

            {/* Mobile hamburger */}
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((p) => !p)}
              className="
                lg:hidden
                flex items-center justify-center
                w-8 h-8
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-[#C9A84C]
                rounded-sm
              "
            >
              <HamburgerIcon isOpen={mobileOpen} />
            </button>
          </div>
        </div>

        {/* Mega menu — positioned below header */}
        <div
          onMouseEnter={keepMegaMenu}
          onMouseLeave={closeMegaMenu}
        >
          <MegaMenu isOpen={megaMenuOpen} />
        </div>
      </header>

      {/* Spacer — prevents content from hiding behind fixed nav */}
      <div
        aria-hidden="true"
        className={cn(
          "transition-all",
          prefersReduced ? "" : "duration-300",
          scrolled ? "h-14" : "h-[60px]"
        )}
      />

      {/* Search overlay */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile menu */}
      <div id="mobile-menu">
        <MobileMenu
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          currentPath={pathname}
        />
      </div>
    </>
  );
}

export default Navbar;
