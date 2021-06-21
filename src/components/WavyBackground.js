import React from "react";
import { View, Dimensions } from "react-native";
import Svg, { Rect, G, Path } from "react-native-svg";
import { theme } from '../config/theme';

export function WavyBackground({
    backgroundColor = '#ffff',
    fill = false
}) {

    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;

    return (
        <View style={{ position: 'absolute', width: Dimensions.get('window').width }}>
            <Svg
                height={h}
                width={w}
                viewBox={`0 0 ${w} ${h}`}
            >
                <Rect x="0" y="0" width={w} height={h} fill={backgroundColor} />
                <G>
                    <G transform="translate(449.75 0)">
                        <Path d="M107.3 -107.3C135.4 -79.2 152.1 -39.6 152.1 0C152.1 39.6 135.4 79.2 107.3 107.2C79.2 135.2 39.6 151.6 0 151.6C-39.6 151.6 -79.2 135.2 -107.2 107.2C-135.2 79.2 -151.6 39.6 -151.6 0C-151.6 -39.6 -135.2 -79.2 -107.2 -107.3C-79.2 -135.4 -39.6 -152.1 0 -152.1C39.6 -152.1 79.2 -135.4 107.3 -107.3" stroke={theme.colors.primary} fill={fill ? theme.colors.primary : 'none'} strokeWidth={4}></Path>
                    </G>
                </G>
            </Svg>
        </View>
    );
}

export function WavyHeader() {
    const w = Dimensions.get('window').width;
    const h = Dimensions.get('window').height;

    return (
        <View style={{ position: 'absolute', width: Dimensions.get('window').width }}>
            <Svg
                height={h}
                width={w}
                viewBox={`0 0 ${w} ${h}`}
            >
                <Rect x="0" y="0" width={w} height={h} fill={'#eeebec'} />
                <Path d="M0 153L37.5 163.8C75 174.7 150 196.3 225 195.7C300 195 375 172 412.5 160.5L450 149L450 0L412.5 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" stroke={theme.colors.primary} fill={theme.colors.primary} strokeWidth={4} stroke-linecap="round" stroke-linejoin="miter"></Path>
            </Svg>
        </View>
    );
}