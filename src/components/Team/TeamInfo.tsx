import React, { useState, useEffect } from "react";
import styles from "./TeamInfo.module.css";
import teamMembers from "./TeamData"; // Import teamMembers data

const TeamInfo: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default to showing 2 cards

  // Function to detect screen size and adjust itemsPerPage
  const updateItemsPerPage = () => {
    if (window.innerWidth <= 768) {
      setItemsPerPage(1); // Show 1 card on smaller screens
    } else {
      setItemsPerPage(2); // Show 2 cards on larger screens
    }
  };

  // Update itemsPerPage when the component mounts or the screen resizes
  useEffect(() => {
    updateItemsPerPage(); // Set the initial itemsPerPage based on screen size
    window.addEventListener("resize", updateItemsPerPage); // Update on window resize

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

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

  // Slice the array to show only the number of items based on itemsPerPage
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
