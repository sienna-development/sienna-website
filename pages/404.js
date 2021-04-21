import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import CanvasDraw from "react-canvas-draw";
import changeColour from "../utils/canvasUtils";
import React from "react";

export default function Custom404() {
  const [colour, setColour] = React.useState("#001AFF");
  return (
    <Layout page={"404"}>
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
          
        </div>
    </Layout>
  );
}
