import React from "react";
import styles from "./CheckeredLine.module.css";

const CheckeredLine: React.FC = () => {
  return (
    <div className={styles.checkeredLineWrapper}>
      <img
        src="/assets/NewWeb/Assets/CheckLine.png"
        alt="Checkered Line"
        className={styles.checkeredLine}
      />
    </div>
  );
};

export default CheckeredLine;
