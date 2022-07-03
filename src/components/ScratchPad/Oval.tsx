import React, {FC, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
Icon.loadFont();

type Props = {height: number; width: number; step: number; stepIn: number};

const Oval: FC<Props> = ({height, width, step, stepIn}) => {
  const jitter = useSharedValue(0);

  const smallStep = 0.5 * step;

  useEffect(() => {
    jitter.value = withRepeat(
      withTiming(Math.floor(Math.random() * 20 + step), {
        duration: 2000,
        easing: Easing.bounce,
      }),
      -1,
      true,
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const randomNumber = Math.floor(Math.random() * 1.5);
    const animatedWidth =
      width + 200 - stepIn * smallStep + 5 + jitter.value + randomNumber;
    const animatedHeight =
      height + 200 - stepIn * smallStep + 5 + jitter.value + randomNumber;
    return {
      width: animatedWidth,
      height: animatedHeight,
      marginLeft:
        -100 + (stepIn / 2) * smallStep - (randomNumber + jitter.value / 2),
      marginTop:
        -100 + (stepIn / 2) * smallStep - (randomNumber + jitter.value / 2),
    };
  });
  return (
    <Animated.View
      style={[
        {
          backgroundColor: step % 2 === 0 ? 'black' : 'white',
          position: 'absolute',
          zIndex: step + 1,
          marginTop: -100 + (stepIn / 2) * smallStep,
          marginLeft: -100 + (stepIn / 2) * smallStep,
          width: width + 200 - stepIn * smallStep,
          height: height + 200 - stepIn * smallStep,
          borderRadius: 300,
        },
        animatedStyles,
      ]}></Animated.View>
  );
};

export default Oval;
