import React, {FC, ReactElement, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Layout, Row} from 'components/Grid';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {optionValueType} from 'contexts/app';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';
import Hexagon from './Hexagon';
import {Button} from 'react-native-elements';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const Cursor: FC = () => {
  const shared = useSharedValue(-0.2);
  const AnimatedP = Animated.createAnimatedComponent(P);

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: 750}), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: shared.value,
    };
  });

  return (
    <AnimatedP style={[{color: 'yellow', fontSize: 50}, animatedStyle]}>
      |
    </AnimatedP>
  );
};

export default Cursor;
