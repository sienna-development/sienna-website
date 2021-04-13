import Layout from "../components/layout";
import styles from "../styles/services.module.css";



export default function Services() {
  return (
      <Layout page={"Services"}>
        <div className={styles.content}>
          <p className={styles.introText}>
          We offer start to finish tech solution services that can be loosely broken down into the following three areas. 
          Some projects need work in all of these groups, while others may not. Perhaps you’ve done some of this work already, or you have another partner ready to help in one or more areas. 
          We are happy to discuss and advise on a bespoke programme to get the most out of your budget and time.
          </p>


            <h2 className={styles.serviceTitle}>
            Discover & Define
            </h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
            For those who think a tech solution may be what they need but aren’t sure how to get started. 
            Through workshops, and user/ organisation research we will help you explore your service or product and make sure that the problem you are approaching is the right one.  
            <p className={styles.bodyText}>
            Outputs: A defined and problem area supported by user and organisation research insights, ready to be designed and validated by prototype.
            </p>
            </p>
                <span className={styles.details}>
                Time: 2-4 weeks
                Cost: £3k - £6k
                </span>
      </div>
       
       
            <h2 className={styles.serviceTitle}>
            Design & Validate
            </h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
            When you know what you need to build, you want to do it right. Through a series of workshops we will help to design your product or service with a user-centric focus. 
            Validation with real users through usability testing ensures that your solution is accessible and works for the real users of your application. 
            Iteration of prototypes based on user feedback ensures that the right features are incuded.
            <p className={styles.bodyText}>
            Outputs: Ranging from low-fidelity wireframes to a complete design or navigable prototype of your solution. 
            Designs are supported by insights and recommendations based on usability testing, and user stories that can be taken through to development and delivery.
            </p>
            </p>
              <span className={styles.details}>
              Time: 2-8 weeks
              Cost: £3k - £12k
              </span>
        </div>


            <h2 className={styles.serviceTitle}>
                Develop & Support
            </h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
            Working with your team we will develop an interactive prototype, MVP or fully featured app or website using secure and up-to-date web technologies. 
            Ongoing support and maintenance of your app can be arranged according to your requirements.
            <p className={styles.bodyText}>
            Outputs: Ranging from low-fidelity wireframes to a complete design or navigable prototype of your solution. 
            Designs are supported by insights and recommendations based on usability testing, and user stories that can be taken through to development and delivery.
            </p>
            </p>
              <span className={styles.details}>
              Time: 2-12 weeks
              Cost: £3k - £20k
              </span>
        </div>
        <img src="/images/green-circle.svg" alt="cirle" className={styles.circle}/>
        </div>
      </Layout>
  );
}
