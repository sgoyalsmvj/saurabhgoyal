"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Diameter of the lens in px. */
const SIZE = 32;

/**
 * A small circular "lens" that trails the pointer and inverts whatever is
 * beneath it via `mix-blend-mode: difference`. It grows over interactive
 * targets and retracts when the pointer leaves the window.
 *
 * Only mounts on fine-pointer devices with motion allowed — touch users and
 * anyone with `prefers-reduced-motion` keep the native cursor untouched.
 */
export default function LensCursor() {
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(0);

  const follow = { damping: 30, stiffness: 350, mass: 0.4 };
  const sx = useSpring(x, follow);
  const sy = useSpring(y, follow);
  const sScale = useSpring(scale, { damping: 22, stiffness: 300 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return; // keep the native cursor

    setEnabled(true);
    const root = document.documentElement;
    root.classList.add("lens-active");

    const interactiveSelector =
      "a, button, input, textarea, select, label, summary, [role='button'], [tabindex]:not([tabindex='-1'])";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - SIZE / 2);
      y.set(e.clientY - SIZE / 2);
      const target = e.target as Element | null;
      const overInteractive = !!target?.closest?.(interactiveSelector);
      scale.set(overInteractive ? 1.9 : 1);
    };
    const onLeave = () => scale.set(0);
    const onEnter = () => scale.set(1);
    const onDown = () => scale.set(0.7);
    const onUp = (e: MouseEvent) => {
      const target = e.target as Element | null;
      scale.set(target?.closest?.(interactiveSelector) ? 1.9 : 1);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.classList.remove("lens-active");
    };
  }, [x, y, scale]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="lens-cursor"
      style={{ x: sx, y: sy, scale: sScale }}
    />
  );
}
