import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import MainNav from "../screens/main/MainNav";
import Product from "../screens/register/Product";
import {theme} from "../config/theme";

const Stack = createStackNavigator();


const StackCheckout = () => {

    // Estilo padrão header
    const optNavigator = {
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {
            backgroundColor: theme.colors.primary,
            elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleAlign: "left",
    }

    return (
        <Stack.Navigator
            initialRouteName="MainNav"
            screenOptions={optNavigator}
        >
            <Stack.Screen name="MainNav" component={MainNav} options={{headerShown: false}}/>
            <Stack.Screen name="Product" options={{
                title: 'Novo Produto',
            }} component={Product}/>

        </Stack.Navigator>
    )
};

export default StackCheckout;
