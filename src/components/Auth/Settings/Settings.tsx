import { useAuth } from "@/hooks";
import { View } from "react-native";
import { UserInfo } from "./UserInfo";
import { Options } from "./Options";

export const Settings = () => {
  const { logout } = useAuth();

  return (
    <View style={{ gap: 12 }}>
      <UserInfo />
      <Options logout={logout} />
    </View>
  );
};
