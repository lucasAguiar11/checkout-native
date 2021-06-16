import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Checkout from "../screens/Checkout";
import Initial from "../screens/Access/Initial";

const Stack = createStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
