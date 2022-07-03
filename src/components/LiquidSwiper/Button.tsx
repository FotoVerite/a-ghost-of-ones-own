import React from 'react';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Vector} from 'react-native-redash';

import {Side} from './Wave';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();
const RADIUS = 25;

interface ButtonProps {
  width: number;
  position: Vector<Animated.SharedValue<number>>;
  side: Side;
  activeSide: Animated.SharedValue<Side>;
}

const Button = ({position, side, activeSide, width}: ButtonProps) => {
  const isLeft = side === Side.LEFT;
  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: isLeft ? position.x.value - RADIUS * 2 : width - position.x.value,
    top: position.y.value - RADIUS,
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
  }));
  return (
    <Animated.View style={style}>
      <Icon
        name={`chevron-${isLeft ? 'right' : 'left'}` as const}
        size={24}
        color="white"
      />
    </Animated.View>
  );
};

export default Button;
