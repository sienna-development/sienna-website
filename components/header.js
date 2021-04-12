import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Sienna</h1>
      <ul className={styles.nav}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>Projects</li>
        <li className={styles.navItem}>Services</li>
        <li className={styles.navItem}>Contact</li>
      </ul>
    </header>
  );
}
