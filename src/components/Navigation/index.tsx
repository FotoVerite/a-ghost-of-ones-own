import React, {FC, useEffect, useState} from 'react';

import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screenParams, SCREENS} from './screens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDidMountEffect} from 'hooks/useDidMountEffect';

const Stack = createSharedElementStackNavigator<screenParams>();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Navigation: FC<{}> = props => {
  const [finished, setFinished] = useState(false);
  const [hasSeenOpening, setHasSeenOpening] = useState<boolean | undefined>();

  useEffect(() => {
    AsyncStorage.getItem('VIEW_INTRO').then(bool => {
      setHasSeenOpening(bool != null);
    });
  }, []);

  useDidMountEffect(() => {
    setFinished(true);
  }, [hasSeenOpening]);

  if (finished) {
    return (
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName={hasSeenOpening ? 'Desktop' : 'Opening'}
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: 'transparent'},
            cardOverlayEnabled: true,
            cardStyleInterpolator: forFade,
          }}>
          {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map(name => (
            <Stack.Screen
              key={name}
              name={name}
              component={SCREENS[name].component}
              sharedElements={SCREENS[name].shared}
              options={{
                title: SCREENS[name].title,
                headerShown: false,
                transitionSpec: SCREENS[name].transitionSpec,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <></>;
  }
};

export default Navigation;
