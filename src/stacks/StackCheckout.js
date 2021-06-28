import React from "react";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";

import MainNav from "../screens/main/MainNav";

const Stack = createStackNavigator();
const StackCheckout = () => {

    options = {
        headerTitleAlign: 'center',
    };

    return (
        <Stack.Navigator
            initialRouteName="MainNav"
            screenOptions={options}
        >
            <Stack.Screen name="MainNav" component={MainNav} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
};

export default StackCheckout;