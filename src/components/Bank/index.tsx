import React, {FC, useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Reset from './Reset';

export const Bank: FC<{}> = props => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} options={{}} />
      <Stack.Screen name="Reset" component={Reset} options={{}} />
    </Stack.Navigator>
  );
};
