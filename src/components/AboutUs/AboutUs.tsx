import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs: React.FC = () => {
    return (
        <section className={styles.aboutUsSection}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.title}>
                        <h1>About Us</h1>
                        <img src='/assets/PNG/ROADMAP/Images/highlight.png' />
                    </div>
                    <p>
                    Bet Lounge is a unique community interaction concept that gamifies Telegram group chats through a custom gaming bot. We merge luck-based gaming and financial management in a private social setting, fostering community building and excitement during live events. Bet Lounge allows you and your group to support different sports teams and athletes, create custom pools, escrow, host tournaments and much more at your fingertips.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUs