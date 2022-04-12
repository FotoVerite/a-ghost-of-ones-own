import React, {FC, useCallback, useContext, useEffect, useState} from 'react';
import {Image, View, ViewStyle} from 'react-native';

import {P} from 'components/StyledText';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {color, ScreenWidth} from 'react-native-elements/dist/helpers';
import context from 'components/Photos/context';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
  interpolate,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {clone} from 'lodash';

const Glitch: FC<{
  zIndex?: number;
  Element: FC<any>;
}> = ({Element, zIndex, children}) => {
  const ANIMATION_DURATION = 2000;
  const GLITCH_AMPLITUDE = 5;

  const mainAnimatedValue = useSharedValue(0);
  const animatedX = useSharedValue(0);

  const runAnimation = () => {
    mainAnimatedValue.value = withRepeat(
      withTiming(100, {duration: ANIMATION_DURATION, easing: Easing.bounce}),
      -1,
    );
    animatedX.value = withRepeat(
      withSequence(
        withTiming(GLITCH_AMPLITUDE, {duration: 1000}),
        withTiming(-GLITCH_AMPLITUDE, {duration: 1000}),
      ),
      -1,
    );
  };

  useEffect(() => {
    runAnimation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [animatedHeightArray, setanimatedHeightArray] = useState([
    0.01, 300, 10, 30, 30, 30, 15, 20, 10, 10, 20,
  ]);

  const [animatedTranslateY, setAnimatedTranslateY] = useState([
    30, 40, 20, 60, 60, 60, 20, 5, 0, 0, 20,
  ]);
  const transformStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedTranslateY,
    );

    const height = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedHeightArray,
    );
    return {
      height: height,
      transform: [{translateY: translateY}, {translateX: animatedX.value}],
    };
  });

  const innerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedTranslateY,
    );

    return {
      transform: [{translateY: -translateY}],
    };
  });

  const onLayout = useCallback(event => {
    const viewWidth = event.nativeEvent.layout.width;
    const viewHeight = event.nativeEvent.layout.height;
    console.log('ran');
    setAnimatedTranslateY([
      viewHeight * 0.3,
      viewHeight * 0.4,
      viewHeight * 0.4,
      viewHeight * 0.6,
      viewHeight * 0.6,
      viewHeight * 0.6,
      viewHeight * 0.2,
      viewHeight * 0.2,
      viewHeight * 0.2,
      viewHeight * 0.2,
    ]);
    setanimatedHeightArray([
      0.01,
      viewHeight * 0.05,
      viewHeight * 0.09,
      viewHeight * 0.2,
      viewHeight * 0.03,
      viewHeight * 0.17,
      viewHeight * 0.04,
      viewHeight * 0.04,
      viewHeight * 0.1,
      viewHeight * 1,
    ]);
  }, []);

  // const [cloned, setCloned] = useState(
  //   React.cloneElement(children, {
  //     onLayout: onLayout,
  //     glitch: true,
  //     style: {
  //       zIndex: 12,
  //       overflow: 'hidden',
  //     },
  //   }),
  // );

  return (
    <>
      <Animated.View
        style={[{overflow: 'hidden', zIndex: 100}, transformStyle]}>
        <Animated.View style={[{}, innerStyle]}>
          <Element onLayout={onLayout} glitch={true} style={{zIndex: 100}} />
        </Animated.View>
      </Animated.View>
      <Element style={{zIndex: 1, position: 'absolute'}} />
    </>
  );
};

export default Glitch;
