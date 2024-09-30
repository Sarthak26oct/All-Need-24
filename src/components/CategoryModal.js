import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import styles from "./BusinessModal.module.css";
import { Field, Form, Formik } from "formik";
import { categorySchema } from "../yup/CategorySchema";

const CategoryModal = forwardRef(
  ({ isOpen, onClose, onConfirm, category, isAdd }, ref) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>{isAdd ? "Add" : "Edit"} Category</h2>

          <div>
            <Formik
              initialValues={{
                business: category.business,
                categoryName: category.categoryName,
                status: category.status,
              }}
              validationSchema={categorySchema}
              onSubmit={(values) => {
                console.log("VendorForm values", values);
              }}
              innerRef={ref}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <div className={styles.input}>
                      <label htmlFor="business">Business</label>
                      <br />
                      <Field
                        name="business"
                        id="business"
                        placeholder="Enter Business"
                      />
                      {errors.business && touched.business ? (
                        <div className={styles.error}>{errors.business}</div>
                      ) : null}
                    </div>
                    <br />
                    <div className={styles.input}>
                      <label htmlFor="categoryName">Category Name</label>
                      <br />
                      <Field
                        name="categoryName"
                        id="categoryName"
                        placeholder="Enter Category"
                      />
                      {errors.categoryName && touched.categoryName ? (
                        <div className={styles.error}>
                          {errors.categoryName}
                        </div>
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

export default CategoryModal;
