import React from "react";
import styles from "./Roadmap.module.css";
import roadmapImage from "/assets/NewWeb/Background/RoadmapBackground.png";

const Roadmap: React.FC = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapContainer}>
        <img src={roadmapImage} alt="roadmap" className={styles.roadmapImage} />
      </div>
    </section>
  );
};

export default Roadmap;
