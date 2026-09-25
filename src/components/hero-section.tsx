"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { HeroTicksCanvas } from "@/components/hero-ticks-canvas";
import { cn } from "@/lib/utils";

const positions = [
  { side: "buy" as const, symbol: "XAUUSD", lots: "0.40", pnl: "+182.40" },
  { side: "sell" as const, symbol: "EURUSD", lots: "1.20", pnl: "−41.10" },
  { side: "buy" as const, symbol: "NAS100", lots: "0.10", pnl: "+96.05" },
];

const agents = [
  { side: "Buy" as const, symbol: "XAUUSD", status: "Watching", state: "Off" },
  { side: "Sell" as const, symbol: "GBPUSD", status: "Watching", state: "Off" },
  { side: "Buy" as const, symbol: "US30", status: "Watching", state: "Off" },
];

function CtaButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      role="button"
      tabIndex={0}
      data-slot="button"
      className="group/button inline-flex h-9 shrink-0 cursor-pointer items-stretch rounded-[11px] border-0 bg-linear-to-b from-primary/80 to-primary p-px transition duration-300 ease-in-out outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 dark:from-primary dark:to-primary/75">
      <span
        data-slot="button-label"
        className="inline-flex h-full w-full min-w-0 items-center justify-center gap-1.5 rounded-[10px] bg-linear-to-b from-primary to-[color-mix(in_oklch,var(--primary),var(--foreground)_14%)] px-2.5 text-sm font-medium whitespace-nowrap text-primary-foreground transition duration-300 ease-in-out hover:from-primary/90 hover:to-primary active:from-[color-mix(in_oklch,var(--primary),var(--foreground)_22%)] active:to-[color-mix(in_oklch,var(--primary),var(--foreground)_18%)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
        {children}
      </span>
    </a>
  );
}

function SideBadge({
  side,
  className,
}: {
  side: "buy" | "sell" | "Buy" | "Sell";
  className?: string;
}) {
  const isBuy = side.toLowerCase() === "buy";

  return (
    <span
      className={cn(
        "rounded px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
        isBuy ? "bg-buy/15 text-buy" : "bg-sell/15 text-sell",
        className,
      )}>
      {side}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const previewY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <section ref={sectionRef} className="relative -mt-16 overflow-hidden">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-backdrop__veil" />
        <div className="hero-backdrop__ticks h-full w-full">
          {/* <HeroTicksCanvas /> */}
        </div>
        <div className="hero-backdrop__floor">
          <div className="hero-backdrop__floor-grid" />
        </div>
        <div className="hero-backdrop__fade" />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-4xl font-sans text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block leading-[1.08] text-foreground">
              One place for the accounts
            </span>{" "}
            <span className="mt-1 block leading-[1.08] text-foreground/55">
              you already have
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="mt-5 max-w-lg text-pretty text-base text-muted-foreground sm:text-lg">
            See what is open, send with a Trade Copier, and run your own agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <CtaButton href="https://app.ticksconnect.com/signup">
              Get started
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </CtaButton>
          </motion.div>
        </div>

        <div className="mt-auto pt-16 sm:pt-20">
          <div className="relative w-full">
            <motion.div
              style={{ y: previewY }}
              className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
                className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-card/55 shadow-xl shadow-background/50 backdrop-blur-md">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
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

                <div className="grid gap-px bg-foreground/10 md:grid-cols-[1.1fr_0.9fr]">
                  <section className="bg-card p-4 sm:p-5">
                    <header className="mb-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                          Book
                        </p>
                        <p className="mt-1 text-sm font-medium tracking-tight">
                          Alpha-4821
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
                          Equity
                        </p>
                        <p className="font-mono text-lg tracking-tight tabular-nums">
                          124,580.22
                        </p>
                      </div>
                    </header>

                    <ul className="flex flex-col gap-2">
                      {positions.map((row, index) => (
                        <motion.li
                          key={row.symbol}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.35 + index * 0.06,
                          }}
                          className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-2.5 ring-1 ring-foreground/5">
                          <SideBadge side={row.side} />
                          <span className="font-medium tracking-tight">
                            {row.symbol}
                          </span>
                          <span className="ml-auto font-mono text-xs tabular-nums text-muted-foreground">
                            {row.lots}
                          </span>
                          <span
                            className={cn(
                              "min-w-16 text-right font-mono text-xs tabular-nums",
                              row.side === "buy" ? "text-buy" : "text-sell",
                            )}>
                            {row.pnl}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </section>

                  <section className="bg-card p-4 sm:p-5">
                    <header className="mb-4">
                      <p className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                        Agents
                      </p>
                      <p className="mt-1 text-sm font-medium tracking-tight">
                        XAUUSD · preview
                      </p>
                    </header>

                    <ul className="flex flex-col gap-2">
                      {agents.map((row, index) => (
                        <motion.li
                          key={row.symbol}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.4 + index * 0.06,
                          }}
                          className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-2.5 ring-1 ring-foreground/5">
                          <SideBadge side={row.side} />
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium tracking-tight">
                              {row.symbol}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {row.status}
                            </p>
                          </div>
                          <span className="ml-auto text-[11px] text-muted-foreground">
                            {row.state}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-lg border border-dashed border-foreground/15 bg-muted/20 px-3 py-3">
                      <p className="text-[11px] font-medium tracking-[0.12em] text-muted-foreground uppercase">
                        Trade Copier
                      </p>
                      <p className="mt-1 text-sm tracking-tight">
                        Your account → 3 accounts you own
                      </p>
                    </div>
                  </section>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
