import React, { useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./UpdateUser.module.css";
import Image from "../assets/images/Sarathi_Background.png";
import PaymentSummary from "../components/PaymentSummary";

const OrderDetails = () => {
  const [users, setUsers] = useState([
    {
      sno: "1",
      orderId: "Ord-123456789901423",
      productImage: Image,
      productName: "Apple Iphone 14 (256GB, Blue)",
      price: "999",
      quantity: "1",
      total: "999",
      status: "Pending",
    },
    {
      sno: "2",
      orderId: "Ord-123456789901424",
      productImage: Image,
      productName: "Apple Iphone 15 (128GB, Blue)",
      price: "799",
      quantity: "1",
      total: "799",
      status: "Delivered",
    },
    {
      sno: "3",
      orderId: "Ord-123456789901425",
      productImage: Image,
      productName: "Apple Iphone 16 (512GB, Silver)",
      price: "1099",
      quantity: "2",
      total: "2198",
      status: "Canceled",
    },
  ]);

  const headers = [
    "S. No.",
    "Order id",
    "Product Image",
    "Product Name",
    "Price",
    "Quantity",
    "Total",
    "Status",
  ];

  return (
    <div>
      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/
        <span className={styles.underline}> Order History </span>/ Detail
      </div>

      <h2>Order Details</h2>

      <DataTable headers={headers} data={users} />

      <PaymentSummary
        address="M-13 Gaur City, Noida, Near Kailash Hospital, Uttar Pradesh, 201301"
        subTotal="36000"
        delivery="80"
        tax="3600"
        packing="1800"
        mode="COD"
      />
    </div>
  );
};

export default OrderDetails;
