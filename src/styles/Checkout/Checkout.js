import { StyleSheet } from "react-native";
import { theme } from "../../config/theme";

export const styles = StyleSheet.create({
    bar: {
        height: 50
    },
    containerLabel: {
        height: '100%',
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 2.5,
        borderColor: 'transparent'
    },
    borderFocus: {
        borderTopColor: theme.colors.secondary,
    },
    label: {
        alignContent: 'center',
        justifyContent: 'center',
        color: 'black'
    },
});