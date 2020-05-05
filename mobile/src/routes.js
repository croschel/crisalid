import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Payments from '~/pages/Payments';
import PaymentsMade from '~/pages/Payments/PaymentsMade';
import PaymentsScheduled from '~/pages/Payments/PaymentsScheduled';
import Games from '~/pages/Games';
import Courses from '~/pages/Courses';
import SelectedCourse from '~/pages/Courses/SelectedCourse';


export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator({
      Sign: createSwitchNavigator({
        SignIn,
        SignUp
      }),
      App: createBottomTabNavigator({
        Dashboard,
        Payments: {
          screen: createStackNavigator({
            Payments,
            PaymentsMade,
            PaymentsScheduled
          },
            {
              defaultNavigationOptions: {

                headerLeftContainerStyle: {
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
        Courses: {
          screen: createStackNavigator({
            Courses,
            SelectedCourse
          },
            {
              defaultNavigationOptions: {

                headerLeftContainerStyle: {
                  alignContent: 'center',
                }
              }
            }
          ),
          navigationOptions: {
            tabBarLabel: 'Cursos',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="monetization-on" size={30} color={tintColor} />
            )
          }
        }
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