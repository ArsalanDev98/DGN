import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '/assets/betzlogo.png';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={styles.navbarSection}>
      <nav className={styles.navbar}>
        <div className={styles.leftContainer}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="Betz Logo" className={styles.logo} />
          </Link>
          <Link to="/" className={styles.logoTextLink}>
            <h3 className={styles.logoText}>Decentralized Gaming Network</h3>
          </Link>
        </div>
        <div className={`${styles.navContent} ${menuOpen ? styles.showMenu : ''}`}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/vision" className={styles.navLink}>Vision</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/blog" className={styles.navLink}>Blog</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/how-to-use" className={styles.navLink}>How To Use</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/roadmap" className={styles.navLink}>Roadmap</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/incentive" className={styles.navLink}>Incentive Program</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="https://bet-lounge.gitbook.io/usdbetz-documents/v/introduction" className={`${styles.navLink} ${styles.buttonLink}`}><span>Whitepaper </span></Link>
            </li>
            <li className={styles.navItem}>
              <Link to="https://t.me/betloungepvp_bot" className={`${styles.navLink} ${styles.buttonLink}`}>Bot</Link>
            </li>
          </ul>

        </div>
        <div className={styles.buttonContainer}>
          <Link to="https://organization-ows.gitbook.io/usdbetz-documents" target="_blank" rel="noopener noreferrer" className={`${styles.navButton} ${styles.whitepaperButton}`}>Whitepaper</Link>
          <Link to="https://t.me/betloungepvp_bot" target="_blank" rel="noopener noreferrer" className={`${styles.navButton} ${styles.botButton}`}>Bot</Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
