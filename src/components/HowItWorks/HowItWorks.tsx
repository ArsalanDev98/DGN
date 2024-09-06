import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks: React.FC = () => {
  const cards = [
    {
      title: "Bot Integration",
      description:
        "It all starts with the bot being added to a Telegram group and made admin. Members can then deposit funds to play with directly on the bot, you will get a private deposit address for your account. Load up your account and you're ready to go!",
      image: "/assets/NewWeb/Assets/CardPokerTable.svg",
    },
    {
      title: "Custom PVP Matching",
      description:
        "Group owners utilize the bot’s private DM to organize matches and set various outcomes. Once the match pool is created, it appears in the menu for easy access. Owners can then activate or close the match process with a click.",
      image: "/assets/NewWeb/Assets/CardDice.png",
    },
    {
      title: "Get Rewarded",
      description:
        "Once the results are finalized and the outcome is clear, the group owner selects the outcome in the bot. The bot then automatically processes the payouts to the winners. You can check your balance to see the updated amounts.",
      image: "/assets/NewWeb/Assets/CardPokerTable2.png",
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.howItWorksContainer}>
        <div className={styles.header}>
          <h1>How it works</h1>
          <p>
            Decentralized Gaming Network (DGN) revolutionizes gaming by
            seamlessly integrating blockchain technology throughout its
            ecosystem.
          </p>
        </div>
        <div className={styles.cards}>
          {cards.map((card) => (
            <div key={card.title} className={styles.cardContainer}>
              <div className={styles.title}>{card.title}</div>
              <img
                className={styles.imgCard}
                src={card.image}
                alt={card.title}
              />
              <div className={styles.description}>{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
