"use client";

import { motion } from "framer-motion";
import { experience } from "@/constants";
import { fadeUp, stagger } from "@/utils/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 max-w-3xl font-display text-display-sm font-extrabold text-ink"
          >
            Two years shipping production software.
          </motion.h2>
        </motion.div>

        <div className="mt-14">
          {experience.map((job) => (
            <motion.article
              key={job.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid gap-y-3 md:grid-cols-[9.5rem_1fr] md:gap-x-8"
            >
              {/* Left rail: period + status */}
              <div className="md:pt-1">
                <div className="font-mono text-sm text-muted">{job.period}</div>
                {job.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Current
                  </span>
                )}
              </div>

              {/* Right: the timeline entry */}
              <div className="relative border-l border-border pb-12 pl-7 last:pb-0 md:pl-9">
                <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-bg" />

                <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1 font-medium text-accent">
                  {job.company}
                  <span className="text-muted"> · {job.location}</span>
                </p>

                <ul className="mt-4 space-y-3">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
