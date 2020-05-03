import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from 'react-native';

// import { Container } from './styles';
function Courses() {
  return (
    <Text>Courses</Text>
  );
}

Courses.navigationOptions = {
  tabBarLabel: 'Cursos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="import-contacts" size={30} color={tintColor} />
  )
}

export default withNavigationFocus(Courses)