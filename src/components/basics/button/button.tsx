import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./button.styles";
import { Flow } from "react-native-animated-spinkit";

interface buttonProps {
  text: string;
  color: string;
  onPress?: () => void;
  loading?: any;
}

export const Button = ({ text, onPress, color, loading }: buttonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      {loading ? (
        <Flow size={45} color="#FFF" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};
