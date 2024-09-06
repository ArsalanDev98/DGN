import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <section className={styles.footerSection}>
      <div className="commonContainer">
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            © 2024 Decentralized Gaming Network. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
