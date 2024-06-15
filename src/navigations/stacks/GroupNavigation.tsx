import { createStackNavigator } from "@react-navigation/stack";
import { screens } from "@/utils";
import { CreateGroupScreen, GroupScreen } from "@/screens/Groups";
import { styles } from "./Styles.styles";

const Stack = createStackNavigator();

export const GroupNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screens.tab.groups.groupsScreen}
        component={GroupScreen}
        options={{ title: "Groups" }}
      />
      <Stack.Screen
        name={screens.tab.groups.createGroupScreen}
        component={CreateGroupScreen}
        options={{
          title: "New group",
          presentation: "modal",
          ...styles.modalStyle,
        }}
      />
    </Stack.Navigator>
  );
};
