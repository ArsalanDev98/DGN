import React from 'react';
import styles from './Partners.module.css';
import coingeckoIcon from '/assets/SVG/Icons/coingeckoGold.svg';
import coinmarketIcon from '/assets/SVG/Icons/coinmarket.svg';
import dexscreenerIcon from '/assets/SVG/Icons/dexscreener.svg';
import dextoolsIcon from '/assets/SVG/Icons/dextools.svg';
import uniswapIcon from '/assets/SVG/Icons/uniswap.svg';

const Partners: React.FC = () => {
  const partners = [
    
    { icon: dextoolsIcon, alt: "Dextools", url: "https://www.dextools.io/app/en/ether/pair-explorer/0x1f61cda8825c7fe0c99b3040774d2083681e6840?t=1718744185481" },
    { icon: coingeckoIcon, alt: "Coingecko", url: "https://www.coingecko.com/en/coins/bet-lounge" },
    { icon: uniswapIcon, alt: "Uniswap", url: "https://app.uniswap.org/swap?outputCurrency=0x134359b7C852c82E4ebDd16A61020E6b81Dd6A6b&chain=ethereum" },
    { icon: coinmarketIcon, alt: "CoinMarketCap", url: "https://coinmarketcap.com/currencies/bet-lounge/" },
    { icon: dexscreenerIcon, alt: "Dexscreener", url: "https://dexscreener.com/ethereum/0x1f61cda8825c7fe0c99b3040774d2083681e6840" },
  ];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        {partners.map((partner, index) => (
          <a 
            key={index}
            href={partner.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.partnerLink}
          >
            <img src={partner.icon} alt={partner.alt} className={styles.partnerIcon} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;