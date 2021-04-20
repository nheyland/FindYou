import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../tools/colors";

const AppTextInput = ({ label }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput style={styles.text} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    padding: 10,
    marginVertical: 10,
  },
  text: {
    color: colors.text,
    fontSize: 20,
    fontFamily: colors.font,
  },
  label: {
    fontFamily: colors.font,
    fontSize: 30,
  },
});

export default AppTextInput;
