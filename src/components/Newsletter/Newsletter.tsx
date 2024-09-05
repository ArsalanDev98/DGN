import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterLeft}>
            <h2>Subscribe to our Newsletter!</h2>
            <p>
              Stay up-to-date with evrything happening in the DGN community!
            </p>
          </div>
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
