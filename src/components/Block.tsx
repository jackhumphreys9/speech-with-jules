import type { CSSProperties, ElementType, ReactNode } from "react";
import { textOn, type PaletteColor } from "../styles/palette";
import styles from "./Block.module.css";

export type BlockShape = 0 | 1 | 2 | 3;

interface BlockProps {
  color: PaletteColor;
  /** Solid color fill. Otherwise a white block with a colored border and shadow. */
  filled?: boolean;
  /** Picks one of the uneven corner presets so neighbouring blocks don't match. */
  shape?: BlockShape;
  /** Rotation in degrees. Keep small (under ~2) on blocks holding paragraphs. */
  tilt?: number;
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Block({
  color,
  filled = false,
  shape = 0,
  tilt = 0,
  as: Tag = "div",
  id,
  className,
  children,
}: BlockProps) {
  const style = {
    "--block-color": `var(--${color})`,
    "--tilt": `${tilt}deg`,
  } as CSSProperties;

  const classes = [
    styles.block,
    styles[`shape${shape}`],
    filled ? styles.filled : styles.outline,
    filled && textOn[color] === "white" ? styles.lightText : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag id={id} className={classes} style={style}>
      {children}
    </Tag>
  );
}
