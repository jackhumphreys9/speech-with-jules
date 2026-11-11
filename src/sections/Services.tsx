import { Block, type BlockShape } from "../components/Block";
import { Section } from "../components/Section";
import { StarList } from "../components/StarList";
import type { StarPlacement } from "../components/Star";
import { scheduling, serviceCategories, servicesHeading } from "../content/services";
import { textOn } from "../styles/palette";
import styles from "./Services.module.css";

const STARS: StarPlacement[] = [
  { variant: 6, size: 66, top: "4%", right: "8%", spin: 0.15 },
  { variant: 3, size: 32, top: "38%", left: "1.5%", spin: -0.3, delay: 100 },
  { variant: 2, size: 50, top: "62%", right: "2%", spin: 0.2, delay: 200, desktopOnly: true },
  { variant: 4, size: 30, top: "92%", left: "10%", spin: 0.25, delay: 300 },
];

const SHAPES: BlockShape[] = [0, 2, 1, 3];
const TILTS = [-1, 1, 0.8, -0.8];

export function Services() {
  return (
    <Section id="services" title="Services" titleColor="green" stars={STARS}>
      <h3 className={styles.heading}>{servicesHeading}</h3>

      <div className={styles.grid}>
        {serviceCategories.map((category, index) => (
          <Block
            key={category.name}
            color={category.color}
            shape={SHAPES[index % SHAPES.length]}
            tilt={TILTS[index % TILTS.length]}
            className={styles.category}
          >
            <h4
              className={`${styles.chip} ${textOn[category.color] === "white" ? styles.chipLight : ""}`}
              style={{ background: `var(--${category.color})` }}
            >
              {category.name}
            </h4>
            <StarList items={category.services} />
          </Block>
        ))}
      </div>

      <Block color="star" filled shape={2} className={styles.scheduling}>
        <h3>{scheduling.heading}</h3>
        <p>{scheduling.body}</p>
      </Block>
    </Section>
  );
}
