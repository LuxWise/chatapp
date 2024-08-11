import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonText: {
    fontFamily: "RobotoMedium",
    fontSize: RFPercentage(2),
  },
  buttonView: {
    width: width * 0.9,
    height: height * 0.06,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#0df7fd",
  },
  buttonTextSettings: {
    color: "#fff",
    fontFamily: "RobotoMedium",
    fontSize: RFPercentage(2),
  },
});
