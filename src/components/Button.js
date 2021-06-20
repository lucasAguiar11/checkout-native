import React from "react";
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import { theme } from "../config/theme";

export default ({ border = false, ...props }) => {

    let arrStyles = [styles.button];

    if (border)
        arrStyles.push(styles.buttonReg);

    if (props.style)
        arrStyles.push(props.style);

    return (
        <PaperButton
            theme={theme}
            contentStyle={styles.buttonContent}
            {...props}
            style={arrStyles}
        />
    )
};

const styles = StyleSheet.create({
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
        borderWidth: 2,
    }
});
