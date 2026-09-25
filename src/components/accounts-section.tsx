"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const points = [
  {
    title: "Live equity",
    description: "Equity for every account you connected.",
  },
  {
    title: "Opens and pending",
    description: "Open positions and pending orders in one view.",
  },
  {
    title: "Closed trades",
    description: "History for the accounts you connected.",
  },
];

const positions = [
  { side: "buy" as const, symbol: "XAUUSD", lots: "0.40", pnl: "+182.40" },
  { side: "sell" as const, symbol: "EURUSD", lots: "1.20", pnl: "−41.10" },
  { side: "buy" as const, symbol: "NAS100", lots: "0.10", pnl: "+96.05" },
];

export function AccountsSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-backdrop__veil" />
        <div className="hero-backdrop__fade" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Accounts
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
              Every connected account, live
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Equity, opens, pending orders, and closed trades.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {points.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                >
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-foreground/10 bg-card/80 shadow-xl shadow-background/40 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="ml-3 font-mono text-[11px] tracking-wide text-muted-foreground">
                your accounts
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-buy/15 px-2 py-0.5 text-[11px] font-medium text-buy">
                <span className="size-1.5 animate-pulse rounded-full bg-buy" />
                Live
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <header className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-base font-semibold tracking-tight text-foreground">
                    Alpha-4821
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">Connected</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] tracking-[0.12em] text-muted-foreground uppercase">
                    Equity
                  </p>
                  <p className="mt-1 font-mono text-xl font-semibold tracking-tight tabular-nums text-foreground sm:text-2xl">
                    124,580.22
                  </p>
                </div>
              </header>

              <ul className="flex flex-col gap-2">
                {positions.map((row, index) => {
                  const isBuy = row.side === "buy";
                  return (
                    <motion.li
                      key={row.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.2 + index * 0.06,
                      }}
                      className="flex items-center gap-3 rounded-xl bg-muted/40 px-3.5 py-3 ring-1 ring-foreground/5"
                    >
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
                          isBuy ? "bg-buy/15 text-buy" : "bg-sell/15 text-sell"
                        )}
                      >
                        {isBuy ? "buy" : "sell"}
                      </span>
                      <span className="font-medium tracking-tight text-foreground">
                        {row.symbol}
                      </span>
                      <span className="ml-auto font-mono text-xs tabular-nums text-muted-foreground">
                        {row.lots}
                      </span>
                      <span
                        className={cn(
                          "min-w-16 text-right font-mono text-xs tabular-nums",
                          isBuy ? "text-buy" : "text-sell"
                        )}
                      >
                        {row.pnl}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
