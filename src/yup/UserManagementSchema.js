import * as Yup from "yup";

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const UserManagementSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter your email"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Please enter your password"),
  access: Yup.string().required("Please select access"),
});
