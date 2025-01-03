import { View } from "react-native";
import { useEffect, useState } from "react";
import { User } from "@/api/user";
import { useAuth } from "@/hooks";
import { CreateChat } from "@/components/Chat/CreateChat";

const userController = new User();

export const CreateChatScreen = () => {
  const { accesToken } = useAuth();
  const [users, setUsers] = useState(null);
  const [usersResult, setUsersResult] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        if (!accesToken) {
          throw new Error("Access token is missing");
        }
        const response = await userController.getAll(accesToken);
        setUsers(response);
        setUsersResult(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View>
      <CreateChat.Search data={usersResult} setData={setUsersResult} />
      <CreateChat.ListUsers users={users} />
    </View>
  );
};
