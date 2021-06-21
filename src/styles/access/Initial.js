import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

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
        width: 300,
        height: 100,
        resizeMode: 'cover',
        alignItems: 'center'
    },

    slogan: {
        fontSize: 20,
        flexWrap: 'wrap',
        paddingLeft: 2,
        paddingTop: 10,
        paddingLeft: 30,
        color: theme.colors.secondary,
    },

});

export default styles;