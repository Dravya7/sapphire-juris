import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cinzel, DM_Sans } from "next/font/google";
import Navbar        from "@/components/navbar/Navbar";
import Footer        from "@/components/footer/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Disclaimer }   from "@/components/ui/Disclaimer";
import "./globals.css";

const cormorant = Cinzel({
  subsets:  ["latin"],
  weight:   ["400", "500", "600", "700", "900"],
  variable: "--font-cormorant",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  weight:   ["300", "400", "500", "600"],
  style:    ["normal", "italic"],
  variable: "--font-dm-sans",
  display:  "swap",
});

export const metadata: Metadata = {
  title: {
    default:  "Sapphire Juris LLP® — Advocates & Legal Consultants",
    template: "%s | Sapphire Juris LLP®",
  },
  description: "Premium law firm in Indore, Madhya Pradesh. Where Law Meets Integrity.",
  icons: {
    icon:  "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#0D1B2A",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Disclaimer />
        <SmoothScroll />
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}