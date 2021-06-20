import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { theme } from '../config/theme';

export default function Input({ errorText, ...props }) {
    let stylesArr = [styles.input];

    if (props.style)
        stylesArr.push(props.style);

    return (
        <View>
            <TextInput
                theme={theme}
                {...props}
                style={stylesArr}
            />
            <HelperText style={!errorText ? styles.helpText : null} type={'error'} visible={!!errorText} padding={'none'} >
                {errorText}
            </HelperText>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        fontSize: 16
    },
    helpText:{
        display: 'none'
    }
})
