import React from "react";
import AppText from "./AppText";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

function NoResultsList(props) {
  return <AppText style={styles.text}>No results</AppText>;
}

const styles = StyleSheet.create({
  text: {
    width: "100%",
    textAlign: "center",
    color: colors.textTransparent,
  },
});

export default NoResultsList;
