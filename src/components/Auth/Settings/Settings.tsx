import { View } from "react-native";
import { UserInfo } from "./UserInfo";
import { Options } from "./Options";

export const Settings = () => {
  return (
    <View style={{ gap: 12 }}>
      <UserInfo />
      <Options />
    </View>
  );
};
