import { ENV } from "@/utils/constants";
import axios from "axios";

export class User {
  async getMe(accessToken: string) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.get(url, params);

      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
