import React from 'react';
import styles from './Roadmap.module.css';
import highlightImage from '/assets/PNG/ROADMAP/Images/highlight.png';
import roadmapImage from '/assets/PNG/ROADMAP/Images/map.png';


const Roadmap: React.FC = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapContainer}>
        <h1 className={styles.roadmapHeader}>Decentralized Gaming Network Roadmap</h1>
        <img src={highlightImage} alt="highlight" className={styles.highlightImage} />
        <img src={roadmapImage} alt="roadmap" className={styles.roadmapImage} />
      </div>
    </section>

  );
};

export default Roadmap;
