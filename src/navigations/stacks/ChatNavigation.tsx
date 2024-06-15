import ChatScreen from "@/screens/Chats/ChatScreen";
import { screens } from "@/utils";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./Styles.styles";
import CreateChatScreen from "@/screens/Chats/CreateChatScreen";

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
        component={ChatScreen}
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
