import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040D15",
          900: "#0A1520",
          800: "#0D1B2A",
          700: "#102235",
          600: "#132030",
          500: "#1A2B3C",
          400: "#1E3348",
          300: "#2A4560",
        },
        gold: {
          600: "#A07828",
          500: "#B8962E",
          400: "#C9A84C",
          300: "#D4B96A",
          200: "#E8D4A0",
          100: "#F5EDD6",
        },
        ink: {
          primary:   "#F5F0E8",
          secondary: "#D4C5A0",
          muted:     "#7A8FA6",
          faint:     "#4A5F78",
          hint:      "#2A3F55",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw, 5.5rem)",      { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-xl":  ["clamp(2.5rem, 5vw, 4.5rem)",    { lineHeight: "1.08", letterSpacing: "-0.01em" }],
        "display-lg":  ["clamp(2rem, 4vw, 3.5rem)",      { lineHeight: "1.1",  letterSpacing: "-0.005em" }],
        "display-md":  ["clamp(1.75rem, 3vw, 2.75rem)",  { lineHeight: "1.15" }],
        "display-sm":  ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.2"  }],
        "ui-xl":       ["1.125rem",  { lineHeight: "1.5"  }],
        "ui-lg":       ["1rem",      { lineHeight: "1.6"  }],
        "ui-md":       ["0.9375rem", { lineHeight: "1.6"  }],
        "ui-sm":       ["0.875rem",  { lineHeight: "1.65" }],
        "ui-xs":       ["0.8125rem", { lineHeight: "1.6"  }],
        "ui-2xs":      ["0.75rem",   { lineHeight: "1.5"  }],
        "label-lg":    ["0.8125rem", { lineHeight: "1", letterSpacing: "0.12em" }],
        "label-md":    ["0.75rem",   { lineHeight: "1", letterSpacing: "0.1em"  }],
        "label-sm":    ["0.6875rem", { lineHeight: "1", letterSpacing: "0.1em"  }],
      },
      fontWeight: {
        book:     "400",
        medium:   "500",
        semibold: "600",
        bold:     "700",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "section-sm": "5rem",
        "section-md": "7.5rem",
        "section-lg": "10rem",
        "section-xl": "12.5rem",
      },
      borderRadius: {
        "card":    "12px",
        "card-sm": "8px",
        "pill":    "9999px",
        "btn":     "6px",
      },
      boxShadow: {
        "card":       "0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)",
        "modal":      "0 24px 80px rgba(0,0,0,0.6)",
        "nav":        "0 1px 0 rgba(201,168,76,0.12)",
        "gold-sm":    "0 0 0 1px rgba(201,168,76,0.35)",
        "gold-md":    "0 0 0 1px rgba(201,168,76,0.6)",
        "inset-top":  "inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      maxWidth: {
        "container":    "1280px",
        "container-lg": "1440px",
        "container-sm": "960px",
        "prose-narrow": "640px",
        "prose-wide":   "800px",
      },
      transitionDuration: {
        "150": "150ms",
        "250": "250ms",
        "350": "350ms",
        "500": "500ms",
        "700": "700ms",
        "900": "900ms",
      },
      transitionTimingFunction: {
        "luxury":   "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "smooth":   "cubic-bezier(0.4, 0, 0.2, 1)",
        "spring":   "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)",   animationTimingFunction: "cubic-bezier(0.8,0,1,1)" },
          "50%":      { transform: "translateY(6px)", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.5" },
        },
      },
      animation: {
        "fade-up":       "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":       "fade-in 0.4s ease forwards",
        "shimmer":       "shimmer 3s linear infinite",
        "float":         "float 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 1.5s ease infinite",
        "pulse-gold":    "pulse-gold 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-shimmer":
          "linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.15) 50%, transparent 60%)",
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;