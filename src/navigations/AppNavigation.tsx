import { screens } from "@/utils";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsNavigation } from "./BottomTabs";
import { ChatScreen } from "@/screens/Chats";
import { styles } from "./stacks/Styles.styles";
import {
  CameraScreen,
  ImageFullScreen,
  UserProfileScreen,
} from "@/screens/Global";
import {
  AddUserGroupScreen,
  ChangeNameGroupScreen,
  GroupProfileScreen,
  GroupScreen,
} from "@/screens/Groups";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.tab.root}
        component={BottomTabsNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.global.chatScreen}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{ presentation: "modal", ...styles.modalStyle }}
      >
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.cameraScreen}
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screens.global.imageFullScreen}
          component={ImageFullScreen}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
