import { Image, Text, View } from "react-native";
import { styles } from "./UserInfo.styles";
import { useAuth } from "@/hooks";
import { ENV } from "@/utils/constants";

export const UserInfo = () => {
  const { user } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.avatarContainer}>
        {user?.avatar ? (
          <Image
            source={{ uri: `${ENV.BASE_PATH}/${user?.avatar}` }}
            style={styles.avatar}
          />
        ) : (
          <View style={styles.avatar} />
        )}
        <View style={styles.dataOverlay}>
          <Text style={styles.username}>{user?.username}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
};
