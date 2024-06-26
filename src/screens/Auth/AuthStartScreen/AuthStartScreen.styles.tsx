import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    backgroundColor: "#07010b",
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  textContent: {
    flex: 1,
    gap: 40,
    alignItems: "center",
  },
  tittle: {
    fontFamily: "RobotoBoldItalic",
    fontSize: RFPercentage(3),
    color: "#fff",
  },
  text: {
    fontFamily: "RobotoLight",
    fontSize: RFValue(12),
    color: "#fff",
    paddingHorizontal: 18,
    textAlign: "center",
  },
  button: {
    width: width * 0.3,
    height: height * 0.05,
    backgroundColor: "#43f5fb",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "RobotoBold",
    fontSize: RFValue(12),
  },
});
