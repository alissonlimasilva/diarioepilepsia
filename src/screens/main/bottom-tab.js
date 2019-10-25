import React from 'react';
import {TouchableHighlight} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from './index';
import colors from '../../res/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AddButton} from '../../components/addbutton';
import Conta from '../conta';
const SIZE = 80;

const BottomNavigation = createBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      }),
    },
    Adding: {
      screen: () => null, // Empty screen
      navigationOptions: () => ({
        tabBarIcon: <AddButton />, // Plus button component
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
