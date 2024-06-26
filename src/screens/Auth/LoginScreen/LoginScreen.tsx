import { Image, Keyboard, Text, View } from "react-native";
import { styles } from "./LoginScreen.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { assets } from "@/assets";
import { useEffect, useState } from "react";
import { LoginForm } from "@/components/Auth/LoginForm";

export const LoginScreen = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.tittleView}>
        <Image source={assets.image.png.logo} style={styles.image} />
        <Text style={styles.tittle}>CatApp</Text>
      </View>
      <LoginForm />
      <Image
        source={assets.image.png.background}
        style={[styles.background, keyboardVisible && styles.backgroundHidden]}
      />
    </SafeAreaView>
  );
};
