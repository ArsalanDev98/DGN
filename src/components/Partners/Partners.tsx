import React from "react";
import styles from "./Partners.module.css";
import coingeckoIcon from "/assets/SVG/Icons/coingeckoGold.svg";
import coinmarketIcon from "/assets/SVG/Icons/coinmarket.svg";
import dexscreenerIcon from "/assets/SVG/Icons/dexscreener.svg";
import dextoolsIcon from "/assets/SVG/Icons/dextools.svg";
import uniswapIcon from "/assets/SVG/Icons/uniswap.svg";

const Partners: React.FC = () => {
  const partners = [
    {
      icon: dextoolsIcon,
      alt: "Dextools",
      url: "",
    },
    {
      icon: coingeckoIcon,
      alt: "Coingecko",
      url: "",
    },
    {
      icon: uniswapIcon,
      alt: "Uniswap",
      url: "",
    },
    {
      icon: coinmarketIcon,
      alt: "CoinMarketCap",
      url: "",
    },
    {
      icon: dexscreenerIcon,
      alt: "Dexscreener",
      url: "",
    },
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        {partners.map((partner, index) => (
          <a
            key={index}
            href="#" // Temporarily set to # to disable navigation
            onClick={(e) => e.preventDefault()} // Prevent default action
            className={styles.partnerLink}
          >
            <img
              src={partner.icon}
              alt={partner.alt}
              className={styles.partnerIcon}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
