import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const iconBack = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={navigation.goBack}>
      <Icon name="arrow-back-ios-new" size={25} color="#FFF" />
    </TouchableHighlight>
  );
};
