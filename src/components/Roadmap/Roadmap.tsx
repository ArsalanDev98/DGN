import React from "react";
import styles from "./Roadmap.module.css";
import roadmapImage from "/assets/NewWeb/Assets/Roadmap.png";

const Roadmap: React.FC = () => {
  return (
    <section className={styles.roadmapSection}>
      <div className={styles.roadmapContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.subHeader}>ROADMAP</h2>
          <h1 className={styles.header}>
            Decentralized Gaming Network Roadmap
          </h1>
        </div>
        <img src={roadmapImage} alt="roadmap" className={styles.roadmapImage} />

        <div className={styles.hiddenText}>
          <h2>Project Roadmap</h2>
          <ol>
            <li>
              <strong>1. Launch Mid Sept 2024:</strong> Capturing early market
              exposure to the utility season.
            </li>
            <li>
              <strong>2. Central Exchange (CEX):</strong> Have a Central
              Exchange (CEX) in the first week of launch.
            </li>
            <li>
              <strong>3. MVP on Launch Day:</strong> Usable and functional MVP,
              bot can be used and interacted with from day 1.
            </li>
            <li>
              <strong>4. Poker Mini Game:</strong> Add poker as a mini-game that
              can be played directly on Telegram.
            </li>
            <li>
              <strong>5. Celebrity Appearance:</strong> Surprise guest celebrity
              appearance, one of the biggest poker players in the world.
            </li>
            <li>
              <strong>6. Marketing Campaign:</strong> Initiate marketing and
              influencer campaign to integrate the bot into as many private and
              public groups as possible.
            </li>
            <li>
              <strong>7. Tournament Mode:</strong> Development of tournament
              mode.
            </li>
            <li>
              <strong>8. Referral Program:</strong> Referral program for revenue
              share available to everyone from launch day.
            </li>
            <li>
              <strong>9. Mass Streamer Marketing:</strong> Start mass streamer
              marketing, partnering with crypto and match-making streamers on
              Kick, Rumble, and Twitch.
            </li>
            <li>
              <strong>10. Mini Game Expansion:</strong> Continue adding and
              developing more mini-games.
            </li>
            <li>
              <strong>11. Platform Integration:</strong> Expand bot
              functionality to integrate with platforms such as Discord.
            </li>
            <li>
              <strong>12. Development Growth:</strong> Continue development,
              grow marketing, partnerships, and host large-scale events using
              utility and charity projects.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
