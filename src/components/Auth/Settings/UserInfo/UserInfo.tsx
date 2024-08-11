import { Image, Text, View } from "react-native";
import { styles } from "./UserInfo.styles";
import { useAuth } from "@/hooks";
import { ENV } from "@/utils/constants";

export const UserInfo = () => {
  const { user } = useAuth();
  console.log(user);
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
      </View>
      <View>
        <Text style={styles.username}>{user?.username}</Text>
        <Text style={{ color: "#fff" }}>{user?.email}</Text>
      </View>
    </View>
  );
};
