import { Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const AuthStartScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>AuthStratScreen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
