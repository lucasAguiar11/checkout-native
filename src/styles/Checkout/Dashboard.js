import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../config/theme";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


export const styleHeader = StyleSheet.create({
    header: {
        height: '20%',
        width: '100%',
        justifyContent: 'space-between'
    },
    textWhite: {
        color: '#ffff'
    },
    textBold: {
        fontWeight: 'bold'
    },
});

export const styleCarousel = StyleSheet.create({
    containerCarousel: {
        alignItems: 'center'
    },
    iconStyle: {
        backgroundColor: theme.colors.secondary
    },
    total: {
        textAlign: "right",
        fontSize: 14
    },
    qtdText: {
        fontSize: 30,
    }
});


export const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#eeebec',
        flex: 1
    },

    row: {
        flexDirection: "row",
        marginBottom: 10
    },

    shortcuts: {
        width: '49%',
        height: 100
    },

    shortcutsFullW: {
        width: '100%',
        height: 200
    },

    cardsQtd: {
        justifyContent: "space-between"
    },

    cardContent: {
        marginTop: 10
    },


});
