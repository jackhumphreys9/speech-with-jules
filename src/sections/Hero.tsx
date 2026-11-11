import logo from "../assets/logo.png";
import { FormButton } from "../components/FormButton";
import { Star, type StarPlacement } from "../components/Star";
import styles from "./Hero.module.css";

const STARS: StarPlacement[] = [
  { variant: 1, size: 70, top: "14%", left: "8%", spin: 0.2 },
  { variant: 3, size: 34, top: "58%", left: "4%", spin: -0.25, delay: 150 },
  { variant: 2, size: 46, top: "78%", left: "16%", spin: 0.15, delay: 300, desktopOnly: true },
  { variant: 6, size: 74, top: "20%", right: "7%", spin: -0.2, delay: 100 },
  { variant: 5, size: 44, top: "66%", right: "5%", spin: 0.22, delay: 250 },
  { variant: 4, size: 30, top: "8%", right: "24%", spin: -0.3, delay: 400, desktopOnly: true },
];

export function Hero() {
  return (
    <div id="top" className={styles.hero}>
      {STARS.map((star, index) => (
        <Star key={index} {...star} />
      ))}
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <img src={logo} alt="Speech with Jules" width={1431} height={778} />
        </h1>
        <div className={styles.actions}>
          <FormButton>Fill out the interest form</FormButton>
          <a href="#services" className={styles.secondary}>
            See services
          </a>
        </div>
      </div>
    </div>
  );
}
