import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Background from "../components/Background";

export default () => (
  <Background>
    <View>
      <Text style={styles.dummyText}>Login</Text>
    </View>
  </Background>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: "40%",
  },
  dummyText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
});
