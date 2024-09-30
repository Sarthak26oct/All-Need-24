import * as Yup from "yup";

export const categorySchema = Yup.object().shape({
  business: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your buiness"),
  categoryName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter category name"),
});
