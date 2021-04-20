import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Home from "./Home";
import Account from "./Account";
import colors from "../../tools/colors";
import Join from "./Join";
import Host from "./Host";

const Welcome = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: colors.tint,
        activeTintColor: colors.text,
        style: { height: 100 },
      }}
      barStyle={{ bottom: 0 }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={30} color={colors.text} />
          ),
        }}
      />
      <Tab.Screen
        name="Host"
        component={Host}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="videocamera" size={30} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Join"
        component={Join}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="plus" size={30} color={colors.text} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={30} color={colors.text} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Welcome;
