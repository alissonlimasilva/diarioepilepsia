import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Historico from '../historico';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddButton} from '../../components/addbutton';
import Conta from '../conta';
import Dashboard from '../dashboard';

const BottomNavigation = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="view-dashboard-outline" color={tintColor} size={24} />
        ),
      }),
    },
    Main: {
      screen: Historico,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="ballot" color={tintColor} size={24} />
        ),
      }),
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <AddButton />, // Plus button component
      }),
    },
    Statistics: {
      screen: () => null,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="elevation-rise" color={tintColor} size={24} />
        ),
      }),
    },
    Perfil: {
      screen: Conta,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="account" color={tintColor} size={24} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: colors.icon_selected, // active icon color
      inactiveTintColor: colors.icon_unselected, // inactive icon color
      style: {
        backgroundColor: colors.bar_bottom_color, // TabBar background
      },
    },
  },
);

export default createAppContainer(BottomNavigation);
