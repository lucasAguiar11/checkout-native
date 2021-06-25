import React from 'react';
import { View, StyleSheet } from "react-native";

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const PlaceholderComponent = ({ w, h, marginHorizontal = 15, marginVertical = 6, borderRadius = 0, lineMargin = 1, paddingHorizontal = 0 }) => (
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
      borderRadius: 4,
      paddingHorizontal: paddingHorizontal,
    }}
    Left={props => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            borderRadius: borderRadius,
            width: responsiveWidth(w || 22),
            height: responsiveHeight(h || 15),
          },
        ]}
      />
    )}
  >
    <PlaceholderLine style={{ marginTop: responsiveHeight(lineMargin) }} width={70} />
    <PlaceholderLine style={{ marginTop: responsiveHeight(1.5) }} width={50} />
    <PlaceholderLine width={50} />
  </Placeholder>
);

export const PlaceholderComponentList = ({ qtd }) => {

  const elements = [];
  for (let index = 0; index < qtd; index++) {
    elements.push(
      <View style={styles.surface} key={index}>
        <Placeholder
          Animation={ShineOverlay}
          style={{
            marginVertical: 30,
            borderRadius: 4,
            paddingHorizontal: 0,
          }}
        >
          <PlaceholderMedia
            style={{
                borderRadius: 0,
                width: responsiveWidth(30),
                height: responsiveHeight(15),
              }}
          />

          <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={70} />
          <PlaceholderLine style={{ marginTop: responsiveHeight(0.5) }} width={50} />
          <PlaceholderLine width={50} />
        </Placeholder>
      </View>
    );
  }
  return elements;
}

export const styles = StyleSheet.create({

  surface: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: responsiveWidth(45),
    backgroundColor: '#fff'
  },
});
;

