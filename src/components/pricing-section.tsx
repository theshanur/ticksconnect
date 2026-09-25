"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NumberTicker } from "./motion/number-ticker";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    monthly: 29,
    yearly: 319,
    description: "One account to start with.",
    features: [
      "1 Account",
      "Unlimited Trade Copier",
      "5 Agents",
      "Market Data API",
      "Economic calendar",
      "Financial news",
      "20 API Calls / Minute",
      "US Stock, Forex, Crypto, and Commodities",
      "Real-time alerts",
    ],
    highlighted: false,
  },
  {
    name: "Plus",
    monthly: 59,
    yearly: 649,
    description: "For a few accounts you already have.",
    features: [
      "3 Accounts",
      "Unlimited Trade Copier",
      "5 Agents",
      "Market Data API",
      "Economic calendar",
      "Financial news",
      "60 API Calls / Minute",
      "US Stock, Forex, Crypto, and Commodities",
      "Real-time alerts",
      "Webhooks",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    monthly: 119,
    yearly: 1309,
    description: "More accounts, unlimited agents.",
    features: [
      "10 Accounts",
      "Unlimited Trade Copier",
      "Unlimited Agents",
      "Market Data API",
      "Economic calendar",
      "Financial news",
      "Unlimited API Calls / Minute",
      "US Stock, Forex, Crypto, and Commodities",
      "Real-time alerts",
      "Webhooks",
    ],
    highlighted: false,
  },
];

const extraAccount = {
  monthly: 10,
  yearly: 8,
};

export function PricingSection() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Pick a Plan. Connect your accounts.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Monthly or yearly. Connect another account when you need one more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-foreground/10 bg-muted/30 p-1">
            {(["monthly", "yearly"] as const).map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setBilling(option)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors",
                  billing === option
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}>
                {option}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const price = billing === "monthly" ? plan.monthly : plan.yearly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + index * 0.06,
                  ease: "easeOut",
                }}
                className={cn(
                  "flex flex-col rounded-2xl border p-6",
                  plan.highlighted
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_20%,transparent)]"
                    : "border-foreground/10 bg-card",
                )}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  {plan.highlighted ? (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-medium text-primary">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  {/* <AnimatedPrice
                    value={price}
                    className="text-4xl font-semibold tracking-tight text-foreground"
                  /> */}
                  <NumberTicker
                    value={price}
                    prefix="$"
                    locale
                    blur
                    className="text-4xl font-semibold tracking-tight text-foreground"
                  />
                  <motion.span
                    key={billing === "yearly" ? "yr" : "mo"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="pb-1 text-sm text-muted-foreground">
                    {billing === "yearly" ? "/ year" : "/ month"}
                  </motion.span>
                </div>
                <motion.p
                  key={billing}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: billing === "yearly" ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-1 text-xs text-muted-foreground">
                  Billed yearly
                </motion.p>

                <Button
                  className="mt-6 w-full"
                  variant={plan.highlighted ? "default" : "secondary"}
                  size="lg"
                  nativeButton={false}
                  render={
                    <a href="https://app.ticksconnect.com/signup" />
                  }
                >
                  Get started
                </Button>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {plan.features.map(feature => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Connect another account
            </h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Add one more of your accounts to any Plan. Same Trade Copier and
              Agents. Billed with that Plan.
            </p>
          </div>
          <div className="flex shrink-0 items-end gap-1 sm:flex-col sm:items-end">
            <div className="flex items-end gap-1">
              {/* <AnimatedPrice
                value={
                  billing === "monthly"
                    ? extraAccount.monthly
                    : extraAccount.yearly
                }
                className="text-3xl font-semibold tracking-tight text-foreground"
              /> */}
              <NumberTicker
                value={
                  billing === "monthly"
                    ? extraAccount.monthly
                    : extraAccount.yearly
                }
                prefix="$"
                locale
                blur
                className="text-3xl font-semibold tracking-tight text-foreground"
              />
              <motion.span
                key={billing === "yearly" ? "extra-yr" : "extra-mo"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="pb-1 text-sm text-muted-foreground">
                {billing === "yearly" ? "/ year" : "/ month"}
              </motion.span>
            </div>
            <motion.span
              key={`extra-label-${billing}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: billing === "yearly" ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs text-muted-foreground">
              Billed yearly
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
