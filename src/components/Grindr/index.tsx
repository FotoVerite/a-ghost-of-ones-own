import React, {FC} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GrindrContextProvider from 'components/Grindr/context';
import GridNavigation from './navigation/GridNavigation';
import MessageNavigation from './navigation/MessageNavigation';
import {Exit} from './Exit';

export const Grindr: FC<{}> = props => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar hidden />
        <GrindrContextProvider>
          <Tab.Navigator
            initialRouteName={'Grid'}
            screenOptions={{headerShown: false}}>
            <Tab.Screen
              name="Fresh Meat"
              component={GridNavigation}
              options={{
                tabBarIcon: ({focused, color, size}) => {
                  return (
                    <Icon
                      name="food-steak"
                      size={size}
                      color={focused ? color : 'white'}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Messages"
              component={MessageNavigation}
              options={{
                headerShown: false,
                tabBarBadge: 4,
                tabBarBadgeStyle: {
                  backgroundColor: 'yellow',
                },
                tabBarIcon: ({focused, color, size}) => {
                  return (
                    <Icon
                      name="message-outline"
                      size={size}
                      color={focused ? color : 'white'}
                    />
                  );
                },
              }}
            />
            <Tab.Screen
              name="Exit"
              component={Exit}
              options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                  return (
                    <Icon
                      name="exit-to-app"
                      size={size}
                      color={focused ? color : 'white'}
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </GrindrContextProvider>
      </SafeAreaView>
    </>
  );
};
