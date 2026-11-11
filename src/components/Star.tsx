import { useRef, type CSSProperties } from "react";
import { useInView } from "../hooks/useInView";
import star1 from "../assets/stars/star-1.png";
import star2 from "../assets/stars/star-2.png";
import star3 from "../assets/stars/star-3.png";
import star4 from "../assets/stars/star-4.png";
import star5 from "../assets/stars/star-5.png";
import star6 from "../assets/stars/star-6.png";
import styles from "./Star.module.css";

// The six stars cut straight out of the logo, left to right.
// 1 & 6 are large (77px), 2 & 5 medium (53px), 3 & 4 small (43px) at native size.
const STAR_IMAGES = [star1, star2, star3, star4, star5, star6] as const;

export type StarVariant = 1 | 2 | 3 | 4 | 5 | 6;

export interface StarPlacement {
  variant: StarVariant;
  /** Width in px. */
  size: number;
  top: string;
  left?: string;
  right?: string;
  /** Degrees of rotation per pixel scrolled; negative spins the other way. */
  spin?: number;
  /** Pop-in delay in ms, to stagger stars that appear together. */
  delay?: number;
  /** Hide on small screens where it would crowd the content. */
  desktopOnly?: boolean;
}

export function Star({ variant, size, top, left, right, spin = 0.12, delay = 0, desktopOnly = false }: StarPlacement) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  const style = {
    top,
    left,
    right,
    "--size": `${size}px`,
    "--spin": spin,
    "--delay": `${delay}ms`,
  } as CSSProperties;

  const classes = [styles.pop, inView ? styles.visible : null, desktopOnly ? styles.desktopOnly : null]
    .filter(Boolean)
    .join(" ");

  return (
    <span ref={ref} aria-hidden="true" className={classes} style={style}>
      <img src={STAR_IMAGES[variant - 1]} alt="" className={styles.spin} />
    </span>
  );
}
