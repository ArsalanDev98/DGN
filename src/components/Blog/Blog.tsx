import React from 'react';
import styles from './Blog.module.css';
import highlightImage from '/assets/PNG/INCENTIVE/Images/highlight.png';
import pic1 from '/assets/BLOG/pic1.jpg';
import pic2 from '/assets/BLOG/pic2.jpg';

const Blog: React.FC = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.blogContainer}>
        <h1>Blog</h1>
        <img src={highlightImage} alt="highlight" className={styles.highlightImage} />
        <p className={styles.subtitle}>Read Our Articles To Learn More</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <img src={pic1} alt="How To Use and Integrate The Bot Into Your Group" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>How To Use and Integrate The Bot Into Your Group</h3>
              <p>Discover the exciting features of Decentralized Gaming Network and how it can enhance your Telegram group chats with its unique gamification and betting bot.</p>
              <p className={styles.date}>02/06/2024</p>
              <a href="/blog" className={styles.readMore}>Read More</a>
            </div>
          </div>
          <div className={styles.card}>
            <img src={pic2} alt="Potential of Gamifying Telegram Group Chats with Betting Bots" className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3>Potential of Gamifying Telegram Group Chats with Betting Bots</h3>
              <p>Discover the unique community interaction concept of Decentralized Gaming Network, where gambling, gaming, and financial management.</p>
              <p className={styles.date}>02/06/2024</p>
              <a href="/blog" className={styles.readMore}>Read More</a>
            </div>
          </div>
        </div>
        <a href="/blog" className={styles.readMoreLink}>Read More →</a>
      </div>
    </section>
  );
};

export default Blog;
