import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Payments from '~/pages/Payments';
import Games from '~/pages/Games';
import Courses from '~/pages/Courses';


export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        SignIn
      }),
      App: createBottomTabNavigator({
        Dashboard,
        Payments,
        Games,
        Courses
      },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: false,
            activeTintColor: '#F7E000',
            inactiveTintColor: 'rgba(100, 100, 100, 0.6)',
            style: {
              backgroundColor: '#00418C',
              height: 60,
              padding: 5,
            }
          }
        }
      ),
    }, {
      initialRouteName: signed ? 'App' : 'Sign'
    }),
  );