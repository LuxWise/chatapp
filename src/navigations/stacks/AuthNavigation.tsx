import { screens } from "../../utils";
import { styles } from "../Styles.styles";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  AuthStartScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/Auth";

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
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
