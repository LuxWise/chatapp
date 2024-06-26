import { View } from "react-native";
import { styles } from "./LoginForm.styles";
import { Button, Input } from "@/components/basics";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LoginStackParamList } from "@/types";

export const LoginForm = () => {
  const navigator = useNavigation<NavigationProp<LoginStackParamList>>();
  const goToRegister = () => {
    navigator.navigate("RegisterScreen");
  };
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Input secure={false} placeholder="username" />
        <Input secure={true} placeholder="password" />
      </View>
      <View style={styles.buttonView}>
        <Button text="log in" color="#0df7fd" />
        <Button text="Register" color="#1498f2" onPress={goToRegister} />
      </View>
    </View>
  );
};
