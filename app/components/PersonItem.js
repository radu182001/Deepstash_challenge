import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import fontSizes from "../config/fontSizes";

import { Ionicons } from "@expo/vector-icons";

function PersonItem({ image, name, bio }) {
  const [fav, setFav] = useState("outline");

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.imageStyle}
        resizeMode={"cover"}
      />
      <View style={styles.textBox}>
        <AppText style={styles.heading}>{name}</AppText>
        {bio && (
          <AppText style={styles.bio} numberOfLines={2}>
            {bio}
          </AppText>
        )}
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          if (fav === "outline") setFav("sharp");
          else setFav("outline");
        }}
      >
        <Ionicons name={"heart-" + fav} size={20} color={colors.primary} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    width: "100%",
    height: 90,
    backgroundColor: colors.lighterBackground,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageStyle: {
    height: 70,
    aspectRatio: 1,
    borderRadius: 35,
    borderWidth: 2,
    // borderColor: colors.primary,
  },
  textBox: {
    marginLeft: 20,
    height: "100%",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  heading: {
    fontSize: fontSizes.h2,
  },
  bio: {
    fontSize: fontSizes.h3,
  },
});

export default PersonItem;
