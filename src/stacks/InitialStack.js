import React from "react";
import { createStackNavigator, HeaderBackButton, TransitionPresets } from "@react-navigation/stack";

import { theme } from "../config/theme";
import User from "../screens/access/User";
import StackCheckout from "./StackCheckout";
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
    <Stack.Navigator
      initialRouteName="StackCheckout"
      screenOptions={options}
    >
      <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
      <Stack.Screen name="User" options={{ title: 'Usuário' }} component={User} />
      <Stack.Screen name="Pass" options={{ title: 'Senha de Acesso' }} component={Pass} />
      <Stack.Screen name="StackCheckout" component={StackCheckout} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
};

export default InitialStack;