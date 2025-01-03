// AppNavigation.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabsNavigation } from "./BottomTabs";
import {
  UserProfileScreen,
  CameraScreen,
  ImageFullScreen,
} from "@/screens/Global";
import {
  AddUserGroupScreen,
  ChangeNameGroupScreen,
  GroupProfileScreen,
  GroupScreen,
} from "@/screens/Groups";
import { screens } from "@/utils";
import { styles } from "./Styles.styles";
import { ChatScreen } from "@/screens/Chats";

const Stack = createNativeStackNavigator();

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
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
      />
      <Stack.Screen
        name={screens.global.groupScreen}
        component={GroupScreen}
        options={{ headerShown: false, ...styles.stackNavigationStyles }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "containedTransparentModal",
          ...styles.modalStyle,
        }}
      >
        <Stack.Screen
          name={screens.global.userProfileScreen}
          component={UserProfileScreen}
          options={{ title: "User info." }}
        />
        <Stack.Screen
          name={screens.global.groupProfileScreen}
          component={GroupProfileScreen}
          options={{ title: "Group info." }}
        />
        <Stack.Screen
          name={screens.global.addUserGroupScreen}
          component={AddUserGroupScreen}
          options={{ title: "Add participant" }}
        />
        <Stack.Screen
          name={screens.global.changeNameGroupScreen}
          component={ChangeNameGroupScreen}
          options={{ title: "Change name of group" }}
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
