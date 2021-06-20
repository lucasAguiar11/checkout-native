import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { theme } from '../config/theme';

export default function Input({...props}) {
    let stylesArr = [styles.input];

    if (props.style)
        stylesArr.push(props.style);

    return (
        <TextInput
            theme={theme}
            {...props}
            style={stylesArr}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        fontSize: 16
    }
})
