import { button } from "@/components/basics";
import { View } from "react-native";
import { styles } from "./Options.styles";
import * as ImagePicker from "expo-image-picker";
import { ImageFormat } from "@/utils/ImageFormat";
import { User } from "@/api/user";
import { useAuth } from "@/hooks";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RegisterStackParamList } from "@/types";

const userController = new User();

export const Options = () => {
  const { accesToken, logout, updateUser } = useAuth();
  const navigation = useNavigation<NavigationProp<RegisterStackParamList>>();

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const file = ImageFormat(result.assets[0].uri);
      updateUserData({ avatar: file });
    }
  };

  const updateUserData = async (userData: any) => {
    try {
      if (!accesToken) {
        console.log("No token");
        return;
      }
      const response = await userController.updateUser(accesToken, userData);
      updateUser("avatar", response.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  const goToChangeUsername = () => {
    navigation.navigate("ChangeUserName");
  };

  const goToNotification = () => {
    navigation.navigate("Notifications");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonTheme}>
        <button.ButtonTheme color="#0f1c25" text="" />
      </View>
      <View>
        <View style={styles.contentButtons}>
          <button.ButtonSettings
            color="#0f1c25"
            text="Username"
            onPress={goToChangeUsername}
          />
          <button.ButtonSettings
            color="#0f1c25"
            text="Notifications"
            onPress={goToNotification}
          />
        </View>
        <View style={styles.contentButtons}>
          <button.ButtonSettings
            color="#0f1c25"
            text="Photo"
            onPress={openGallery}
          />
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
