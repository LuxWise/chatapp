import { View, Text } from "react-native";
import React from "react";
import { Button } from "@/components/basics";

export const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button color="#fff" text="logout" />
    </View>
  );
};
