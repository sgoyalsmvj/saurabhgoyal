import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import { socials } from "@/constants";

const icons: Record<string, IconType> = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
  Email: FiMail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-ink">
            Saurabh<span className="text-accent">.</span>
          </a>
          <p className="mt-1 font-mono text-xs text-muted">Built with Next.js &amp; Tailwind CSS.</p>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = icons[s.name];
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="container-page pb-8 font-mono text-xs text-muted/70">
        © {year} Saurabh Goyal
      </div>
    </footer>
  );
}
