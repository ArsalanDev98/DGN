import React from 'react';
import styles from './Team.module.css';
import teamLine from '/assets/PNG/ROADMAP/Images/highlight.png';
import TeamIcons from '../TeamIcons/TeamIcons';


const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <h1>Meet Our Team</h1>
        <img src={teamLine} alt="team line" className={styles.teamLineImage} />
        <TeamIcons />
      </div>
    </section>
  );
};

export default Team;
