import React, { forwardRef } from "react";
import { Formik, Form, Field } from "formik";
import { UserDetailSchema } from "../yup/UserDetailSchema";
import styles from "./UserForm.module.css";

const UserForm = forwardRef((props, ref) => (
  <div>
    <Formik
      initialValues={{
        business: "",
        name: "",
        email: "",
        phoneNumber: "",
        permanentAddress: "",
        pickupAddress: "",
      }}
      validationSchema={UserDetailSchema}
      onSubmit={(values) => {
        console.log("UserForm values", values);
      }}
      innerRef={ref}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <div className={styles.firstRow}>
              <div className={styles.input}>
                <label htmlFor="business">Business</label>
                <br />
                <Field
                  name="business"
                  id="business"
                  placeholder="Enter Your Business"
                />
                {errors.business && touched.business ? (
                  <div className={styles.error}>{errors.business}</div>
                ) : null}
              </div>

              <div className={styles.input}>
                <label htmlFor="name">Name</label>
                <br />
                <Field name="name" id="name" placeholder="Enter Your Name" />
                {errors.name && touched.name ? (
                  <div className={styles.error}>{errors.name}</div>
                ) : null}
              </div>

              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <br />
                <Field
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter Your Email Address"
                />
                {errors.email && touched.email ? (
                  <div className={styles.error}>{errors.email}</div>
                ) : null}
              </div>

              <div className={styles.input}>
                <label htmlFor="phoneNumber">Phone</label>
                <br />
                <Field
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter Your Phone"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className={styles.error}>{errors.phoneNumber}</div>
                ) : null}
              </div>
            </div>

            <div className={styles.secondRow}>
              <div className={styles.input}>
                <label htmlFor="permanentAddress">Permanent Address</label>
                <br />
                <Field
                  name="permanentAddress"
                  id="permanentAddress"
                  placeholder="Enter Your Permanent Address"
                />
                {errors.permanentAddress && touched.permanentAddress ? (
                  <div className={styles.error}>{errors.permanentAddress}</div>
                ) : null}
              </div>

              <div className={styles.input}>
                <label htmlFor="pickupAddress">Pickup Address</label>
                <br />
                <Field
                  name="pickupAddress"
                  id="pickupAddress"
                  placeholder="Enter Your Pickup Address"
                />
                {errors.pickupAddress && touched.pickupAddress ? (
                  <div className={styles.error}>{errors.pickupAddress}</div>
                ) : null}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
));

export default UserForm;
