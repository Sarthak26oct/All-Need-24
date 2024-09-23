import React from "react";
import Card from "../components/Card";
import styles from "./Dashboard.module.css";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { welcomeMessage, cards } = useSelector((state) => state.content);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.content}>
        <h2>{welcomeMessage}</h2>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
