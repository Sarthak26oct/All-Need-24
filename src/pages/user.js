import React, { useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./UpdateUser.module.css";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "9090909090",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "9090909090",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "9090909090",
    },
  ]);

  const headers = [
    "S. No.",
    "Name",
    "Email",
    "User Type",
    "Reference By",
    "Reference Code",
  ];

  const handleEdit = (index) => {
    navigate(`/dashboard/user/${index}`);
  };

  const handleDelete = (index) => {
    console.log(`Delete user at index: ${index}`);
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const userWithSerialNo = users.map((user, index) => ({
    ...user,
    serialNo: index + 1,
  }));

  return (
    <div>
      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/ User
      </div>

      <DataTable
        headers={headers}
        data={userWithSerialNo}
        onEdit={handleEdit}
        onDelete={handleDelete}
        userAction
      />
    </div>
  );
};

export default User;
