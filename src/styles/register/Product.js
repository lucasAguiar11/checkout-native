import React from 'react';
import {StyleSheet} from 'react-native';
import {responsiveHeight} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: responsiveHeight(90)
    },
    containerButton: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    snack: {
        backgroundColor: '#28a745',
    }
});

//
// scroll: {
//     backgroundColor: '#fff',
// },
// container: {
//     flex: 1,
//         padding: 15,
//         backgroundColor: '#fff',
// },
