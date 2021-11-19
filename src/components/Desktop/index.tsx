import React, {FC, useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {RouteProp} from '@react-navigation/core';
import Fuse from 'fuse.js';

import {Layout, Row} from 'components/Grid';
import {
  Dimensions,
  ImageBackground,
  PanResponder,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import bg from 'assets/images/backgrounds/snow-egg.jpeg';
import {P} from 'components/StyledText';
import {Application} from './Application';

import messenger from './icons/messenger.png';
import notepad from './icons/notepad.jpeg';
import photos from './icons/photos.png';

import AppLibrary from './AppLibrary';

import theme from 'themes';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  route: RouteProp<Record<string, object | undefined>, 'Desktop'>;
};

const Desktop: FC<Props> = props => {
  const [appLibrary, setAppLibrary] = useState(false);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (e, state) => {
        if (state.dx < 200 && state.vx < -1) {
          setAppLibrary(true);
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  const appLibraryPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (e, state) => {
        if (state.dx > 200) {
          setAppLibrary(false);
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setHidden(false);
    }, []),
  );

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['name'],
  };
  const fuse = new Fuse([], options);

  return (
    <>
      <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
        <Layout>
          <View
            style={{flexGrow: 1, borderColor: 'red'}}
            {...panResponder.panHandlers}></View>
          <Row
            style={{
              flexGrow: 0,
              margin: theme.spacing.p2,
              borderTopWidth: 2,
              borderTopColor: 'black',
              paddingTop: theme.spacing.p2,
              alignItems: 'center',
              alignContent: 'space-between',
              justifyContent: 'space-between',
            }}>
            <Application
              image={notepad}
              title={'Notes'}
              navigateTo={'Notes'}
              navigation={props.navigation}
            />
            <Application
              image={messenger}
              title={'Messenger'}
              navigateTo={'Messages'}
              navigation={props.navigation}
            />
            <Application
              image={photos}
              title={'Photos'}
              navigateTo={'Photos'}
              navigation={props.navigation}
            />
            <Application
              image={photos}
              title={'ScratchPad'}
              navigateTo={'ScratchPad'}
              navigation={props.navigation}
            />
          </Row>
        </Layout>
      </ImageBackground>
      {appLibrary && (
        <AppLibrary setVisible={setAppLibrary} navigation={props.navigation} />
      )}
    </>
  );
};

export default Desktop;
