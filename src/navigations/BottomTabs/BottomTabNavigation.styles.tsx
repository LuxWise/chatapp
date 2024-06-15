import { Platform } from "react-native";

export const styles = {
  tabBarStyle: {
    backgroundColor: "#171717",
    borderTopWidth: 0,
    paddingBottom: Platform.OS === "android" ? 20 : 25,
    height: Platform.OS === "android" ? 70 : 80,
  },
};
