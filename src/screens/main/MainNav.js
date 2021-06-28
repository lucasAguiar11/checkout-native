import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../config/theme';
import Dashboard from './Dashboard';
import ProductSelection from './ProductSelection';

import { styles } from '../../styles/main/MainNav';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function MainNav() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <View style={[focused ? styles.borderFocus : null, styles.containerLabel]} >
              <Text style={styles.label}>{route.name}</Text>
            </View>)
        })
      }
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        style: styles.bar,
        keyboardHidesTabBar: true
      }}

    >
      <Tab.Screen name="Acompanhar" component={Dashboard} />
      <Tab.Screen name="Geração" component={ProductSelection} />
      <Tab.Screen name="Meus Dados" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
