import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AppTextInput from "../../module/AppTextInput";
import AppButton from "../../module/AppButton";
import AppText from "../../module/AppText";
import colors from "../../tools/colors";

const Register = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
      <SafeAreaView style={styles.container}>
        <AppTextInput label="Email" />
        <AppTextInput label="Password" />
        <AppTextInput label="Confirm Password" />
        <AppTextInput label="First Name" />
        <AppTextInput label="Last Name" />

        <AppButton onPress={() => setAuth(true)} title="Register" />
        <AppText text="Or" />
        <AppButton
          onPress={() => {
            navigation.navigate("Login");
          }}
          title="Back to Login"
        />
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
  },
});

export default Register;
