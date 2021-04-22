import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/components/external/Login";
import Welcome from "./app/components/internal/Welcome";
import Register from "./app/components/external/Register";

export default function App() {
  const [auth, setAuth] = useState(false);

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!auth ? (
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setAuth={setAuth} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {(props) => <Register {...props} setAuth={setAuth} />}
            </Stack.Screen>
          </>
        ) : (
          <Stack.Screen name="Welcome">
            {(props) => <Welcome {...props} component={Welcome} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
