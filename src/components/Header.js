import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./Header.module.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleSidebar}>
        <MenuIcon className={styles.icon} />
      </div>

      <div className={styles.innerDiv}>
        <div className={styles.logo}>
          <h1>
            All<span style={{ color: "gold" }}>Needs</span>24
          </h1>
        </div>

        <div className={styles.userProfile}>
          <span>Alex (Vendor)</span>
          <AccountCircleIcon className={styles.profileIcon} />
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
