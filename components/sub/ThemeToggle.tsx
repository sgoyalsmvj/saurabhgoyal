"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: theme is only known on the client.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none"
    >
      {mounted ? (
        isDark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />
      ) : (
        <span className="block h-[18px] w-[18px]" />
      )}
    </button>
  );
}
