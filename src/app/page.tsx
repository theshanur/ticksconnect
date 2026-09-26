"use client";

import { AccountsSection } from "@/components/accounts-section";
import { AgentsSection } from "@/components/agents-section";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowSection } from "@/components/how-section";
import { MarketDataSection } from "@/components/market-data-section";
import { PricingSection } from "@/components/pricing-section";
import TradeCopierSection from "@/components/trade-copier-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowSection />
      <AccountsSection />
      <TradeCopierSection />
      <AgentsSection />
      <MarketDataSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
