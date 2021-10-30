import React, {FC} from 'react';

import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ColorSchemeName} from 'react-native';
import {screenParams, SCREENS} from './screens';

const Stack = createStackNavigator<screenParams>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const Navigation: FC<{}> = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Messages'}
        screenOptions={{
          headerShown: false,
        }}>
        {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map(name => (
          <Stack.Screen
            key={name}
            name={name}
            getComponent={() => SCREENS[name].component}
            options={{
              title: SCREENS[name].title,
              headerShown: false,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
