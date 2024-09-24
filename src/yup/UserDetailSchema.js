import * as Yup from "yup";

const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const UserDetailSchema = Yup.object().shape({
  business: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your business"),
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter valid email address")
    .required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number"),
  permanentAddress: Yup.string().required(
    "Please enter your permanent address"
  ),
  pickupAddress: Yup.string().required("Please enter your pickup address"),
});
