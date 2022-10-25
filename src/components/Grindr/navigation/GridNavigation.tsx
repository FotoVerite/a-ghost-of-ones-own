import React, {FC} from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {GRIDSCREENS, screenParams, SCREENS} from './screens';

const Stack = createSharedElementStackNavigator<screenParams>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const GridNavigation: FC<{}> = props => {
  return (
    <Stack.Navigator
      initialRouteName={'Grid'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: forFade,
      }}>
      {(Object.keys(GRIDSCREENS) as (keyof typeof GRIDSCREENS)[]).map(name => (
        <Stack.Screen
          key={name}
          name={name}
          component={GRIDSCREENS[name].component}
          sharedElements={GRIDSCREENS[name].shared}
          options={{
            title: GRIDSCREENS[name].title,
            headerShown: false,
            transitionSpec: GRIDSCREENS[name].transitionSpec,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default GridNavigation;
