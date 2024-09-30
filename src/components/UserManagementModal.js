import React, { forwardRef } from "react";
import ReactDOM from "react-dom";
import styles from "./UserManagementModal.module.css";
import { Field, Form, Formik } from "formik";
import { UserManagementSchema } from "../yup/UserManagementSchema";

const UserManagementModal = forwardRef(
  ({ isOpen, onClose, onConfirm, userManagement, isAdd }, ref) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>{isAdd ? "Add" : "Edit"} User</h2>

          <div>
            <Formik
              initialValues={{
                name: userManagement.name,
                email: userManagement.email,
                phone: userManagement.phone,
                password: userManagement.password,
                access: userManagement.access,
              }}
              validationSchema={UserManagementSchema}
              onSubmit={(values) => {
                console.log("VendorForm values", values);
              }}
              innerRef={ref}
            >
              {({ errors, touched }) => (
                <Form>
                  <div>
                    <div className={styles.row}>
                      <div className={styles.inputDiv}>
                        <label htmlFor="name">Name</label>
                        <br />
                        <Field
                          name="name"
                          id="name"
                          placeholder="Enter Your Name"
                        />
                        {errors.name && touched.name ? (
                          <div className={styles.error}>{errors.name}</div>
                        ) : null}
                      </div>

                      <div className={styles.inputDiv}>
                        <label htmlFor="email">Email</label>
                        <br />
                        <Field
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                        {errors.email && touched.email ? (
                          <div className={styles.error}>{errors.email}</div>
                        ) : null}
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.inputDiv}>
                        <label htmlFor="phone">Phone</label>
                        <br />
                        <Field
                          name="phone"
                          id="phone"
                          placeholder="Enter Your Phone Number"
                        />
                        {errors.phone && touched.phone ? (
                          <div className={styles.error}>{errors.phone}</div>
                        ) : null}
                      </div>

                      <div className={styles.inputDiv}>
                        <label htmlFor="password">Password</label>
                        <br />
                        <Field
                          name="password"
                          id="password"
                          placeholder="Enter Your Password"
                        />
                        {errors.password && touched.password ? (
                          <div className={styles.error}>{errors.password}</div>
                        ) : null}
                      </div>
                    </div>

                    {!isAdd && (
                      <div className={styles.inputDiv}>
                        <hr />
                        <label htmlFor="access">Access Granted</label>
                        <br />
                        <Field as="select" name="access" id="access">
                          <option value="user">User</option>
                          <option value="vendor">Vendor</option>
                          <option value="product">Product</option>
                        </Field>
                        {errors.access && touched.access ? (
                          <div className={styles.error}>{errors.access}</div>
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

export default UserManagementModal;
