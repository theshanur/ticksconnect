import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing-section";

export const metadata: Metadata = {
  title: "Pricing — TicksConnect",
  description:
    "Pick a Plan. Connect your accounts. Monthly or yearly. Connect another account when you need one more.",
};

export default function PricingPage() {
  return <PricingSection />;
}
