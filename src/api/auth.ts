import { ENV } from "@/utils/constants";
import axios from "axios";

export class Auth {
  async register(email: string, username: string, password: string) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;
      const params = {
        email,
        username,
        password,
      };

      const response = await axios.post(url, params);

      if (response.status !== 201) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
