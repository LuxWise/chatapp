import { Dimensions, Platform, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    marginTop: 15,
  },
  avatarContainer: {
    width: width * 0.9,
    height: Platform.OS == "android" ? height * 0.44 : height * 0.38,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    position: "relative",
  },
  dataOverlay: {
    position: "absolute",
    top: "80%",
    left: "5%",
  },

  username: {
    fontFamily: "RobotoMedium",
    fontSize: 22,
    color: "#fff",
    padding: 5,
  },

  email: {
    fontFamily: "RobotoLight",
    fontSize: 12,
    color: "#fff",
    padding: 5,
  },
});
