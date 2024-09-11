import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/NewWeb/Logo/DGN-logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <section className={styles.navbarSection}>
      <div className={styles.navbarBackdrop}></div>
      <div className={`${styles.navbar} commonContainer`}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={styles.leftContainer}>
          <Link to="/" className={styles.logoLink} onClick={closeMenu}>
            <img src={logo} alt="DGN Logo" className={styles.logo} />
          </Link>
          <Link to="/" className={styles.logoTextLink} onClick={closeMenu}>
            <h3 className={styles.logoText}>
              <span>Decentralized</span>
              <span>Gaming Network</span>
            </h3>
          </Link>
        </div>

        <div className={styles.navCenter}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/vision" className={styles.navLink} onClick={closeMenu}>
                Vision
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/how-to-use"
                className={styles.navLink}
                onClick={closeMenu}
              >
                How To Use
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/roadmap"
                className={styles.navLink}
                onClick={closeMenu}
              >
                Roadmap
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                to="/incentive"
                className={styles.navLink}
                onClick={closeMenu}
              >
                Incentive Program
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.buttonContainer}>
          <Link
            to="https://dgn-2.gitbook.io/usddgn-documents"
            className={styles.navButton}
          >
            Whitepaper
          </Link>
          <Link
            to="https://t.me/THE_DGN_BOT"
            className={`${styles.navButton} ${styles.botButton}`}
            onClick={closeMenu}
          >
            Bot
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li className={styles.mobileNavItem}>
              <Link to="/" className={styles.mobileNavLink} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/vision"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Vision
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/how-to-use"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                How To Use
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/roadmap"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                Roadmap
              </Link>
            </li>
            <li className={styles.mobileNavItem}>
              <Link
                to="/incentive"
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
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
