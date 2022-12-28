import React, {FC, useContext, useEffect} from 'react';
import {Image, View} from 'react-native';
import OsLogo from 'assets/images/icons/osLogo.png';
import loading from 'assets/scripts/loading';

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
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: StackNavigationProp<screenParams, 'OsLoading'>;
  route: RouteProp<screenParams, 'OsLoading'>;
};

const OsLoading: FC<Props> = ({navigation, route}) => {
  const context = useContext(ApplicationContext);

  const ANIMATION_DURATION = 15000;
  const whiteIn = useSharedValue(1);
  const progress = useSharedValue(0);
  const {overrideRoute} = route.params;

  const startLoad = () => {
    progress.value = withTiming(
      10,
      {
        duration: ANIMATION_DURATION,
        easing: Easing.ease,
      },
      () => {},
    );
  };

  useEffect(() => {
    whiteIn.value = withTiming(0, {duration: 1500}, () => runOnJS(startLoad)());
  }, []);

  useEffect(() => {
    context.script.set(loading);
  }, []);

  useDidMountEffect(() => {
    if (context.script.state.length === 0) {
      AsyncStorage.setItem('VIEW_INTRO', 'true');
      let resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: overrideRoute || 'Desktop'}],
      });
      navigation.dispatch(resetAction);
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
            backgroundColor: 'white',
            zIndex: 11,
          },
          whiteInStyle,
        ]}
      />
      <Image
        source={OsLogo}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View
        style={{
          borderWidth: 3,
          borderColor: '#cfcbcb',
          width: '50%',
          height: 30,
          overflow: 'hidden',
          borderRadius: 10,
          marginTop: theme.spacing.p3,
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: 'red',
              height: 24,
              borderRadius: 5,
            },
            barStyle,
          ]}></Animated.View>
      </View>
    </View>
  );
};

export default OsLoading;
