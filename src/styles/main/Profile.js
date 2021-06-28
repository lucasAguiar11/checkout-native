import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from "../../config/theme";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    main: {
        marginTop: '25%',
        alignItems: 'center',
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    avatar: {
        backgroundColor: theme.colors.secondary
    },
    profileName: {
        marginTop: 8,
        fontSize: 24,
        fontWeight: '700'
    }
});