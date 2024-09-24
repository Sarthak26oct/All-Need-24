import React, { useRef } from "react";
import styles from "./UpdateUser.module.css";
import UserForm from "../components/UserForm";
import DocumentsSection from "../components/DocumentsSection";
import VendorForm from "../components/VendorForm";

const UpdateUser = () => {
  const userFormRef = useRef(null);
  const vendorFormRef = useRef(null);

  const handleUpdate = () => {
    if (userFormRef.current) {
      userFormRef.current.submitForm();
    }

    if (vendorFormRef.current) {
      vendorFormRef.current.submitForm();
    }
  };

  return (
    <div>
      <div className={styles.path}>
        <span className={styles.underline}>Dashboard </span>/
        <span className={styles.underline}> User </span>/ Edit
      </div>

      <div className={styles.heading}>Edit User/ User Details</div>

      <div className={styles.formContainer}>
        <div className={styles.basicDetails}>Basic Details</div>
        <UserForm ref={userFormRef} />
        <hr />
        <div className={styles.basicDetails}>Mandatory Documents</div>
        <DocumentsSection />
        <hr />
        <VendorForm ref={vendorFormRef} />
      </div>

      <div className={styles.buttons}>
        <button className={styles.cancel}>Cancel</button>
        <button className={styles.update} type="button" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateUser;
