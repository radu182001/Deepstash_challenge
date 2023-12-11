import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListSeparator(props) {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 5,
  },
});

export default ListSeparator;
