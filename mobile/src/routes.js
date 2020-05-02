import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        SignIn
      }),
      App: createBottomTabNavigator({
        Dashboard,
      }),
    }, {
      initialRouteName: signed ? 'App' : 'Sign'
    }),
  );