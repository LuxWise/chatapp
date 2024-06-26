import { Request } from "express";

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

interface AuthContextType {
  user: string | null;
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
