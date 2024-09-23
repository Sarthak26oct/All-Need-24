import React from "react";
import styles from "./Card.module.css";
import ECommerce from "../assets/images/E-Commerce.jpeg";

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <img src={ECommerce} alt="An E-Commerce Image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
