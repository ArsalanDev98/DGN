import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/NewWeb/Logo/DGN-Navbar.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={styles.navbarSection}>
      <nav className={`${styles.navbar} commonContainer`}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="DGN Logo" className={styles.logo} />
          </Link>
          <Link to="/" className={styles.logoTextLink}>
            <h3 className={styles.logoText}>
              <span>Decentralized</span>
              <span>Gaming Network</span>
            </h3>
          </Link>
        </div>

        <div className={styles.navCenter}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/vision" className={styles.navLink}>
                Vision
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/how-to-use" className={styles.navLink}>
                How To Use
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/roadmap" className={styles.navLink}>
                Roadmap
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/incentive" className={styles.navLink}>
                Incentive Program
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.buttonContainer}>
          <Link
            to="https://organization-ows.gitbook.io/usdbetz-documents"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navButton}
          >
            Whitepaper
          </Link>
          <Link to="/bot" className={`${styles.navButton} ${styles.botButton}`}>
            Bot
          </Link>
        </div>
      </nav>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li className={styles.mobileNavItem}>
              <Link to="/" className={styles.mobileNavLink}>
                Home
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link to="/vision" className={styles.mobileNavLink}>
                Vision
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link to="/how-to-use" className={styles.mobileNavLink}>
                How To Use
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link to="/roadmap" className={styles.mobileNavLink}>
                Roadmap
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link to="/incentive" className={styles.mobileNavLink}>
                Incentive Program
              </Link>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
