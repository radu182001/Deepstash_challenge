import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import textStyle from "../config/textStyle";

function AppText({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: textStyle,
});

export default AppText;
