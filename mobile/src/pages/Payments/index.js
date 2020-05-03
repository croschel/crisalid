import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

// import { Container } from './styles';

function Payments() {
  return (
    <Text>Payments</Text>
  );
}

Payments.navigationOptions = {
  tabBarLabel: 'Pagamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="monetization-on" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Payments);
