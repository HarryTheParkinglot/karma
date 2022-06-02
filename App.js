import { View, StyleSheet } from "react-native";
import AnbdMain from "./src/AnbdMain";

// From https://simpleicons.org/?q=expo
import BellIcon from "./assets/bell.svg";

export default function App() {
  return (
    <View>
      <AnbdMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
