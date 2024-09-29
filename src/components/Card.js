import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, description, backgroundImage, iconImage }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageSection}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.overlay}>
          <img src={iconImage} alt="icon" className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
