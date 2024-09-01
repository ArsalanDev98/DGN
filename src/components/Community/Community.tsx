import React from 'react';
import styles from './Community.module.css';
import xIcon from '/assets/PNG/HOMEPAGE/Icons/x.png';
import telegramIcon from '/assets/PNG/HOMEPAGE/Icons/telegram.png';
import emailIcon from '/assets/PNG/HOMEPAGE/Icons/email.png';
import highlightImage from '/assets/PNG/ROADMAP/Images/highlight.png';

const Community: React.FC = () => {
  return (
    <section className={styles.communitySection}>
      <div className={styles.communityContainer}>
        <div className={styles.communityContent}>
          <div className={styles.textContent}>
            <h2>Join Our Community</h2>
            <img src={highlightImage} alt="highlight" className={styles.highlightImage} />
            <p>
              Discover the exciting features of Bet Lounge and how it can enhance your Telegram group chats with its unique gamification match bot.
            </p>
          </div>
          <div className={styles.iconsContent}>
            <a href="https://twitter.com/BetLoungePvP" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className={styles.icon} />
            </a>
            <a href="https://t.me/BetLoungePvP" target="_blank" rel="noopener noreferrer">
              <img src={telegramIcon} alt="Telegram" className={styles.icon} />
            </a>
            <a href="mailto:betloungepvp@gmail.com">
              <img src={emailIcon} alt="Email" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
