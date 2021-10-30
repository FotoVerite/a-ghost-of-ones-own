/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {Layout} from 'components/Grid';
import Notification from 'components/Notification';
import ApplicationContextProvider, {
  ApplicationContextConsumer,
} from 'contexts/app';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Timers from 'components/Timers';
import Navigation from 'components/Navigation';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ApplicationContextProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          }}>
          <Timers />
          <ApplicationContextConsumer>
            {({notification}) => notification.state}
          </ApplicationContextConsumer>

          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Navigation />
        </SafeAreaView>
      </ApplicationContextProvider>
    </GestureHandlerRootView>
  );
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
