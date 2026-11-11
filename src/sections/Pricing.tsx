import { Block, type BlockShape } from "../components/Block";
import { Section } from "../components/Section";
import type { StarPlacement } from "../components/Star";
import {
  costsFinePrint,
  lissFunding,
  noInsurance,
  otherCosts,
  otherCostsHeading,
  slidingScaleDetails,
  slidingScaleHeading,
  tiers,
} from "../content/pricing";
import type { PaletteColor } from "../styles/palette";
import styles from "./Pricing.module.css";

const STARS: StarPlacement[] = [
  { variant: 5, size: 48, top: "3%", right: "10%", spin: -0.18 },
  { variant: 1, size: 64, top: "24%", left: "2%", spin: 0.16, delay: 150, desktopOnly: true },
  { variant: 3, size: 30, top: "48%", right: "3%", spin: 0.3, delay: 100 },
  { variant: 6, size: 58, top: "70%", left: "3%", spin: -0.2, delay: 250, desktopOnly: true },
  { variant: 4, size: 32, top: "94%", right: "14%", spin: 0.24, delay: 350 },
];

const SHAPES: BlockShape[] = [0, 1, 2, 3, 1];
const TILTS = [-1.5, 1.2, -0.8, 1.5, -1.2];
const COST_COLORS: PaletteColor[] = ["blue", "green", "pink", "purple"];

export function Pricing() {
  return (
    <Section id="pricing" title="Pricing" titleColor="pink" titleTilt={-1.5} stars={STARS}>
      <Block color="red" shape={1} className={styles.stack}>
        <h3 className={styles.displayHeading}>{noInsurance.heading}</h3>
        <p>{noInsurance.body}</p>
      </Block>

      <div className={styles.stack}>
        <h3 className={`${styles.displayHeading} ${styles.onPage}`}>{slidingScaleHeading}</h3>
        <ul className={styles.tiers}>
          {tiers.map((tier, index) => (
            <Block
              as="li"
              key={tier.name}
              color={tier.color}
              shape={SHAPES[index]}
              tilt={TILTS[index]}
              className={styles.tier}
            >
              {tier.price ? (
                <>
                  <span className={styles.tierName}>{tier.name}</span>
                  <span className={styles.tierPrice}>{tier.price}</span>
                  <span className={styles.tierSession}>{tier.session}</span>
                </>
              ) : (
                <span className={styles.tierPrice}>{tier.name}</span>
              )}
              <span className={styles.tierSpots}>{tier.spots}</span>
            </Block>
          ))}
        </ul>
      </div>

      <div className={styles.stack}>
        <h3 className={`${styles.displayHeading} ${styles.onPage}`}>{otherCostsHeading}</h3>
        <ul className={styles.costs}>
          {otherCosts.map((cost, index) => (
            <Block
              as="li"
              key={cost.name}
              color={COST_COLORS[index % COST_COLORS.length]}
              shape={SHAPES[(index + 2) % SHAPES.length]}
              className={styles.cost}
            >
              <div className={styles.costHeader}>
                <h4 className={styles.costName}>{cost.name}</h4>
                <span className={styles.costPrice}>{cost.price}</span>
              </div>
              <p className={styles.costDescription}>{cost.description}</p>
              {cost.note && <p className={styles.costNote}>{cost.note}</p>}
            </Block>
          ))}
        </ul>
        <p className={styles.finePrint}>{costsFinePrint}</p>
      </div>

      <Block color="darkgreen" shape={3} className={styles.stack}>
        {slidingScaleDetails.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Block>

      <Block color="green" filled shape={0} tilt={-0.8} className={styles.stack}>
        <h3 className={styles.displayHeading}>{lissFunding.heading}</h3>
        <p className={styles.strong}>{lissFunding.body}</p>
      </Block>
    </Section>
  );
}
