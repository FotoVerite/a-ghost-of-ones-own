import React, {FC, useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DialPad from './DailPad/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import VoiceMail from './Voicemail';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';
Icon.loadFont();

export const Phone: FC<{}> = props => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden />
        <Header />

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
      </SafeAreaView>
    </>
  );
};
