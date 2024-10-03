import React from "react";
import styles from "./Incentive.module.css";

const Incentive: React.FC = () => {
  return (
    <section className={styles.incentiveSection}>
      <div className="commonContainer">
        <div className={styles.incentiveContainer}>
          <h1>Incentive Program</h1>
          <h2 className={styles.subTitle}>
            We offer an attractive revenue-reward model
          </h2>
          <div className={styles.incentiveContent}>
            <div className={styles.incentiveItem}>
              <h3>3% Cash Out Rake:</h3>
              <p>
                Distributed among holders of 1% of our tokens. As our revenue
                grows, this will extend to all holders of $DGN.
              </p>
            </div>
            <div className={styles.incentiveItem}>
              <h3>20% Profit Share:</h3>
              <p>
                For anyone who refers a group to add our bot, passive for life.
              </p>
            </div>
            <div className={styles.incentiveItem}>
              <h3>20% Payout Share:</h3>
              <p>
                For group owners who integrate our bot, applicable to all
                payouts within their group.
              </p>
            </div>
          </div>
          <div className={styles.incentiveImageContainer}>
            <img src="/assets/NewWeb/Assets/Incentive.png" alt="Incentive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incentive;
