import React from "react";
import styles from "./ProfileSection.module.css";
import profile from "../assets/images/E-Commerce.jpeg";

const ProfileSection = ({ isOpen }) => {
  return (
    <div className={styles.profileContainer}>
      <img src={profile} alt="Profile" className={styles.image} />

      {isOpen && (
        <div className={styles.content}>
          <div>Alexandra</div>
          <div>(Super Admin)</div>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
