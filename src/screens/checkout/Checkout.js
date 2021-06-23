import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../config/theme';
import Dashboard from './Dashboard';
import Products from './Products';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Checkout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => (
          <View style={[focused ? styles.borderFocus : null, styles.containerLabel]} >
            <Text style={[styles.label, { color: 'black' }]}>{route.name}</Text>
          </View>
        )
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        labelPosition: 'beside-icon',
      }}

    >
      <Tab.Screen name="Acompanhar" component={Dashboard} />
      <Tab.Screen name="Geração" component={Products} />
      <Tab.Screen name="Meus Dados" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#fff',
  },
  containerLabel: {
    height: '100%',
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 2.5,
    borderColor: 'transparent'
  },
  borderFocus: {
    borderTopColor: theme.colors.secondary,
  },
  label: {
    alignContent: 'center',
    justifyContent: 'center',
  }
});