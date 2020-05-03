import React from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Background from '~/components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Container } from './styles';

function Dashboard() {
  return (
    <Background>
      <View >
        <Text>Hello World</Text>
      </View>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Dashboard);