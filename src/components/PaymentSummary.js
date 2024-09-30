import React from "react";
import styles from "./PaymentSummary.module.css";
const PaymentSummary = ({
  address,
  subTotal,
  delivery,
  tax,
  packing,
  mode,
}) => {
  const grandTotal =
    parseFloat(subTotal) +
    parseFloat(delivery) +
    parseFloat(tax) +
    parseFloat(packing);
  const pMode = mode === "COD" ? "Cash On Delivery (COD)" : "Online Payment";

  return (
    <div className={styles.summaryContainer}>
      <div className={styles.address}>
        <h3>Delivery Address</h3>
        <p>{address}</p>
      </div>

      <div className={styles.info}>
        <h3>Cost Information</h3>
        <div className={styles.payments}>
          <div>
            <p className={styles.bold}>Sub Total:</p>
            <p className={styles.bold}>Delivery:</p>
            <p className={styles.bold}>Tax:</p>
            <p className={styles.bold}>Packing:</p>
          </div>

          <div className={styles.amount}>
            <p>{subTotal}</p>
            <p>{delivery}</p>
            <p>{tax}</p>
            <p>{packing}</p>
          </div>
        </div>
        <hr />
        <div className={styles.payments}>
          <div>
            <p className={styles.bold}>Grand Total:</p>
          </div>
          <div className={styles.amount}>
            <p>{grandTotal}</p>
          </div>
        </div>
      </div>

      <div className={styles.mode}>
        <h3>Payment Mode</h3>
        <h4>{pMode}</h4>
      </div>
    </div>
  );
};

export default PaymentSummary;
