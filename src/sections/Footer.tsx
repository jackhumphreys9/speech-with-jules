import star from "../assets/stars/star-3.png";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={star} alt="" aria-hidden="true" className={styles.star} />
      <p>&copy; {new Date().getFullYear()} Speech with Jules</p>
      <img src={star} alt="" aria-hidden="true" className={styles.star} />
    </footer>
  );
}
