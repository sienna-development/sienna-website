import Layout from "../components/layout";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
      <Layout page={"Contact"} className={styles.page}>

        <div className={styles.info}> 
            <div className={styles.who}>
             <h2 className={styles.contactTitle}>Sienna are...</h2>
             <p className={styles.contactDeets}>Bethany Scott and Jamie Carter</p>
            </div>

            <div className={styles.email}>
              <h2 className={styles.contactTitle}>Contact Us</h2>
              <p className={styles.contactDeets}>info@siennadev.com</p>
            </div>

            <div className={styles.images}>
              <img src="/images/bs-profile.png" />
              <img src="/images/jc-profile.png" className={styles.jcImg}/>
            </div>
        </div>
        <img src="/images/waves.svg" className={styles.waves}/>
    
      </Layout>
  );
}
