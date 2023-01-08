import React, {FC, useContext, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import OsLogo from 'assets/images/icons/osIcon.png';
import loading from 'assets/scripts/OsLoading/loading';

import theme from 'themes';
import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
import {ApplicationContext} from 'contexts/app';
import {StackNavigationProp} from '@react-navigation/stack';
import {CommonActions, RouteProp} from '@react-navigation/native';
import {screenParams} from 'components/Navigation/screens';
import {useDidMountEffect} from '../hooks/useDidMountEffect';
import {runOnJS} from 'react-native-reanimated/src/reanimated2/core';
import opening from 'assets/scripts/OsLoading/opening';
import GhostIcon from './GhostIcon';

type Props = {
  navigation: StackNavigationProp<screenParams, 'OsLoading'>;
  route: RouteProp<screenParams, 'OsLoading'>;
};

const OsLoading: FC<Props> = ({navigation, route}) => {
  const context = useContext(ApplicationContext);
  const [lastScriptLoaded, setLastScriptLoaded] = useState('');

  const ANIMATION_DURATION = 25000;
  const whiteIn = useSharedValue(1);
  const progress = useSharedValue(0);

  const startLoadAnimation = () => {
    whiteIn.value = withTiming(0, {duration: 250});
    progress.value = withTiming(10, {
      duration: ANIMATION_DURATION,
      easing: Easing.ease,
    });
  };

  useEffect(() => {
    context.script.set(opening);
    setLastScriptLoaded('opening');
  }, []);

  useDidMountEffect(() => {
    if (context.script.state == null) {
      if (lastScriptLoaded === 'loading') {
        let resetAction = CommonActions.reset({
          index: 0,
          routes: [{name: route.params?.overrideRoute || 'LockScreen'}],
        });
        navigation.dispatch(resetAction);
      } else if (lastScriptLoaded === 'opening') {
        setLastScriptLoaded('loading');
        startLoadAnimation();
        context.script.set(loading);
      }
    }
  }, [context.script.state]);

  const barStyle = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      progress.value,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [
        'white',
        '#c99595',
        '#edb67b',
        '#ede161',
        '#ede161',
        '#ede161',
        '#ede161',
        '#293bdf',
        '#de18de',
        '#ff0077',
        '#8A0303',
      ],
    );

    const width = interpolate(
      progress.value,
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [0, 20, 30, 30, 30, 30, 50, 80, 90, 100],
    );
    return {
      backgroundColor: bgColor,
      width: `${width}%`,
    };
  });

  const whiteInStyle = useAnimatedStyle(() => {
    return {
      opacity: whiteIn.value,
    };
  });

  return (
    <View
      style={{
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
      }}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 11,
            backgroundColor: 'black',
            opacity: 0,
          },
          whiteInStyle,
        ]}
      />
      <GhostIcon />

      <View
        style={{
          borderWidth: 3,
          borderColor: '#cfcbcb',
          width: '70%',
          height: 20,
          overflow: 'hidden',
          borderRadius: 10,
          marginTop: theme.spacing.p5,
        }}>
        <Animated.View
          style={[
            {
              width: '100%',
              backgroundColor: '#8A0303',
              height: '100%',
              borderRadius: 5,
            },
            barStyle,
          ]}></Animated.View>
      </View>
    </View>
  );
};

export default OsLoading;
