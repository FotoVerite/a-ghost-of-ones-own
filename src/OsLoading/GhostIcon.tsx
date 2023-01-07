import React, {FC, useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import OsLogo from 'assets/images/icons/osIcon.png';

import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
  Easing,
  withRepeat,
  useAnimatedProps,
} from 'react-native-reanimated';
import {BlurView} from 'rn-id-blurview';
import theme from 'themes';
import {runOnJS} from 'react-native-reanimated/src/reanimated2/core';

const GhostIcon: FC = () => {
  const jiggle = useSharedValue(0);
  const AnimatedImage = Animated.createAnimatedComponent(Image);

  const [amount, setAmount] = useState(Math.random());

  useEffect(() => {
    jiggle.value = withRepeat(
      withTiming(amount, {
        duration: 75,
        easing: Easing.ease,
      }),
      1,
      true,
      () => runOnJS(setAmount)(Math.random()),
    );
  }, [amount]);

  const ghostStyle = useAnimatedStyle(() => {
    return {
      blurRadius: 5,
      transform: [
        {
          scale: interpolate(jiggle.value, [0, 1], [0.95, 1.15]),
        },
        {
          translateX: interpolate(jiggle.value, [0, 1], [-1, 1]),
        },
        {
          skewX: interpolate(jiggle.value, [0, 1], [-2, 2]) + 'deg',
        },
        {
          skewY: interpolate(jiggle.value, [0, 1], [-1, 1]) + 'deg',
        },
      ],
    };
  });

  const ghostProps = useAnimatedProps(() => {
    return {};
  });

  return (
    <View>
      <AnimatedImage
        blurRadius={amount * 8}
        source={OsLogo}
        style={[
          {
            width: 130,
            height: 120,
            opacity: 1,
          },
          ghostStyle,
        ]}
      />
      {/* <BlurView
        style={{
          zIndex: 3,
          width: 120,
          height: 120,
          position: 'absolute',
        }}
        blurType="dark"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
        blurRadius={1}
      /> */}
    </View>
  );
};

export default GhostIcon;
