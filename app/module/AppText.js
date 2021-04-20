import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../tools/colors";

const AppText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: colors.font,
    color: colors.text,
    textAlign: "center",
    fontSize: 30,
  },
});

export default AppText;
