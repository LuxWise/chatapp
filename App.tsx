import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations";
import { StatusBar } from "react-native";
import { AuthProvider } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          RobotoBoldItalic: require("./src/assets/fonts/Roboto-BoldItalic.ttf"),
          RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
          RobotoLight: require("./src/assets/fonts/Roboto-Light.ttf"),
          RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
        });
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulación de carga
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <AuthProvider>
        <HandlerNavigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
