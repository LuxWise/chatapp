import { NavigationContainer } from "@react-navigation/native";
import { HandlerNavigation } from "./src/navigations";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <HandlerNavigation />
    </NavigationContainer>
  );
}
