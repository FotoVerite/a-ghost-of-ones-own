import React, {FC, useContext, useEffect, useState} from 'react';
import {ViewStyle} from 'react-native';

import Svg, {Path, Text} from 'react-native-svg';
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {interpolatePath, parse} from 'react-native-redash';
import {useDidMountEffect} from 'hooks/useDidMountEffect';
import {HexContext} from '../context/hexContext';

const Hexagon: FC<{
  letter: string;
  zindex?: number;
  style: ViewStyle;
  colors: string[];
}> = ({colors, letter, zindex, style}) => {
  const context = useContext(HexContext);
  const [char, setChar] = useState(letter);
  const hexPressed = useSharedValue(0);
  const letterOpacity = useSharedValue(1);

  const AnimatedPath = Animated.createAnimatedComponent(Path);
  const AnimatedLetter = Animated.createAnimatedComponent(Text);

  const largeHex = parse('M300,150 225,280 75,280 0,150 75,20 225,20');
  const smallHex = parse('M290,150 215,270 85,270 10,150 85,30 215,30');

  useDidMountEffect(() => {
    letterOpacity.value = withTiming(0, {duration: 500}, () =>
      runOnJS(setChar)(letter),
    );
  }, [letter]);

  useEffect(() => {
    letterOpacity.value = withDelay(500, withTiming(1, {duration: 500}));
  }, [char]);

  const resetHex = () => {
    'worklet';
    hexPressed.value = withTiming(0, {duration: 150});
  };
  const clickHex = (letter: string) => {
    'worklet';
    runOnJS(context.word.set)(word => (word += letter));
    hexPressed.value = withTiming(1, {duration: 300});
  };

  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(hexPressed.value, [0, 1], [largeHex, smallHex]);

    return {
      d: d,
      fill: interpolateColor(hexPressed.value, [0, 1], [colors[0], colors[1]]),
    };
  });

  const letterProps = useAnimatedProps(() => {
    return {
      opacity: letterOpacity.value,
    };
  });

  return (
    <Svg
      viewBox={`0 0 ${300} ${300}`}
      onPressIn={() => clickHex(letter)}
      onPressOut={() => resetHex()}
      style={[
        {
          width: 100,
          height: 100,
          zIndex: 1 || zindex,
          position: 'absolute',
        },
        style,
      ]}>
      <AnimatedPath
        fill={'white'}
        stroke="black"
        stroke-width="5"
        animatedProps={animatedProps}
      />
      <AnimatedLetter
        fill={'#000'}
        fontSize="150"
        opacity={0}
        x={150}
        y={205}
        animatedProps={letterProps}
        textAnchor="middle">
        {char.toUpperCase()}
      </AnimatedLetter>
    </Svg>
  );
};

export default Hexagon;
