import { Dimensions, Image, Text, View } from "react-native";
import { styles } from "./mimi.styles";
const { width } = Dimensions.get("window");

export const Mimi = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 100,
        paddingHorizontal: width * 0.01,
      }}
    >
      <Text style={styles.text}>Mimi</Text>
      <Image
        source={require("../../../assets/png/mimi.png")}
        style={{ width: 40, height: 80, resizeMode: "cover" }}
      />
    </View>
  );
};
