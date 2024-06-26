import { AuthContextType, props } from "@/types";
import { createContext } from "react";

const defaultAuthContext: AuthContextType = {
  user: null,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = (props: props) => {
  const { children } = props;
  const user = null;

  const data = {
    user,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
