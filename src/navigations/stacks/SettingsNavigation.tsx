import {
  ChangeUserNameScreen,
  SettingsScreen,
  NotificationScreen,
} from "@/screens/Settings";
import { screens } from "@/utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export const SettingsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screens.tab.settings.settingScreen}
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
      <Stack.Screen
        name={screens.tab.settings.ChangeUserName}
        component={ChangeUserNameScreen}
        options={{ title: "User Name" }}
      />
      <Stack.Screen
        name={screens.tab.settings.notifications}
        component={NotificationScreen}
        options={{ title: "Notications", presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
