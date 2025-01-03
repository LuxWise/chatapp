import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { map } from "lodash";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ListUsers.styles";
import { ENV } from "@/utils/constants";
interface ListUsersProps {
  users: any;
}

export const ListUsers = ({ users }: ListUsersProps) => {
  return (
    <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
      {map(users, user => (
        <TouchableOpacity key={user._id} style={styles.item}>
          {user?.avatar ? (
            <Image
              source={{ uri: `${ENV.BASE_PATH}/${user?.avatar}` }}
              style={styles.avatar}
            />
          ) : (
            <View style={styles.avatar} />
          )}
          <Text style={styles.name}>{user.username}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
