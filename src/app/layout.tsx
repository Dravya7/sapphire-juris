import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

// ─────────────────────────────────────────────────────────
// FONTS — loaded via next/font for performance
// ─────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600", "700"],
  style:    ["normal", "italic"],
  variable: "--font-cormorant",
  display:  "swap",
  preload:  true,
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600"],
  style:    ["normal", "italic"],
  variable: "--font-dm-sans",
  display:  "swap",
  preload:  true,
});

// ─────────────────────────────────────────────────────────
// METADATA — SEO
// ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default:  "Sapphire Juris® — Advocates & Legal Consultants",
    template: "%s | Sapphire Juris®",
  },
  description:
    "Sapphire Juris is a premium law firm in Indore, Madhya Pradesh, " +
    "offering expert legal counsel across civil litigation, criminal defense, " +
    "corporate law, family law, and more. Where Law Meets Integrity.",
  keywords: [
    "law firm indore",
    "advocates indore",
    "legal consultants madhya pradesh",
    "civil litigation mp",
    "criminal defense indore",
    "corporate law firm india",
    "sapphire juris",
    "atharva vyas advocate",
    "rishi sharma advocate",
  ],
  authors: [
    { name: "Adv. Atharva Vyas" },
    { name: "Adv. Rishi Sharma" },
  ],
  creator:   "Sapphire Juris®",
  publisher: "Sapphire Juris®",
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         "https://sapphirejuris.in",
    siteName:    "Sapphire Juris®",
    title:       "Sapphire Juris® — Where Law Meets Integrity",
    description:
      "Premium law firm in Indore, M.P. Expert advocates specialising in " +
      "civil, criminal, corporate, and family law.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Sapphire Juris — Advocates & Legal Consultants",
      },
    ],
  },
  twitter: {
    card:  "summary_large_image",
    title: "Sapphire Juris® — Where Law Meets Integrity",
    description:
      "Premium law firm in Indore, M.P. Expert advocates in civil, " +
      "criminal, corporate, and family law.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://sapphirejuris.in",
  },
};

export const viewport: Viewport = {
  width:               "device-width",
  initialScale:        1,
  themeColor:          "#0D1B2A",
  colorScheme:         "dark",
};

// ─────────────────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
