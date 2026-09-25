"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Ticksconnect, and what do I use it for?",
    answer:
      "One place for the accounts you already have at your broker. Connect them and see equity, opens, pending orders, and closed trades in one view.",
  },
  {
    question: "What accounts can I connect to Ticksconnect?",
    answer:
      "Accounts you already have at your broker. We do not issue those logins. You connect them, and your broker stays the place that holds the money.",
  },
  {
    question: "Do I need a new login at my broker to get started?",
    answer:
      "No. Use a login you already have. Connect it, then you can see that account from Ticksconnect without opening a new one at the broker.",
  },
  {
    question: "What do I see after I connect an account I already have?",
    answer:
      "Equity, open positions, pending orders, and closed trades for every account you connected. That view updates as the account changes at your broker.",
  },
  {
    question: "Can someone else help with the accounts I connected?",
    answer:
      "Yes. Invite someone later to help with the accounts you connected. They work with you in Ticksconnect. They do not get a broker login from us.",
  },
  {
    question: "Can I cancel later if I no longer want to use it?",
    answer:
      "Yes. Cancel anytime. You keep access until the end of the current billing cycle, and you will not be charged for the next one.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Straight answers about connecting accounts you already have.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="border border-foreground/10 rounded-2xl">
            <Accordion className="w-full" defaultValue={["1"]}>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={String(index + 1)}
                  className="border-foreground/10">
                  <AccordionTrigger className="py-4 px-4 text-base font-medium text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-muted-foreground px-5">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
