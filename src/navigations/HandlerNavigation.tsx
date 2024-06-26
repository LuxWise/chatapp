import { AuthNavigation } from "./stacks";
import { AppNavigation } from "./AppNavigation";
import { useAuth } from "@/hooks";

export const HandlerNavigation = () => {
  const { user } = useAuth();

  return user ? <AppNavigation /> : <AuthNavigation />;
};
