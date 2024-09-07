import React from "react";
import styles from "./Incentive.module.css";
import TeamInfo from "../Team/TeamInfo";

const Incentive: React.FC = () => {
  return (
    <section className={styles.incentiveSection}>
      <div className="commonContainer">
        <div className={styles.incentiveContainer}>
          <h1>Incentive Program</h1>
          <h2 className={styles.subTitle}>Earn 20% Commission</h2>
          <p className={styles.introText}>
            Refer a group and earn 20% of all commissions from its profits for
            life. Group owners also receive 20% of profits from groups they own
            with the bot. Contact us if you're interested in partnering.
          </p>
          <div className={styles.incentiveImageContainer}>
            <img src="/assets/NewWeb/Assets/Incentive.png" alt="Incentive" />
          </div>
          <TeamInfo />
        </div>
      </div>
    </section>
  );
};

export default Incentive;
