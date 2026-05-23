import { Hero }          from "@/components/hero/Hero";
import AboutPreview     from "@/components/sections/AboutPreview";
import PracticeAreas    from "@/components/sections/PracticeAreas";
import Philosophy       from "@/components/sections/Philosophy";
import Certifications   from "@/components/sections/Certifications";
import Testimonials     from "@/components/sections/Testimonials";
import ContactCTA       from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PracticeAreas />
      <Philosophy />
      <Certifications />
      <Testimonials />
      <ContactCTA />
    </>
  );
}