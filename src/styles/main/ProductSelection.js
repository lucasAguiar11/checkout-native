import { StyleSheet } from "react-native";
import { theme } from "../../config/theme";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export const styleHeader = StyleSheet.create({
    container: {
        elevation: 0,
        paddingTop: 20,
        marginVertical: 10,

    },
    appbar:{
        elevation: 0,
        margin: 10,
    }
});


export const stylePrd = StyleSheet.create({
    card: {
        width: responsiveWidth(45),
        marginVertical: 10,
        backgroundColor: '#fff',
        padding: 10,
    },
    actions: {
        justifyContent: 'flex-end',
        paddingVertical: 0,
    },
    Img: {
        height: 150,
        borderRadius: 20,
    },
    innerContainer: {
        backgroundColor: 'red',
        flexDirection: 'row',
    },
    fav: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0
    },
    nameProd: {
        fontSize: 12
    },
});

export const style = StyleSheet.create({
    mainContainer: {
        minHeight: responsiveHeight(70),
        paddingHorizontal: 15,
        paddingBottom: 1
    },
    productsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
    },
    scroll: {
    },
    button: {
        marginTop: 0,
        borderRadius: 0,
        height: 50,
        alignContent: 'center',
        justifyContent: 'center'
    },
    fab: {
        backgroundColor: theme.colors.secondary,
    },
    positionFab:{
        bottom: responsiveHeight(20)
    }
});
;