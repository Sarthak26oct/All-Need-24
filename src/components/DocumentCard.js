import React from "react";
import styles from "./DocumentCard.module.css";

const DocumentCard = ({ header, src, link, linkText, altText }) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.header}>{header}</h3>
      <img src={src} alt={altText} className={styles.image} />

      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;
