import React, {FC, useContext, useEffect} from 'react';
import {Row} from 'components/Grid';

import theme from 'themes';
import {P} from 'components/StyledText';
import {Button} from 'react-native-elements';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';

import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LockScreenContext} from './context/LockScreenContext';

const CodeDisplay: FC<{char?: string}> = ({char}) => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const context = useContext(LockScreenContext);
  const filled = useSharedValue(0);

  useEffect(() => {
    if (char) {
      filled.value = withTiming(1, {duration: 250});
    } else {
      filled.value = withTiming(0, {duration: 250});
    }
  }, [char]);

  const circleStyles = useAnimatedStyle(() => {
    return {
      borderWidth: interpolate(filled.value, [0, 1], [3, 8]),
      borderColor: interpolateColor(
        context.sharedValues.shake.value,
        [0, 0.3, 1],
        ['#FFF', 'red', 'red'],
      ),
      transform: [
        {
          translateX: interpolate(
            context.sharedValues.shake.value,
            [0, 0.25, 0.5, 0.75, 1],
            [0, 20, 10, 20, 0],
          ),
        },
      ],
    };
  });

  const openStyle = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        context.sharedValues.unlock.value,
        [0, 0.3, 1],
        ['#FFF', '#78f166d9', '#78f16693'],
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          borderColor: 'white',
          borderWidth: 3,
          backgroundColor: '#ff0404b',
          width: 16,
          height: 16,
          borderRadius: 16,
        },
        circleStyles,
        openStyle,
      ]}></Animated.View>
  );
};

export default CodeDisplay;
