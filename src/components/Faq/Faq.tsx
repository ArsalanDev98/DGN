import React, { useState } from "react";
import styles from "./Faq.module.css";
import FaqRoulette from "/assets/NewWeb/Assets/FaqRoulette.svg"; // Make sure the path is correct

const faqData = [
  {
    question: "Where Can I Find The Bot?",
    answer:
      "The bot can be found on telegram, you can search @betloungepvp_bot or click here: https://t.me/betloungepvp_bot",
  },
  {
    question: "Does The Bot Need To Be Admin To Work?",
    answer: "Not necessarily, but we do recommend you do so.",
  },
  {
    question: "The Bot Won't Reply To My Prompts, What Should I Do?",
    answer:
      "Sometimes this can be due to the conversation flow within the bot. Do the command /cancel to reset the bot. This should work most of the time.",
  },
  {
    question:
      "I'm in a group with an active game, but I can’t see it. How can I fix it?",
    answer:
      "Whenever a match has been activated, the bot will send a notification with a link to the group it's in. If you do not see it from the bot, then go to the community link and click from there.",
  },
  {
    question: "Do I have to pay a fee for every transaction?",
    answer:
      "No! We set up the system so you can input very small amounts without any fee. The only fees you will pay for are deposits and withdrawals. All matches within the Decentralized Gaming Network ecosystem all happen on a testnet. This is possible because of the fully P2P nature.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="commonContainer">
        <div className={styles.faqContainer}>
          <div className={styles.leftContent}>
            <h1 className={styles.faqHeader}>Frequently Asked Questions</h1>
            <p className={styles.paragraph}>
              Find answers to common questions about Decentralized Gaming
              Network (DGN) and how it works in our FAQ section.
            </p>
            {/* Add the roulette SVG below the paragraph */}
            <img
              src={FaqRoulette}
              alt="Faq Roulette"
              className={styles.faqRouletteImage}
            />
          </div>

          <div className={styles.rightContent}>
            <div className={styles.faqList}>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${
                    openIndex === index ? styles.open : ""
                  }`}
                  onClick={() => toggleFaq(index)}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
