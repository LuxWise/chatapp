import * as yup from "yup";

export const initialValue = {
  email: "",
  username: "",
  password: "",
};

export const validationSchema = () => {
  return yup.object({
    email: yup.string().email().required(),
    username: yup.string().required(),
    password: yup.string().required().min(8),
  });
};
