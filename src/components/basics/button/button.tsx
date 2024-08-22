import Awesome from "react-native-vector-icons/FontAwesome";
import Awesome6 from "react-native-vector-icons/FontAwesome6";
import Fontisto from "react-native-vector-icons/Fontisto";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./button.styles";
import { Flow } from "react-native-animated-spinkit";
import { Tom } from "@/components/Themes/Tom";

interface buttonProps {
  text: string;
  color: string;
  onPress?: () => void;
  loading?: any;
}

const IconButtom = {
  Username: <Awesome6 name="shield-cat" size={35} color="#6fedf5" />,
  Password: <Awesome name="lock" size={35} color="#6fedf5" />,
  Photo: <Fontisto name="photograph" size={35} color="#6fedf5" />,
  Logout: <Material name="logout" size={35} color="#6fedf5" />,
};

const Button = ({ text, onPress, color, loading }: buttonProps) => {
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

const ButtonSettings = ({ text, onPress, color, loading }: buttonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonView, { backgroundColor: color }]}
      onPress={onPress}
    >
      {IconButtom[text]}
      {loading ? (
        <Flow size={45} color="#FFF" />
      ) : (
        <Text style={styles.buttonTextSettings}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const ButtonTheme = ({ onPress, color }: buttonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonTheme, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Tom />
    </TouchableOpacity>
  );
};

export const button = { Button, ButtonSettings, ButtonTheme };
