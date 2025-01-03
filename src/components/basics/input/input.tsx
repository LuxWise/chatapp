import { View, TextInput, KeyboardTypeOptions } from "react-native";
import { styles } from "./input.styles";
import React from "react";

interface inputProps {
  secure: boolean;
  placeholder: string;
  handleChange?: (text: string) => void;
  handleBlur?: (e: any) => void;
  value?: string;
  keyboardType?: KeyboardTypeOptions;
  error?: boolean;
}

const Input = ({
  secure,
  placeholder,
  handleChange,
  handleBlur,
  value,
  keyboardType,
  error,
}: inputProps) => {
  if (keyboardType === undefined) {
    keyboardType = "default";
  }
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
        keyboardType={keyboardType}
      />
    </View>
  );
};

const InputChange = ({
  secure,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
}: inputProps) => {
  return (
    <View style={[styles.inputChange, error && styles.errorContainer]}>
      <TextInput
        autoCorrect={false}
        style={styles.textInput}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor={"#ffffff90"}
        selectionColor={"#fff"}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </View>
  );
};

const InputSearch = ({
  secure,
  placeholder,
  handleChange,
  handleBlur,
  value,
  error,
}: inputProps) => {
  return (
    <View style={[styles.inputSearch, error && styles.errorContainer]}>
      <TextInput
        autoCorrect={false}
        style={styles.textInputSearch}
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

export const input = { Input, InputChange, InputSearch };
