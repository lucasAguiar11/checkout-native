import React from 'react';
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

const PlaceholderComponent = ({ w, h, marginHorizontal = 15, marginVertical = 6, borderRadius = 0, lineMargin = 1, paddingHorizontal = 0 }) => (
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: marginVertical,
      marginHorizontal: marginHorizontal,
      borderRadius: 4,
      paddingHorizontal: paddingHorizontal
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

export default PlaceholderComponent;