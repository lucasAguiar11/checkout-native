import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import User from "../screens/access/User";
import Checkout from "../screens/Checkout";
import Initial from "../screens/access/Initial";

const Stack = createStackNavigator();

const InitialStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default InitialStack;
