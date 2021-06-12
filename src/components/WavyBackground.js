import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Rect, G, Path } from "react-native-svg";

export default function WavyBackground({
    customStyles,
    backgroundColor,
    wavyColor
}) {

    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;

    return (
        <View style={customStyles}>
            <Svg
                height={h}
                width={w}
                viewBox={`0 0 ${w} ${h}`}
            >
                <Rect x="0" y="0" width={w} height={h} fill={backgroundColor} />

                <G>
                    <G transform="translate(472.8819425090288 3.4772951481584755)">
                        <Path d="M63.5 -128C91.6 -80.8 129.9 -78.8 176.3 -57.1C222.7 -35.3 277.2 6.2 270.8 37.7C264.4 69.3 197.2 91 154.7 126.7C112.3 162.4 94.6 212.2 60.1 237.1C25.6 261.9 -25.6 261.9 -88.1 261.3C-150.5 260.6 -224 259.2 -268 223.7C-311.9 188.2 -326.2 118.6 -311.5 59.7C-296.7 0.8 -253 -47.4 -205.6 -70.1C-158.2 -92.9 -107.2 -90.2 -72.4 -134.3C-37.5 -178.3 -18.7 -269.2 -0.5 -268.4C17.7 -267.6 35.5 -175.2 63.5 -128" fill={wavyColor} />
                    </G>
                </G>
            </Svg>
        </View>
    );
}

{/* <Svg
height="60%"
width="100%"
viewBox="0 0 1440 320"
style={{ position: 'absolute', top: customTop }}
>
<Path fill={customBgColor} d={customWavePattern} />
</Svg> */}

// <Svg
//     height={h}
//     width={w}
//     viewBox={`0 0 ${w} ${h}`}
// >
//     <Rect x="0" y="0" width={w} height={h} fill="#001220" />

//     <G fill="#4FACF7">
//         <Circle r="214" cx="132" cy="605" />
//         <Circle r="107" cx="219" cy="131" />
//     </G>
// </Svg>

{/* <Svg
    height={h}
    width={w}
    viewBox={`0 0 ${w} ${h}`}
>
    <Rect x="0" y="0" width={w} height={h} fill={backgroundColor} />

    <G>
        <G transform="translate(431 300)">
            <Path d="M0 -167.8L145.3 -83.9L145.3 83.9L0 167.8L-145.3 83.9L-145.3 -83.9Z" fill={wavyColor} />
        </G>

        <G transform="translate(204 9)">
            <Path d="M0 -106L91.8 -53L91.8 53L0 106L-91.8 53L-91.8 -53Z" fill={wavyColor} />
        </G>

        <G transform="translate(299 636)">
            <Path d="M0 -150L129.9 -75L129.9 75L0 150L-129.9 75L-129.9 -75Z" fill={wavyColor} />
        </G>

    </G>
</Svg> */}