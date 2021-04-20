import React from "react";
import { View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import Map from "./Home/Map";
import AppText from "../../module/AppText";
const Home = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <AppText text="FindYou" />
      <Map />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
});

export default Home;
