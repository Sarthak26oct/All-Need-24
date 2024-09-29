import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <article className={styles.layout}>
      <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <aside className={isSidebarOpen ? styles.open : styles.close}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </aside>

      <main className={styles.content}>
        <Outlet />
      </main>
    </article>
  );
};

export default Layout;
