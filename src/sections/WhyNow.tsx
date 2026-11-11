import { Block } from "../components/Block";
import { Section } from "../components/Section";
import type { StarPlacement } from "../components/Star";
import { ASHA_BILLING_CODES_URL } from "../content/links";
import { whyNow } from "../content/whyNow";
import styles from "./WhyNow.module.css";

const STARS: StarPlacement[] = [
  { variant: 1, size: 64, top: "12%", left: "5%", spin: -0.16, desktopOnly: true },
  { variant: 4, size: 32, top: "18%", right: "10%", spin: 0.28, delay: 150 },
  { variant: 5, size: 46, top: "80%", right: "4%", spin: -0.2, delay: 300 },
];

export function WhyNow() {
  return (
    <Section id="why-now" title="Why Now" titleColor="red" titleTilt={1.5} stars={STARS}>
      <Block color="blue" filled shape={3} className={styles.card}>
        <h3 className={styles.question}>{whyNow.question}</h3>
        <p>{whyNow.answer}</p>
        <a className={styles.link} href={ASHA_BILLING_CODES_URL} target="_blank" rel="noopener noreferrer">
          {whyNow.ashaLinkLabel}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      </Block>
    </Section>
  );
}
