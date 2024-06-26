import { assets } from "@/assets";
import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AuthStartScreen.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "@/types";

export const AuthStartScreen = () => {
  const navigator = useNavigation<NavigationProp<AuthStackParamList>>();
  const goToLogin = () => {
    navigator.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={styles.content}>
      <Image source={assets.image.png.auth01} style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.tittle}>Welcome to CatChat</Text>
        <Text style={styles.text}>
          We recommend using this service with responsibility to enjoy the
          service
        </Text>
        <Text style={styles.text}>Consult our Privacy Policy Press</Text>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.buttonText}>r eu ready?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
