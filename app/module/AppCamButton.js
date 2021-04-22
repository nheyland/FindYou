import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../tools/colors";
import { Feather } from "@expo/vector-icons";

const AppCamButton = ({ title, onPress, color, on }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: on ? "red" : colors.text,
      margin: 10,
      padding: 10,
      borderRadius: 15,
      position: "absolute",
      top: 75,
      right: 10,
    },
    text: {
      fontFamily: colors.font,
      color: colors.light,
      textAlign: "center",
      fontSize: 30,
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>
        {on ? (
          <Feather name="camera-off" size={24} color={colors.light} />
        ) : (
          <Feather name="camera" size={24} color={colors.light} />
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default AppCamButton;
