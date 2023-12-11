import React from "react";
import { View, StyleSheet } from "react-native";

import CheckBox from "react-native-check-box";
import AppText from "./AppText";
import colors from "../config/colors";

function CheckBoxFilter({ check, setCheck }) {
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkBox}
        checkBoxColor={colors.primary}
        isChecked={check}
        onClick={() => {
          setCheck(!check);
        }}
      />
      <AppText>Only show people with bio</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 5,
  },
});

export default CheckBoxFilter;
