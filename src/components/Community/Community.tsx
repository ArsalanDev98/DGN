import React from "react";
import styles from "./Community.module.css";
import SocialButtons from "../SocialButtons/SocialButtons";

const Community: React.FC = () => {
  return (
    <section className={styles.communitySection}>
      <div className={styles.communityContainer}>
        <div className={styles.communityContent}>
          <h1>Join Our Community</h1>
          <p>
            Discover the exciting features of Decentralized Gaming Network and
            how it can enhance your Telegram group chats with its unique
            gamification match bot.
          </p>
          <SocialButtons className={styles.communitySocialButtons} />
        </div>
      </div>
    </section>
  );
};

export default Community;
