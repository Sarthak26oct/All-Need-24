import React, { useRef, useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./Business.module.css";
import BusinessModal from "../components/BusinessModal";

const Business = () => {
  const ref = useRef();

  const [users, setUsers] = useState([
    {
      sno: "1",
      business: "Amazon",
      shortDescription: "Short Decriptions",
      status: "active",
    },
    {
      sno: "2",
      business: "Flipkart",
      shortDescription: "Description",
      status: "active",
    },
    {
      sno: "3",
      business: "Myntra",
      shortDescription: "User",
      status: "inactive",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [business, setbusiness] = useState({});

  const headers = ["S. No.", "Business", "Short Description", "STATUS"];

  const handleAddModal = () => {
    setIsAdd(true);
    setbusiness({});
    setIsModalOpen(true);
  };

  const handleUpdateModal = (index) => {
    setIsAdd(false);
    const user = users.find((user, indx) => indx === index);
    setbusiness(user);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (ref.current) {
      ref.current.submitForm();
    }
  };

  return (
    <div>
      <BusinessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        business={business}
        ref={ref}
        onConfirm={handleSubmit}
        isAdd={isAdd}
      />

      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/ Business
      </div>

      <div className={styles.button}>
        <h2>Business</h2>
        <button className={styles.addBusiness} onClick={handleAddModal}>
          Add Business
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

export default Business;
