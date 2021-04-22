import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../tools/colors";
import { MapView } from "react-native-maps";
import Map from "./Join/Map";

const Join = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Geefsd</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  map: {
    height: 100,
    width: 100,
  },
});

export default Join;
