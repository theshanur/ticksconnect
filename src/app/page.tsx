"use client";

import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import TradeCopierSection from "@/components/trade-copier-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TradeCopierSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
