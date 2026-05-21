"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { firmInfo } from "@/lib/design-tokens";
import { PageHero } from "@/components/ui/PageHero";
import { motionVariants, viewportOptions } from "@/lib/utils";

interface FormState {
  name:    string;
  email:   string;
  phone:   string;
  matter:  string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", phone: "", matter: "", message: "" };

const MATTERS = [
  "Civil Litigation",
  "Criminal Defense",
  "Corporate & M&A",
  "Family Law",
  "Real Estate",
  "Intellectual Property",
  "Constitutional Law",
  "Arbitration & ADR",
  "Employment & Labour",
  "Banking & Finance",
  "Data Privacy",
  "Regulatory & Compliance",
  "Other",
] as const;

const CONTACT_ITEMS = [
  { icon: Phone,  label: "Phone",        value: firmInfo.phone,       href: `tel:${firmInfo.phone}` },
  { icon: Mail,   label: "Email",        value: firmInfo.email,       href: `mailto:${firmInfo.email}` },
  { icon: MapPin, label: "Office",       value: firmInfo.address,     href: undefined },
  { icon: Clock,  label: "Office Hours", value: firmInfo.officeHours, href: undefined },
] as const;

const inputStyle = {
  width: "100%",
  padding: "0.875rem 1rem",
  backgroundColor: "rgba(10,21,32,0.8)",
  border: "1px solid rgba(201,168,76,0.18)",
  borderRadius: 6,
  color: "#F5F0E8",
  fontSize: "0.9rem",
  outline: "none",
  fontFamily: "var(--font-dm-sans)",
  transition: "border-color 0.2s",
} as const;

const labelStyle = {
  display: "block",
  fontSize: "0.75rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#4A5F78",
  marginBottom: "0.5rem",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const getInputStyle = (field: string) => ({
    ...inputStyle,
    borderColor: focusedField === field ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.18)",
  });

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        heading={<>Begin Your Matter.{" "}<span style={{ color: "#C9A84C" }}>Let&rsquo;s Talk.</span></>}
        image="/images/contact-bg.jpg"
        brightness={0.18}
      />
      {/* Main content */}
      <section
        style={{
          backgroundColor: "#0D1B2A",
          padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "start",
          }}
        >
          {/* Contact info */}
          <motion.div
            variants={motionVariants.staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
          >
            <motion.p
              variants={motionVariants.fadeUp}
              className="text-eyebrow"
              style={{ marginBottom: "1rem" }}
            >
              Get in Touch
            </motion.p>
            <motion.h2
              variants={motionVariants.fadeUp}
              className="text-display-md"
              style={{ fontStyle: "italic", color: "#F5F0E8", marginBottom: "1.25rem" }}
            >
              We are available to discuss your matter.
            </motion.h2>
            <motion.p
              variants={motionVariants.fadeUp}
              style={{ fontSize: "0.9rem", color: "#7A8FA6", lineHeight: 1.75, marginBottom: "3rem" }}
            >
              All consultations are strictly confidential. We will review your matter
              carefully before advising you on the best path forward.
            </motion.p>

            <motion.div
              variants={motionVariants.staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions.once}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    variants={motionVariants.staggerItem}
                    style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
                  >
                    <span
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 8,
                        border: "1px solid rgba(201,168,76,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(201,168,76,0.06)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#C9A84C" />
                    </span>
                    <div>
                      <p style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A5F78", marginBottom: "0.25rem" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{ fontSize: "0.9rem", color: "#D4C5A0", textDecoration: "none", lineHeight: 1.6 }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: "0.9rem", color: "#D4C5A0", lineHeight: 1.6 }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={motionVariants.slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions.once}
          >
            {submitted ? (
              <motion.div
                variants={motionVariants.scaleIn}
                initial="hidden"
                animate="visible"
                style={{
                  padding: "3rem 2rem",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: 8,
                  textAlign: "center",
                  backgroundColor: "rgba(10,21,32,0.6)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    color: "#C9A84C",
                    marginBottom: "1rem",
                  }}
                >
                  Thank you for reaching out.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#7A8FA6", lineHeight: 1.75 }}>
                  We have received your enquiry and will respond within one business day.
                  All communications are strictly confidential.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: "2.5rem",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: 8,
                  backgroundColor: "rgba(10,21,32,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontStyle: "italic",
                    fontSize: "1.25rem",
                    color: "#F5F0E8",
                    marginBottom: "0.5rem",
                  }}
                >
                  Consultation Request
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      style={getInputStyle("name")}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      style={getInputStyle("email")}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      style={getInputStyle("phone")}
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div>
                    <label htmlFor="matter" style={labelStyle}>Area of Practice</label>
                    <select
                      id="matter"
                      value={form.matter}
                      onChange={(e) => handleChange("matter", e.target.value)}
                      onFocus={() => setFocusedField("matter")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...getInputStyle("matter"),
                        appearance: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" style={{ backgroundColor: "#0A1520" }}>Select matter type</option>
                      {MATTERS.map((m) => (
                        <option key={m} value={m} style={{ backgroundColor: "#0A1520" }}>{m}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Brief Description *</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...getInputStyle("message"),
                      resize: "vertical",
                      minHeight: 120,
                    }}
                    placeholder="Briefly describe your legal matter..."
                  />
                </div>

                <p style={{ fontSize: "0.75rem", color: "#4A5F78", lineHeight: 1.6 }}>
                  By submitting, you confirm that any information shared is for the purpose
                  of seeking legal consultation and will be treated in strict confidence.
                </p>

                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
