import { screens } from "../../utils";
import { styles } from "../Styles.styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/Auth";

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        animation: "slide_from_right", // Configuración de la animación deslizante
        gestureEnabled: true, // Permite gestos para regresar
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={screens.auth.authStartScreen}
        component={AuthStartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.loginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
