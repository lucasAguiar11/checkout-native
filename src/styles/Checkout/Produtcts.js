import { StyleSheet } from "react-native";
import { theme } from "../../config/theme";
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export const stylePrd = StyleSheet.create({
    card: {
        width: responsiveWidth(47),
        marginVertical: 10,
    },
    actions:{
        justifyContent: 'flex-end'
    },
    sizeImg: {
        height: 150
    }
});


export const styleFAB = StyleSheet.create({
    fab: {
        backgroundColor: theme.colors.secondary
    }
});


export const style = StyleSheet.create({
    mainContainer: {
        height: responsiveHeight(90),
    },
    productsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around"
    },
    scroll: {
        height: '100%'
    }
});
