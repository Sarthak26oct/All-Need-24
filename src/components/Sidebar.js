import React from "react";
import styles from "./Sidebar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FolderIcon from "@mui/icons-material/Folder";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import BoxIcon from "@mui/icons-material/AllInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <DashboardIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <PersonIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/store"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <StorefrontIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/description"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <DescriptionIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/business"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <BusinessCenterIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/setting"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <SettingsIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/folder"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <FolderIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/language"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <LanguageIcon className={styles.icon} />
      </NavLink>

      <NavLink
        to="/details"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <BoxIcon className={styles.icon} />
      </NavLink>
    </div>
  );
};

export default Sidebar;
