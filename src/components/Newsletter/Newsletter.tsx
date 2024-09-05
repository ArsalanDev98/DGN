import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterLeft}>
            <h2>Join Our Newsletter! </h2>
            <p>
              Enjoying the bot? Stay updated with the latest news and updates
              for Decentralized Gaming Network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
