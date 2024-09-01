import React from 'react';
import styles from './BlogWide.module.css';
import highlightImage from '/assets/PNG/INCENTIVE/Images/highlight.png';
import blogImage1 from '/assets/BLOG/pic1.jpg';
import blogImage2 from '/assets/BLOG/pic2.jpg';

const BlogWide: React.FC = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <h1>Blog</h1>
        <img src={highlightImage} alt="highlight" className={styles.highlightImage} />
        <div className={styles.cardsContainer}>
          <a href="/how-to-use" className={styles.card}>
            <img src={blogImage1} alt="Blog 1" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h2>How To Use and Integrate The Bot Into Your Group</h2>
                <p>
                  Discover the exciting features of Bet Lounge and how it can enhance your Telegram group chats with its unique gamification bot.
                </p>
              </div>
              <div className={styles.cardDate}>02/06/2024</div>
            </div>
          </a>
          <a href="/vision" className={styles.card}>
            <img src={blogImage2} alt="Blog 2" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h2>Potential of Gamifying Telegram group chats with Gaming Bots:</h2>
                <p>
                  Discover the unique community interaction concept of Bet Lounge, where luck-based gaming and financial management intersect.
                </p>
              </div>
              <div className={styles.cardDate}>02/06/2024</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogWide;
