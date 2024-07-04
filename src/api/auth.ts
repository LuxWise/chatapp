import { ENV } from "@/utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  async login(email: string, password: string) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;
      const params = {
        email,
        password,
      };

      const response = await axios.post(url, params);
      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  // async refreshAccessToken(refreshToken: string) {}

  async setAccessToken(token: string) {
    await AsyncStorage.setItem(ENV.JWT.ACCESS, token);
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(ENV.JWT.ACCESS);
  }

  async setRefreshToken(token: string) {
    await AsyncStorage.setItem(ENV.JWT.REFRESH, token);
  }

  async getRefreshToken() {
    return await AsyncStorage.getItem(ENV.JWT.REFRESH);
  }

  async removeTokens() {
    await AsyncStorage.removeItem(ENV.JWT.ACCESS);
    await AsyncStorage.removeItem(ENV.JWT.REFRESH);
  }
}
