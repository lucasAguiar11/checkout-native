import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default () => (
    <Image source={require('../assets/pedija-logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 120,
      marginBottom: 8,
      resizeMode: 'stretch'
    },
  })
  