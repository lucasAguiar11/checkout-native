import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginBottom: 10
    }
});

export default styles;