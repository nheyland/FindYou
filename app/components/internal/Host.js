import React from "react";
import { View, StyleSheet } from "react-native";
import UserCam from "./Host/UserCam";

const Host = ({ tabBarVis, setTabBarVis }) => {
  return (
    <>
      <UserCam tabBarVis={tabBarVis} setTabBarVis={setTabBarVis} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Host;
