import React from 'react';
import styles from './BetLounge.module.css';
import { Link } from 'react-router-dom';

const BetLounge: React.FC = () => {
    return (
        <section className={styles.betLounge_section}>
            <div className={styles.container}>
                <div>
                    <div className={styles.title}>
                        <h1>Bet</h1>
                        <h1 className={styles.special_h1}>Lounge</h1>
                    </div>
                    <p className={styles.paragraph}>
                        The Ultimate Community Matchmaking And Gaming Experience.<br />
                        Gamifying The Social Landscape Of Telegram
                    </p>
                    <Link to="https://t.me/BetLoungePvP" className={styles.joinButton}>Join</Link>
                </div>
                <img className={styles.roulette_wheele} src='/assets/PNG/HOMEPAGE/Gifs/wheel animate.gif' />
            </div>
        </section>
    )
}

export default BetLounge