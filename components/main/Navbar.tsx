"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/constants";
import ThemeToggle from "../sub/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-extrabold tracking-tight text-ink"
        >
          Saurabh<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
