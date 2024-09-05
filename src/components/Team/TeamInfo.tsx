import React, { useState } from "react";
import styles from "./TeamInfo.module.css";
import xIcon from "/assets/PNG/HOMEPAGE/Icons/x.png";
import telegramIcon from "/assets/PNG/HOMEPAGE/Icons/telegram.png";
import linkedinIcon from "/assets/PNG/HOMEPAGE/Icons/linkedin.png";
import chuniGif from "/assets/PNG/INCENTIVE/Gifs/chuni.gif";
import nicoImage from "/assets/PNG/INCENTIVE/Images/nicomachiaveli.png";
import elevatedGif from "/assets/PNG/HOMEPAGE/Gifs/elevated.gif";
import tomImage from "/assets/PNG/HOMEPAGE/Images/code.png";
import nicoImage2 from "/assets/NewWeb/Assets/nico.jpg";
import nicoImage3 from "/assets/NewWeb/Assets/nico2.jpg";
import nicoImage4 from "/assets/NewWeb/Assets/nico3.jpg";
import nicoImage5 from "/assets/NewWeb/Assets/nico4.jpg";
import nicoImage6 from "/assets/NewWeb/Assets/nico5.jpg";
import nicoImage7 from "/assets/NewWeb/Assets/nico6.gif";

const teamMembers = [
  {
    name: "Chuni",
    title: "CEO",
    description:
      "Finance & Economics background with 7+ years of experience in Crypto. Worked with multiple 8-9 fig projects and very well connected in the space.",
    image: chuniGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/chuni9", "https://t.me/Chuni9"],
  },
  {
    name: "Nico Machiavelli",
    title: "CSO/Growth",
    description:
      "Real estate investor, 7 years experience in crypto, onboarded $100M+ companies into web3, web3 strategist for high end projects.",
    image: nicoImage2,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: [
      "https://x.com/0xnicott",
      "https://t.me/OxMachiavelli",
      "https://www.linkedin.com/in/nico-machiavelli-950156226",
    ],
  },
  {
    name: "Sonic, Elevated and TraderB",
    title: "Marketing Team",
    description:
      "Over 15 years combined experience in crypto. Expansive KOL, Whale and private investor group network. Veteran advisors and builders for large utility projects.",
    image: elevatedGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/thecryptoidol", "https://t.me/thecryptoidol"],
  },
  {
    name: "Malz, Arsalan, Tom Bateman",
    title: "Development Team",
    description:
      "Our development team has a combined 20 years experience in full stack development. Including an 8 year head of IT and multiple solidity and commercial deployments.",
    image: tomImage,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: [
      "https://x.com/Tom__DeFi",
      "https://t.me/tom_defi",
      "https://www.linkedin.com/in/tom-defi-954667239",
    ],
  },
];

const TeamInfo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // Show 2 cards at a time

  const nextPage = () => {
    setCurrentPage(
      (prevPage) =>
        (prevPage + 1) % Math.ceil(teamMembers.length / itemsPerPage)
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0
        ? Math.ceil(teamMembers.length / itemsPerPage) - 1
        : prevPage - 1
    );
  };

  // Slice the array to show only 2 items per page
  const visibleMembers = teamMembers.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.cardsContainer}>
        {visibleMembers.map((member, index) => (
          <div className={styles.card} key={index}>
            <img
              src={member.image}
              alt={member.name}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <div className={styles.textContent}>
                <h3>{member.name}</h3>
                <p className={styles.title}>{member.title}</p>
                <p>{member.description}</p>
              </div>
              <div className={styles.iconsContainer}>
                {member.icons.map((icon, iconIndex) => (
                  <a
                    href={member.urls[iconIndex]}
                    key={iconIndex}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon} alt="icon" className={styles.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselControls}>
        <button onClick={prevPage} className={styles.arrowButton}>
          ←
        </button>
        <span>{`${currentPage + 1}/${Math.ceil(
          teamMembers.length / itemsPerPage
        )}`}</span>
        <button onClick={nextPage} className={styles.arrowButton}>
          →
        </button>
      </div>
    </div>
  );
};

export default TeamInfo;
