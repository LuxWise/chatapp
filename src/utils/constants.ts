const SERVER_IP = "192.168.0.7:3060";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `http://${SERVER_IP}`,
  API_URL: `http://${SERVER_IP}`,
  SOCKET_URL: `http://${SERVER_IP}`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "register",
      LOGIN: "login",
      REFRESH_ACCESS_TOKEN: "refresh_acces_token",
    },
    ME: "user/me",
    USERS: "users",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
