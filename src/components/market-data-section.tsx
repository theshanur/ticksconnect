"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FeatureId = "quotes" | "stream" | "candles" | "events";

const features: {
  id: FeatureId;
  title: string;
  description: string;
}[] = [
  {
    id: "quotes",
    title: "Last quotes",
    description: "Last quotes for the symbols you ask for.",
  },
  {
    id: "stream",
    title: "Live stream",
    description: "A live stream, not only a poll.",
  },
  {
    id: "candles",
    title: "Candles",
    description: "Closed candles for the timeframes you chart.",
  },
  {
    id: "events",
    title: "Events and headlines",
    description:
      "This week's events and recent headlines. A delayed snapshot, not every release.",
  },
];

const quotes = [
  { symbol: "EURUSD", price: 1.08742, change: 0.12 },
  { symbol: "XAUUSD", price: 2418.6, change: 0.41 },
  { symbol: "AAPL", price: 228.14, change: -0.18 },
  { symbol: "BTCUSD", price: 67240, change: 1.04 },
];

const streamTicks = [
  { symbol: "EURUSD", bid: "1.08740", ask: "1.08744", time: "14:02:11" },
  { symbol: "XAUUSD", bid: "2418.55", ask: "2418.65", time: "14:02:11" },
  { symbol: "NAS100", bid: "19842.1", ask: "19842.8", time: "14:02:10" },
  { symbol: "GBPUSD", bid: "1.27410", ask: "1.27416", time: "14:02:10" },
  { symbol: "BTCUSD", bid: "67238", ask: "67242", time: "14:02:09" },
];

const candles = [
  { tf: "M5", o: "2416.2", h: "2419.8", l: "2415.1", c: "2418.6" },
  { tf: "M15", o: "2412.4", h: "2420.1", l: "2411.0", c: "2418.6" },
  { tf: "H1", o: "2401.8", h: "2422.5", l: "2398.4", c: "2418.6" },
  { tf: "H4", o: "2388.0", h: "2425.0", l: "2382.6", c: "2418.6" },
];

const events = [
  { when: "Mon 12:30", title: "US CPI m/m", impact: "High" },
  { when: "Tue 08:00", title: "EU GDP flash", impact: "Med" },
  {
    when: "Wed",
    title: "Gold holds near highs as yields ease",
    impact: "News",
  },
  {
    when: "Thu",
    title: "Dollar soft ahead of retail sales",
    impact: "News",
  },
];

function PanelChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-card/80 shadow-xl shadow-background/40 backdrop-blur-md">
      <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="size-2.5 rounded-full bg-foreground/20" />
        <span className="ml-3 font-mono text-[11px] tracking-wide text-muted-foreground">
          market data
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-buy/15 px-2 py-0.5 text-[11px] font-medium text-buy">
          <span className="size-1.5 animate-pulse rounded-full bg-buy" />
          Live
        </span>
      </div>
      <div className="min-h-[280px] sm:min-h-[320px]">{children}</div>
    </div>
  );
}

function QuotesPanel() {
  return (
    <div className="grid h-full grid-cols-2 divide-x divide-y divide-foreground/10">
      {quotes.map((q) => {
        const up = q.change >= 0;
        const priceLabel =
          q.price < 10
            ? q.price.toFixed(5)
            : q.price > 1000
              ? q.price.toLocaleString("en-US", { maximumFractionDigits: 0 })
              : q.price.toFixed(2);

        return (
          <div
            key={q.symbol}
            className="flex flex-col justify-between p-5 sm:p-6"
          >
            <p className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
              {q.symbol}
            </p>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">
                {priceLabel}
              </p>
              <p
                className={cn(
                  "mt-1 font-mono text-sm tabular-nums",
                  up ? "text-buy" : "text-sell"
                )}
              >
                {up ? "+" : ""}
                {q.change.toFixed(2)}%
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StreamPanel() {
  return (
    <div className="flex flex-col gap-px bg-foreground/10 p-px">
      <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 bg-card px-4 py-2.5 font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
        <span>Symbol</span>
        <span>Bid</span>
        <span>Ask</span>
        <span>Time</span>
      </div>
      {streamTicks.map((tick, i) => (
        <motion.div
          key={tick.symbol}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 bg-card px-4 py-3 text-sm"
        >
          <span className="font-medium tracking-tight">{tick.symbol}</span>
          <span className="font-mono tabular-nums text-buy">{tick.bid}</span>
          <span className="font-mono tabular-nums text-sell">{tick.ask}</span>
          <span className="font-mono text-xs text-muted-foreground">
            {tick.time}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function CandlesPanel() {
  return (
    <div className="p-4 sm:p-5">
      <p className="mb-4 text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        XAUUSD · closed candles
      </p>
      <ul className="flex flex-col gap-2">
        {candles.map((c, i) => (
          <motion.li
            key={c.tf}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-[3rem_1fr_1fr_1fr_1fr] items-center gap-2 rounded-lg bg-muted/40 px-3 py-2.5 font-mono text-xs tabular-nums ring-1 ring-foreground/5"
          >
            <span className="font-sans text-[11px] font-semibold tracking-wide text-primary uppercase">
              {c.tf}
            </span>
            <span className="text-muted-foreground">O {c.o}</span>
            <span className="text-buy">H {c.h}</span>
            <span className="text-sell">L {c.l}</span>
            <span className="text-foreground">C {c.c}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function EventsPanel() {
  return (
    <div className="p-4 sm:p-5">
      <p className="mb-4 text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
        This week · snapshot
      </p>
      <ul className="flex flex-col gap-2">
        {events.map((e, i) => (
          <motion.li
            key={e.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-3 rounded-lg bg-muted/40 px-3 py-2.5 ring-1 ring-foreground/5"
          >
            <span className="mt-0.5 shrink-0 font-mono text-[11px] text-muted-foreground">
              {e.when}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium tracking-tight text-foreground">
                {e.title}
              </p>
            </div>
            <span
              className={cn(
                "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
                e.impact === "High"
                  ? "bg-sell/15 text-sell"
                  : e.impact === "Med"
                    ? "bg-primary/15 text-primary"
                    : "bg-muted text-muted-foreground"
              )}
            >
              {e.impact}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function FeaturePanel({ active }: { active: FeatureId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {active === "quotes" ? <QuotesPanel /> : null}
        {active === "stream" ? <StreamPanel /> : null}
        {active === "candles" ? <CandlesPanel /> : null}
        {active === "events" ? <EventsPanel /> : null}
      </motion.div>
    </AnimatePresence>
  );
}

export function MarketDataSection() {
  const [active, setActive] = useState<FeatureId>("quotes");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-backdrop__veil" />
        <div className="hero-backdrop__fade" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Market Data API
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Live quotes for your own tools
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Last prices, candles, a stream, this week&apos;s events, and recent
            headlines.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_0.85fr] lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <PanelChrome>
              <FeaturePanel active={active} />
            </PanelChrome>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col gap-2.5"
          >
            {features.map((feature) => {
              const isActive = active === feature.id;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActive(feature.id)}
                  className={cn(
                    "rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_32px_color-mix(in_oklch,var(--primary)_30%,transparent)]"
                      : "border-foreground/10 bg-card/50 text-foreground hover:border-foreground/20 hover:bg-card/80"
                  )}
                >
                  <p
                    className={cn(
                      "text-base font-semibold tracking-tight",
                      isActive ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {feature.title}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-sm leading-relaxed",
                      isActive
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {feature.description}
                  </p>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
