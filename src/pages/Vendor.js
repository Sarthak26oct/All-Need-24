import React, { useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./UpdateUser.module.css";

const Vendor = () => {
  const [users, setUsers] = useState([
    {
      Address: "John Doe",
      Paymentmode: "johndoe@gmail.com",
      orderDatetime: "User",
      SubTotal: "8084077447",
      GrandTotal: "9090909090",
    },

    {
      Address: "John Doe",

      Paymentmode: "johndoe@gmail.com",

      orderDatetime: "User",

      SubTotal: "8084077447",

      GrandTotal: "9090909090",
    },

    {
      Address: "John Doe",

      Paymentmode: "johndoe@gmail.com",

      orderDatetime: "User",

      SubTotal: "8084077447",

      GrandTotal: "9090909090",
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
        <span className={styles.underline}>Dashboard </span>/ Vendor
      </div>

      <h2>Vendor List</h2>

      <DataTable
        headers={headers}
        data={userWithSerialNo}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Vendor;
