"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Connect",
    description: "Add an account you already have.",
  },
  {
    title: "Trade Copier",
    description: "Send trades from one of your accounts to the others.",
  },
  {
    title: "Agents",
    description:
      "Write how you want to trade, then run it on a connected account.",
  },
];

export function HowSection() {
  return (
    <section id="how" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-2xl">
          <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-5xl">
            Connect. Trade Copier. Run agents.
          </h2>
        </motion.div>

        <div className="mt-14 flex flex-col">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: 0.08 + index * 0.06,
                ease: "easeOut",
              }}
              className="grid gap-3 border-t border-foreground/10 py-8 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-10">
              <p className="font-sans text-2xl font-semibold tracking-tight">
                {step.title}
              </p>
              <p className="max-w-xl text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
