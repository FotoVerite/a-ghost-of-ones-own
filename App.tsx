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
  DEFAULT_SETTINGS_OPTIONS,
  getSetting,
  TRIGGERS,
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import NewSubtitlesContainer from 'components/utility/SubtitleContainer';
import SubtitleContextProvider from 'components/utility/SubtitleContainer/context/SubtitleContext';

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
  const [optionsMap, setOptionsMap] = useState(
    new Map<string, string | number | boolean>(),
  );

  const [triggerMap, setTriggerMap] = useState(
    new Map<string, string | number | boolean>(),
  );

  const _loadSettings = async () => {
    const optionsPromise = new Array<
      Promise<Array<string | number | boolean>>
    >();
    const triggersPromise = new Array<
      Promise<Array<string | number | boolean>>
    >();

    const promisesArray = new Array<void>();

    for (const option in DEFAULT_SETTINGS_OPTIONS) {
      optionsPromise.push(
        getSetting(option, DEFAULT_SETTINGS_OPTIONS[option].value),
      );
    }
    for (const option in TRIGGERS) {
      triggersPromise.push(getSetting(option, TRIGGERS[option].value));
    }
    await Promise.all(optionsPromise).then(result => {
      setOptionsMap(new Map(result as any));
    });

    await Promise.all(triggersPromise).then(result => {
      setTriggerMap(new Map(result as any));
      setIsReady(true);
    });
  };

  useEffect(() => {
    _loadSettings();
    Icon.loadFont();
    EntypoIcon.loadFont();
    FontAwesome.loadFont();
    Feather.loadFont();
  }, []);

  if (isReady && optionsMap.size > 0)
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <ApplicationContextProvider
          flags={flags}
          actTriggers={actOneTriggers}
          settings={optionsMap}
          triggers={triggerMap}>
          <SafeAreaProvider>
            <NotificationContainer />
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              hidden
            />
            <Navigation />
            {/* <Subtitles /> */}
            <SubtitleContextProvider>
              <NewSubtitlesContainer />
            </SubtitleContextProvider>
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
