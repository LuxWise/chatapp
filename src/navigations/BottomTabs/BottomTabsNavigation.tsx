import Ionic from "react-native-vector-icons/Ionicons";
import Awesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatNavigation, GroupNavigation, SettingsNavigation } from "../stacks";
import { screens } from "@/utils";
import { styles } from "./BottomTabNavigation.styles";
import { route } from "@/types";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarInactiveTintColor: "#0f1c25",
        tabBarActiveTintColor: "#fff",
        tabBarIcon: ({ color, size }) => IconBar(route, color, size),
      })}
    >
      <Tab.Screen
        name={screens.tab.chats.root}
        component={ChatNavigation}
        options={{ title: "Chats" }}
      />
      <Tab.Screen
        name={screens.tab.groups.root}
        component={GroupNavigation}
        options={{ title: "Groups" }}
      />
      <Tab.Screen
        name={screens.tab.settings.root}
        component={SettingsNavigation}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};

const IconBar = (route: route, color: string, size: number) => {
  if (route.name === screens.tab.chats.root)
    return <Ionic name="chatbubbles-sharp" size={size} color={color} />;

  if (route.name === screens.tab.groups.root)
    return <Awesome name="group" size={size} color={color} />;

  if (route.name === screens.tab.settings.root)
    return <Ionic name="settings" size={size} color={color} />;

  return <Ionic name="alert" size={size} color={color} />;
};
