import julesPhoto from "../assets/jules.jpg";
import cornerStar from "../assets/stars/star-6.png";
import { Block } from "../components/Block";
import { Section } from "../components/Section";
import { StarList } from "../components/StarList";
import type { StarPlacement } from "../components/Star";
import { about } from "../content/about";
import { LINKEDIN_URL } from "../content/links";
import styles from "./About.module.css";

const STARS: StarPlacement[] = [
  { variant: 2, size: 48, top: "6%", right: "6%", spin: 0.18, desktopOnly: true },
  { variant: 3, size: 30, top: "70%", left: "2%", spin: -0.22, delay: 200 },
  { variant: 6, size: 60, top: "88%", right: "12%", spin: -0.15, delay: 100, desktopOnly: true },
];

export function About() {
  return (
    <Section id="about" title="About" titleColor="purple" stars={STARS}>
      <div className={styles.grid}>
        <div className={styles.photoWrap}>
          <Block color="pink" shape={3} tilt={-2.5} className={styles.photoFrame}>
            <img
              src={julesPhoto}
              alt={about.photoAlt}
              width={720}
              height={720}
              className={styles.photo}
            />
          </Block>
          <img src={cornerStar} alt="" aria-hidden="true" className={styles.cornerStar} />
        </div>

        <Block color="darkgreen" shape={0} className={styles.bio}>
          <h3 className={styles.greeting}>{about.greeting}</h3>
          <p>{about.bio}</p>
          <a className={styles.link} href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            {about.linkedInLabel}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </Block>

        <Block color="blue" shape={2} tilt={1.5} className={styles.credentials}>
          <h3>{about.credentialsHeading}</h3>
          <StarList items={about.credentials} />
        </Block>
      </div>
    </Section>
  );
}
