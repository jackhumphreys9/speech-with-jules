import { Block } from "../components/Block";
import { FormButton } from "../components/FormButton";
import { Section } from "../components/Section";
import type { StarPlacement } from "../components/Star";
import { contact } from "../content/contact";
import { EMAIL } from "../content/links";
import styles from "./Contact.module.css";

const STARS: StarPlacement[] = [
  { variant: 2, size: 52, top: "6%", right: "8%", spin: 0.2 },
  { variant: 1, size: 66, top: "44%", left: "2%", spin: -0.18, delay: 150, desktopOnly: true },
  { variant: 4, size: 30, top: "66%", right: "3%", spin: 0.3, delay: 100 },
  { variant: 6, size: 64, top: "86%", left: "10%", spin: 0.16, delay: 250 },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact" titleColor="blue" titleTilt={1.5} stars={STARS}>
      <Block color="darkgreen" filled shape={0} tilt={-0.6} className={styles.card}>
        <FormButton>Fill out the interest form</FormButton>
        <p className={styles.thanksLine}>{contact.thanks}</p>
        <p>{contact.responseTime}</p>
        <p>
          {contact.emailLead} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </Block>
    </Section>
  );
}
