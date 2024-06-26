import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
  },
  container: {
    marginTop: 90,
    gap: Platform.OS === "android" ? 22 : 25,
    paddingHorizontal: 20,
  },
  buttonView: {
    marginVertical: Platform.OS === "android" ? 50 : 60,
    alignItems: "center",
  },
});
