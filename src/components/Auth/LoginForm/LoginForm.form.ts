import * as yup from "yup";

export const initialValue = {
  email: "",
  password: "",
};

export const validationSchema = () => {
  return yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });
};
