"use client";

import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import TradeCopierSection from "@/components/trade-copier-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TradeCopierSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
