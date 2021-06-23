import React from "react";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";

import Initial from "../stacks/InitialStack";
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
            <Stack.Screen name="Initial" component={Initial} />
        </Stack.Navigator>
    )
};

export default StackCheckout;