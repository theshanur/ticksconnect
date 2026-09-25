"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-primary/10">
        <FlickeringGrid
          className="absolute inset-0 z-0 mask-[radial-gradient(ellipse_at_center,transparent_38%,black_82%)]"
          squareSize={4}
          gridGap={6}
          color="#218a66"
          maxOpacity={0.3}
          flickerChance={0.1}
          height={500}
          width={1500}
        />

        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-10 sm:py-20 md:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Start with one account
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-4 max-w-md text-pretty text-base text-muted-foreground ">
            Invite someone later. Add Trade Copier and Agents when you need
            them.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}>
              <Link href="https://app.ticksconnect.com/signup">
                <Button variant="default" size="lg">
                  Get started
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.36, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}>
              <Link href="https://app.ticksconnect.com/login">
                <Button variant="secondary" size="lg">
                  Sign in
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
