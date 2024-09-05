import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutUsContainer}>
        <div className={styles.rightColumn}>
          <img
            src="/assets/NewWeb/Assets/AboutUsTable.svg"
            alt="About Us"
          />
        </div>
        <div className={styles.leftColumn}>
          <h1>About Decentralized Gaming Network</h1>
          <p>
            Decentralized Gaming Network is a unique community interaction concept that gamifies Telegram group chats through a custom gaming bot.
          </p>
          <p>
            We merge luck-based gaming and financial management in a private social setting, fostering community building and excitement during live events.
          </p>
          <p>
            Decentralized Gaming Network allows you and your group to support different sports teams and athletes, create custom pools, escrow, host tournaments and much more at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
