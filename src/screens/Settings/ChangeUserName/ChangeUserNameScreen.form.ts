import * as Yup from "yup";

export const initialValue = {
  userName: "",
  lastName: "",
};

export const validationSchema = () => {
  return Yup.object({
    userName: Yup.string().required(),
    lastName: Yup.string().required(),
  });
};
