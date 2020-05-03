import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

// import { Container } from './styles';
function Games() {
  return (
    <Text>Games</Text>
  );
}

Games.navigationOptions = {
  tabBarLabel: 'Jogos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="videogame-asset" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Games)