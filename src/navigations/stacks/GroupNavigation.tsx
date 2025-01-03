import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "@/utils";
import { CreateGroupScreen, GroupScreen } from "@/screens/Groups";
import { styles } from "../Styles.styles";

const Stack = createNativeStackNavigator();

export const GroupNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
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
