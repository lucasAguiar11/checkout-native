import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { theme } from '../../config/theme';
import Dashboard from './Dashboard';

const RecentsRoute = () => <Text>Recents</Text>;

const Checkout = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#ffff' },
    { key: 'recents', title: 'Recents', icon: 'webhook', badge: true, color: '#ffff' },
    { key: 'recents1', title: 'Recents', icon: 'webhook', badge: true, color: '#ffff' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Dashboard,
    recents: RecentsRoute,
    recents1: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={true}
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.placeholder}
    />
  );
};

export default Checkout;