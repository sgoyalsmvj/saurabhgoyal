"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/constants";
import { fadeUp, stagger } from "@/utils/motion";
import SkillText from "../sub/SkillText";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SkillText />
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="mt-12 divide-y divide-border border-y border-border"
          >
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid gap-x-8 gap-y-3 py-5 md:grid-cols-[11rem_1fr]"
              >
                <dt className="font-mono text-sm uppercase tracking-wider text-muted md:pt-1">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
