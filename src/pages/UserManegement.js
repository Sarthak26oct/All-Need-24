import React, { useRef, useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./Business.module.css";
import UserManagementModal from "../components/UserManagementModal";

const UserManagement = () => {
  const ref = useRef();

  const [users, setUsers] = useState([
    {
      name: "Alex",
      email: "alex@gmail.com",
      phone: "1234567890",
      password: "pass",
      userType: "Admin",
      access: "All",
      status: "active",
    },
    {
      name: "Alex",
      email: "alex@gmail.com",
      phone: "1234567890",
      password: "pass",
      userType: "Vendor",
      access: "vendor",
      status: "active",
    },
    {
      name: "Alex",
      email: "alex@gmail.com",
      phone: "1234567890",
      password: "pass",
      userType: "Admin",
      access: "user",
      status: "inactive",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [userManagement, setUserManagement] = useState({});

  const headers = [
    "Name",
    "Email",
    "Phone",
    "Password",
    "User Type",
    "Access",
    "Status",
  ];

  const handleAddModal = () => {
    setIsAdd(true);
    setUserManagement({});
    setIsModalOpen(true);
  };

  const handleUpdateModal = (index) => {
    setIsAdd(false);
    const user = users.find((user, indx) => indx === index);
    setUserManagement(user);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (ref.current) {
      ref.current.submitForm();
    }
  };

  return (
    <div>
      <UserManagementModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userManagement={userManagement}
        ref={ref}
        onConfirm={handleSubmit}
        isAdd={isAdd}
      />

      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/ User Management
      </div>

      <div className={styles.button}>
        <h2>User Management</h2>
        <button className={styles.addBusiness} onClick={handleAddModal}>
          + Add User
        </button>
      </div>

      <DataTable
        headers={headers}
        data={users}
        onViewClick={handleUpdateModal}
        userAction
      />
    </div>
  );
};

export default UserManagement;
