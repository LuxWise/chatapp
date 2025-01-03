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

  async updateUser(accessToken: string, userData: any) {
    try {
      const data = userData;
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;

      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await axios.patch(url, formData, params);
      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(accessToken: string) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await axios.get(url, params);
      if (response.status !== 200) throw response.data;

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
