import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.055,
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
    width: width * 0.43,
    height: height * 0.1,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingLeft: width * 0.06,
    zIndex: 1,
  },
  buttonTextSettings: {
    color: "#fff",
    fontFamily: "RobotoMedium",
    fontSize: RFPercentage(1.4),
  },
  buttonTheme: {
    width: width * 0.9,
    height: height * 0.1,
    borderRadius: 10,
    justifyContent: "center",
    zIndex: 1,
  },
});
