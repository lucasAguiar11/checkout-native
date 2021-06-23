import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from '../../config/theme';
import Dashboard from './Dashboard';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

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
      <Tab.Screen name="Geração" component={SettingsScreen} />
      <Tab.Screen name="Meus Dados" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
// const RecentsRoute = () => <Text>Recents</Text>;

// const Checkout = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'home', title: 'Acompanhar' },
//     { key: 'recents', title: 'Gerar' },
//     { key: 'recents1', title: 'Meus Dados', },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: Dashboard,
//     recents: RecentsRoute,
//     recents1: RecentsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//       barStyle={style.bar}
//     />
//   );
// };

// export default Checkout;

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