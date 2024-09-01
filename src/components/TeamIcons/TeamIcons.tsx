import React from 'react';
import styles from './TeamIcons.module.css';
import xIcon from '/assets/PNG/HOMEPAGE/Icons/x.png';
import telegramIcon from '/assets/PNG/HOMEPAGE/Icons/telegram.png';
import linkedinIcon from '/assets/PNG/HOMEPAGE/Icons/linkedin.png';
import chuniGif from '/assets/PNG/INCENTIVE/Gifs/chuni.gif';
import nicoImage from '/assets/PNG/INCENTIVE/Images/nicomachiaveli.png';
import elevatedGif from '/assets/PNG/HOMEPAGE/Gifs/elevated.gif';
import tomImage from '/assets/PNG/HOMEPAGE/Images/tombateman.png';

const teamMembers = [
  {
    name: "Chuni",
    title: "CEO",
    description: "Finance & Economics background with 7+ years of experience in Crypto. Worked with multiple 8-9 fig projects and very well connected in the space.",
    image: chuniGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/chuni9", "https://t.me/Chuni9"]
  },
  {
    name: "Nico Machiavelli",
    title: "CSO/Growth",
    description: "Real estate investor, 7 years experience in crypto, onboarded $100M+ companies into web3, web3 strategist for high end projects.",
    image: nicoImage,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: ["https://x.com/0xnicott", "https://t.me/OxMachiavelli", "https://www.linkedin.com/in/nico-machiavelli-950156226"]
  },
  {
    name: "Elevated Oshi",
    title: "CMO/Sales",
    description: "4 experience years in crypto, advisor and team member to multiple 8 fig plus projects, Alpha KOL and strategist.",
    image: elevatedGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/thecryptoidol", "https://t.me/thecryptoidol"]
  },
  {
    name: "Tom Bateman",
    title: "CTO/Product Development",
    description: "Computer Science MSc, ex 8 year Head of IT, multiple commercial web and solidity contract deployments.",
    image: tomImage,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: ["https://x.com/Tom__DeFi", "https://t.me/tom_defi", "https://www.linkedin.com/in/tom-defi-954667239"]
  }
];

const TeamIcons: React.FC = () => {
  return (
    <div className={styles.cardsContainer}>
      {teamMembers.map((member, index) => (
        <div className={styles.card} key={index}>
          <img src={member.image} alt={member.name} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.textContent}>
              <h3>{member.name}</h3>
              <p className={styles.title} style={{ backgroundImage: 'linear-gradient(45deg, #b99850, #cfac5b, #9d7a40, #715225, #cdaa56, #daba5c, #cca757)' }}>{member.title}</p>
              <p>{member.description}</p>
            </div>
            <div className={styles.iconsContainer}>
              {member.icons.map((icon, iconIndex) => (
                <a href={member.urls[iconIndex]} key={iconIndex} target="_blank" rel="noopener noreferrer">
                  <img src={icon} alt="icon" className={styles.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamIcons;
