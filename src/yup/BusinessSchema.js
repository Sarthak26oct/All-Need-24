import * as Yup from "yup";

export const businessSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your buiness name"),
  description: Yup.string()
    .min(10, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter short description"),
});
