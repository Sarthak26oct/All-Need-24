import React, { useRef, useState } from "react";
import DataTable from "../components/DataTable";
import styles from "./Business.module.css";
import CategoryModal from "../components/CategoryModal";

const Category = () => {
  const ref = useRef();

  const [users, setUsers] = useState([
    {
      sno: "1",
      business: "Amazon",
      categoryName: "Short Decriptions",
      status: "active",
    },
    {
      sno: "2",
      business: "Flipkart",
      categoryName: "Description",
      status: "active",
    },
    {
      sno: "3",
      business: "Myntra",
      categoryName: "User",
      status: "inactive",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [category, setCategory] = useState({});

  const headers = ["S. No.", "Category", "Business Name", "STATUS"];

  const handleAddModal = () => {
    setIsAdd(true);
    setCategory({});
    setIsModalOpen(true);
  };

  const handleUpdateModal = (index) => {
    setIsAdd(false);
    const user = users.find((user, indx) => indx === index);
    setCategory(user);
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (ref.current) {
      ref.current.submitForm();
    }
  };

  return (
    <div>
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={category}
        ref={ref}
        onConfirm={handleSubmit}
        isAdd={isAdd}
      />

      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/ Category
      </div>

      <div className={styles.button}>
        <h2>Category</h2>
        <button className={styles.addBusiness} onClick={handleAddModal}>
          Add Category
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

export default Category;
