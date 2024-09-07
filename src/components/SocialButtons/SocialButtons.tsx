import React from "react";
import styles from "./SocialButtons.module.css";

interface SocialButtonsProps {
  className?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ className }) => {
  return (
    <div className={`${styles.socialButtons} ${className || ""}`}>
      <a
        href="https://t.me/BetLoungePvP"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/NewWeb/Assets/telegram.svg" alt="Telegram" />
      </a>
      <a
        href="https://www.linkedin.com/company/YourCompany"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/NewWeb/Assets/linkedin.svg" alt="LinkedIn" />
      </a>
      <a
        href="https://twitter.com/YourTwitterHandle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/NewWeb/Assets/x.svg" alt="X (Twitter)" />
      </a>
    </div>
  );
};

export default SocialButtons;
