import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerLogo: {
        padding: 20,
        justifyContent: 'center',
        flex: 1
    },

    containerButton: {
        padding: 20,
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignItems: 'center'
    },

    slogan: {
        fontSize: 20,
        textTransform: 'capitalize',
        flexWrap: 'wrap',
        lineHeight: 30
    },

    button: {
        marginTop: 15,
        alignContent: 'center',
        justifyContent: 'center',
        height: 50,
    },
    buttonContent: {
        height: 50
    },
    buttonReg: {
        borderWidth: 2
    }
});

export default styles;