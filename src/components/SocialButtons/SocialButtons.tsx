import React from "react";
import styles from "./SocialButtons.module.css";

interface SocialButtonsProps {
  className?: string;
}

const SocialButtons: React.FC<SocialButtonsProps> = ({ className }) => {
  return (
    <div className={`${styles.socialButtons} ${className || ""}`}>
      {/* Disable the Telegram button by preventing default behavior */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // Prevents default action
        rel="noopener noreferrer"
      >
        <img src="/assets/NewWeb/Assets/telegram.svg" alt="Telegram" />
      </a>

      {/* This button remains active and functional */}
      <a
        href="#"
        onClick={(e) => e.preventDefault()} // Prevents default action
        rel="noopener noreferrer"
      >
        <img src="/assets/NewWeb/Assets/x.svg" alt="X (Twitter)" />
      </a>
    </div>
  );
};

export default SocialButtons;
