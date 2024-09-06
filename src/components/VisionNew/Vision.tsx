import React from "react";
import styles from "./Vision.module.css";

const Vision: React.FC = () => {
  return (
    <section className={styles.visionSection}>
      {/* Vision Section */}
      <div className="commonContainer">
        <div className={styles.visionContentWrapper}>
          <h1>
            Decentralized Gaming <br /> Network{" "}
            <span className={styles.highlight}>Vision</span>
          </h1>
          <p className={styles.visionParagraph}>
            Empowering gamers with true ownership and transparency through a
            decentralized network.
          </p>
        </div>
      </div>

      {/* Introduction Card */}
      <div className="commonContainer">
        <div className={styles.introductionContainer}>
          <div className={styles.introductionCard}>
            <div className={styles.introductionHeader}>
              <div className={styles.introductionIconCircle}>
                <img
                  src="/assets/NewWeb/Assets/IntroductionLogo.svg"
                  alt="Introduction Icon"
                  className={styles.introductionIcon}
                />
              </div>
              <h2 className={styles.introductionTitle}>Introduction</h2>
            </div>
            <p className={styles.introductionParagraph}>
              In the dynamic landscape of social media, Telegram (TG) emerges as
              a versatile platform for communication and community building. The
              introduction of customizable match bots will transform Telegram
              group chats into interactive hubs, blending luck-based gaming and
              financial management within a private or public social setting.
              This article explores the core features, benefits, and intricacies
              of gamifying Telegram group chats with gaming bots.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features and Card Grid */}
      <div className="commonContainer">
        {/* Core Features Text and Logo */}
        <div className={styles.coreFeaturesContainer}>
          <div className={styles.coreFeaturesContent}>
            <div className={styles.coreFeaturesLogoWrapper}>
              <div className={styles.coreFeaturesIconCircle}>
                <img
                  src="/assets/NewWeb/Assets/FeaturesLogo.svg"
                  alt="Features Logo"
                  className={styles.coreFeaturesIcon}
                />
              </div>
              <h2 className={styles.coreFeaturesTitle}>Core Features</h2>
            </div>
            <p className={styles.coreFeaturesParagraph}>
              Integrating the bot into a Telegram group chat enhances user
              experience and facilitates financial interactions within the
              community. Key features include:
            </p>
          </div>

          {/* Feature Cards */}
          <div className={styles.featuresGrid}>
            {/* Feature Card 1 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardHeader}>
                <div className={styles.featureCardNumber}>1</div>
                <h3 className={styles.featureCardTitle}>Mini Games</h3>
              </div>
              <p className={styles.featureCardParagraph}>
                The bot supports playing games directly on Telegram. The first
                mini game, poker, allows participants to buy in, receive chips,
                and play hands. Additional mini games will be introduced in the
                future.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardHeader}>
                <div className={styles.featureCardNumber}>2</div>
                <h3 className={styles.featureCardTitle}>Gas-Free Games</h3>
              </div>
              <p className={styles.featureCardParagraph}>
                High Ethereum fees can discourage small wagers. Our solution is
                gas-free matches, where the only fees incurred are for
                depositing and withdrawing funds.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardHeader}>
                <div className={styles.featureCardNumber}>3</div>
                <h3 className={styles.featureCardTitle}>Custom Match Pools</h3>
              </div>
              <p className={styles.featureCardParagraph}>
                This bot empowers group owners to create custom match pools on
                various events, turning groups into vibrant centers of community
                gaming.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className={styles.featureCard}>
              <div className={styles.featureCardHeader}>
                <div className={styles.featureCardNumber}>4</div>
                <h3 className={styles.featureCardTitle}>
                  Easy to Use & Telegram Native
                </h3>
              </div>
              <p className={styles.featureCardParagraph}>
                The bot is intuitive and easy to use, integrated seamlessly with
                Telegram, requiring no external dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Cards and Potential Benefits */}
      <div className="commonContainer">
        {/* Benefit Cards */}
        <div className={styles.newCardsAndBenefitsContainer}>
          <div className={styles.newCardsGrid}>
            {/* Benefit Card 1 */}
            <div className={styles.newCard}>
              <div className={styles.newCardHeader}>
                <div className={styles.newCardNumber}>1</div>
                <h3 className={styles.newCardTitle}>Enhanced Engagement</h3>
              </div>
              <p className={styles.newCardParagraph}>
                Integrating luck-based gaming into Telegram chats significantly
                boosts member interaction and participation. The potential for
                rewards adds excitement, encouraging active involvement.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className={styles.newCard}>
              <div className={styles.newCardHeader}>
                <div className={styles.newCardNumber}>2</div>
                <h3 className={styles.newCardTitle}>Community Building</h3>
              </div>
              <p className={styles.newCardParagraph}>
                Shared match activities foster camaraderie and collective
                attachment. Members bond over shared experiences, strengthening
                the community.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className={`${styles.newCard} ${styles.fullWidthCard}`}>
              <div className={styles.newCardHeader}>
                <div className={styles.newCardNumber}>3</div>
                <h3 className={styles.newCardTitle}>
                  Monetization Opportunity
                </h3>
              </div>
              <p className={styles.newCardParagraph}>
                The bots provide novel income generation avenues for group
                owners and active participants. Managed match pools and
                participation fees create potential revenue streams,
                incentivizing group owners to curate engaging experiences.
              </p>
            </div>
          </div>

          {/* Potential Benefits */}
          <div className={styles.potentialBenefitsContent}>
            <div className={styles.potentialBenefitsIconCircle}>
              <img
                src="/assets/NewWeb/Assets/BenefitsLogo.svg"
                alt="Benefits Icon"
              />
            </div>
            <h2 className={styles.potentialBenefitsTitle}>
              Potential Benefits
            </h2>
            <p className={styles.potentialBenefitsParagraph}>
              Gamifying Telegram group chats with betting bots offers numerous
              advantages for both users and group owners. Additionally, we offer
              incentives for group owners and a referral program. Group owners
              receive 20% of all profits made within their groups. The referral
              program rewards users with 20% of profits from groups they help
              onboard for life, promoting growth, engagement, and passive income
              for all parties involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
