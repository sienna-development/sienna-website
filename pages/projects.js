import Layout from "../components/layout";
import styles from "../styles/projects.module.css";
import NavbarJags from "../components/navbarJags";
import DesktopView from "../components/desktopView";
import MobileView from "../components/mobileView";
import FourSquareImages from "../components/fourSquareImages";

export default function Projects() {
  return (
    <Layout page={"Projects"}>
      <NavbarJags />
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
          <FourSquareImages
            imageOneSrc={"/images/jlu-miro.png"}
            imageOneAlt={"Miro board screenshot JLU"}
            imageTwoSrc={"/images/jlu-figma.png"}
            imageTwoAlt={"Figma prototype screenshot"}
            imageThreeSrc={"/images/jlu-thinkific.png"}
            imageThreeAlt={"LMS prototype screenshot"}
            imageFourSrc={"/images/jlu-hackmd.png"}
            imageFourAlt={"HackMD diary screenshot"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>Just Like Us</h2>
          <p>
            A research and prototyping project for LGBT+ charity Just Like Us
            focusing on defining content and functionality for new resource
            database and e-learning platforms.
          </p>
          <p>
            Made with Miro, Figma, HackMD, Thinkific, LearnDash and Google docs.
          </p>
          <p>This project was part of the Catalyst Dev2A programme.</p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
          <FourSquareImages
            imageOneSrc={"/images/dlp-miro-overview.png"}
            imageOneAlt={"Miro board screenshot DLP"}
            imageTwoSrc={"/images/dlp-mobile-proto.png"}
            imageTwoAlt={"Mobile prototype screenshot"}
            imageThreeSrc={"/images/dlp-projmgmt.png"}
            imageThreeAlt={"Project Management Curriculum"}
            imageFourSrc={"/images/dlp-problem-statement.png"}
            imageFourAlt={"Miro problem statements"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>Discovery Learning Programme</h2>
          <p>
            A discovery programme with 9 charity groups to train staff in
            digital service design and prepare for funding applications. Design
            sprint workshop facilitation over six weeks, with tailored coaching
            calls and product management documentation.
          </p>
          <p>Made with Miro, GitHub and Google docs.</p>
          <p>This project was part of a CAST/Catalyst programme.</p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
          <DesktopView
            src={"/images/tool-for-schools.png"}
            alt={"CyberSafe Tool for Schools website screenshot"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>CyberSafe Tool for Schools</h2>
          <p>
            A survey app for primary schools in Ireland to measure their
            ‘cybersafety’ against a series of topics.
          </p>
          <p>Made with Gatsby, Firebase and Netlify CMS.</p>
          <p>
            This project was built for the Irish organisation, CyberSafeKids.
          </p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
          <DesktopView
            src={"/images/csi-family-quiz.png"}
            alt={"CyberSafe Family Quiz website screenshot"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>CyberSafe Family Quiz</h2>
          <p>
            A quiz for families to take part in to determine their cybersafety
            at home.{" "}
          </p>
          <p>Made with ReactJS</p>
          <p>
            This project was built for the Irish organisation, CyberSafeKids.
          </p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
          <MobileView
            src={"/images/cdt-resourcecentre.png"}
            alt={"CDT Resource Centre app screenshot"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>Resource Centre</h2>
          <p>
            An MVP built for two charities while working on a collaborative
            design and learning programme 'Collaborative Digital Training' with
            CAST as part of COVID-19 response.
          </p>
          <p>
            Resource Centre is a companion app to online video learning sessions
            where charities can post info and links to session resources that
            are accessible to participants.
          </p>
          <p>Made with ReactJS.</p>
        </div>
      </section>
      <section className={styles.projectContainer}>
        <div className={styles.imageColumn}>
            <MobileView
              src={"/images/mbl-dashboard.png"}
              alt={"MBL Service Recomendation App"}
            />
          <MobileView
            src={"/images/mbl-youthvote.png"}
            alt={"MBL Youth Vote App"}
          />
          <MobileView
            src={"/images/mbl-youthcoin.png"}
            alt={"MBL Youth Coin App"}
          />
        </div>
        <div className={styles.textColumn}>
          <h2>My Best Life (Phase 2)</h2>
          <p>
            A range of apps prototyped in collaboration with three youth
            charities as part a definition programme with New Philanthropy
            Capital.
          </p>
          <p>
            The 3 apps provide different methods of engagement with young
            people. We conducted usability testing with various groups of yp to
            inform the next phase of the programme.
          </p>
          <p>
            Youth Coin and Youth Vote focus on involving yp in decision making
            processes. The service recommender app is a space that personalises
            the search for available youth services.
          </p>
          <p>Made with Miro and Figma.</p>
        </div>
      </section>
    </Layout>
  );
}
