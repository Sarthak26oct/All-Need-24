import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import styles from "./BusinessModal.module.css";
import { Field, Form, Formik } from "formik";
import { businessSchema } from "../yup/BusinessSchema";

const BusinessModal = forwardRef(
  ({ isOpen, onClose, onConfirm, business, isAdd }, ref) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>{isAdd ? "Add" : "Edit"} Business</h2>

          <div>
            <Formik
              initialValues={{
                name: business.business,
                description: business.shortDescription,
                status: business.status,
              }}
              validationSchema={businessSchema}
              onSubmit={(values) => {
                console.log("VendorForm values", values);
              }}
              innerRef={ref}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <div className={styles.input}>
                      <label htmlFor="name">Business Name</label>
                      <br />
                      <Field
                        name="name"
                        id="name"
                        placeholder="Enter Business Name"
                      />
                      {errors.name && touched.name ? (
                        <div className={styles.error}>{errors.name}</div>
                      ) : null}
                    </div>
                    <br />
                    <div className={styles.input}>
                      <label htmlFor="description">Short Description</label>
                      <br />
                      <Field
                        name="description"
                        id="description"
                        placeholder="Enter Short Description"
                      />
                      {errors.description && touched.description ? (
                        <div className={styles.error}>{errors.description}</div>
                      ) : null}
                    </div>
                    <br />
                    {!isAdd && (
                      <div className={styles.input}>
                        <label htmlFor="status">Status</label>
                        <br />
                        <Field as="select" name="status" id="status">
                          <option value="active">ACTIVE</option>
                          <option value="inactive">INACTIVE</option>
                        </Field>
                        {errors.status && touched.status ? (
                          <div className={styles.error}>{errors.status}</div>
                        ) : null}
                      </div>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className={styles.buttons}>
            <button onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>

            <button
              type="submit"
              onClick={onConfirm}
              className={styles.confirmBtn}
            >
              {isAdd ? "Add" : "Update"}
            </button>
          </div>
        </div>
      </div>,

      document.getElementById("modal")
    );
  }
);

export default BusinessModal;
