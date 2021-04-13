import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Sienna</h1>
      <ul className={styles.nav}>
        <li>
          <HeaderLink href="/">
            <a>Home</a>
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="/projects">
            <a>Projects</a>
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="/services">
            <a>Services</a>
          </HeaderLink>
        </li>
        <li>
          <HeaderLink href="/contact">
            <a>Contact</a>
          </HeaderLink>
        </li>
      </ul>
    </header>
  );
}
