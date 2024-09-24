import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onConfirm, heading, status }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <h2>{heading}</h2>

        <p>
          This user will be <span className={styles.deleted}>{status}</span> and
          you’ll no longer be able to access them?
        </p>

        <div className={styles.buttons}>
          <button onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={onConfirm} className={styles.confirmBtn}>
            Yes, I'm Sure
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("modal")
  );
};

export default Modal;
