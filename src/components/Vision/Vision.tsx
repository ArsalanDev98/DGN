import React from "react";
import styles from "./Vision.module.css";
import highlightImage from "/assets/PNG/VISION/Images/highlight.png";

const Vision: React.FC = () => {
  return (
    <section className={styles.visionSection}>
      <div className={styles.visionContainer}>
        <h1>Vision</h1>
        <img
          src={highlightImage}
          alt="highlight"
          className={styles.highlightImage}
        />
        <div className={styles.textContent}>
          <section>
            <h2>Introduction</h2>
            <img
              src={highlightImage}
              alt="highlight"
              className={styles.highlightImage}
            />
            <p>
              In the dynamic landscape of social media, Telegram (TG) emerges as
              a versatile platform for communication and community building. The
              introduction of customizable match bots will transform Telegram
              group chats into interactive hubs, blending luck-based gaming and
              financial management within a private or public social setting.
              This article explores the core features, benefits, and intricacies
              of gamifying Telegram group chats with gaming bots.
            </p>
          </section>
          <section>
            <h2>Core Features</h2>
            <img
              src={highlightImage}
              alt="highlight"
              className={styles.highlightImage}
            />
            <p>
              Integrating the bot into a Telegram group chat enhances user
              experience and facilitates financial interactions within the
              community. Key features include:
            </p>
            <ul>
              <li>
                <strong>Gas-Free Games:</strong> High Ethereum fees can
                discourage small wagers. Our solution is gas-free matches, where
                the only fees incurred are for depositing and withdrawing funds.
                All match activities are managed on a database, and the bot uses
                hot wallets to maintain a balanced deposit-to-withdrawal ratio.
              </li>
              <li>
                <strong>Mini Games:</strong> The bot supports playing games
                directly on Telegram. The first mini game, poker, allows
                participants to buy in, receive chips, and play hands displayed
                below the chat while the community view the flop, turn, and
                river. Additional mini games will be introduced in the future.
              </li>
              <li>
                <strong>Custom Match Pools:</strong> This bot empowers group
                owners to create custom match pools on various events, including
                sports, local games, escrow payments, tournaments and much more.
                Any imaginable wagers can be set, turning groups into vibrant
                centers of community gaming.
              </li>
              <li>
                <strong>Easy to Use & Telegram Native:</strong> Easy to Use &
                Telegram Native: The bot is very easy and intuitive to use. The
                bot will prompt you the right way in all cases. The bot is also
                100% telegram native and first of its kind. There is no external
                dapp or website needed, everything is done through telegram and
                private.
              </li>
            </ul>
          </section>
          <section>
            <h2>Potential Benefits</h2>
            <img
              src={highlightImage}
              alt="highlight"
              className={styles.highlightImage}
            />
            <p>
              Gamifying Telegram group chats with betting bots offers numerous
              advantages for both users and group owners:
            </p>
            <ul>
              <li>
                <strong>Enhanced Engagement:</strong> Integrating luck-based
                gaming into Telegram chats significantly boosts member
                interaction and participation. The potential for rewards adds
                excitement, encouraging active involvement.{" "}
              </li>
              <li>
                <strong>Community Building:</strong> Shared match activities
                foster camaraderie and collective attachment. Whether discussing
                sports matches or game outcomes, members bond over shared
                experiences, strengthening the community.
              </li>
              <li>
                <strong>Monetization Opportunity:</strong> The bots provide
                novel income generation avenues for group owners and active
                participants. Managed match pools and participation fees create
                potential revenue streams, incentivizing group owners to curate
                engaging experiences.
              </li>
            </ul>
            <p>
              Additionally, we offer incentives for group owners and a referral
              program. Group owners receive 20% of all profits made within their
              groups. The referral program rewards users with 20% of profits
              from groups they help onboard for life, promoting growth,
              engagement and passive income for all parties involved (group
              owner, referring party and $BETZ).
            </p>
          </section>
          <section>
            <h2>Conclusion</h2>
            <img
              src={highlightImage}
              alt="highlight"
              className={styles.highlightImage}
            />
            <p style={{ fontSize: "20px" }}>
              The integration of gamified match bots into Telegram group chats
              marks a dynamic evolution in online community engagement. By
              merging luck-based gaming and financial management, this
              innovative approach transforms group interactions into immersive,
              exciting experiences. As these features gain popularity, gamifying
              Telegram group chats has the potential to redefine social
              interaction in the digital age.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Vision;
