import React, { useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./UpdateUser.module.css";
import { useNavigate } from "react-router-dom";

const Vendor = () => {
  const navigate = useNavigate();

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

  const handleViewDetails = (index) => {
    navigate(`/dashboard/user/${index}`);
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
        onViewClick={handleViewDetails}
        userAction
      />
    </div>
  );
};

export default Vendor;
