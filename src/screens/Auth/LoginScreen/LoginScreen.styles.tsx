import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: Platform.OS === "android" ? 37 : 20,
    backgroundColor: "#0d0133",
    position: "relative",
  },
  tittleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    zIndex: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  tittle: {
    fontFamily: "RobotoBoldItalic",
    fontSize: 22,
    color: "#fff",
  },
  background: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
    resizeMode: "cover",
    zIndex: 0,
  },
  backgroundHidden: {
    display: "none",
  },
});
