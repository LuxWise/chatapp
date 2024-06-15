import React from "react";
import { AuthNavigation } from "./stacks";
import { AppNavigation } from "./AppNavigation";

export const HandlerNavigation = () => {
  const user = { user: "pepep" };

  return user ? <AppNavigation /> : <AuthNavigation />;
};
