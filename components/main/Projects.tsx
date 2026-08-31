"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/constants";
import { fadeUp, stagger } from "@/utils/motion";
import ProjectCard from "../sub/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Selected projects
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 max-w-3xl font-display text-display-sm font-extrabold text-ink"
          >
            Things I&apos;ve built outside of work.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8">
          <a
            href="https://github.com/sgoyalsmvj?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            More on GitHub <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
