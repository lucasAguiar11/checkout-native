import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Checkout from "../screens/Checkout";

const Stack = createStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
