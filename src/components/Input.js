import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';
import { theme } from '../config/theme';

export default function Input({ errorText, leftIcon, rightIcon, rightIconClick, ...props }) {
    return (
        <View>
            <TextInput
                style={styles.input}
                left={!!leftIcon ? <TextInput.Icon name={leftIcon} color={!!errorText ? theme.colors.error : theme.colors.primary} /> : null}
                right={!!rightIcon ? <TextInput.Icon name={rightIcon} forceTextInputFocus={false} onPress={() => rightIconClick()} color={!!errorText ? theme.colors.error : theme.colors.primary} /> : null}
                {...props}
            />
            <HelperText type={'error'} visible={!!errorText}>
                {errorText}
            </HelperText>
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
    },
})
