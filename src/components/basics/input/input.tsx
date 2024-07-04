import { View, TextInput } from "react-native";
import { styles } from "./input.styles";
import React from "react";

interface inputProps {
  secure: boolean;
  placeholder: string;
  handleChange?: (text: string) => void;
  handleBlur?: (e: any) => void;
  value?: string;
  error?: boolean;
}

export const Input = ({
  secure,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
}: inputProps) => {
  return (
    <View style={[styles.inputContainer, error && styles.errorContainer]}>
      <TextInput
        autoCorrect={false}
        style={styles.textInput}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor={"#0d013390"}
        selectionColor={"#0d0133"}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </View>
  );
};
