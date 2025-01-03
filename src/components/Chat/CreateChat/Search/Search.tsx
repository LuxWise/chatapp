import { View } from "react-native";
import { input } from "@/components/basics";
import { styles } from "./Search.style";

interface SearchUsersProps {
  data: any;
  setData: any;
}

export const Search = ({ data, setData }: SearchUsersProps) => {
  return (
    <View style={styles.searchContainer}>
      <input.InputSearch secure={false} placeholder="Search" />
    </View>
  );
};
