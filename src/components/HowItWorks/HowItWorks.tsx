import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks: React.FC = () => {

    const cards = [
        {
            title: "Bot Integration",
            description: "It all starts with the bot being added to a Telegram group and made admin. Members can then deposit funds to play with directly on the bot, you will get a private deposit address for your account. Load up your account and you're ready to go!",
            image: "/assets/NewWeb/Assets/CardPokerTable.svg",
        },
        {
            title: "Custom PVP Matching",
            description: "Group owners can then use the private dm side of the bot to create and organize the matches. The bot will then prompt the owner to create different possible outcomes of the match. Once a match pool is created, it will show up in your menu. When you want to start the match process, you can then click Activate. You can also stop the match process by clicking Close.",
            image: "/assets/NewWeb/Assets/CardPokerTable.svg",
        },
        {
            title: "Get Rewarded",
            description: "Once the results are in and the outcome is clear, the group owner can then go into the bot and Choose Outcome. Once the outcome is chosen the bot will automatically pay out the winners. Check your balance!",
            image: "/assets/NewWeb/Assets/CardPokerTable.svg",
        },
    ];

    return (
        <section className={styles.howItWorksSection}>
            <div className={styles.howItWorksContainer}>
                <div className={styles.header}>
                    <h1>How it works</h1>
                    <p>Decentralized Gaming Network (DGN) revolutionizes gaming by seamlessly integrating blockchain technology throughout its ecosystem.</p>
                </div>
                <div className={styles.cards}>
                    {cards.map(card =>
                        <div key={card.title} className={styles.cardContainer}>
                            <img className={styles.imgCard} src={card.image} alt={card.title}/>
                            <div className={styles.title}>{card.title}</div>
                            <div className={styles.description}>{card.description}</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
