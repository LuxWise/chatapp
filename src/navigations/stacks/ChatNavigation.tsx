import { screens } from "@/utils";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "../Styles.styles";
import { ChatsScreen, CreateChatScreen } from "@/screens/Chats";

const Stack = createStackNavigator();

export const ChatNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackNavigationStyles,
      }}
    >
      <Stack.Screen
        name={screens.tab.chats.chatsScreen}
        component={ChatsScreen}
        options={{ title: "Chats" }}
      />
      <Stack.Screen
        name={screens.tab.chats.createChatScreen}
        component={CreateChatScreen}
        options={{
          title: "New chat",
          presentation: "modal",
          ...styles.modalStyle,
        }}
      />
    </Stack.Navigator>
  );
};
