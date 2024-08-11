import { button } from "@/components/basics";
import { useAuth } from "@/hooks";
import { View } from "react-native";
import { UserInfo } from "./UserInfo";
import { styles } from "./Settings.styles";

export const Settings = () => {
  const { logout } = useAuth();

  return (
    <View>
      <UserInfo />
      <View style={styles.contentButtons}>
        <button.ButtonSettings color="#14021f" text="Logout" onPress={logout} />
      </View>
    </View>
  );
};
