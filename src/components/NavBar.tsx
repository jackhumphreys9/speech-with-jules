import logo from "../assets/logo.png";
import { FormButton } from "./FormButton";
import styles from "./NavBar.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#why-now", label: "Why Now" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className={styles.header}>
      <nav aria-label="Main" className={styles.nav}>
        <a href="#top" className={styles.brand}>
          <img src={logo} alt="Speech with Jules, back to top" width={1431} height={778} />
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className={styles.cta}>
          <FormButton size="small">Interest Form</FormButton>
        </div>
      </nav>
    </header>
  );
}
