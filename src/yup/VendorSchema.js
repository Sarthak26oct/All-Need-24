import * as Yup from "yup";

export const vendorSchema = Yup.object().shape({
  vendor: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your vendor"),
});
