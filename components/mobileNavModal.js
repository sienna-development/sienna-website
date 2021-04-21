import styles from "../styles/mobileNavModal.module.css";
import HeaderLink from "../components/headerLink";
import changeColour from "../utils/canvasUtils";

export default function MobileNavModal({ toggleMenuModal, menuModalVisible }) {
  return (
    <nav className={styles.mobileNavModal}>
      <div className={styles.modalHeader}>
        <button onClick={() => toggleMenuModal(!menuModalVisible)}>
          <img
            className={styles.leaveModalIcon}
            src={"/images/x-out.svg"}
            alt="close menu"
          />
        </button>
      </div>
      <div className={styles.modalBody}>
        <HeaderLink href="/">
          <a style={{ color: changeColour(), fontSize: "3rem" }}>Home</a>
        </HeaderLink>
        <HeaderLink href="/projects">
          <a style={{ color: changeColour(), fontSize: "3rem" }}>Projects</a>
        </HeaderLink>
        <HeaderLink href="/services">
          <a style={{ color: changeColour(), fontSize: "3rem" }}>Services</a>
        </HeaderLink>
        <HeaderLink href="/contact">
          <a style={{ color: changeColour(), fontSize: "3rem" }}>Contact</a>
        </HeaderLink>
      </div>
    </nav>
  );
}
