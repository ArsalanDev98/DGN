import React from 'react';
import styles from './BetLounge.module.css';
import { Link } from 'react-router-dom';
import Partners from '../Partners/Partners'; 

const BetLounge: React.FC = () => {
    return (
        <section className={styles.betLounge_section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Decentralized</h1>
                        <h1 className={styles.special_h1}>Gaming Network</h1>
                    </div>
                    <p className={styles.paragraph}>
                        The Ultimate Community Matchmaking And Gaming Experience.<br />
                        Gamifying The Social Landscape Of Telegram
                    </p>
                    <Link to="https://t.me/BetLoungePvP" className={styles.joinButton}>Join</Link>
                    <div className={styles.partnersWrapper}>
                        <Partners />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BetLounge;