"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { profile, metrics } from "@/constants";
import { fadeUp, stagger } from "@/utils/motion";

export default function HeroContent() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="container-page pt-32 pb-16 md:pt-36 md:pb-24"
    >
      {/* Eyebrow: availability + location */}
      <motion.div
        variants={fadeUp}
        className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.18em] text-muted"
      >
        <span className="inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </span>
        <span className="text-border">/</span>
        <span>{profile.location}</span>
      </motion.div>

      {/* Headline — the thesis */}
      <motion.h1
        variants={fadeUp}
        className="mt-6 max-w-4xl font-display text-display-lg font-extrabold text-ink"
      >
        {profile.headlineLead}{" "}
        <span className="text-accent">{profile.headlineAccent}</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
      >
        {profile.blurb}
      </motion.p>

      {/* CTAs */}
      <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
        <a href="#experience" className="btn-primary">
          View work <FiArrowDown className="h-4 w-4" />
        </a>
        <a href="#contact" className="btn-ghost">
          Get in touch <FiArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>

      {/* Metric strip — the signature element */}
      <motion.dl
        variants={fadeUp}
        className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3"
      >
        {metrics.map((m) => (
          <div key={m.label}>
            <dt className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              {m.value}
            </dt>
            <dd className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">
              {m.label}
            </dd>
            <dd className="mt-1 text-sm text-muted/70">{m.note}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.div>
  );
}
