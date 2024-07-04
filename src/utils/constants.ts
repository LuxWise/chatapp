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
    },
    ME: "user/me",
  },
  JWT: {
    ACCESS: "access",
    REFRESH: "refresh",
  },
};
