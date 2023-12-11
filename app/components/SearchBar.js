import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import textStyle from "../config/textStyle";

function SearchBar({ people, setPeopleList, check }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPeopleList(() => {
      if (check === true)
        people = people.filter((p) => {
          return p.bio !== undefined;
        });

      return people.filter((p) => {
        const fullName = p.firstName + " " + p.lastName;
        return fullName.toUpperCase().includes(search.toUpperCase());
      });
    });
  }, [search, check]);

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={colors.primary} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={colors.textTransparent}
        style={styles.textInput}
        onChangeText={(v) => {
          setSearch(v);
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: [textStyle, { width: "100%" }],
  container: {
    backgroundColor: colors.lighterBackground,
    width: "100%",
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    // marginBottom: 10,
  },
});

export default SearchBar;
