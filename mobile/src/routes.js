import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Payments from '~/pages/Payments';
import PaymentsMade from '~/pages/Payments/PaymentsMade';
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
        Payments: {
          screen: createStackNavigator({
            Payments,
            PaymentsMade
          },
            {
              defaultNavigationOptions: {

                headerLeftContainerStyle: {
                  marginLeft: 10,
                  alignContent: 'center',
                }
              }
            }
          ),
          navigationOptions: {
            tabBarLabel: 'Pagamentos',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="monetization-on" size={30} color={tintColor} />
            )
          }
        },
        Games,
        Courses
      },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: false,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(100, 100, 100, 0.6)',
            style: {
              backgroundColor: '#00418C',
              height: 60,
              padding: 5,
              borderTopWidth: 0,
            }
          }
        }
      ),
    }, {
      initialRouteName: signed ? 'App' : 'Sign'
    }),
  );