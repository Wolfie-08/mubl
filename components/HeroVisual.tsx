"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-lg shadow-purple-900/30">
      <div className="absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <motion.div
        className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-gradient-to-br from-aurora/60 via-white/60 to-transparent blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-10 h-48 w-48 rounded-full bg-gradient-to-br from-rose-300/60 via-dusk/60 to-transparent blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Engineering Futures</p>
          <h3 className="text-2xl font-semibold text-white">Interdisciplinary labs</h3>
          <p className="max-w-md text-sm text-slate-300">
            Robotics, space systems, and software research shaped by peer mentorship and rigorous inquiry.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-100">
          {["Robotics Lab", "Space Systems", "Scientific Computing", "Community Build"].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center shadow-inner shadow-purple-900/20">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
