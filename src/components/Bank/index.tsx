import React, {FC, useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Reset from './Reset';
import Questions from './Questions';
import End from './End';

export const Bank: FC<{}> = props => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Reset" component={Reset} options={{}} />
      <Stack.Screen name="Questions" component={Questions} options={{}} />
      <Stack.Screen
        name="What the fuck do you think you're doing"
        component={End}
        options={{}}
      />
    </Stack.Navigator>
  );
};
