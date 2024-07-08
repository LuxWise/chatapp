import { Auth } from "@/api/auth";
import { User } from "@/api/user";
import { AuthContextType, props } from "@/types";
import { hasExpiredToken } from "@/utils/token";
import { createContext, useEffect, useState } from "react";

const defaultAuthContext: AuthContextType = {
  accesToken: null,
  user: null,
  login: async () => {},
};

const userController = new User();
const authController = new Auth();

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = (props: props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const accesToken = await authController.getAccessToken();
      const refreshToken = await authController.getRefreshToken();

      if (!accesToken || !refreshToken) {
        logout();
        setLoading(false);
        return;
      }

      if (hasExpiredToken(accesToken)) {
        if (hasExpiredToken(refreshToken)) {
          logout();
        } else {
          relogin(refreshToken);
        }
      } else {
        await login(accesToken);
      }

      setLoading(false);
    })();
  }, []);

  const relogin = async (refreshToken: string) => {
    console.log("RELOGIN", refreshToken);
  };

  const login = async (accestoken: string) => {
    try {
      setLoading(true);
      const response = await userController.getMe(accestoken);
      setUser(response);
      setToken(accestoken);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    authController.removeTokens();
  };

  const data = {
    accesToken: token,
    user,
    login,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
