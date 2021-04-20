import { setStatusBarHidden } from "expo-status-bar";
import React from "react";
import { View, SafeAreaView, StyleSheet, Button } from "react-native";
import AppTextInput from "../../module/AppTextInput";
import AppButton from "../../module/AppButton";
import AppText from "../../module/AppText";
import colors from "../../tools/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = ({ navigation, setAuth }) => {
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
      <SafeAreaView>
        <View style={styles.container}>
          <AppTextInput label="Email" />
          <AppTextInput label="Password" />
          <AppButton onPress={() => setAuth(true)} title="Login" />
          <AppText text="Or" />
          <AppButton
            onPress={() => {
              navigation.navigate("Register");
            }}
            title="Register"
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 100,
  },
});

export default Login;
