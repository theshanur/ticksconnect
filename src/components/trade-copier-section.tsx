"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Scale, ArrowLeftRight, Pause, Play } from "lucide-react";

type SizeMode = "same" | "equity" | "fixed" | "multiplier";

export default function TradeCopierSection() {
  const [sizeMode, setSizeMode] = useState<SizeMode>("fixed");
  const [reversed, setReversed] = useState(false);
  const [paused, setPaused] = useState(false);

  const accounts = [
    {
      name: "Master",
      lot: "1.00 lot",
      width: "45%",
      status: "Active",
    },
    {
      name: "Account 2",
      lot: "0.50 lot",
      width: "22%",
      status: "Paused",
    },
    {
      name: "Account 3",
      lot: "2.00 lot",
      width: "100%",
      status: "Active",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#101010] px-6 py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-[1110px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Trade Copier
          </p>

          <h2 className="max-w-[650px] text-[46px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#edf1f5] md:text-[48px]">
            Trade Copier between your accounts
          </h2>

          <p className="mt-5 text-[16px] text-white/55">
            One account trades. The others follow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* SIZE PER ACCOUNT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="group rounded-[16px] border border-white/[0.10] bg-[#141414] p-6 shadow-[0_20px_70px_rgba(0,0,0,.18)] transition-shadow duration-300 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,.30)]">
            <CardHeader
              icon={<Scale size={17} />}
              title="Size per account"
              description="Same size, scale by equity, fixed lots, or a multiplier."
            />

            {/* Mode selector */}
            <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#181818] p-2">
              <div className="grid grid-cols-2 gap-1">
                <ModeButton
                  active={sizeMode === "same"}
                  onClick={() => setSizeMode("same")}>
                  Same size
                </ModeButton>

                <ModeButton
                  active={sizeMode === "equity"}
                  onClick={() => setSizeMode("equity")}>
                  By equity
                </ModeButton>

                <ModeButton
                  active={sizeMode === "fixed"}
                  onClick={() => setSizeMode("fixed")}>
                  Fixed lots
                </ModeButton>

                <ModeButton
                  active={sizeMode === "multiplier"}
                  onClick={() => setSizeMode("multiplier")}>
                  Multiplier
                </ModeButton>
              </div>
            </div>

            {/* Small chevrons */}
            <div className="flex justify-center gap-2 py-4 text-cyan-500/60">
              <span>⌄</span>
              <span>⌄</span>
              <span>⌄</span>
            </div>

            {/* Account visualization */}
            <div className="rounded-xl border border-white/[0.08] bg-[#181818] p-3">
              {accounts.map((account, index) => (
                <div key={account.name} className="mb-4 last:mb-0">
                  <div className="mb-2 flex items-center justify-between text-[12px]">
                    <span className="text-white/60">{account.name}</span>

                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${sizeMode}-${account.name}`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-medium text-white/80">
                        {getLotValue(sizeMode, index)}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="h-[4px] overflow-hidden rounded-full bg-white/[0.09]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: account.width }}
                      viewport={{ once: true }}
                      animate={{
                        width:
                          sizeMode === "same"
                            ? index === 0
                              ? "50%"
                              : "50%"
                            : sizeMode === "multiplier"
                              ? index === 0
                                ? "35%"
                                : index === 1
                                  ? "70%"
                                  : "85%"
                              : account.width,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* REVERSE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            whileHover={{ y: -5 }}
            className="group flex min-h-[440px] flex-col rounded-[16px] border border-white/[0.10] bg-[#141414] p-6 shadow-[0_20px_70px_rgba(0,0,0,.18)] transition-shadow duration-300 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,.30)]">
            <CardHeader
              icon={<ArrowLeftRight size={17} />}
              title="Reverse"
              description="Reverse a side when you want."
            />

            <div className="mt-auto flex items-center justify-center gap-8 pb-5">
              {/* Master side */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setReversed(!reversed)}
                className={`h-[88px] w-[119px] rounded-xl border transition-all duration-300 ${
                  reversed
                    ? "border-red-500/40 bg-red-500/[0.08]"
                    : "border-emerald-500/35 bg-emerald-500/[0.06]"
                }`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={reversed ? "sell" : "buy"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}>
                    <div
                      className={`text-[18px] font-semibold ${
                        reversed ? "text-red-400" : "text-emerald-400"
                      }`}>
                      {reversed ? "SELL" : "BUY"}
                    </div>

                    <div className="mt-1 text-[12px] text-white/50">
                      1.00 lot
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Reverse control */}
              <motion.button
                onClick={() => setReversed(!reversed)}
                whileHover={{
                  scale: 1.08,
                  rotate: 8,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/[0.10] shadow-[0_0_30px_rgba(139,92,246,.12)]">
                <motion.div
                  animate={{ rotate: reversed ? 180 : 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}>
                  <ArrowLeftRight size={19} className="text-white/75" />
                </motion.div>
              </motion.button>

              {/* Account side */}
              <motion.div
                animate={{
                  scale: reversed ? 1.03 : 1,
                }}
                className={`flex h-[88px] w-[119px] items-center justify-center rounded-xl border transition-all duration-300 ${
                  reversed
                    ? "border-emerald-500/35 bg-emerald-500/[0.06]"
                    : "border-emerald-500/35 bg-emerald-500/[0.06]"
                }`}>
                <div className="text-center">
                  <div className="text-[18px] font-semibold text-emerald-400">
                    {reversed ? "BUY" : "BUY"}
                  </div>
                  <div className="mt-1 text-[12px] text-white/50">1.00 lot</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* PAUSE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            whileHover={{ y: -5 }}
            className="group min-h-[440px] rounded-[16px] border border-white/[0.10] bg-[#141414] p-6 shadow-[0_20px_70px_rgba(0,0,0,.18)] transition-shadow duration-300 hover:border-white/[0.16] hover:shadow-[0_25px_80px_rgba(0,0,0,.30)]">
            <CardHeader
              icon={<Pause size={17} />}
              title="Pause"
              description="Pause one account without stopping the rest."
            />

            <div className="mt-auto space-y-2 pb-5">
              <AccountStatus
                name="Master"
                active={!paused}
                onClick={() => setPaused(false)}
              />

              <AccountStatus
                name="Account 2"
                active={paused}
                onClick={() => setPaused(true)}
              />

              <AccountStatus
                name="Account 3"
                active={!paused}
                onClick={() => setPaused(false)}
              />

              {/* Floating pause button */}
              <div className="flex justify-end pt-1">
                <motion.button
                  onClick={() => setPaused(!paused)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex h-[58px] w-[58px] items-center justify-center rounded-full border transition-colors ${
                    paused
                      ? "border-emerald-500/30 bg-emerald-500/[0.08]"
                      : "border-white/[0.08] bg-[#1a1a1a]"
                  }`}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={paused ? "play" : "pause"}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6 }}>
                      {paused ? (
                        <Play size={17} className="text-emerald-400" />
                      ) : (
                        <Pause size={17} className="text-white/40" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CardHeader({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-400">
          {icon}
        </div>

        <div>
          <h3 className="text-[16px] font-semibold text-white/90">{title}</h3>

          <p className="mt-1 max-w-[270px] text-[13px] leading-5 text-white/45">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ModeButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={`relative flex h-11 items-center gap-2 rounded-lg px-2.5 text-left text-[12px] transition-colors ${
        active
          ? "bg-cyan-400/[0.12] text-white"
          : "text-white/45 hover:bg-white/[0.03] hover:text-white/70"
      }`}>
      <span
        className={`flex h-[14px] w-[14px] items-center justify-center rounded-full border ${
          active ? "border-cyan-300/50" : "border-white/25"
        }`}>
        {active && (
          <motion.span
            layoutId="selected-dot"
            className="h-[8px] w-[8px] rounded-full bg-cyan-300"
          />
        )}
      </span>

      {children}
    </motion.button>
  );
}

function AccountStatus({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 3 }}
      whileTap={{ scale: 0.985 }}
      className="flex h-[44px] w-full items-center justify-between rounded-xl border border-white/[0.07] bg-[#181818] px-3 text-left">
      <span className="text-[12px] text-white/65">{name}</span>

      <span
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] ${
          active
            ? "bg-emerald-400/[0.10] text-emerald-400"
            : "bg-white/[0.07] text-white/35"
        }`}>
        <motion.span
          animate={{
            scale: active ? [1, 1.25, 1] : 1,
            opacity: active ? [0.7, 1, 0.7] : 0.5,
          }}
          transition={{
            duration: 2,
            repeat: active ? Infinity : 0,
          }}
          className={`h-1.5 w-1.5 rounded-full ${
            active ? "bg-emerald-400" : "bg-white/30"
          }`}
        />

        {active ? "Active" : "Paused"}
      </span>
    </motion.button>
  );
}

function getLotValue(mode: SizeMode, index: number) {
  if (mode === "same") return "1.00 lot";
  if (mode === "equity") {
    return index === 0 ? "1.00 lot" : index === 1 ? "0.75 lot" : "1.35 lot";
  }
  if (mode === "multiplier") {
    return index === 0 ? "1.00 lot" : index === 1 ? "1.50 lot" : "2.00 lot";
  }

  return index === 0 ? "1.00 lot" : index === 1 ? "0.50 lot" : "2.00 lot";
}
