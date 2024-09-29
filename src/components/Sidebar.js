import React from "react";
import styles from "./Sidebar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DescriptionIcon from "@mui/icons-material/Description";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FolderIcon from "@mui/icons-material/Folder";
import LanguageIcon from "@mui/icons-material/Language";
import TableRowsIcon from "@mui/icons-material/TableRows";
import BoxIcon from "@mui/icons-material/AllInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavLink } from "react-router-dom";
import ProfileSection from "./ProfileSection";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? "" : styles.closed}`}>
      <ProfileSection isOpen={isOpen} className={styles.menuItem} />

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <DashboardIcon className={styles.icon} />
        {isOpen && <span>Dashboard</span>}
      </NavLink>

      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <PersonIcon className={styles.icon} />
        {isOpen && <span>User</span>}
      </NavLink>

      <NavLink
        to="/vendor"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <StorefrontIcon className={styles.icon} />
        {isOpen && <span>Vendor</span>}
      </NavLink>

      <NavLink
        to="/order-history"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <DescriptionIcon className={styles.icon} />
        {isOpen && <span>Order History</span>}
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
        {isOpen && <span>Business</span>}
      </NavLink>

      <NavLink
        to="/category"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <TableRowsIcon className={styles.icon} />
        {isOpen && <span>Catergory</span>}
      </NavLink>

      <NavLink
        to="/sub-category"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <FolderIcon className={styles.icon} />
        {isOpen && <span>Sub-Category</span>}
      </NavLink>

      <NavLink
        to="/user-management"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <ManageAccountsIcon className={styles.icon} />
        {isOpen && <span>User Management</span>}
      </NavLink>

      <NavLink
        to="/academy"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <LanguageIcon className={styles.icon} />
        {isOpen && <span>Academy</span>}
      </NavLink>

      <NavLink
        to="/product"
        className={({ isActive }) =>
          isActive
            ? `${styles.menuItem} ${styles.active}`
            : `${styles.menuItem}`
        }
      >
        <BoxIcon className={styles.icon} />
        {isOpen && <span>Product</span>}
      </NavLink>
    </div>
  );
};

export default Sidebar;
