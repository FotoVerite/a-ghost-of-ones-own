import React, {FC} from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {MESSAGES_SCREENS, screenParams} from './screens';

const Stack = createSharedElementStackNavigator<screenParams>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MessageNavigation: FC<{}> = props => {
  return (
    <Stack.Navigator
      initialRouteName={'Messages'}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'transparent'},
        cardOverlayEnabled: true,
        cardStyleInterpolator: forFade,
      }}>
      {(Object.keys(MESSAGES_SCREENS) as (keyof typeof MESSAGES_SCREENS)[]).map(
        name => (
          <Stack.Screen
            key={name}
            name={name}
            component={MESSAGES_SCREENS[name].component}
            sharedElements={MESSAGES_SCREENS[name].shared}
            options={{
              title: MESSAGES_SCREENS[name].title,
              headerShown: false,
              transitionSpec: MESSAGES_SCREENS[name].transitionSpec,
            }}
          />
        ),
      )}
    </Stack.Navigator>
  );
};

export default MessageNavigation;
