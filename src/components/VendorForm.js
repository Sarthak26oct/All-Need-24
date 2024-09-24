import React, { forwardRef } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./VendorForm.module.css";
import { vendorSchema } from "../yup/VendorSchema";

const VendorForm = forwardRef((props, ref) => (
  <div>
    <Formik
      initialValues={{
        vendor: "",
        account: "Active",
      }}
      validationSchema={vendorSchema}
      onSubmit={(values) => {
        console.log("VendorForm values", values);
      }}
      innerRef={ref}
    >
      {({ errors, touched }) => (
        <Form>
          <div className={styles.row}>
            <div className={styles.input}>
              <label htmlFor="vendor">Already Worked As A Vendor In</label>
              <br />
              <Field
                name="vendor"
                id="vendor"
                placeholder="Enter Your Vendor Name"
              />
              {errors.vendor && touched.vendor ? (
                <div className={styles.error}>{errors.vendor}</div>
              ) : null}
            </div>

            <div className={styles.input}>
              <label htmlFor="account">Account Approval Status</label>
              <br />
              <Field as="select" name="account" id="account">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="denied">Denied</option>
              </Field>
              {errors.account && touched.account ? (
                <div className={styles.error}>{errors.account}</div>
              ) : null}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
));

export default VendorForm;
