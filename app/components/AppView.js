import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Constants from "expo-constants";
import colors from "../config/colors";

function AppView({ children }) {
  return <SafeAreaView style={styles.view}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight + 10,
    paddingHorizontal: 30,
    paddingBottom: 10,
    backgroundColor: colors.background,
  },
});

export default AppView;
