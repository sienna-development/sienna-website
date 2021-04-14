import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";

export default function Header({ transparent }) {
  return (
    <header
      className={transparent ? styles.headerTransparent : styles.headerOpaque}
    >
      <h1 className={styles.heading}>Sienna</h1>
      <nav className={styles.nav}>
        <HeaderLink href="/">
          <a>Home</a>
        </HeaderLink>
        <HeaderLink href="/projects">
          <a>Projects</a>
        </HeaderLink>
        <HeaderLink href="/services">
          <a>Services</a>
        </HeaderLink>
        <HeaderLink href="/contact">
          <a>Contact</a>
        </HeaderLink>
      </nav>
    </header>
  );
}
