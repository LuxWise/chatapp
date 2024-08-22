import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Platform.OS === "android" ? "#17baf5" : "#17baf5",
    borderTopWidth: 0,
    shadowColor: "#0df7fd",
    shadowOffset: {
      width: 0,
      height: Platform.OS === "android" ? 0 : 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    paddingBottom: 5,
    height: 65,
    position: "absolute",
    bottom: Platform.OS === "android" ? 12 : 30,
    left: 16,
    right: 16,
    borderRadius: 50,
  },
});
