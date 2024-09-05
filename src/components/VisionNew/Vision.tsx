import React from "react";
import "./Vision.module.css";

const Vision: React.FC = () => {
  return (
    <section className="visionSection">
      <div className="visionContainer">
        <div className="visionText">
          <h1>
            Decentralized Gaming <br /> Network{" "}
            <span className="highlight">Vision</span>
          </h1>
        </div>
        <p className="visionParagraph">
          Empowering gamers with true ownership and transparency through a
          decentralized network.
        </p>
      </div>
    </section>
  );
};

export default Vision;
