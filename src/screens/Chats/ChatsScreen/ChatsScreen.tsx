import Ionic from "react-native-vector-icons/Entypo";
import { View, Text, TouchableHighlight } from "react-native";
import { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { styles } from "./ChatsScreen.styles";
import { ChatStackParamList } from "@/types";

export const ChatsScreen = () => {
  const navigator = useNavigation<NavigationProp<ChatStackParamList>>();
  useEffect(() => {
    navigator.setOptions({
      headerRight: () => (
        <TouchableHighlight
          style={styles.headerRight}
          onPress={() => {
            navigator.navigate("CreateChatScreen");
          }}
        >
          <Ionic name="plus" size={20} />
        </TouchableHighlight>
      ),
    });
  });

  return (
    <View>
      <Text style={{ color: "#fff" }}>ChatsScreen</Text>
    </View>
  );
};
