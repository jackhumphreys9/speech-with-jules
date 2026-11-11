import { useEffect } from "react";

/**
 * Mirrors window.scrollY into a unitless CSS custom property on <html>
 * so decorations can react to scrolling in pure CSS. Skipped for reduced motion.
 */
export function useScrollVariable(name = "--scroll-y"): void {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let frame = 0;
    const update = () => {
      frame = 0;
      root.style.setProperty(name, String(Math.round(window.scrollY)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [name]);
}
