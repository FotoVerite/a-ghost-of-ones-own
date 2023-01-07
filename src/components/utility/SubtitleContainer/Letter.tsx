import React, {FC, useContext, useEffect} from 'react';

import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnJS,
  interpolate,
} from 'react-native-reanimated';
import {SubtitleContext, SubtitleType} from './context/SubtitleContext';

const Letter: FC<{
  color: string;
  letter: string;
  indexInLine: number;
  charCount: number;
  showLine: boolean;
  wordIndex: number;
}> = ({color, letter, indexInLine, charCount, showLine, wordIndex}) => {
  const opacityState = useSharedValue(0);
  const subtitleContext = useContext(SubtitleContext);
  const block =
    subtitleContext.subtitles == null
      ? ({} as SubtitleType)
      : subtitleContext.subtitles[subtitleContext.currentBlockIndex.state];
  const hasSpecialAnimations = block.specialAnimation;
  const delay = block.delay || 50;
  const hasGrow =
    hasSpecialAnimations &&
    hasSpecialAnimations.get('grow') &&
    (hasSpecialAnimations.get('grow')?.length === 0 ||
      hasSpecialAnimations.get('grow')?.includes(wordIndex));

  const lineFinished = () => {
    'worklet';
    if (charCount - 1 === indexInLine) {
      subtitleContext.currentLineVisible.value = withDelay(
        500,
        withTiming(0, {duration: 200, easing: Easing.cubic}, () =>
          runOnJS(subtitleContext.currentLineFinished.set)(true),
        ),
      );
    }
  };

  useEffect(() => {
    opacityState.value = withDelay(
      delay + 30 * indexInLine,
      withTiming(1, {duration: 500, easing: Easing.elastic(1)}, finished => {
        if (finished) lineFinished();
      }),
    );
    return () => {};
  }, []);

  useEffect(() => {
    if (showLine) {
      opacityState.value = 1;
      lineFinished();
    }
  }, [showLine]);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: opacityState.value,
    };
  });

  const growStyle = useAnimatedStyle(() => {
    if (hasGrow)
      return {
        fontSize: interpolate(opacityState.value, [0, 1], [18, 36]),
      };
    else {
      return {};
    }
  });

  return (
    <Animated.Text
      style={[
        {
          flexWrap: 'nowrap',
          fontSize: 18,
          textShadowColor: 'black',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 1,
          color: color || 'white',
        },
        block.style,
        growStyle,
        animationStyle,
      ]}>
      {letter}
    </Animated.Text>
  );
};

export default Letter;
