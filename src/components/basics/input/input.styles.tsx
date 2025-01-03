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
  inputChange: {
    height: height * 0.06,
    backgroundColor: "#0f1c25",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "#366687",
  },
  inputSearch: {
    height: height * 0.05,
    backgroundColor: "#17baf5",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    fontFamily: "RobotoMedium",
    fontSize: width * 0.042,
    color: "#fff",
  },
  textInputSearch: {
    flex: 1,
    fontFamily: "RobotoMedium",
    fontSize: width * 0.042,
    color: "#0d0133",
  },
  errorContainer: {
    backgroundColor: "#366687",
  },
});
