import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  inputContainer: {
    height: height * 0.06,
    backgroundColor: "#09b2d3",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },
  textInput: {
    flex: 1,
    fontFamily: "RobotoMedium",
    fontSize: width * 0.042,
    color: "#fff",
  },
  errorContainer: {
    backgroundColor: "#ff2",
  },
});
