import { createStackNavigator } from "@react-navigation/stack";
import {
  AuthStartScreen,
  // AuthStartScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/Auth";
import { screens } from "../../utils";
import { iconBack } from "../../components/Navigation";
import { styles } from "./Styles.styles";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        headerLeft: iconBack,
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
        options={{ title: "Login" }}
      />
      <Stack.Screen
        name={screens.auth.registerScreen}
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </Stack.Navigator>
  );
};
