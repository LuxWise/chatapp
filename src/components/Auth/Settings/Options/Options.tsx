import { button } from "@/components/basics";
import { View } from "react-native";
import { styles } from "./Options.styles";

interface OptionsProps {
  logout: () => void;
}

export const Options = ({ logout }: OptionsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonTheme}>
        <button.ButtonTheme color="#0f1c25" />
      </View>
      <View>
        <View style={styles.contentButtons}>
          <button.ButtonSettings color="#0f1c25" text="Username" />
          <button.ButtonSettings color="#0f1c25" text="Password" />
        </View>
        <View style={styles.contentButtons}>
          <button.ButtonSettings color="#0f1c25" text="Photo" />
          <button.ButtonSettings
            color="#0f1c25"
            text="Logout"
            onPress={logout}
          />
        </View>
      </View>
    </View>
  );
};
