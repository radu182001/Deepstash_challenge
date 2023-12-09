import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./app/config/colors";
import AppView from "./app/components/AppView";
import SearchBar from "./app/components/SearchBar";

export default function App() {
  return (
    <AppView>
      <SearchBar />
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
