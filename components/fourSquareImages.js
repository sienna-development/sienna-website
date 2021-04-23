import Image from "next/image";
import styles from "../styles/fourSquareImages.module.css";

export default function FourSquareImages({
  imageOneSrc,
  imageOneAlt,
  imageTwoSrc,
  imageTwoAlt,
  imageThreeSrc,
  imageThreeAlt,
  imageFourSrc,
  imageFourAlt,
}) {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Image
            src={imageOneSrc}
            width={336}
            height={160}
            layout="responsive"
            alt={imageOneAlt}
          />
        </div>
        <div className={styles.cell}>
          <Image
            src={imageTwoSrc}
            width={336}
            height={160}
            layout="responsive"
            alt={imageTwoAlt}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <Image
            src={imageThreeSrc}
            width={336}
            height={160}
            layout="responsive"
            alt={imageThreeAlt}
          />
        </div>
        <div className={styles.cell}>
          <Image
            src={imageFourSrc}
            width={336}
            height={160}
            layout="responsive"
            alt={imageFourAlt}
          />
        </div>
      </div>
    </div>
  );
}
