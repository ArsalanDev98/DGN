import React from "react";
import styles from "./Team.module.css";
import TeamInfo from "./TeamInfo"; // Import the new TeamInfo component

const Team: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <div className="commonContainer">
        <div className={styles.teamContainer}>
          <h1>Meet the team</h1> {/* Updated heading */}
          <p className={styles.teamParagraph}>
            Our philosophy is simple; hire great people and give them the
            resources and support to do their best work.
          </p>{" "}
          {/* Added paragraph */}
          <div className={styles.teamIconsWrapper}>
            <TeamInfo /> {/* Use TeamInfo instead of TeamIcons */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
