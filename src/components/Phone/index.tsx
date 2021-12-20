import React, {FC, useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DialPad from './DialPad';
import {StatusBar} from 'react-native';
import VoiceMail from './Voicemail';

export const Phone: FC<{}> = props => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar hidden />

      <Tab.Navigator
        initialRouteName={'Phone'}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Keypad"
          component={DialPad}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon
                  name="dialpad"
                  size={size}
                  color={focused ? color : 'white'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Voice Mail"
          component={VoiceMail}
          options={{
            headerShown: false,
            tabBarBadge: 5,
            tabBarIcon: ({focused, color, size}) => {
              return (
                <Icon
                  name="voicemail"
                  size={size}
                  color={focused ? color : 'white'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};
