import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>© 2024 Bet Lounge. All Rights Reserved</p>
      </div>
    </section>

  );
};

export default Footer;
