import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: Platform.OS === "android" ? 37 : 25,
    backgroundColor: "#1b172d",
    position: "relative",
    alignContent: "center",
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "RobotoBoldItalic",
    fontSize: 22,
    color: "#fff",
  },
  image: {
    alignItems: "center",
    width: "100%",
    height: 190,
    resizeMode: "contain",
  },
});
