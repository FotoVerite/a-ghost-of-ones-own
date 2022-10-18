/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import ApplicationContextProvider, {
  ApplicationContextConsumer,
} from 'contexts/app';
import React, {useEffect, useState} from 'react';
import {LogBox, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Navigation from 'components/Navigation';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import actOneFlags from 'assets/triggers/act_1_flags';
import actOneTriggers from 'assets/triggers/act_1_triggers';
import NotificationContainer from 'components/Notification/NotificationContainer';
import 'react-native-reanimated';
import Subtitles from 'components/utility/Subtitle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

LogBox.ignoreLogs([
  'Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.',
]);

enableScreens();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isReady, setIsReady] = useState(false);
  const [flags, setFlags] = useState({});

  const _loadAssetsAsync = async () => {
    const findAndSetFlags = await AsyncStorage.getItem('ActOneFlages').then(
      data => {
        if (false) {
          setFlags(JSON.parse(data));
          return;
        } else {
          setFlags(actOneFlags);
          return;
        }
      },
    );

    await Promise.all([findAndSetFlags]).then(() => {
      setIsReady(true);
    });
  };

  useEffect(() => {
    _loadAssetsAsync();
    Icon.loadFont();
    EntypoIcon.loadFont();
    FontAwesome.loadFont();
  }, []);

  if (isReady)
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <ApplicationContextProvider flags={flags} actTriggers={actOneTriggers}>
          <SafeAreaProvider>
            <NotificationContainer />
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Navigation />
            <Subtitles />
          </SafeAreaProvider>
        </ApplicationContextProvider>
      </GestureHandlerRootView>
    );
  else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
