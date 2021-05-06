import Image from "next/image";
import styles from "../styles/mobileView.module.css";

export default function MobileView({ src, alt }) {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.screen}>
        <Image src={src} layout="responsive" width={150} height={255} alt={alt} />
      </div>
    </div>
  );
}

