import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import InitialStack from './src/stacks/InitialStack';

export default () => {
    return (
        <NavigationContainer>
            <InitialStack />
        </NavigationContainer>
    );
}