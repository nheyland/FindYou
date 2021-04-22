import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle, Camera } from "react-native-maps";
import * as Location from "expo-location";
import AppText from "../../../module/AppText";
import AppButton from "../../../module/AppButton";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import colors from "../../../tools/colors";
import Slider from "@react-native-community/slider";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Map = ({
  radius,
  setRadius,
  navigation,
  setLocation,
  location,
  roomLocation,
}) => {
  const [errorMsg, setErrorMsg] = useState(false);
  const map = useRef(null);

  useEffect(() => {
    setLocation({ latitude: 49.5795, longitude: -94.8283 });
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted")
        setErrorMsg("Permission to access location was denied");
    })();
  }, []);
  useEffect(() => {
    if (!roomLocation) return;
    zoomTo(roomLocation.latitude, roomLocation.longitude);
  }, [roomLocation]);

  const zoomTo = (lat, long) => {
    if (map.current)
      map.current.animateCamera(
        {
          center: {
            latitude: lat,
            longitude: long,
          },
          zoom: 1000,
          altitude: radius * 10000,
        },
        5000
      );
  };
  const updateLocation = async () => {
    const loc = await Location.getLastKnownPositionAsync();
    const setUp = () => {
      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    };
    zoomTo(loc.coords.latitude, loc.coords.longitude);
    setUp();
  };
  return (
    <>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Setup a Room</Text>
      </View>

      <MapView
        ref={map}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 98.5795,
          longitude: 39.8283,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {roomLocation ? (
          <Circle
            center={{
              latitude: roomLocation.latitude,
              longitude: roomLocation.longitude,
            }}
            radius={1000}
            strokeWidth={2}
            strokeColor={colors.circleOther}
            fillColor={colors.circleFillOther}
          />
        ) : null}
        {location ? (
          <Circle
            center={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            radius={radius * 1609.34}
            strokeWidth={2}
            strokeColor={colors.circle}
            fillColor={colors.circleFill}
          />
        ) : null}
      </MapView>
      <View style={styles.row}>
        <AppText text={radius} />
        <Slider
          onValueChange={(event) => setRadius(Number(event))}
          onSlidingComplete={() => updateLocation()}
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
            !location ? (
              <ActivityIndicator />
            ) : (
              <MaterialIcons
                name="location-searching"
                size={24}
                color={colors.light}
              />
            )
          }
          onPress={async () => updateLocation()}
        />
        <AppButton
          color={colors.start}
          title={<AntDesign name="arrowright" size={24} color={colors.light} />}
          onPress={() => navigation.navigate("Host")}
        />
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
    width: 200,
    height: 40,
  },
  title: {
    fontFamily: colors.font,
    fontSize: 24,
    alignContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 10,
    height: 30,
    marginVertical: 2,
    width: "100%",
  },
  titleRow: {
    marginTop: 10,
    alignItems: "center",
  },
});

export default Map;
