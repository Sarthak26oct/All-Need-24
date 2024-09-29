import React, { useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./UpdateUser.module.css";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "1",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "2",
    },
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      userType: "User",
      referenceBy: "8084077447",
      referenceCode: "3",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

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
    // console.log(`Delete user at index: ${index}`);
    // const updatedUsers = users.filter((_, i) => i !== index);
    // setUsers(updatedUsers);
    setIsModalOpen(true);
    setUserToDelete(index);
  };

  const handleConfirmDelete = () => {
    console.log(`Delete user at index: ${userToDelete}`);
    setIsModalOpen(false);
    const updatedUsers = users.filter((_, i) => i !== userToDelete);
    setUsers(updatedUsers);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const userWithSerialNo = users.map((user, index) => ({
    ...user,
    serialNo: index + 1,
  }));

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        heading="Delete User ?"
        status="deleted"
      />

      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/ User
      </div>
      <h2>User List</h2>
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
