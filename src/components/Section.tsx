import type { ReactNode } from "react";
import type { PaletteColor } from "../styles/palette";
import { SectionTitle } from "./SectionTitle";
import { Star, type StarPlacement } from "./Star";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  title: string;
  titleColor: PaletteColor;
  titleTilt?: number;
  stars?: StarPlacement[];
  children: ReactNode;
}

export function Section({ id, title, titleColor, titleTilt, stars = [], children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={styles.section}>
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      <div className={styles.inner}>
        <SectionTitle id={titleId} color={titleColor} tilt={titleTilt}>
          {title}
        </SectionTitle>
        {children}
      </div>
    </section>
  );
}
