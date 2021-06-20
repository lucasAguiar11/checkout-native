import React from "react";
import { createStackNavigator, HeaderBackButton, TransitionPresets } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "../config/theme";
import User from "../screens/access/User";
import Checkout from "../screens/Checkout";
import Initial from "../screens/access/Initial";
import Pass from "../screens/access/Pass";

const Stack = createStackNavigator();
const InitialStack = () => {

  options = {
    ...TransitionPresets.SlideFromRightIOS,
    headerTitleAlign: 'center',
    headerLeft: (props) => (<HeaderBackButton {...props} tintColor={theme.colors.primary} />),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Initial"
        screenOptions={options}
      >
        <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
        <Stack.Screen name="User" options={{ title: 'Usuário' }} component={User} />
        <Stack.Screen name="Pass" options={{ title: 'Senha de Acesso' }} component={Pass} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default InitialStack;