import React from "react";
import styles from "./Roadmap.module.css";
import roadmapImage from "/assets/NewWeb/Assets/Roadmap.png";

const Roadmap: React.FC = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.subHeader}>ROADMAP</h2>
          <h1 className={styles.header}>
            Decentralized Gaming Network Roadmap
          </h1>
        </div>
        <img src={roadmapImage} alt="roadmap" className={styles.roadmapImage} />
      </div>
    </section>
  );
};

export default Roadmap;
