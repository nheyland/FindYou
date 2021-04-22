import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import AppCamButton from "../../../module/AppCamButton";

const UserCam = ({ tabBarVis, setTabBarVis }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === false) {
    return (
      <Text>No access to camera, please allow camera use in settings</Text>
    );
  }
  const activate = () => {
    if (cameraOn) {
      setCameraOn(false);
      setTabBarVis(true);
    } else {
      setCameraOn(true);
      setTabBarVis(false);
    }
  };
  return (
    <View style={styles.container}>
      {cameraOn ? (
        <>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.front}
          ></Camera>
          <AppCamButton
            on={cameraOn}
            title="Turn Camera off"
            onPress={() => activate()}
          />
        </>
      ) : (
        <AppCamButton
          on={cameraOn}
          title="Turn Camera On"
          onPress={() => activate()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    height: "100%",
    width: "100%",
  },
});

export default UserCam;
