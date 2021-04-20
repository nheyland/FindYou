import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle } from "react-native-maps";
import * as Location from "expo-location";
import AppText from "../../../module/AppText";
import AppButton from "../../../module/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../tools/colors";
import Slider from "@react-native-community/slider";

const Map = (props) => {
  const [location, setLocation] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [radius, setRadius] = useState(1);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);
  const updateLocation = async () => {
    let loc = await Location.getCurrentPositionAsync({});
    await setLocation(loc);
    console.log(location.coords.latitude);
  };

  return (
    <>
      {location ? (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={radius * 1609.34}
              strokeWidth={2}
              strokeColor={colors.circle}
              fillColor={colors.circleFill}
            />
          </MapView>
          <View style={styles.row}>
            <AppText text={radius} />
            <Slider
              onValueChange={(event) => setRadius(Number(event))}
              style={styles.slider}
              minimumValue={1}
              maximumValue={50}
              step={1}
              tapToSeek={true}
              minimumTrackTintColor={colors.text}
              maximumTrackTintColor={colors.light}
            />
            <AppButton
              title={
                <MaterialIcons
                  name="location-searching"
                  size={24}
                  color={colors.light}
                />
              }
              onPress={() => updateLocation()}
            />
          </View>
        </>
      ) : (
        <View style={styles.search}>
          <AppText text="Hang tight... grabbing your location..." />
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    marginTop: 20,
    width: "100%",
    height: 300,
  },
  search: {
    marginVertical: 100,
  },
  row: {
    backgroundColor: colors.off,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
    width: 200,
    height: 40,
  },
});

export default Map;
