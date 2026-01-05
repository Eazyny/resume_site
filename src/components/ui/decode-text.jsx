import React, { useEffect, useMemo, useRef, useState } from "react";

const CHARSET = "abcdefghijklmnopqrstuvwxyz1234567890!@#$^&*()…æ_+-=;[]/~`";

function randChar() {
  const c = CHARSET[Math.floor(Math.random() * CHARSET.length)];
  return Math.random() > 0.5 ? c.toUpperCase() : c;
}

function randomString(len) {
  let out = "";
  for (let i = 0; i < len; i++) out += randChar();
  return out;
}

/**
 * DecodedText
 * - Scrambles text on hover/focus and reveals it progressively.
 *
 * Props:
 * - children: string (recommended)
 * - fromRight: boolean (reveal from right -> left)
 * - speed: number (bigger = slower) default 20 (matches your codepen vibe)
 * - className: string
 */
export default function DecodedText({
  children,
  fromRight = false,
  speed = 15,
  className = "",
}) {
  const original = useMemo(() => {
    // Only supports plain text. If you pass nodes, it’ll stringify weird.
    return typeof children === "string" ? children : String(children ?? "");
  }, [children]);

  const [display, setDisplay] = useState(original);

  const rafRef = useRef(null);
  const runningRef = useRef(false);

  // If the original text changes (rare), update display
  useEffect(() => {
    setDisplay(original);
  }, [original]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const start = () => {
    if (prefersReducedMotion) return;
    if (!original) return;
    if (runningRef.current) return;

    runningRef.current = true;

    const len = original.length;
    const durationMs = (len / speed) * 1000; // same idea as codepen: len/20 seconds

    let startTime = null;
    let lastStep = -1;

    const tick = (t) => {
      if (!startTime) startTime = t;

      const elapsed = t - startTime;
      const progress = Math.min(1, elapsed / durationMs);

      const step = Math.floor(progress * len);

      if (step !== lastStep) {
        lastStep = step;

        const rand = randomString(len);

        let next;
        if (!fromRight) {
          // reveal left -> right
          next = original.slice(0, step) + rand.slice(step);
        } else {
          // reveal right -> left
          const cut = len - step;
          next = rand.slice(0, cut) + original.slice(cut);
        }

        setDisplay(next);
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(original);
        runningRef.current = false;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <span
      className={className}
      onPointerEnter={start}
      onFocus={start} // keyboard users
    >
      {display}
    </span>
  );
}
