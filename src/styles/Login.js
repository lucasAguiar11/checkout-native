import { StyleSheet, Dimensions } from "react-native";


const styles = StyleSheet.create({
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    headerContainer: {
        marginTop: 130,
    },
    titleText: {
        alignSelf: 'flex-end',
        marginRight: 30,
        fontSize: 35,
        lineHeight: 35,
        color: '#ffff',
        fontWeight: 'bold'
    },
    subtitleText:{
        alignSelf: 'flex-end',
        marginRight: 30,
        width: 200,
        fontSize: 15,
        color: '#ffff',
    },
    container: {
        padding: 10,
        display: 'flex',
        flex: 1,
        marginTop: 30,
        justifyContent: 'center',
    },

    button: {
        color: "#ffff",
        borderRadius: 100,
        height: 45,
        justifyContent: 'center'
    },
    forgotPassword: {
        alignItems: "flex-end"
    },


});

export default styles;