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
                    <G transform="translate(553.5351758727538 146.97016817094976)">
                        <Path d="M460.3 -438.5C538.8 -381.8 504.9 -190.9 450.5 -54.4C396 82 321 164 242.5 164.1C164 164.1 82 82 2.5 79.6C-77.1 77.1 -154.1 154.2 -272 154.2C-389.8 154.1 -548.4 77.1 -532.5 15.9C-516.6 -45.3 -326.2 -90.5 -208.3 -147.2C-90.5 -203.8 -45.3 -271.9 72.8 -344.8C190.9 -417.6 381.8 -495.2 460.3 -438.5" fill={wavyColor} />
                    </G>
                </G>
            </Svg>
        </View>
    );
}

/*
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
*/