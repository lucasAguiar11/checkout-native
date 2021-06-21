import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Dashboard from './Dashboard';

const RecentsRoute = () => <Text>Recents</Text>;

const Checkout = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'recents', title: 'Recents', icon: 'webhook', badge: true },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Dashboard,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
    />
  );
};

export default Checkout;