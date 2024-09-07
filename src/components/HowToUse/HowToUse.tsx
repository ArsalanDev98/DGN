import React from "react";
import styles from "./HowToUse.module.css";
import step1Image from "/assets/PNG/H2U/Images/1.png";
import step2Image from "/assets/PNG/H2U/Images/2.png";
import step3Image0 from "/assets/PNG/H2U/Images/administrate.png";
import step3Image1 from "/assets/PNG/H2U/Images/3.png";
import step3Image2 from "/assets/PNG/H2U/Images/4.png";
import step3Image3 from "/assets/PNG/H2U/Images/5.png";
import step3Image4 from "/assets/PNG/H2U/Images/6.png";
import step3Image5 from "/assets/PNG/H2U/Images/7.png";
import step3Image6 from "/assets/PNG/H2U/Images/8.png";
import step4Image1 from "/assets/PNG/H2U/Images/9.png";
import step4Image2 from "/assets/PNG/H2U/Images/10.png";
import step5Image1 from "/assets/PNG/H2U/Images/11.png";
import step5Image2 from "/assets/PNG/H2U/Images/12.png";
import step5Image3 from "/assets/PNG/H2U/Images/13.png";
import step5Image4 from "/assets/PNG/H2U/Images/14.png";
import step5Image5 from "/assets/PNG/H2U/Images/15.png";
import step5Image6 from "/assets/PNG/H2U/Images/16.png";

const HowToUse: React.FC = () => {
  return (
    <section className={styles.howSection}>
      <div className={styles.howContainer}>
        <h1 className={styles.header}>
          How To Use and Integrate The Bot Into Your Group
        </h1>
        <p className={styles.introText}>
          The bot is very easy to use and intuitive. This article will help
          group owners and users on how to use the bot.
        </p>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>1</span>
              Adding The Bot Into Your Group
            </h2>
            <p>
              The bot can be found on telegram by searching “@THE_DGN_BOT” or
              clicking{" "}
              <a
                href="https://t.me/THE_DGN_BOT"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . You can then click start which will open up a welcome message
              and other prompts such as /Menu and /Help.
            </p>
            <p>The Menu Prompt will open up the following menu:</p>
            <img src={step1Image} alt="Step 1" className={styles.stepImage} />
            <p>Once you deposit funds, you are ready to bet!</p>
          </div>

          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>2</span>
              Fund Your Account
            </h2>
            <p>
              Once you click "Balance", it will give you a create deposit
              address option. Once you deposit ETH you are ready to game! If you
              already made a deposit address you can see it when you click Show
              Balance.
            </p>
            <img src={step2Image} alt="Step 2" className={styles.stepImage} />
          </div>

          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>3</span>
              Creating Custom Matches For Your Group
            </h2>
            <p>
              If you are a group owner where this bot is present, you can create
              a match in any of those groups by clicking "Administrate":
            </p>
            <img
              src={step3Image0}
              alt="Step 3 Image 0"
              className={styles.stepImage}
            />
            <p>
              You can start by clicking "Create" and then selecting the group
              for which you want to create the match:
            </p>
            <img
              src={step3Image1}
              alt="Step 3 Image 1"
              className={styles.stepImage}
            />
            <p>You can then create a title for the match:</p>
            <img
              src={step3Image2}
              alt="Step 3 Image 2"
              className={styles.stepImage}
            />
            <p>You will then choose the amount of outcomes:</p>
            <img
              src={step3Image3}
              alt="Step 3 Image 3"
              className={styles.stepImage}
            />
            <p>Once you choose the outcomes, you must name the outcomes:</p>
            <img
              src={step3Image4}
              alt="Step 3 Image 4"
              className={styles.stepImage}
            />
            <p>
              Congratulations, you have now created a match! You can then
              activate the match when the time is right by clicking “Activate”,
              this allows your community to participate in the game:
            </p>
            <img
              src={step3Image5}
              alt="Step 3 Image 5"
              className={styles.stepImage}
            />
            <p>Your community will be notified of all new activated matches!</p>
            <img
              src={step3Image6}
              alt="Step 3 Image 6"
              className={styles.stepImage}
            />
          </div>

          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>4</span>
              Match Process
            </h2>
            <p>
              You can see all the games available for you to bid on by clicking
              the button in the /Menu Prompt. You can also click on the
              community notification above to go to the specific game:
            </p>
            <img
              src={step4Image1}
              alt="Step 4 Image 1"
              className={styles.stepImage}
            />
            <p>
              While the community is participating in the matches, you can call
              the /Pool command to see who has participated in which game:
            </p>
            <img
              src={step4Image2}
              alt="Step 4 Image 2"
              className={styles.stepImage}
            />
          </div>

          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>5</span>
              Closing Matches and Automated Payouts
            </h2>
            <p>
              You can close a match by clicking “Close” in the menu. After the
              match has been closed, no one can participate in the matches
              anymore:
            </p>
            <img
              src={step5Image1}
              alt="Step 5 Image 1"
              className={styles.stepImage}
            />
            <p>
              Once the outcome of the match has been determined, group owners
              can input the outcome by clicking “Choose Outcome” which will
              bring them to a list of closed matches:
            </p>
            <img
              src={step5Image2}
              alt="Step 5 Image 2"
              className={styles.stepImage}
            />
            <p>You can then choose the outcome:</p>
            <img
              src={step5Image3}
              alt="Step 5 Image 3"
              className={styles.stepImage}
            />
            <p>Once an outcome is picked, payouts are automatic:</p>
            <img
              src={step5Image4}
              alt="Step 5 Image 4"
              className={styles.stepImage}
            />
            <p>
              Your community will get a notification of the outcome and that
              payouts have been processed:
            </p>
            <img
              src={step5Image5}
              alt="Step 5 Image 5"
              className={styles.stepImage}
            />
            <p>You can withdraw to any wallet of your choice.</p>
            <img
              src={step5Image6}
              alt="Step 5 Image 6"
              className={styles.stepImage}
            />
          </div>

          <div className={styles.step}>
            <h2 className={styles.stepHeader}>
              <span className={styles.stepNumber}>6</span>
              Mini Games
            </h2>
            <p>
              We will also be adding a mini-games menu with games you can play
              with your friends in groups on Telegram. The first mini-game
              release will be poker. More info to be announced!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
