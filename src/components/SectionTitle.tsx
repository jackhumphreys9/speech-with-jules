import type { ReactNode } from "react";
import type { PaletteColor } from "../styles/palette";
import { Block } from "./Block";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  id: string;
  color: PaletteColor;
  tilt?: number;
  children: ReactNode;
}

export function SectionTitle({ id, color, tilt = -2, children }: SectionTitleProps) {
  return (
    <Block as="h2" id={id} color={color} filled shape={1} tilt={tilt} className={styles.title}>
      {children}
    </Block>
  );
}
