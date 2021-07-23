import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import InitialStack from './src/stacks/InitialStack';
import FlashMessage from "react-native-flash-message";

export default () => {
    return (
        <NavigationContainer>
            <InitialStack />
            <FlashMessage position="bottom" />
        </NavigationContainer>
    );
}
