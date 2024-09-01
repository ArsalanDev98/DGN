import React from 'react';
import styles from './Partners.module.css';
import coingeckoIcon from '/assets/SVG/Icons/coingeckoGold.svg';
import coinmarketIcon from '/assets/SVG/Icons/coinmarket.svg';
import dexscreenerIcon from '/assets/SVG/Icons/dexscreener.svg';
import dextoolsIcon from '/assets/SVG/Icons/dextools.svg';
import uniswapIcon from '/assets/SVG/Icons/uniswap.svg';

const Partners: React.FC = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        <div className={styles.partnersContent}>
          <a href="https://www.coingecko.com/en/coins/bet-lounge" target="_blank" rel="noopener noreferrer">
            <img src={coingeckoIcon} alt="Coingecko" className={styles.partnerIcon} />
          </a>
          <a href="https://coinmarketcap.com/currencies/bet-lounge/" target="_blank" rel="noopener noreferrer">
            <img src={coinmarketIcon} alt="CoinMarketCap" className={styles.partnerIcon} />
          </a>
          <a href="https://dexscreener.com/ethereum/0x1f61cda8825c7fe0c99b3040774d2083681e6840" target="_blank" rel="noopener noreferrer">
            <img src={dexscreenerIcon} alt="Dexscreener" className={styles.partnerIcon} />
          </a>
          <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x1f61cda8825c7fe0c99b3040774d2083681e6840?t=1718744185481" target="_blank" rel="noopener noreferrer">
            <img src={dextoolsIcon} alt="Dextools" className={styles.partnerIcon} />
          </a>
          <a href="https://app.uniswap.org/swap?outputCurrency=0x134359b7C852c82E4ebDd16A61020E6b81Dd6A6b&chain=ethereum" target="_blank" rel="noopener noreferrer">
            <img src={uniswapIcon} alt="Uniswap" className={styles.partnerIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
