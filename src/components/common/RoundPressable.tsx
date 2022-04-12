import React, {FC} from 'react';

import {Pressable, PressableProps, ViewStyle} from 'react-native';
import theme from 'themes';

type Props = {size: number; pressedColor?: string; unpressedColor?: string};

const RoundPressable: FC<PressableProps & Props> = props => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed
            ? props.pressedColor || theme.colors.lightGray2
            : props.unpressedColor || theme.colors.darkSlate,
          width: props.size,
          height: props.size,
          borderRadius: props.size / 2,
          margin: theme.spacing.p1,
          alignContent: 'center',
          justifyContent: 'center',
        },
        props.style as ViewStyle,
      ]}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}>
      {props.children}
    </Pressable>
  );
};
export default RoundPressable;
