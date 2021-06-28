import React from "react";
import { Appbar } from 'react-native-paper';
import { createStackNavigator } from "@react-navigation/stack";

import MainNav from "../screens/main/MainNav";
import Product from "../screens/register/Product";

const Stack = createStackNavigator();



function CustomNavigationBar({ navigation, previous, title }) {
    return (
        <Appbar.Header>
            {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
}

const StackCheckout = () => {

    options = {
        headerTitleAlign: 'center',
        header: (props) => {
            const title = props.scene.descriptor.options.title;
            return <CustomNavigationBar {...props} title={title} />
        },
    };

    return (
        <Stack.Navigator
            initialRouteName="MainNav"
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    elevation: 0
                }
            }}
        >
            <Stack.Screen name="MainNav" component={MainNav} options={{ headerShown: false }} />
            <Stack.Screen name="Product" options={{ title: 'Novo Produto' }} component={Product} />

        </Stack.Navigator>
    )
};

export default StackCheckout;