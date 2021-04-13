import Layout from "../components/layout";
import CanvasDraw from "react-canvas-draw";
import changeColour from "../utils/canvasUtils";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  const [colour, setColour] = React.useState("#001AFF");

  return (
    <>
      <Layout page={"Home"}>
        <CanvasDraw
          className={styles.canvas}
          onChange={() => setColour(changeColour())}
          lazyRadius={0}
          brushRadius={100}
          hideGrid={true}
          canvasWidth={"100vw"}
          canvasHeight={"100vh"}
          brushColor={colour}
          hideInterface={false}
        />
        <div className={styles.taglineContainer}>
          <h2 className={styles.tagline}>
            Sienna are
            <br />
            Developers
            <br />
            for Social
            <br />
            Good.
          </h2>
        </div>
      </Layout>
    </>
  );
}
