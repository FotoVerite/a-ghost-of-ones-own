import {Row} from 'components/Grid';
import React, {FC} from 'react';
import Animated, {
  Easing,
  interpolate,
  interpolateColor,
  Layout,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type NoteProps = {
  title: string;
  color: number;
};

const BackButton: FC<NoteProps> = ({title, color}) => {
  const rotation = useSharedValue(0);
  rotation.value = color;

  const animatedAccessoryColor = useDerivedValue(() => {
    return interpolateColor(rotation.value, [0, 100], ['#FFF', '#D55']);
  });

  const animatedAccessorySize = useDerivedValue(() => {
    return interpolate(rotation.value, [0, 100], [12, 32]);
  });

  const animatedAccessoryOpacity = useDerivedValue(() => {
    return interpolate(rotation.value, [0, 100], [1, 0]);
  });

  const animatedAccessoryProps = useAnimatedProps(() => {
    return {
      color: animatedAccessoryColor.value,
      fontSize: withTiming(animatedAccessorySize.value, {
        duration: 200,
      }),
    };
  });
  const carrotAnimatedProps = useAnimatedProps(() => {
    return {
      opacity: withTiming(animatedAccessoryOpacity.value, {
        duration: 200,
      }),
    };
  });

  return (
    <Row>
      <Animated.Text
        layout={Layout.springify()}
        style={{
          color: 'white',
          height: 50,
          fontSize: 24,
          marginRight: 5,
          textAlignVertical: 'center',
        }}
        animatedProps={carrotAnimatedProps}>
        {'<'}
      </Animated.Text>
      <Animated.Text
        layout={Layout.springify()}
        style={{
          color: 'white',
          height: 50,
          width: 300,
          textAlignVertical: 'center',
        }}
        animatedProps={animatedAccessoryProps}>
        {title}
      </Animated.Text>
    </Row>
  );
};

export default BackButton;
