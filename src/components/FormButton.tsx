import type { ReactNode } from "react";
import { INTEREST_FORM_URL } from "../content/links";
import star from "../assets/stars/star-1.png";
import styles from "./FormButton.module.css";

interface FormButtonProps {
  size?: "large" | "small";
  children: ReactNode;
}

export function FormButton({ size = "large", children }: FormButtonProps) {
  return (
    <a
      href={INTEREST_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[size]}`}
    >
      <img src={star} alt="" aria-hidden="true" className={styles.star} />
      <span>{children}</span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
