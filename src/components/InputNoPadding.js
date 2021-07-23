import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import {theme} from '../config/theme';

export default function Input({innerRef, errorText, ...props}) {
    let stylesArr = [styles.input];

    if (props.style)
        stylesArr.push(props.style);

    return (
        <View>
            <TextInput
                theme={theme}
                {...props}
                style={stylesArr}
                ref={innerRef}
            />
            <HelperText style={!errorText ? styles.helpText : null} type={'error'} visible={!!errorText}
                        padding={'none'}>
                {errorText}
            </HelperText>
        </View>
    );
}

export function InputCurrency({innerRef, errorText, ...props}) {
    let stylesArr = [styles.input];

    if (props.style)
        stylesArr.push(props.style);

    return (
        <View>
            <TextInput
                theme={theme}
                {...props}
                style={stylesArr}
                render={(p) => (
                    <TextInputMask
                        {...p}
                        ref={innerRef}
                        type={'money'}
                        options={{
                            precision: 2,
                            separator: ',',
                            delimiter: '.',
                            unit: 'R$ ',
                            suffixUnit: ''
                        }}
                    />
                )}
            />
            <HelperText style={!errorText ? styles.helpText : null} type={'error'} visible={!!errorText}
                        padding={'none'}>
                {errorText}
            </HelperText>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        fontSize: 16,
    },
    helpText: {
        display: 'none'
    }
})
