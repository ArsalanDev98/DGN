import React from "react";
import styles from "./BetLounge.module.css";
import Partners from "../Partners/Partners";
import SocialButtons from "../SocialButtons/SocialButtons";
import RouletteImage from "/assets/NewWeb/Assets/Roulette2.png";
import CheckeredLine from "/assets/NewWeb/Assets/CheckLine.png";

const BetLounge: React.FC = () => {
  return (
    <section className={styles.betLounge_section}>
      <div className={`${styles.container} commonContainer`}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Decentralized</h1>
            <h1 className={styles.special_h1}>Gaming Network</h1>
          </div>
          <p className={styles.paragraph}>
            The Ultimate Community Matchmaking And Gaming Experience.
            <br />
            Gamifying The Social Landscape Of Telegram
          </p>
          <SocialButtons className={styles.betLoungeSocialButtons} />
          <div className={styles.partnersWrapper}>
            <Partners />
          </div>
        </div>
        <img
          src={RouletteImage}
          alt="Roulette"
          className={styles.rouletteImage}
        />
      </div>
      <div className={styles.checkeredLineWrapper}>
        <img
          src={CheckeredLine}
          alt="Checkered Line"
          className={styles.checkeredLine}
        />
      </div>
    </section>
  );
};

export default BetLounge;
