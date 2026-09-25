"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const agents = [
  { side: "buy" as const, symbol: "XAUUSD", state: "Off" },
  { side: "sell" as const, symbol: "GBPUSD", state: "Off" },
  { side: "buy" as const, symbol: "US30", state: "Off" },
];

const points = [
  {
    title: "Your words, or a library strategy",
    description: "Describe how you want to trade, or fork one from the library.",
  },
  {
    title: "Watch first",
    description: "Watch decisions on a connected account before anything is sent.",
  },
  {
    title: "You turn sending on",
    description: "Sending stays off until you switch it on.",
  },
  {
    title: "Caps",
    description: "Caps for size, session, daily loss, and trades per day.",
  },
];

export function AgentsSection() {
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
            Agents
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Write how you want to trade
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A spec you can read, a backtest, then a live preview.
          </p>
        </motion.div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="overflow-hidden rounded-2xl border border-foreground/10 bg-card/80 shadow-xl shadow-background/40 backdrop-blur-md"
          >
            <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="size-2.5 rounded-full bg-foreground/20" />
              <span className="ml-3 font-mono text-[11px] tracking-wide text-muted-foreground">
                agents
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-buy/15 px-2 py-0.5 text-[11px] font-medium text-buy">
                <span className="size-1.5 animate-pulse rounded-full bg-buy" />
                Live
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <header className="mb-5">
                <p className="text-base font-semibold tracking-tight text-foreground">
                  Gold session
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Watching. Sending off.
                </p>
              </header>

              <ul className="flex flex-col gap-2.5">
                {agents.map((row, index) => {
                  const isBuy = row.side === "buy";
                  return (
                    <motion.li
                      key={row.symbol}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + index * 0.06,
                      }}
                      className="flex items-center gap-3 rounded-xl bg-muted/40 px-3.5 py-3 ring-1 ring-foreground/5"
                    >
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
                          isBuy ? "bg-buy/15 text-buy" : "bg-sell/15 text-sell"
                        )}
                      >
                        {isBuy ? "Buy" : "Sell"}
                      </span>
                      <span className="font-medium tracking-tight text-foreground">
                        {row.symbol}
                      </span>
                      <span className="ml-auto text-[11px] text-muted-foreground">
                        {row.state}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col gap-8 lg:pt-2"
          >
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.18 + index * 0.06 }}
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
