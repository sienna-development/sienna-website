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
      Discover and Define
</h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
                  For those who think a tech solution may be what they need but aren’t sure how to get started. 
                  Through workshops, and user research we help you explore your service or product and make sure that the problem you are approaching is the right one.  
                   <article className={styles.outputs}>
                     Outputs: a defined and problem area supported by user and organisation research insights, ready to be designed and validated by prototype.
                   </article>
            </p>
                <aside className={styles.details}>
                  Time: 2-4 weeks
                  Cost: £3k - £6k
                </aside>
      </div>
       
       
<h2 className={styles.serviceTitle}>
      Design and Validate
</h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
                  When you know what you need to build, you want to do it right. Through a series of workshops we help to design your product or service with a user-centric focus. 
                  Validation through usability testing ensures that your solution is accessible and works for the real users of your application.
                  <article className={styles.outputs}>
                    Outputs: ranging from low-fidelity wireframes to a complete design or navigable prototype of your solution. 
                    Designs are supported by insights and recommendations based on usability testing, and user stories that can be taken through to development and delivery.
                  </article>
            </p>
                <aside className={styles.details}>
                  Time: 2-8 weeks
                  Cost: £3k - £12k
                </aside>
      </div>

<h2 className={styles.serviceTitle}>
      Develop and Support
</h2>
      <div className={styles.bodyContainer}>
            <p className={styles.bodyText}>
                  Working with your team we develop an interactive prototype, MVP or fully featured app or website using secure and up-to-date web technologies. 
                  We can support you in the definition of a solution from conception, as well as, the production of a pre-conceptualised idea.
                  <article className={styles.outputs}>
                        Outputs: a range of delivery formats whether that be a prototype/MVP for proof of concept or a fully featured product for launch. 
                        Ongoing support and maintenance of your app can be arranged according to your requirements.
                  </article>
            </p>
                  <aside className={styles.details}>
                        Time: 2-12 weeks
                        Cost: £3k - £20k
                  </aside>
      </div>
        <img src="/images/green-circle.svg" alt="circle" className={styles.circle}/>
        </div>
      </Layout>
  );
}
