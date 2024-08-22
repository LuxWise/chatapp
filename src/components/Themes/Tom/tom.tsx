import { Dimensions, Image, Text, View } from "react-native";
import { styles } from "./tom.styles";
const { width } = Dimensions.get("window");

export const Tom = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 40,
        paddingHorizontal: width * 0.1,
      }}
    >
      <Image
        source={require("../../../assets/png/tom.png")}
        style={{ width: 40, height: 75, resizeMode: "cover" }}
      />
      <Text style={styles.text}>Tom</Text>
    </View>
  );
};
