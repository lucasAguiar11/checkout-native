import React from "react";
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from "react-native";
import { theme } from '../config/theme'

export default ({ header, children }) => (
  <>
    {header}
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 390,
  },
});
