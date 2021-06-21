import { StyleSheet, Dimensions } from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#eeebec'
    },
    header: {
        height: '30%'
    },
    row: {
        flexDirection: "row",
        marginBottom: 10
    },
    carousel: {
        paddingHorizontal: 10
    },
    shortcuts: {
        width: '49%',
        height: 100
    },
    shortcutsFullW: {
        width: '100%',
        height: 200
    },
    cardsQtd:{
        justifyContent: "space-between"
    },
    cardCarousel:{
        width: ITEM_WIDTH,
        height: 200,
        backgroundColor: 'red',
    }
});