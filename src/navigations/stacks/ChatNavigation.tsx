import { screens } from "@/utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "../Styles.styles";
import { ChatsScreen, CreateChatScreen } from "@/screens/Chats";

const Stack = createNativeStackNavigator();

export const ChatNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
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
        }}
      />
    </Stack.Navigator>
  );
};
