import {
  ChangeFirstNameScreen,
  ChangeLastNameScreen,
  SettingsScreen,
} from "@/screens/Settings";
import { screens } from "@/utils";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../Styles.styles";

const Stack = createStackNavigator();

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeFirstnameScreen}
        component={ChangeFirstNameScreen}
        options={{ title: "change Name", presentation: "modal" }}
      />
      <Stack.Screen
        name={screens.tab.settings.changeLastnameScreen}
        component={ChangeLastNameScreen}
        options={{ title: "change LastName", presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
