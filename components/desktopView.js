import Image from "next/image";
import styles from "../styles/desktopView.module.css"

export default function DesktopView({ src, alt }) {
  return (
    <div className={styles.desktopContainer}>
      <Image
        src="/images/desktop-bar.svg"
        width={672}
        height={22}
        layout="responsive"
        alt="desktop browser top bar"
      />
      <Image
        src={src}
        width={672}
        height={312}
        layout="responsive"
        alt={alt}
      />
    </div>
  );
}
