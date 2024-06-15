import { screens } from "@/utils";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsNavigation } from "./BottomTabs";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
