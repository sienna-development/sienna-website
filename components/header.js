import styles from "../styles/header.module.css";
import HeaderLink from "../components/headerLink";
import React from "react";
import MobileNav from "./mobileNav";

export default function Header({ transparent }) {
  const [isDesktop, setDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1000);
    }
    // eslint-disable-next-line
  }, []);

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 1000);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <header
      className={transparent ? styles.headerTransparent : styles.headerOpaque}
    >
      <h1 className={styles.heading}>Sienna</h1>
      {isDesktop ? (
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
      ) : (
        <MobileNav />
      )}
    </header>
  );
}
