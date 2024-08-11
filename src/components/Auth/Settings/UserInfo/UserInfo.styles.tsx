import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: Platform.OS === "android" ? 20 : 30,
    marginVertical: 50,
    borderWidth: 2,
    borderColor: "#0acfd4",
    borderRadius: 20,
    marginHorizontal: 20,
    backgroundColor: "#14021f",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#0acfd4",
    borderRadius: 50,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
  username: {
    fontFamily: "RobotoMedium",
    fontSize: 25,
    color: "#fff",
  },
});
