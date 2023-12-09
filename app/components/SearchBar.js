import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import textStyle from "../config/textStyle";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={colors.primary} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={colors.textTransparent}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: textStyle,
  container: {
    backgroundColor: colors.lighterBackground,
    width: "100%",
    borderColor: colors.primary,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
});

export default SearchBar;
