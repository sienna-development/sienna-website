import Layout from "../components/layout";
import styles from "../styles/services.module.css";

export default function Services() {
  return (
    <Layout page={"Services"}>
      <div className={styles.content}>
        <p className={styles.introText}>
          We offer start to finish tech solution services that can be loosely
          broken down into the following three areas. Some projects need work in
          all of these groups, while others may not. Perhaps you’ve done some of
          this work already, or you have another partner ready to help in one or
          more areas. We are happy to discuss and advise on a bespoke programme
          to get the most out of your budget and time.
        </p>

        <h2 className={styles.serviceTitle}>Discover and Define</h2>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyText}>
            <p>
              For those who think a tech solution may be needed but aren’t sure
              how to get started. Through workshops and user research we'll help
              you explore your service or product, and make sure that the
              problem you are approaching is the right one.
            </p>
            <p>
              Outputs: a defined problem area supported by user and organisation
              research insights - ready for a solution to be designed and
              validated by prototype.
            </p>
          </div>
          <aside className={styles.detailContainer}>
            <p className={styles.details}>Time: 2-4 weeks</p>
            <p className={styles.details}>Cost: £3k - £6k</p>
          </aside>
        </div>

        <h2 className={styles.serviceTitle}>Design and Validate</h2>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyText}>
            <p>
              When you know what you need to build, you want to do it right.
              Through a series of workshops we help to design your product or
              service with a user-centric focus. Validation through usability
              testing ensures that your solution is accessible and works for the
              real users of your application.
            </p>
            <p>
              Outputs: ranging from low-fidelity wireframes to a complete design
              or navigable prototype of your solution. Designs are supported by
              insights and recommendations based on usability testing, and user
              stories that can be taken through to development and delivery.
            </p>
          </div>
          <aside className={styles.detailContainer}>
            <p className={styles.details}>Time: 2-8 weeks</p>
            <p className={styles.details}>Cost: £3k - £12k</p>
          </aside>
        </div>

        <h2 className={styles.serviceTitle}>Develop and Support</h2>
        <div className={styles.bodyContainer}>
          <div className={styles.bodyText}>
            <p>
              Working with your team we'll develop an interactive prototype, MVP
              or fully featured app or website using secure and up-to-date web
              technologies. We can support you in the definition of a solution
              from conception, or realise a pre-conceptualised idea.
            </p>
            <p>
              Outputs: a range of delivery formats whether that be a
              prototype/MVP for proof of concept or a fully featured product for
              launch. Ongoing support and maintenance of your app can be
              arranged according to your requirements.
            </p>
          </div>
          <aside className={styles.detailContainer}>
            <p className={styles.details}>Time: 2-12 weeks</p>
            <p className={styles.details}>Cost: £3k - £20k</p>
          </aside>
        </div>
        <img
          src="/images/green-circle.svg"
          alt="circle"
          className={styles.circle}
        />
      </div>
    </Layout>
  );
}
