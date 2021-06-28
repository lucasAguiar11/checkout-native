import React from 'react';
import { StyleSheet } from 'react-native';
import EmptyStateView from '@tttstudios/react-native-empty-state';
import { theme } from '../config/theme';

export default ({headerText, subHeaderText, buttonText, onButtonClick }) => (
    <EmptyStateView

        imageSource={require('../assets/empty-image.png')}
        styles={styles.view}
        imageStyle={styles.imageStyle}
        headerText={headerText}
        subHeaderText={subHeaderText}
        buttonText={buttonText}
        onButtonClick={() => onButtonClick()}
        buttonStyle={styles.buttonStyle}
        headerTextStyle={styles.headerTextStyle}
        subHeaderTextStyle={styles.subHeaderTextStyle}
        buttonTextStyle={styles.buttonTextStyle}
    />
);

const styles = StyleSheet.create({
    view:{
        paddingTop: 100
    },
    headerTextStyle: {
        color: 'rgb(76, 76, 76)',
        fontSize: 18,
        marginTop: 10,
    },
    imageStyle: {
        marginTop: 20,
        resizeMode: 'contain',
    },
    subHeaderTextStyle: {
        fontSize: 12,
        color: 'rgb(147, 147, 147)',
        paddingHorizontal: 60,
        textAlign: 'center',
        marginVertical: 10,
    },
    buttonStyle: {
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary,
        borderRadius: 50,
        borderWidth: 1,
        paddingHorizontal: 70,
        paddingVertical: 10,
    },
    buttonTextStyle: {
        color: '#fff',
        textDecorationLine: 'none',
    },
});