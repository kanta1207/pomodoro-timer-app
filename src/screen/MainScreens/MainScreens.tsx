import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { colorCode } from '../../utils/colors.util';

import { HomeScreen } from './Home/Home.screen';
import { PomodoroScreen } from './Pomodoro/Pomodoro.screen';
import { SettingScreen } from './Setting/Setting.screen';

const Tab = createBottomTabNavigator();

export const MainScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Pomodoro"
        component={PomodoroScreen}
        options={{
          tabBarLabel: 'Pomo',
          headerShown: false,
          tabBarLabelStyle: { color: colorCode.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="timer" size={24} color={colorCode.white} />
            ) : (
              <Ionicons
                name="timer-outline"
                size={24}
                color={colorCode.white}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          headerShown: false,
          tabBarLabelStyle: { color: colorCode.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="setting" size={24} color={colorCode.white} />
            ) : (
              <AntDesign name="setting" size={24} color={colorCode.white} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colorCode.primaryBlack,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    borderTopWidth: 0,
  },
});
