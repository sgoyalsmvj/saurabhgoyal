import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "@/constants";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/60 md:p-8">
      <h3 className="font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent">
        {project.title}
      </h3>

      <p className="mt-3 leading-relaxed text-muted">{project.blurb}</p>

      <div className="mb-6 mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-5 border-t border-border pt-5 font-mono text-sm">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
          >
            Live <FiArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
        {project.code ? (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <FiGithub className="h-4 w-4" /> Code
          </a>
        ) : null}
      </div>
    </article>
  );
}
