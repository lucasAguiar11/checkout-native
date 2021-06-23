import React from "react";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";

import Checkout from "../screens/checkout/Checkout";

const Stack = createStackNavigator();
const StackCheckout = () => {

    options = {
        headerTitleAlign: 'center',
    };

    return (
        <Stack.Navigator
            initialRouteName="Checkout"
            screenOptions={options}
        >
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

export default StackCheckout;