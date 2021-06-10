import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default () => (
  <View>
    <Text style={styles.dummyText}>Checkout</Text>
  </View>
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
