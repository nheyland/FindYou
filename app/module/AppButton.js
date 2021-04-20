import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../tools/colors";

const AppButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button,
    marginVertical: 20,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontFamily: colors.font,
    color: colors.light,
    textAlign: "center",
    fontSize: 30,
  },
});

export default AppButton;
