import { jwtDecode } from "jwt-decode";

export const hasExpiredToken = (token: string) => {
  try {
    const { exp } = jwtDecode(token);
    const currentDate = new Date().getDate();

    if (!exp) throw new Error();

    if (exp <= currentDate) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return error;
  }
};
