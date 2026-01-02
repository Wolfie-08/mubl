"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HeroVisual from "@/components/HeroVisual";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const stats = [
  { label: "Members", value: "320+", detail: "engineers, researchers, and mentors" },
  { label: "Projects", value: "48", detail: "spanning robotics, space, and software" },
  { label: "Events", value: "24", detail: "workshops, academies, and exchanges" },
  { label: "Research & Articles", value: "36", detail: "published explorations and insights" },
];

const focusAreas = [
  {
    title: "Engineering Projects",
    description: "Hands-on builds that combine hardware, control systems, and software for real-world needs.",
    tag: "Robotics & Systems",
  },
  {
    title: "Research Tracks",
    description: "Student-led investigations in data science, astrophysics, and materials guided by mentors.",
    tag: "Scientific Inquiry",
  },
  {
    title: "Community Programs",
    description: "Bootcamps, reading circles, and peer reviews that cultivate collaborative leadership.",
    tag: "Learning Culture",
  },
];

const highlights = [
  {
    title: "Space Fest 2025",
    description: "Celebrating space science with workshops, flight demos, and student research showcases.",
    detail: "Hosted with New Uzbekistan University.",
  },
  {
    title: "MUBL Bootcamp",
    description: "Intensive build week focused on prototyping and scientific communication.",
    detail: "Bootcamp resources at bootcamp.mubl.uz",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-900/30 md:grid-cols-2 md:items-center md:p-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-aurora">
            Student-led · Research-driven
          </div>
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              MUBL — Mirzo Ulugh Beg’s Legacy
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed text-slate-200"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              A student-led engineering and research community inspired by curiosity, science, and legacy. We create, test,
              and publish projects that honor the spirit of Mirzo Ulugh Beg by elevating inquiry and collaboration.
            </motion.p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/join" className="button-primary">
                Join Community
              </Link>
              <Link href="/projects" className="button-secondary">
                Explore Projects
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-200 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Robotics</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Space systems</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Software labs</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Scientific writing</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Workshops</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Mentorship</div>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Impact"
          title="Community metrics that reflect our momentum"
          description="Growth fueled by peer collaboration, open research, and interdisciplinary builds."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="card-sheen rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-purple-900/20"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <p className="text-sm text-aurora">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Focus"
          title="Labs and learning pathways"
          description="Purposeful tracks that pair experimentation with rigorous documentation and peer review."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => (
            <motion.div key={area.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * index }}>
              <Card title={area.title} description={area.description} tag={area.tag}>
                <div className="flex flex-col gap-1 text-slate-300">
                  <span>Deep technical mentorship</span>
                  <span>Shared lab resources</span>
                  <span>Documented outcomes</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Highlights"
          title="Events and programs"
          description="Moments that bring together builders, researchers, and educators across campuses."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <Card key={item.title} title={item.title} description={item.description}>
              <p className="text-sm text-slate-300">{item.detail}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
