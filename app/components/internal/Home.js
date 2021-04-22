import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Map from "./Home/Map";
import AppText from "../../module/AppText";
import List from "./Home/List";
import colors from "../../tools/colors";

const Home = ({ navigation, setCameraOn }) => {
  const [radius, setRadius] = useState(1);
  const [mapLocation, setMap] = useState();
  const [location, setLocation] = useState();
  const [roomLocation, setRoomLocation] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <AppText text="AroundMe" />
      <View style={styles.bar} />
      <Map
        navigation={navigation}
        radius={radius}
        setRadius={setRadius}
        location={location}
        setLocation={setLocation}
        roomLocation={roomLocation}
      />
      <List setRoomLocation={setRoomLocation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    backgroundColor: colors.text,
    height: 4,
    borderRadius: 2,
    width: "85%",
  },
});

export default Home;
