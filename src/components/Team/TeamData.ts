import xIcon from "/assets/PNG/HOMEPAGE/Icons/x.png";
import telegramIcon from "/assets/PNG/HOMEPAGE/Icons/telegram.png";
import linkedinIcon from "/assets/PNG/HOMEPAGE/Icons/linkedin.png";
import chuniGif from "/assets/PNG/INCENTIVE/Gifs/chuni.gif";
import nicoImage from "/assets/PNG/INCENTIVE/Images/nicomachiaveli.png";
import elevatedGif from "/assets/PNG/HOMEPAGE/Gifs/elevated.gif";
import tomImage from "/assets/PNG/HOMEPAGE/Images/code.png";

const teamMembers = [
  {
    name: "Chuni",
    title: "CEO",
    description:
      "Finance & Economics background with 7+ years of experience in Crypto. Worked with multiple 8-9 fig projects.",
    image: chuniGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/chuni9", "https://t.me/Chuni9"],
  },
  {
    name: "Nico Machiavelli",
    title: "CSO/Growth",
    description:
      "Real estate investor, 7 years experience in crypto, onboarded $100M+ companies into web3.",
    image: nicoImage,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: [
      "https://x.com/MachiWhale",
      "https://t.me/CryptoMachi",
      "https://www.linkedin.com/in/nico-machiavelli-950156226",
    ],
  },
  {
    name: "",
    title: "Development Team",
    description:
      "5 full stack developers with over 40 years combined experience. Multiple solidity and commercial deployments.",
    image: tomImage,
    icons: [xIcon, telegramIcon, linkedinIcon],
    urls: [
      "https://x.com/Tom__DeFi",
      "https://t.me/tom_defi",
      "https://www.linkedin.com/in/tom-defi",
    ],
  },
  {
    name: "",
    title: "Marketing Team",
    description:
      "5 Veteran advisors/Marketing managers, Over 15 years combined experience in crypto. Veteran advisors and builders for large utility projects.",
    image: elevatedGif,
    icons: [xIcon, telegramIcon],
    urls: ["https://twitter.com/thecryptoidol", "https://t.me/thecryptoidol"],
  },
];

export default teamMembers;
