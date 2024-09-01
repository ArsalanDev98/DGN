import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.newsletterContainer}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterLeft}>
            <h2>Join Our Newsletter! <span role="img" aria-label="waving hand">👋</span></h2>
            <p>Enjoying the bot? Stay updated with the latest news and updates for Bet Lounge.</p>
            <form className={styles.subscribeForm}>
              <input name="email" autoComplete="off" type="email" placeholder="Enter your email address" className={styles.emailInput} />
              <button type="submit" className={styles.subscribeButton}>Subscribe</button>
            </form>
          </div>
          <div className={styles.newsletterRight}>
            <div className={styles.linksSection}>
              <h3>Join Us</h3>
              <a href="https://t.me/BetLoungePvP" target="_blank" rel="noopener noreferrer">Telegram</a>
              <a href="https://t.me/botloungepvp_bot" target="_blank" rel="noopener noreferrer">Bot</a>
              <a href="https://twitter.com/BetLoungePvP" target="_blank" rel="noopener noreferrer">X</a>
            </div>
            <div className={styles.linksSection}>
              <h3>Chart</h3>
              <a href="https://coinmarketcap.com" target="_blank" rel="noopener noreferrer">CMC</a>
              <a href="https://coingecko.com" target="_blank" rel="noopener noreferrer">Coingecko</a>
              <a href="https://dextools.io" target="_blank" rel="noopener noreferrer">Dextool</a>
            </div>
          </div>
        </div>
      </div>
    </section >

  );
};

export default Newsletter;
