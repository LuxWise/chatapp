import { Request } from "express";

interface props {
  children: JSX.Element | JSX.Element[];
}
export interface registerEntry {
  email: string;
  password: string;
}

export interface loginEntry {
  email: string;
  password: string;
}

interface route {
  key: string;
  name: string;
}

interface User {
  username: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  accesToken: string | null;
  user: User | null;
  login: (accessToken: string) => Promise<void>;
  logout: () => void;
  updateUser: (key: string, value: any) => void;
}

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type LoginStackParamList = {
  RegisterScreen: undefined;
};

export type RootStackParamList = {
  Auth: AuthStackParamList;
  Login: LoginStackParamList;
};
