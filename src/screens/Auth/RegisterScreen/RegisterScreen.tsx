import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./RegisterScreen.styles";
import { RegisterForm } from "@/components/Auth/RegisterForm";
import { png } from "@/assets/png";

export const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Join to CatApp</Text>
      </View>
      <RegisterForm />
      <Image source={png.catRegister} style={styles.image} />
    </SafeAreaView>
  );
};
