"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import { profile, socials } from "@/constants";
import { fadeUp, stagger } from "@/utils/motion";
import ContactForm from "../sub/Email";

const icons: Record<string, IconType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
  Email: FiMail,
};

export default function ContactMe() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="eyebrow">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 max-w-3xl font-display text-display-sm font-extrabold text-ink"
          >
            Let&apos;s build something.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-xl text-muted">
            Open to full-time roles and interesting problems. The fastest way to reach me is email —
            or drop a note below.
          </motion.p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Direct contact + socials */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 font-display text-2xl font-bold text-ink transition-colors hover:text-accent md:text-3xl"
              >
                <span className="break-all">{profile.email}</span>
                <FiArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <ul className="flex flex-col gap-3">
                {socials
                  .filter((s) => s.name !== "Email")
                  .map((s) => {
                    const Icon = icons[s.name];
                    return (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-muted transition-colors hover:text-accent"
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-mono text-sm">{s.handle}</span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </motion.div>

            {/* Message form */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-6 md:p-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
