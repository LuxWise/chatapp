import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    marginBottom: 50,
    paddingBottom: 50,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    paddingVertical: 12,
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 16,
  },
  avatar: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  email: {
    color: "#fff",
    opacity: 0.6,
    marginTop: 2,
  },
});
